import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BulletinsService {
  constructor(private prisma: PrismaService) {}

  async hasUnpaidFrais(eleveId: string): Promise<boolean> {
    const unpaid = await this.prisma.fraisScolaire.findFirst({
      where: { eleveId, statut: { in: ['impayé', 'en_retard'] } },
    });
    return !!unpaid;
  }

  async findAll(ecoleId?: string, semestre?: number) {
    const where: any = ecoleId ? { classe: { ecoleId } } : {};
    if (semestre) {
      where.notes = { some: { evaluation: { semestre } } };
    }

    const eleves = await this.prisma.eleve.findMany({
      where,
      include: {
        user: true,
        classe: true,
        notes: {
          include: {
            evaluation: {
              include: { matiere: true },
            },
          },
          ...(semestre ? { where: { evaluation: { semestre } } } : {}),
        },
      },
    });

    // Grouper bulletins par classe pour le calcul du rang
    const classeMap = new Map<string, { eleveId: string; moyenne: number }[]>();
    const bulletins = eleves.map((eleve) => {
      const bulletin = this.computeBulletin(eleve);
      if (bulletin.moyenne !== null) {
        const groupe = classeMap.get(eleve.classeId || '') || [];
        groupe.push({ eleveId: eleve.id, moyenne: bulletin.moyenne });
        classeMap.set(eleve.classeId || '', groupe);
      }
      return bulletin;
    });

    // Calcul des rangs
    for (const bulletin of bulletins) {
      const groupe = classeMap.get(bulletin.classeId) || [];
      if (groupe.length > 1) {
        groupe.sort((a, b) => b.moyenne - a.moyenne);
        const idx = groupe.findIndex((e) => e.eleveId === bulletin.eleveId);
        bulletin.rang = idx + 1;
        bulletin.totalElevesClasse = groupe.length;
      }
    }

    return bulletins;
  }

  async findByEleve(eleveId: string, semestre?: number, ecoleId?: string, role?: string) {
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
      include: {
        user: true,
        classe: true,
        notes: {
          include: {
            evaluation: {
              include: { matiere: true },
            },
          },
          ...(semestre ? { where: { evaluation: { semestre } } } : {}),
        },
      },
    });

    if (!eleve) return [];
    if (ecoleId && eleve.classe?.ecoleId !== ecoleId) return [];

    if (role === 'ELEVE' || role === 'PARENT') {
      const bloquee = await this.hasUnpaidFrais(eleveId);
      if (bloquee) {
        return [{
          id: `bulletin-bloque-${eleveId}`,
          eleveId,
          bloque: true,
          message: 'Bulletin bloqué : veuillez régulariser les frais de scolarité.',
        }];
      }
    }

    const bulletin = this.computeBulletin(eleve);

    // Calcul du rang dans la classe
    if (eleve.classeId && bulletin.moyenne !== null) {
      const classeEleves = await this.prisma.eleve.findMany({
        where: { classeId: eleve.classeId },
        include: {
          notes: {
            include: { evaluation: { include: { matiere: true } } },
            ...(semestre ? { where: { evaluation: { semestre } } } : {}),
          },
        },
      });

      const moyennes = classeEleves
        .map((e) => this.computeBulletinMemo(e))
        .filter((m) => m !== null) as number[];

      if (moyennes.length > 0) {
        moyennes.sort((a, b) => b - a);
        const idx = moyennes.indexOf(bulletin.moyenne);
        bulletin.rang = idx + 1;
        bulletin.totalElevesClasse = moyennes.length;
      }
    }

    return [bulletin];
  }

  private computeBulletin(eleve: any) {
    const notes = eleve.notes?.filter((n: any) => n.valeur != null) || [];
    const matiereMap = new Map<string, any>();

    for (const note of notes) {
      const matiere = note.evaluation?.matiere;
      if (!matiere) continue;
      const key = matiere.id;
      if (!matiereMap.has(key)) {
        matiereMap.set(key, {
          matiereId: matiere.id,
          nom: matiere.nom,
          coefficient: matiere.coefficient,
          notes: [],
          somme: 0,
          count: 0,
        });
      }
      const entry = matiereMap.get(key)!;
      entry.notes.push({
        valeur: note.valeur,
        appreciation: note.appreciation || null,
        date: note.evaluation?.date || null,
        type: note.evaluation?.type || null,
        evaluation: note.evaluation?.titre || null,
      });
      entry.somme += note.valeur;
      entry.count += 1;
    }

    const matieres = Array.from(matiereMap.values()).map((m) => ({
      ...m,
      moyenne: m.count > 0 ? parseFloat((m.somme / m.count).toFixed(2)) : null,
      somme: undefined,
      count: undefined,
    }));

    let sommePonderee = 0;
    let sommeCoeffs = 0;
    for (const m of matieres) {
      if (m.moyenne !== null) {
        sommePonderee += m.moyenne * m.coefficient;
        sommeCoeffs += m.coefficient;
      }
    }

    const result: any = {
      id: `bulletin-${eleve.id}`,
      eleveId: eleve.id,
      classeId: eleve.classeId,
      eleve: { user: eleve.user },
      classe: eleve.classe ? { nom: eleve.classe.nom, niveau: eleve.classe.niveau } : null,
      semestre: notes[0]?.evaluation?.semestre || 1,
      sommeCoefficients: sommeCoeffs,
      moyenne: sommeCoeffs > 0 ? parseFloat((sommePonderee / sommeCoeffs).toFixed(2)) : null,
      rang: null,
      totalElevesClasse: null,
      matieres,
    };
    return result;
  }

  private computeBulletinMemo(eleve: any): number | null {
    const notes = eleve.notes?.filter((n: any) => n.valeur != null) || [];
    const matiereMap = new Map<string, { somme: number; count: number; coeff: number }>();

    for (const note of notes) {
      const matiere = note.evaluation?.matiere;
      if (!matiere) continue;
      const key = matiere.id;
      if (!matiereMap.has(key)) {
        matiereMap.set(key, { somme: 0, count: 0, coeff: matiere.coefficient });
      }
      const entry = matiereMap.get(key)!;
      entry.somme += note.valeur;
      entry.count += 1;
    }

    let sommePonderee = 0;
    let sommeCoeffs = 0;
    for (const [, m] of matiereMap) {
      if (m.count > 0) {
        sommePonderee += (m.somme / m.count) * m.coeff;
        sommeCoeffs += m.coeff;
      }
    }

    return sommeCoeffs > 0 ? parseFloat((sommePonderee / sommeCoeffs).toFixed(2)) : null;
  }
}

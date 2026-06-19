import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const ecoles = await prisma.ecole.findMany({
    include: { user: { select: { name: true, email: true } } },
  });
  for (const e of ecoles) {
    const [classes, profs, eleves] = await Promise.all([
      prisma.classe.count({ where: { ecoleId: e.id } }),
      prisma.professeur.count({ where: { ecoleId: e.id } }),
      prisma.eleve.count({ where: { classe: { ecoleId: e.id } } }),
    ]);
    console.log(`École: ${e.nom} (${e.id})`);
    console.log(`  Admin: ${e.user.name} (${e.user.email})`);
    console.log(`  Classes: ${classes}`);
    console.log(`  Profs: ${profs}`);
    console.log(`  Élèves: ${eleves}`);
  }
  const totalEleves = await prisma.eleve.count();
  const sansClasse = await prisma.eleve.count({ where: { classeId: null } });
  const totalUsers = await prisma.user.count();
  console.log(`\nTotal élèves: ${totalEleves} (dont ${sansClasse} sans classe)`);
  console.log(`Total users: ${totalUsers}`);

  const allClasses = await prisma.classe.findMany({
    select: { id: true, nom: true, ecoleId: true, _count: { select: { eleves: true } } },
  });
  for (const c of allClasses) {
    console.log(`  Classe ${c.nom}: ${c._count.eleves} élèves (école: ${c.ecoleId})`);
  }

  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });

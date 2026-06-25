'use client';

import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { generateBulletinPDF } from '@/lib/generate-bulletin-pdf';
import React, { useEffect, useState } from 'react';

export default function BulletinsPage() {
    const { user, role } = useAuth();
    const [bulletins, setBulletins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [semestre, setSemestre] = useState<number>(1);
    const [selectedEnfantId, setSelectedEnfantId] = useState('');
    const [downloading, setDownloading] = useState<string | null>(null);

    useEffect(() => {
        loadBulletins();
    }, [semestre]);

    const loadBulletins = async () => {
        setLoading(true);
        setLoadError('');
        try {
            if (role === 'parent') {
                const enfants = (user as any)?.parent?.enfants || [];
                const allBulletins: any[] = [];
                for (const pe of enfants) {
                    const data = await api.getBulletinByEleve(pe.eleve.id, semestre);
                    const arr = Array.isArray(data) ? data : (data?.error ? [] : [data].filter(Boolean));
                    allBulletins.push(...arr.filter((b: any) => b?.eleveId === pe.eleve.id));
                }
                setBulletins(allBulletins);
            } else if (role === 'eleve') {
                const eleveId = (user as any)?.eleve?.id;
                if (!eleveId) { setBulletins([]); setLoading(false); return; }
                const data = await api.getBulletinByEleve(eleveId, semestre);
                setBulletins(Array.isArray(data) ? data : []);
            } else {
                const data = await api.getBulletins(semestre);
                setBulletins(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            setLoadError('Erreur lors du chargement des bulletins');
        }
        setLoading(false);
    };

    const handleDownloadPDF = async (bulletinId: string) => {
        setDownloading(bulletinId);
        try {
            const el = document.getElementById(`bulletin-print-${bulletinId}`);
            if (!el) return;
            const bulletin = bulletins.find((b) => b.id === bulletinId);
            const nom = bulletin?.eleve?.user?.name || 'bulletin';
            await generateBulletinPDF(el, nom);
        } finally {
            setDownloading(null);
        }
    };

    if (loading) {
        return <div className="loader">Chargement des bulletins...</div>;
    }

    const semestres = [1, 2];

    const BulletinHeader = ({ bulletin }: { bulletin: any }) => (
        <div className="bulletin-header" style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--color-border)' }}>
            {(user as any)?.ecole?.logo && (
                <img src={(user as any).ecole.logo} alt="Logo" style={{ maxHeight: 64, marginBottom: '0.5rem' }} />
            )}
            <h2 style={{ margin: 0, fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {(user as any)?.ecole?.nom || 'École'} — Bulletin Scolaire
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                Semestre {bulletin?.semestre || 1} — Année scolaire {new Date().getFullYear()} — {new Date().getFullYear() + 1}
            </p>
        </div>
    );

    const BulletinInfoRow = ({ bulletin }: { bulletin: any }) => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem', padding: '0.75rem 1rem', background: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
            <div>
                <span className="info-label">Élève</span>
                <span className="info-value">{bulletin?.eleve?.user?.name || '—'}</span>
            </div>
            <div>
                <span className="info-label">Classe</span>
                <span className="info-value">{bulletin?.classe?.nom || '—'}</span>
            </div>
            <div>
                <span className="info-label">Moyenne générale</span>
                <span className="info-value" style={{ color: bulletin?.moyenne >= 10 ? 'var(--color-success, #10b981)' : 'var(--color-danger, #ef4444)', fontWeight: 700 }}>
                    {bulletin?.moyenne != null ? `${bulletin.moyenne}/20` : '—'}
                </span>
            </div>
            <div>
                <span className="info-label">Rang</span>
                <span className="info-value">{bulletin?.rang ? `${bulletin.rang}/${bulletin.totalElevesClasse}` : '—'}</span>
            </div>
            <div>
                <span className="info-label">Somme coefficients</span>
                <span className="info-value">{bulletin?.sommeCoefficients || '—'}</span>
            </div>
        </div>
    );

    const BulletinMatiereRow = ({ m, index }: { m: any; index: number }) => (
        <tr key={m.matiereId || index}>
            <td style={{ fontWeight: 600 }}>{m.nom}</td>
            <td style={{ textAlign: 'center' }}>{m.coefficient}</td>
            <td style={{ textAlign: 'center' }}>
                {m.moyenne != null ? (
                    <span style={{
                        fontWeight: 600,
                        color: m.moyenne >= 10 ? 'var(--color-success, #10b981)' : 'var(--color-danger, #ef4444)',
                    }}>
                        {m.moyenne}
                    </span>
                ) : '—'}
            </td>
            <td style={{ textAlign: 'center' }}>
                {m.moyenne != null ? (m.moyenne * m.coefficient).toFixed(2) : '—'}
            </td>
            <td style={{ fontSize: '0.8rem' }}>
                {m.notes?.map((n: any, i: number) => (
                    <div key={i} style={{ marginBottom: '0.25rem' }}>
                        {n.evaluation && <span style={{ color: 'var(--color-text-secondary)' }}>{n.evaluation} : </span>}
                        <span style={{ fontWeight: 500 }}>{n.valeur}/20</span>
                        {n.appreciation && <span style={{ color: 'var(--color-text-secondary)', marginLeft: '0.5rem', fontStyle: 'italic' }}>"{n.appreciation}"</span>}
                    </div>
                ))}
            </td>
        </tr>
    );

    const BulletinTable = ({ bulletin }: { bulletin: any }) => (
        <table className="bulletin-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
            <thead>
                <tr>
                    <th style={{ textAlign: 'left' }}>Matière</th>
                    <th style={{ textAlign: 'center' }}>Coefficient</th>
                    <th style={{ textAlign: 'center' }}>Moyenne</th>
                    <th style={{ textAlign: 'center' }}>Points</th>
                    <th style={{ textAlign: 'left' }}>Détail des notes</th>
                </tr>
            </thead>
            <tbody>
                {bulletin.matieres?.length > 0 ? (
                    bulletin.matieres.map((m: any, i: number) => <BulletinMatiereRow key={m.matiereId || i} m={m} index={i} />)
                ) : (
                    <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
                            Aucune note enregistrée pour ce semestre.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );

    const BulletinFooter = ({ bulletin }: { bulletin: any }) => (
        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                Total coefficients : <strong>{bulletin?.sommeCoefficients || '—'}</strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                Moyenne générale : <strong style={{ fontSize: '1rem', color: bulletin?.moyenne >= 10 ? 'var(--color-success, #10b981)' : 'var(--color-danger, #ef4444)' }}>
                    {bulletin?.moyenne != null ? `${bulletin.moyenne}/20` : '—'}
                </strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                Rang : <strong>{bulletin?.rang ? `${bulletin.rang}/${bulletin.totalElevesClasse}` : '—'}</strong>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-sm btn-outline" onClick={() => window.print()}>
                    <i className="ti ti-printer"></i> Imprimer
                </button>
                <button className="btn btn-sm btn-primary" onClick={() => handleDownloadPDF(bulletin.id)} disabled={downloading === bulletin.id}>
                    <i className="ti ti-file-download"></i> {downloading === bulletin.id ? 'PDF...' : 'Télécharger PDF'}
                </button>
            </div>
        </div>
    );

    const renderBulletin = (bulletin: any) => {
        if (bulletin?.bloque) {
            return (
                <div key={bulletin.id || 'bloque'} className="card" style={{ marginBottom: '1.5rem', textAlign: 'center', padding: '3rem 2rem' }}>
                    <i className="ti ti-lock" style={{ fontSize: '3rem', color: 'var(--color-danger, #ef4444)', marginBottom: '1rem', display: 'block' }}></i>
                    <h3 style={{ color: 'var(--color-danger, #ef4444)', marginBottom: '0.5rem' }}>Bulletin bloqué</h3>
                    <p className="text-muted" style={{ maxWidth: '400px', margin: '0 auto' }}>
                        {bulletin.message || 'Veuillez régulariser votre situation de frais de scolarité pour accéder au bulletin.'}
                    </p>
                </div>
            );
        }

        return (
            <div key={bulletin.id} id={`bulletin-print-${bulletin.id}`} className="card bulletin-card" style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
                <div className="card-body" style={{ padding: '1.5rem' }}>
                    <BulletinHeader bulletin={bulletin} />
                    <BulletinInfoRow bulletin={bulletin} />
                    <BulletinTable bulletin={bulletin} />
                    <BulletinFooter bulletin={bulletin} />
                </div>
            </div>
        );
    };

    const SemestreSwitcher = () => (
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {semestres.map((s) => (
                <button
                    key={s}
                    className={`btn btn-sm ${semestre === s ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setSemestre(s)}
                >
                    Semestre {s}
                </button>
            ))}
        </div>
    );

    if (role === 'admin' || role === 'prof') {
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Bulletins scolaires</h1>
                        <p>{role === 'prof' ? 'Bulletins de mes élèves' : 'Génération et consultation des bulletins'}</p>
                    </div>
                </div>

                <SemestreSwitcher />

                {bulletins.length === 0 ? (
                    <div className="card">
                        <div className="card-body text-center text-muted" style={{ padding: '2rem' }}>
                            Aucun bulletin disponible pour le semestre sélectionné.
                        </div>
                    </div>
                ) : (
                    bulletins.map((b) => renderBulletin(b))
                )}
            </>
        );
    }

    if (role === 'parent') {
        const enfants = (user as any)?.parent?.enfants || [];
        const enfantActuel = selectedEnfantId
            ? enfants.find((pe: any) => pe.eleve.id === selectedEnfantId)
            : enfants[0];

        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Bulletins de mes enfants</h1>
                        <p>Consulter les bulletins scolaires</p>
                    </div>
                </div>

                {enfants.length > 1 && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        {enfants.map((pe: any) => (
                            <button
                                key={pe.eleve.id}
                                className={`btn btn-sm ${selectedEnfantId === pe.eleve.id || (!selectedEnfantId && enfants[0]?.eleve?.id === pe.eleve.id) ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setSelectedEnfantId(pe.eleve.id)}
                            >
                                {pe.eleve?.user?.name || 'Élève'}
                            </button>
                        ))}
                    </div>
                )}

                <SemestreSwitcher />

                {enfants.length === 0 ? (
                    <div className="card">
                        <div className="card-body text-center text-muted" style={{ padding: '2rem' }}>
                            Aucun enfant lié à votre compte.
                        </div>
                    </div>
                ) : (
                    bulletins.filter((b) => !selectedEnfantId || b.eleveId === selectedEnfantId).length === 0 ? (
                        <div className="card">
                            <div className="card-body text-center text-muted" style={{ padding: '2rem' }}>
                                Aucun bulletin disponible pour le semestre sélectionné.
                            </div>
                        </div>
                    ) : (
                        bulletins
                            .filter((b) => !selectedEnfantId || b.eleveId === selectedEnfantId)
                            .map((b) => renderBulletin(b))
                    )
                )}
            </>
        );
    }

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Mon bulletin scolaire</h1>
                    <p>Consulter votre bulletin</p>
                </div>
            </div>

            <SemestreSwitcher />

            {bulletins.length === 0 ? (
                <div className="card">
                    <div className="card-body text-center text-muted" style={{ padding: '2rem' }}>
                        Aucun bulletin disponible pour le semestre sélectionné.
                    </div>
                </div>
            ) : (
                bulletins.map((b) => renderBulletin(b))
            )}
        </>
    );
}

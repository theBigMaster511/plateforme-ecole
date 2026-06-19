'use client';

import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import React, { useEffect, useState } from 'react';

export default function BulletinsPage() {
    const { user, role } = useAuth();
    const [bulletins, setBulletins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedEleveId, setSelectedEleveId] = useState<string>('');

    useEffect(() => {
        loadBulletins();
    }, []);

    const loadBulletins = async () => {
        setLoading(true);
        try {
            if (role === 'parent') {
                const enfants = (user as any)?.parent?.enfants || [];
                const allBulletins: any[] = [];
                for (const pe of enfants) {
                    const data = await api.getBulletins();
                    const arr = Array.isArray(data) ? data : [];
                    allBulletins.push(...arr.filter((b: any) => b.eleveId === pe.eleve.id));
                }
                setBulletins(allBulletins);
            } else {
                const data = await api.getBulletins();
                setBulletins(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Error loading bulletins:', error);
        }
        setLoading(false);
    };

    if (loading) {
        return <div className="loader">Chargement des bulletins...</div>;
    }

    const handlePrint = (id: string) => {
        console.log(`Imprimer bulletin ${id}`);
        window.print();
    };

    const handleExport = (id: string) => {
        console.log(`Exporter bulletin ${id}`);
    };

    if (role === 'admin') {
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Bulletins scolaires</h1>
                        <p>Génération et export des bulletins</p>
                    </div>
                    <div className="topbar-actions">
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Bulletins {new Date().getFullYear()}</h3>
                    </div>
                    <table className="notes-table">
                        <thead>
                            <tr>
                                <th>Élève</th>
                                <th>Classe</th>
                                <th>Semestre</th>
                                <th>Moyenne</th>
                                <th>Rang</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bulletins.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center">Aucun bulletin</td>
                                </tr>
                            ) : (
                                bulletins.map((b) => (
                                    <tr key={b.id}>
                                        <td className="font-bold">{b?.eleve?.user?.name || '—'}</td>
                                        <td>{b?.classe?.nom || '—'}</td>
                                        <td>S{b?.semestre || 1}</td>
                                        <td><span className="badge badge-info">{b?.moyenne || '—'}</span></td>
                                        <td>{b?.rang || '—'}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-icon" title="Imprimer" onClick={() => handlePrint(b.id)}>
                                                    <i className="ti ti-printer"></i>
                                                </button>
                                                <button className="btn-icon" title="Télécharger" onClick={() => handleExport(b.id)}>
                                                    <i className="ti ti-download"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    if (role === 'prof') {
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Bulletins de mes élèves</h1>
                        <p>Consultation et validation des bulletins</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Bulletins</h3>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                        <p className="text-muted">Les bulletins seront disponibles après validation par l'administration.</p>
                    </div>
                </div>
            </>
        );
    }

    if (role === 'parent') {
        const enfants = (user as any)?.parent?.enfants || [];

        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Bulletins de mes enfants</h1>
                        <p>Consulter les bulletins scolaires</p>
                    </div>
                </div>

                {enfants.length === 0 ? (
                    <div className="card">
                        <div className="card-header"><h3>Bulletins</h3></div>
                        <div className="card-body text-center text-muted">
                            Aucun enfant lié à votre compte.
                        </div>
                    </div>
                ) : (
                    enfants.map((pe: any) => {
                        const e = pe.eleve;
                        const bulletinsEnfant = bulletins.filter((b) => b.eleveId === e.id);
                        return (
                            <div key={e.id} className="card" style={{ marginBottom: '1.5rem' }}>
                                <div className="card-header">
                                    <h3>{e?.user?.name || 'Élève'} {e?.classe?.nom ? `- ${e.classe.nom}` : ''}</h3>
                                </div>
                                <div style={{ padding: '1.25rem' }}>
                                    {bulletinsEnfant.length === 0 ? (
                                        <p className="text-muted text-center">Aucun bulletin disponible pour le moment.</p>
                                    ) : (
                                        bulletinsEnfant.map((bulletin) => (
                                            <div key={bulletin.id} style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                                                    <div>
                                                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Semestre</span>
                                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>S{bulletin?.semestre || 1}</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Moyenne</span>
                                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>{bulletin?.moyenne || '—'}/20</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Rang</span>
                                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>{bulletin?.rang || '—'}</span>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button className="btn btn-sm btn-outline" onClick={() => handlePrint(bulletin.id)}>
                                                        <i className="ti ti-printer"></i> Imprimer
                                                    </button>
                                                    <button className="btn btn-sm btn-outline" onClick={() => handleExport(bulletin.id)}>
                                                        <i className="ti ti-download"></i> Télécharger
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        );
                    })
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

            {bulletins.length > 0 ? (
                bulletins.map((bulletin) => (
                    <div key={bulletin.id} className="card" style={{ marginBottom: '1.5rem' }}>
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>Bulletin Semestre {bulletin?.semestre || 1}</h3>
                                <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                                    Année {new Date().getFullYear()}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button className="btn btn-sm btn-outline" onClick={() => handlePrint(bulletin.id)}>
                                    <i className="ti ti-printer"></i> Imprimer
                                </button>
                                <button className="btn btn-sm btn-outline" onClick={() => handleExport(bulletin.id)}>
                                    <i className="ti ti-download"></i> Télécharger
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: '1.25rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Classe</span>
                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{bulletin?.classe?.nom || '—'}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Moyenne générale</span>
                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{bulletin?.moyenne || '—'}/20</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-secondary)' }}>Rang</span>
                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{bulletin?.rang || '—'}</span>
                                </div>
                            </div>
                            <p className="text-muted text-center">Bulletin complet disponible à l'impression</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="card">
                    <div className="card-header">
                        <h3>Bulletins</h3>
                    </div>
                    <div style={{ padding: '1.25rem' }} className="text-center text-muted">
                        Aucun bulletin disponible pour le moment.
                    </div>
                </div>
            )}
        </>
    );
}

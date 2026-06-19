'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';

export default function Dashboard() {
    const { user, role } = useAuth();
    const [eleves, setEleves] = useState<any[]>([]);
    const [allEleves, setAllEleves] = useState<any[]>([]);
    const [classes, setClasses] = useState<any[]>([]);
    const [notes, setNotes] = useState<any[]>([]);
    const [professeurs, setProfesseurs] = useState<any[]>([]);
    const [bulletins, setBulletins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [role]);

    const loadData = async () => {
        setLoading(true);
        try {
            if (role === 'admin') {
                const [elevesRes, classesRes, notesRes, professeursRes] = await Promise.all([
                    api.getEleves(),
                    api.getClasses(),
                    api.getNotes(),
                    api.getProfesseurs(),
                ]);
                setAllEleves(Array.isArray(elevesRes) ? elevesRes : []);
                setEleves(Array.isArray(elevesRes) ? elevesRes.slice(0, 5) : []);
                setClasses(Array.isArray(classesRes) ? classesRes : []);
                setNotes(Array.isArray(notesRes) ? notesRes.slice(0, 5) : []);
                setProfesseurs(Array.isArray(professeursRes) ? professeursRes : []);
            } else if (role === 'prof') {
                const classesRes = await api.getClasses();
                setClasses(Array.isArray(classesRes) ? classesRes : []);
            } else if (role === 'eleve') {
                const notesRes = await api.getNotes();
                setNotes(Array.isArray(notesRes) ? notesRes : []);
            } else if (role === 'parent') {
                const enfants = (user as any)?.parent?.enfants || [];
                const notesPromises = enfants.map((pe: any) => api.getNotesByEleve(pe.eleve.id));
                const notesResults = await Promise.all(notesPromises);
                const allNotes = notesResults.flat().filter(Boolean);
                setNotes(allNotes);
                const bulletinsRes = await api.getBulletins();
                setBulletins(Array.isArray(bulletinsRes) ? bulletinsRes : []);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
        setLoading(false);
    };

    if (loading) {
        return <div className="loader">Chargement du tableau de bord...</div>;
    }

    const renderAdminDashboard = () => {
        const elevesParClasse: Record<string, number> = {};
        allEleves.forEach((e) => {
            const nomClasse = e?.classe?.nom || 'Sans classe';
            elevesParClasse[nomClasse] = (elevesParClasse[nomClasse] || 0) + 1;
        });
        const maxEleves = Math.max(...Object.values(elevesParClasse), 1);

        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Tableau de bord</h1>
                        <p>Année scolaire 2025–2026 · Semestre 1</p>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Total élèves</span>
                        <span className="stat-value">{allEleves.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Classes</span>
                        <span className="stat-value">{classes.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Notes enregistrées</span>
                        <span className="stat-value">{notes.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Professeurs</span>
                        <span className="stat-value">{professeurs.length}</span>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <div className="card-header">
                        <h3>Élèves par classe</h3>
                    </div>
                    <div className="card-body">
                        {Object.keys(elevesParClasse).length === 0 ? (
                            <p className="text-muted text-center">Aucun élève inscrit</p>
                        ) : (
                            <div className="chart-bars">
                                {Object.entries(elevesParClasse)
                                    .sort(([, a], [, b]) => b - a)
                                    .map(([classe, count]) => (
                                        <div key={classe} className="chart-row">
                                            <span className="chart-label">{classe}</span>
                                            <div className="chart-bar-track">
                                                <div
                                                    className="chart-bar-fill"
                                                    style={{ width: `${(count / maxEleves) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="chart-value">{count}</span>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Derniers élèves inscrits</h3>
                    </div>
                    <table className="notes-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Classe</th>
                                <th>Email</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eleves.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="text-center">Aucun élève</td>
                                </tr>
                            ) : (
                                eleves.map((e) => (
                                    <tr key={e.id}>
                                        <td className="font-bold">{e?.user?.name || 'Élève'}</td>
                                        <td>{e?.classe?.nom || '—'}</td>
                                        <td>{e?.user?.email || '—'}</td>
                                        <td><span className="badge badge-success">Actif</span></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    };

    const renderProfDashboard = () => (
        <>
            <div className="topbar">
                <div>
                    <h1>Mon espace professeur</h1>
                    <p>Gestion de vos classes et notes</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Mes classes</span>
                    <span className="stat-value">{classes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Notes saisies</span>
                    <span className="stat-value">{notes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Élèves</span>
                    <span className="stat-value">45</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Tâches en attente</span>
                    <span className="stat-value">3</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Accès rapides</h3>
                </div>
                <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    <a href="/notes" className="quick-link">
                        <i className="ti ti-notes"></i>
                        <span>Saisir les notes</span>
                    </a>
                    <a href="/classes" className="quick-link">
                        <i className="ti ti-users"></i>
                        <span>Mes classes</span>
                    </a>
                    <a href="/bulletins" className="quick-link">
                        <i className="ti ti-file-text"></i>
                        <span>Bulletins</span>
                    </a>
                </div>
            </div>
        </>
    );

    const renderEleveDashboard = () => (
        <>
            <div className="topbar">
                <div>
                    <h1>Mon espace élève</h1>
                    <p>Consulter mes notes et bulletin</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Moyenne générale</span>
                    <span className="stat-value">14.5</span>
                    <span className="stat-change positive">↑ 0.5pt</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Notes de cette année</span>
                    <span className="stat-value">{notes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Rang de la classe</span>
                    <span className="stat-value">4e</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Présence</span>
                    <span className="stat-value">95%</span>
                    <span className="stat-change positive">Excellent</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Mes accès</h3>
                </div>
                <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <a href="/notes" className="quick-link">
                        <i className="ti ti-notes"></i>
                        <span>Consulter mes notes</span>
                    </a>
                    <a href="/bulletins" className="quick-link">
                        <i className="ti ti-file-text"></i>
                        <span>Mon bulletin</span>
                    </a>
                </div>
            </div>
        </>
    );

    const renderParentDashboard = () => {
        const enfants = (user as any)?.parent?.enfants || [];
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Espace Parent</h1>
                        <p>Suivi de la scolarité de vos enfants</p>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Enfants inscrits</span>
                        <span className="stat-value">{enfants.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Notes consultables</span>
                        <span className="stat-value">{notes.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Bulletins</span>
                        <span className="stat-value">{bulletins.length}</span>
                    </div>
                </div>

                {enfants.length === 0 ? (
                    <div className="card">
                        <div className="card-header"><h3>Mes enfants</h3></div>
                        <div className="card-body text-center text-muted">
                            Aucun enfant lié à votre compte. Contactez l'administration.
                        </div>
                    </div>
                ) : (
                    enfants.map((pe: any) => {
                        const e = pe.eleve;
                        return (
                            <div key={e.id} className="card" style={{ marginBottom: '1rem' }}>
                                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h3>{e?.user?.name || 'Élève'}</h3>
                                        <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                                            {e?.matricule || ''} {e?.classe?.nom ? `· ${e.classe.nom}` : ''}
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <a href="/notes" className="btn btn-sm btn-outline">
                                            <i className="ti ti-notes"></i> Notes
                                        </a>
                                        <a href="/bulletins" className="btn btn-sm btn-outline">
                                            <i className="ti ti-file-text"></i> Bulletin
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}

                <div className="card">
                    <div className="card-header"><h3>Accès rapides</h3></div>
                    <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <a href="/notes" className="quick-link">
                            <i className="ti ti-notes"></i>
                            <span>Notes des enfants</span>
                        </a>
                        <a href="/bulletins" className="quick-link">
                            <i className="ti ti-file-text"></i>
                            <span>Bulletins</span>
                        </a>
                        <a href="/communication" className="quick-link">
                            <i className="ti ti-messages"></i>
                            <span>Messages</span>
                        </a>
                    </div>
                </div>
            </>
        );
    };

    return (
        <main className="main-content">
            {role === 'admin' && renderAdminDashboard()}
            {role === 'prof' && renderProfDashboard()}
            {role === 'eleve' && renderEleveDashboard()}
            {role === 'parent' && renderParentDashboard()}
        </main>
    );
}

'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { SchoolDataProvider } from '@/lib/school-data-context';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

const stepsByRole: Record<string, { icon: string; title: string; desc: string }[]> = {
  admin: [
    { icon: 'ti ti-books', title: 'Créez une classe', desc: 'Allez dans le menu "Classes" et cliquez sur "Ajouter une classe". Remplissez le niveau, le nom et validez.' },
    { icon: 'ti ti-book-2', title: 'Ajoutez des matières', desc: 'Dans la modale d\'édition d\'une classe, saisissez les matières enseignées (Maths, Français, SVT…).' },
    { icon: 'ti ti-user-check', title: 'Créez un professeur', desc: 'Menu "Professeurs" → "Ajouter". Remplissez ses infos et assignez-lui ses matières via le champ texte.' },
    { icon: 'ti ti-users', title: 'Créez des élèves', desc: 'Menu "Élèves" → "Ajouter". Affectez chaque élève à une classe existante.' },
  ],
  prof: [
    { icon: 'ti ti-clipboard-list', title: 'Accédez aux notes', desc: 'Ouvrez l\'onglet "Notes" dans la barre latérale.' },
    { icon: 'ti ti-school', title: 'Sélectionnez une classe', desc: 'Choisissez une classe parmi celles qui vous sont assignées.' },
    { icon: 'ti ti-user', title: 'Choisissez un élève', desc: 'Cliquez sur le bouton "Note" à côté de l\'élève concerné.' },
    { icon: 'ti ti-star', title: 'Saisissez la note', desc: 'Entrez le nom de la matière, la note et une appréciation facultative. Validez.' },
  ],
  eleve: [
    { icon: 'ti ti-clipboard-list', title: 'Consultez vos notes', desc: 'Allez dans "Mes Notes" pour voir toutes vos notes par matière.' },
    { icon: 'ti ti-file-analytics', title: 'Votre bulletin', desc: 'Allez dans "Mon Bulletin" pour voir le récapitulatif trimestriel.' },
  ],
  parent: [
    { icon: 'ti ti-users', title: 'Vos enfants', desc: 'Retrouvez tous vos enfants listés sur le tableau de bord.' },
    { icon: 'ti ti-notes', title: 'Consultez les notes', desc: 'Allez dans "Notes des enfants" pour voir les notes de chacun.' },
    { icon: 'ti ti-file-text', title: 'Les bulletins', desc: 'La rubrique "Bulletins" vous donne accès aux relevés de notes.' },
  ],
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, role, isLoading, logout } = useAuth();
    const router = useRouter();
    const [onbStep, setOnbStep] = useState(0);
    const [onbVisible, setOnbVisible] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            const lastRole = sessionStorage.getItem('lastRole');
            sessionStorage.removeItem('lastRole');
            router.replace(lastRole === 'admin' ? '/admin-login' : '/');
        }
    }, [isLoading, user]);

    useEffect(() => {
        if (role && !localStorage.getItem(`onb_${role}`)) {
            setOnbVisible(true);
        }
    }, [role]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div className="loader">Chargement...</div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const steps = stepsByRole[role || ''] || [];
    const current = steps[onbStep] || null;
    const accent = role === 'admin' ? '#a13d63' : role === 'prof' ? '#1D9E75' : '#B8860B';

    return (
        <SchoolDataProvider>
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <main className="main with-sidebar">
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 24px', borderBottom: '1px solid #e5e7eb',
                    background: '#fafbfc',
                }}>
                    <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 24 }} />
                    <span style={{ fontSize: 13, color: '#6b7280' }}>Plateforme de gestion scolaire</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 12, color: '#9ca3af' }}>{user?.email}</span>
                        <button onClick={async () => { const r = role; await logout(); router.replace(r === 'admin' ? '/admin-login' : '/login'); }}
                            style={{
                                padding: '6px 12px', border: '1px solid #e5e7eb', borderRadius: 6,
                                background: '#fff', color: '#374151', fontSize: 12, cursor: 'pointer',
                                fontFamily: "'DM Sans', sans-serif", display: 'inline-flex', alignItems: 'center', gap: 4,
                            }}
                            title="Déconnexion">
                            <i className="ti ti-logout" style={{ fontSize: 14 }}></i> Déconnexion
                        </button>
                    </div>
                </div>
                {children}
            </main>

            {onbVisible && current && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 9999,
                    background: 'rgba(0,0,0,0.5)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', padding: '1rem',
                }}>
                    <div style={{
                        background: '#fff', borderRadius: 16, maxWidth: 420, width: '100%',
                        padding: '2rem', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                    }}>
                        <div style={{
                            width: 64, height: 64, borderRadius: 16,
                            background: accent, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', color: '#fff', fontSize: 28,
                            margin: '0 auto 1.25rem',
                        }}>
                            <i className={current.icon}></i>
                        </div>

                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: '0.5rem', color: '#1a1a2e' }}>
                            {current.title}
                        </h3>
                        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            {current.desc}
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: '1.5rem' }}>
                            {steps.map((_, i) => (
                                <div key={i} style={{
                                    width: 8, height: 8, borderRadius: '50%',
                                    background: i === onbStep ? accent : '#e5e7eb',
                                    transition: 'background 0.3s',
                                }} />
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                            {onbStep > 0 && (
                                <button onClick={() => setOnbStep(s => s - 1)}
                                    style={{
                                        padding: '10px 20px', border: '1px solid #e5e7eb', borderRadius: 8,
                                        background: '#fff', color: '#374151', fontSize: 13, fontWeight: 500,
                                        cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                    <i className="ti ti-arrow-left" style={{ verticalAlign: -1 }}></i> Précédent
                                </button>
                            )}
                            {onbStep < steps.length - 1 ? (
                                <button onClick={() => setOnbStep(s => s + 1)}
                                    style={{
                                        padding: '10px 20px', border: 'none', borderRadius: 8,
                                        background: accent, color: '#fff', fontSize: 13,
                                        fontWeight: 500, cursor: 'pointer',
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                    Suivant <i className="ti ti-arrow-right" style={{ verticalAlign: -1 }}></i>
                                </button>
                            ) : (
                                <button onClick={() => {
                                    if (role) localStorage.setItem(`onb_${role}`, '1');
                                    setOnbVisible(false);
                                }}
                                    style={{
                                        padding: '10px 20px', border: 'none', borderRadius: 8,
                                        background: accent, color: '#fff', fontSize: 13,
                                        fontWeight: 500, cursor: 'pointer',
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                    <i className="ti ti-check" style={{ verticalAlign: -1 }}></i> C'est compris !
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
        </SchoolDataProvider>
    );
}

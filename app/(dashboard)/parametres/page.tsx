'use client';

import React from 'react';
import { useAuth } from '@/lib/auth-context';

export default function ParametresPage() {
    const { user, role } = useAuth();

    const roleLabels: Record<string, string> = {
        admin: 'Administrateur',
        prof: 'Professeur',
        eleve: 'Élève',
        parent: 'Parent',
    };

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Paramètres</h1>
                    <p>Vos informations de compte</p>
                </div>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div className="card-header"><h3>Mon compte</h3></div>
                <div className="card-body">
                    <div className="field">
                        <label>Nom</label>
                        <p style={{ padding: '8px 0', fontSize: '14px' }}>{user?.name || '—'}</p>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <p style={{ padding: '8px 0', fontSize: '14px' }}>{user?.email || '—'}</p>
                    </div>
                    <div className="field">
                        <label>Rôle</label>
                        <p style={{ padding: '8px 0', fontSize: '14px' }}>{roleLabels[role || ''] || role || '—'}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

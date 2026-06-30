'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
    const { user, role, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const roleLabels: Record<string, string> = {
        admin: 'Administrateur',
        prof: 'Professeur',
        eleve: 'Élève',
        parent: 'Parent',
    };

    const navItems: Record<string, Array<{ href: string; icon: string; label: string }>> = {
        admin: [
            { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Tableau de bord' },
            { href: '/eleves', icon: 'ti-users', label: 'Élèves' },
            { href: '/classes', icon: 'ti-building', label: 'Classes' },
            { href: '/professeurs', icon: 'ti-chalkboard', label: 'Professeurs' },
            { href: '/frais', icon: 'ti-credit-card', label: 'Frais scolaires' },
            { href: '/emploi-du-temps', icon: 'ti-calendar', label: 'Emploi du temps' },
            { href: '/communication', icon: 'ti-messages', label: 'Communication' },
            { href: '/parametres', icon: 'ti-settings', label: 'Paramètres' },
        ],
        prof: [
            { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Accueil' },
            { href: '/notes', icon: 'ti-notes', label: 'Notes' },
            { href: '/classes', icon: 'ti-building', label: 'Mes classes' },
            { href: '/emploi-du-temps', icon: 'ti-calendar', label: 'Emploi du temps' },
            { href: '/communication', icon: 'ti-messages', label: 'Communication' },
            { href: '/parametres', icon: 'ti-settings', label: 'Paramètres' },
        ],
        eleve: [
            { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Mon espace' },
            { href: '/notes', icon: 'ti-notes', label: 'Mes notes' },
            { href: '/bulletins', icon: 'ti-file-text', label: 'Mon bulletin' },
            { href: '/frais', icon: 'ti-credit-card', label: 'Mes frais' },
            { href: '/emploi-du-temps', icon: 'ti-calendar', label: 'Emploi du temps' },
            { href: '/communication', icon: 'ti-messages', label: 'Communication' },
            { href: '/parametres', icon: 'ti-settings', label: 'Paramètres' },
        ],
        parent: [
            { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Accueil' },
            { href: '/emploi-du-temps', icon: 'ti-calendar', label: 'Emploi du temps' },
            { href: '/notes', icon: 'ti-notes', label: 'Notes des enfants' },
            { href: '/bulletins', icon: 'ti-file-text', label: 'Bulletins' },
            { href: '/frais', icon: 'ti-credit-card', label: 'Frais scolaires' },
            { href: '/communication', icon: 'ti-messages', label: 'Communication' },
            { href: '/parametres', icon: 'ti-settings', label: 'Paramètres' },
        ],
    };
    const items = navItems[role || 'eleve'] || [];
    const initials = user?.name?.substring(0, 2).toUpperCase() || 'U';

    const handleLogout = async () => {
        const currentRole = role;
        await logout();
        router.push(currentRole === 'admin' ? '/admin-login' : '/login');
    };

    return (
        <aside className={`sidebar role-${role || 'eleve'}`}>
            <div className="sidebar-brand">
                <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 36, marginRight: 8 }} />
                <div>
                    <span>Jangoo.sn</span>
                    <small>{roleLabels[role || 'eleve']}</small>
                </div>
            </div>

            <nav>
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                    >
                        <i className={`ti ${item.icon}`}></i> {item.label}
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="user-block">
                    <div className="avatar" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                        {initials}
                    </div>
                    <div className="user-info">
                        <span>{user?.name || 'Utilisateur'}</span>
                        <small>{user?.email}</small>
                    </div>
                    <button className="logout-btn" onClick={handleLogout} title="Déconnexion">
                        <i className="ti ti-logout"></i>
                        <span style={{ fontSize: 12, marginLeft: 4 }}>Quitter</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}

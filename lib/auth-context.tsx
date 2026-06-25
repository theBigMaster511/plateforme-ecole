'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    eleve?: { id: string; userId: string; matricule: string; classeId?: string } | null;
    professeur?: { id: string; userId: string; specialite?: string } | null;
    parent?: { id: string; userId: string; telephone?: string; enfants?: Array<{ eleve: { id: string; matricule: string; user: { name?: string }; classe?: { id: string; nom: string } | null } }> } | null;
    ecole?: { id: string; nom: string; logo?: string; telephone?: string; adresse?: string; ville?: string } | null;
}

interface AuthContextType {
    user: User | null;
    role: string | null;
    isLoading: boolean;
    login: (email: string, password: string, role?: string) => Promise<{ user?: User; error?: string }>;
    logout: () => Promise<void>;
    restoreSession: () => Promise<boolean>;
    isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_MAP: Record<string, string> = {
    ADMIN: 'admin',
    PROFESSEUR: 'prof',
    ELEVE: 'eleve',
    PARENT: 'parent',
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        restoreSession();
    }, []);

    const fetchProfile = async () => {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) return null;
        const data = await res.json();
        if (data.error) return null;
        const userData = data.user || data;
        if (data.eleve) (userData as any).eleve = data.eleve;
        if (data.professeur) (userData as any).professeur = data.professeur;
        if (data.parent) (userData as any).parent = data.parent;
        if (data.ecole) (userData as any).ecole = data.ecole;
        return userData;
    };

    const login = async (email: string, password: string, explicitRole?: string) => {
        const endpoints = explicitRole
            ? [explicitRole === 'admin' ? '/auth/sign-in/school' : explicitRole === 'prof' ? '/auth/sign-in/teacher' : explicitRole === 'parent' ? '/auth/sign-in/parent' : '/auth/sign-in/student']
            : ['/auth/sign-in/parent', '/auth/sign-in/teacher', '/auth/sign-in/student', '/auth/sign-in/school'];

        let ok = false;
        for (const ep of endpoints) {
            const res = await fetch(`/api${ep}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) { ok = true; break; }
        }

        if (!ok) return { error: 'Identifiants invalides' };

        // Lecture du profil pour obtenir le rôle et les profils liés (eleve/professeur)
        const userData = await fetchProfile();
        if (!userData) return { error: 'Erreur lors de la récupération du profil' };

        const detectedRole = ROLE_MAP[userData?.role as string] || 'eleve';
        setUser(userData);
        setRole(detectedRole);
        return { user: userData };
    };

    const restoreSession = async () => {
        try {
            const userData = await fetchProfile();
            if (userData) {
                setUser(userData);
                setRole(ROLE_MAP[userData?.role as string] || 'eleve');
                setIsLoading(false);
                return true;
            }
            setIsLoading(false);
            return false;
        } catch (error) {
            console.error('Error restoring session:', error);
            setIsLoading(false);
            return false;
        }
    };

    const logout = async () => {
        try {
            if (role) sessionStorage.setItem('lastRole', role);
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
            setRole(null);
        }
    };

    const isLoggedIn = () => !!user;

    return (
        <AuthContext.Provider value={{ user, role, isLoading, login, logout, restoreSession, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id?: string;
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

interface AuthContextType {
    user: User | null;
    role: string | null;
    isLoading: boolean;
    login: (email: string, password: string, role: string) => Promise<{ user?: User; error?: string }>;
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

    const login = async (email: string, password: string, userRole: string) => {
        try {
            const endpoints: Record<string, string> = {
                admin: '/auth/sign-in/school',
                prof: '/auth/sign-in/teacher',
                eleve: '/auth/sign-in/student',
                parent: '/auth/sign-in/parent',
            };

            const endpoint = endpoints[userRole];
            if (!endpoint) {
                return { error: 'Role inconnu' };
            }

            const res = await fetch(`/api${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                return { error: data.error || 'Identifiants invalides' };
            }

            const userData = data.user || data;
            setUser(userData);
            setRole(userRole);
            return { user: userData };
        } catch (error) {
            console.error('Login error:', error);
            return { error: 'Erreur lors de la connexion' };
        }
    };

    const restoreSession = async () => {
        try {
            const res = await fetch('/api/auth/me', {
                credentials: 'include',
            });

            if (res.ok) {
                const data = await res.json();
                const userData = data.user || data;
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

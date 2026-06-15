'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user]);

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

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <main className="main with-sidebar">{children}</main>
        </div>
    );
}
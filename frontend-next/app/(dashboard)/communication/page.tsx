'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';

export default function CommunicationPage() {
    const { role } = useAuth();
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [target, setTarget] = useState('all');
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState('');

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        setLoading(true);
        try {
            const data = await api.getCommunications();
            setMessages(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading messages:', error);
        }
        setLoading(false);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setSendError('');
        setSending(true);
        try {
            const res = await api.sendCommunication({ title, content, target });
            if (res?.error) { setSendError(res.error); return; }
            setTitle('');
            setContent('');
            setTarget('all');
            loadMessages();
        } catch (err: any) {
            setSendError(err?.message || 'Erreur lors de l\'envoi');
        }
        setSending(false);
    };

    if (loading) return <div className="loader">Chargement...</div>;

    if (role === 'admin') {
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Communication</h1>
                        <p>Envoyer des informations aux élèves et professeurs</p>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <div className="card-header"><h3>Nouvelle communication</h3></div>
                    <form onSubmit={handleSend}>
                        <div className="card-body">
                            {sendError && <div className="error-msg" style={{ display: 'block' }}>{sendError}</div>}
                            <div className="field">
                                <label>Titre</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Objet du message" required />
                            </div>
                            <div className="field">
                                <label>Message</label>
                                <textarea rows={5} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Votre message..." required />
                            </div>
                            <div className="field">
                                <label>Destinataires</label>
                                <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                                        <input type="radio" name="target" value="all" checked={target === 'all'} onChange={() => setTarget('all')} /> Tous
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                                        <input type="radio" name="target" value="eleves" checked={target === 'eleves'} onChange={() => setTarget('eleves')} /> Élèves seulement
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                                        <input type="radio" name="target" value="professeurs" checked={target === 'professeurs'} onChange={() => setTarget('professeurs')} /> Professeurs seulement
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                            <button type="submit" className="btn btn-primary" disabled={sending}>
                                <i className="ti ti-send"></i> {sending ? 'Envoi...' : 'Envoyer'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="card">
                    <div className="card-header"><h3>Communications envoyées</h3></div>
                    {messages.length === 0 ? (
                        <div className="card-body"><p className="text-muted text-center">Aucune communication envoyée</p></div>
                    ) : (
                        messages.map((m: any) => (
                            <div key={m.id} style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                    <strong>{m.title}</strong>
                                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {m.createdAt ? new Date(m.createdAt).toLocaleDateString('fr-FR') : ''}
                                        {m.target ? ` · ${m.target === 'all' ? 'Tous' : m.target === 'eleves' ? 'Élèves' : 'Professeurs'}` : ''}
                                    </span>
                                </div>
                                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', whiteSpace: 'pre-wrap' }}>{m.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Communications</h1>
                    <p>Messages de l'administration</p>
                </div>
            </div>

            <div className="card">
                <div className="card-header"><h3>Mes communications</h3></div>
                {messages.length === 0 ? (
                    <div className="card-body"><p className="text-muted text-center">Aucune communication reçue</p></div>
                ) : (
                    messages.map((m: any) => (
                        <div key={m.id} style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                <strong>{m.title}</strong>
                                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                    {m.createdAt ? new Date(m.createdAt).toLocaleDateString('fr-FR') : ''}
                                </span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', whiteSpace: 'pre-wrap' }}>{m.content}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

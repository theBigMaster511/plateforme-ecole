'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function ProfesseursPage() {
    const [professeurs, setProfesseurs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editTarget, setEditTarget] = useState<any>(null);
    const [deleteTarget, setDeleteTarget] = useState<any>(null);
    const [form, setForm] = useState({ name: '', email: '', password: '', specialite: '', telephone: '' });
    const [matieres, setMatieres] = useState<any[]>([]);
    const [classes, setClasses] = useState<any[]>([]);
    const [toAssign, setToAssign] = useState<string[]>([]);
    const [toAssignClasses, setToAssignClasses] = useState<string[]>([]);
    const [matiereInput, setMatiereInput] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        loadProfesseurs();
        loadMatieres();
        loadClasses();
    }, []);

    const loadClasses = async () => {
        try {
            const data = await api.getClasses();
            setClasses(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading classes:', error);
        }
    };

    const loadMatieres = async () => {
        try {
            const data = await api.getMatieres();
            setMatieres(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading matieres:', error);
        }
    };

    const loadProfesseurs = async () => {
        setLoading(true);
        try {
            const data = await api.getProfesseurs();
            setProfesseurs(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading professeurs:', error);
        }
        setLoading(false);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setError('');
        const res = await api.deleteProfesseur(deleteTarget.id);
        if (res?.error) {
            setError(res.error);
            return;
        }
        setDeleteTarget(null);
        loadProfesseurs();
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const res = await api.updateProfesseur(editTarget.id, {
            name: form.name,
            email: form.email,
            specialite: form.specialite || undefined,
            telephone: form.telephone || undefined,
        });
        if (res?.error) {
            setError(res.error);
            return;
        }
        setEditTarget(null);
        setForm({ name: '', email: '', password: '', specialite: '', telephone: '' });
        loadProfesseurs();
    };

    const assignedMatieres = matieres.filter((m) => toAssign.includes(m.id));

    const handleAssignMatiere = async () => {
        const trimmed = matiereInput.trim();
        if (!trimmed) return;
        setError('');
        let match = matieres.find((m) => m.nom.toLowerCase() === trimmed.toLowerCase());
        if (!match) {
            const firstClasse = classes[0];
            if (!firstClasse) {
                setError('Aucune classe disponible pour créer la matière.');
                return;
            }
            const created = await api.createMatiere({ nom: trimmed, coefficient: 1, classeId: firstClasse.id });
            if (created?.error) { setError(created.error); return; }
            setMatieres((prev) => [...prev, created]);
            match = created;
        }
        if (toAssign.includes(match.id)) {
            setError(`"${match.nom}" est déjà assignée.`);
            return;
        }
        const res = await api.assignMatiere(editTarget.id, match.id);
        if (res?.error) { setError(res.error); return; }
        setToAssign((prev) => [...prev, match.id]);
        setMatiereInput('');
    };

    const handleRemoveMatiere = async (matiereId: string) => {
        setError('');
        const res = await api.removeMatiere(editTarget.id, matiereId);
        if (res?.error) { setError(res.error); return; }
        setToAssign((prev) => prev.filter((id) => id !== matiereId));
    };

    const assignedClasses = classes.filter((c) => toAssignClasses.includes(c.id));

    const handleAssignClasse = async (classeId: string) => {
        setError('');
        const res = await api.assignClasse(editTarget.id, classeId);
        if (res?.error) { setError(res.error); return; }
        setToAssignClasses((prev) => [...prev, classeId]);
    };

    const handleRemoveClasse = async (classeId: string) => {
        setError('');
        const res = await api.removeClasse(editTarget.id, classeId);
        if (res?.error) { setError(res.error); return; }
        setToAssignClasses((prev) => prev.filter((id) => id !== classeId));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await api.signUpTeacher({
                name: form.name,
                email: form.email,
                password: form.password,
                specialite: form.specialite || undefined,
                telephone: form.telephone || undefined,
            });
            if (res?.error) {
                setError(res.error);
                return;
            }
            setShowModal(false);
            setForm({ name: '', email: '', password: '', specialite: '', telephone: '' });
            loadProfesseurs();
        } catch (err: any) {
            setError(err?.message || 'Erreur lors de la création');
        }
    };

    if (loading) return <div className="loader">Chargement des professeurs...</div>;

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Gestion des professeurs</h1>
                    <p>Gérez les professeurs de l'établissement</p>
                </div>
                <div className="topbar-actions">
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <i className="ti ti-plus"></i> Nouveau professeur
                    </button>
                </div>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2rem' }}>
                <div className="stat-card">
                    <span className="stat-label">Total professeurs</span>
                    <span className="stat-value">{professeurs.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Actifs</span>
                    <span className="stat-value">{professeurs.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Matières</span>
                    <span className="stat-value">8</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Liste des professeurs</h3>
                </div>
                <table className="notes-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Spécialité</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professeurs.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center">Aucun professeur trouvé</td>
                            </tr>
                        ) : (
                            professeurs.map((p) => (
                                <tr key={p.id}>
                                    <td className="font-bold">{p?.user?.name || '—'}</td>
                                    <td>{p?.user?.email || '—'}</td>
                                    <td>{p?.telephone || '—'}</td>
                                    <td>{p?.specialite || p?.matieres?.[0]?.matiere?.nom || '—'}</td>
                                    <td><span className="badge badge-success">Actif</span></td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Éditer" onClick={() => { setEditTarget(p); setForm({ name: p.user?.name || '', email: p.user?.email || '', password: '', specialite: p.specialite || '', telephone: p.telephone || '' }); setToAssign(p.matieres?.map((m: any) => m.matiereId) || []); setToAssignClasses(p.classes?.map((c: any) => c.classeId) || []); setMatiereInput(''); setError(''); }}>
                                                <i className="ti ti-edit"></i>
                                            </button>
                                            <button className="btn-icon" title="Supprimer" onClick={() => setDeleteTarget(p)}>
                                                <i className="ti ti-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => { setShowModal(false); setError(''); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Nouveau professeur</h3>
                            <button className="btn-icon" onClick={() => { setShowModal(false); setError(''); }}>
                                <i className="ti ti-x"></i>
                            </button>
                        </div>
                        <form onSubmit={handleCreate}>
                            <div className="modal-body">
                                {error && <div className="error-msg">{error}</div>}
                                <div className="field">
                                    <label>Nom complet</label>
                                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Mot de passe</label>
                                    <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Spécialité</label>
                                    <input type="text" value={form.specialite} onChange={(e) => setForm({ ...form, specialite: e.target.value })} placeholder="ex: Mathématiques" />
                                </div>
                                <div className="field">
                                    <label>Téléphone</label>
                                    <input type="text" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} placeholder="ex: 0612345678" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setShowModal(false); setError(''); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Créer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {editTarget && (
                <div className="modal-overlay" onClick={() => { setEditTarget(null); setError(''); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Modifier le professeur</h3>
                            <button className="btn-icon" onClick={() => { setEditTarget(null); setError(''); }}>
                                <i className="ti ti-x"></i>
                            </button>
                        </div>
                        <form onSubmit={handleEdit}>
                            <div className="modal-body">
                                {error && <div className="error-msg">{error}</div>}
                                <div className="field">
                                    <label>Nom complet</label>
                                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Spécialité</label>
                                    <input type="text" value={form.specialite} onChange={(e) => setForm({ ...form, specialite: e.target.value })} placeholder="ex: Mathématiques" />
                                </div>
                                <div className="field">
                                    <label>Téléphone</label>
                                    <input type="text" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} placeholder="ex: 0612345678" />
                                </div>
                                <div className="field">
                                    <label>Matières enseignées</label>
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                                        <input type="text" value={matiereInput} onChange={(e) => setMatiereInput(e.target.value)} placeholder="ex: Mathématiques" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAssignMatiere(); } }} style={{ flex: 1 }} />
                                        <button type="button" className="btn btn-sm btn-outline" onClick={handleAssignMatiere}>Ajouter</button>
                                    </div>
                                    {assignedMatieres.length > 0 && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                                            {assignedMatieres.map((m: any) => (
                                                <span key={m.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: 'var(--color-primary-bg, rgba(99, 102, 241, 0.08))', borderRadius: '20px', fontSize: '12px' }}>
                                                    {m.nom} <small style={{ color: 'var(--color-text-muted)' }}>({m.classe?.nom || '?'})</small>
                                                    <button type="button" className="btn-icon" style={{ width: '16px', height: '16px', fontSize: '14px', lineHeight: '1' }} onClick={() => handleRemoveMatiere(m.id)} title="Retirer">
                                                        <i className="ti ti-x"></i>
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {matieres.length === 0 && (
                                        <small style={{ color: 'var(--color-text-muted)', marginTop: '4px', display: 'block' }}>Aucune matière dans la base. Créez d'abord des matières via une classe.</small>
                                    )}
                                </div>
                                <div className="field">
                                    <label>Classes assignées</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                                        {classes.length === 0 ? (
                                            <small style={{ color: 'var(--color-text-muted)' }}>Aucune classe disponible</small>
                                        ) : (
                                            classes.map((c) => {
                                                const isAssigned = toAssignClasses.includes(c.id);
                                                return (
                                                    <span key={c.id}
                                                        onClick={() => isAssigned ? handleRemoveClasse(c.id) : handleAssignClasse(c.id)}
                                                        style={{
                                                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                                                            padding: '6px 12px', borderRadius: '20px', fontSize: '12px',
                                                            cursor: 'pointer', transition: 'all .2s',
                                                            background: isAssigned ? '#1D9E75' : '#f3f4f6',
                                                            color: isAssigned ? '#fff' : '#374151',
                                                            border: isAssigned ? 'none' : '1px solid #e5e7eb',
                                                        }}>
                                                        <i className={`ti ${isAssigned ? 'ti-check-circle' : 'ti-plus-circle'}`}></i>
                                                        {c.niveau} {c.nom}
                                                    </span>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setEditTarget(null); setError(''); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteTarget && (
                <div className="modal-overlay" onClick={() => { setDeleteTarget(null); setError(''); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Confirmer la suppression</h3>
                            <button className="btn-icon" onClick={() => { setDeleteTarget(null); setError(''); }}>
                                <i className="ti ti-x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            {error && <div className="error-msg">{error}</div>}
                            <p>Voulez-vous vraiment supprimer <strong>{deleteTarget?.user?.name || 'ce professeur'}</strong> ?</p>
                            <p style={{ color: 'var(--color-error)', fontSize: '0.875rem' }}>Cette action est irréversible. Toutes les évaluations et notes liées seront également supprimées.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setDeleteTarget(null); setError(''); }}>Annuler</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

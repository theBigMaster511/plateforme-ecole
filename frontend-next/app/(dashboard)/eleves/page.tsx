'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function ElevesPage() {
    const [eleves, setEleves] = useState<any[]>([]);
    const [classes, setClasses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '', classeId: '' });
    const [error, setError] = useState('');

    const [selectedEleve, setSelectedEleve] = useState<any>(null);
    const [showDetail, setShowDetail] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editForm, setEditForm] = useState({ name: '', email: '', classeId: '' });
    const [editError, setEditError] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    useEffect(() => {
        loadEleves();
        loadClasses();
    }, []);

    const loadEleves = async () => {
        setLoading(true);
        try {
            const data = await api.getEleves();
            setEleves(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading eleves:', error);
        }
        setLoading(false);
    };

    const loadClasses = async () => {
        try {
            const data = await api.getClasses();
            setClasses(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading classes:', error);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await api.createEleve({
                name: form.name, email: form.email, password: form.password,
                classeId: form.classeId || undefined,
            });
            if (res?.error) { setError(res.error); return; }
            setShowModal(false);
            setForm({ name: '', email: '', password: '', classeId: '' });
            loadEleves();
        } catch (err: any) {
            setError(err?.message || 'Erreur lors de la création');
        }
    };

    const openDetail = (e: any) => {
        setSelectedEleve(e);
        setShowDetail(true);
    };

    const openEdit = (e: any) => {
        setSelectedEleve(e);
        setEditForm({ name: e?.user?.name || '', email: e?.user?.email || '', classeId: e?.classeId || '' });
        setEditError('');
        setShowEdit(true);
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEditError('');
        if (!selectedEleve) return;
        try {
            const classeChanged = editForm.classeId !== selectedEleve.classeId;
            if (classeChanged && editForm.classeId) {
                const res = await api.assignEleveClasse(selectedEleve.id, editForm.classeId);
                if (res?.error) { setEditError(res.error); return; }
            }
            setShowEdit(false);
            setSelectedEleve(null);
            loadEleves();
        } catch (err: any) {
            setEditError(err?.message || 'Erreur lors de la modification');
        }
    };

    const openDelete = (e: any) => {
        setSelectedEleve(e);
        setDeleteError('');
        setShowDeleteConfirm(true);
    };

    const handleDelete = async () => {
        if (!selectedEleve) return;
        setDeleteError('');
        try {
            const res = await api.deleteEleve(selectedEleve.id);
            if (res?.error) { setDeleteError(res.error); return; }
            setShowDeleteConfirm(false);
            setSelectedEleve(null);
            loadEleves();
        } catch (err: any) {
            setDeleteError(err?.message || 'Erreur lors de la suppression');
        }
    };

    if (loading) return <div className="loader">Chargement des élèves...</div>;

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Gestion des élèves</h1>
                    <p>Liste complète des élèves de l'établissement</p>
                </div>
                <div className="topbar-actions">
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <i className="ti ti-plus"></i> Nouvel élève
                    </button>
                </div>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
                <div className="stat-card">
                    <span className="stat-label">Total élèves</span>
                    <span className="stat-value">{eleves.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Actifs</span>
                    <span className="stat-value">{eleves.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Classes</span>
                    <span className="stat-value">{classes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Taux présence</span>
                    <span className="stat-value">92%</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Liste des élèves</h3>
                </div>
                <table className="notes-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Matricule</th>
                            <th>Classe</th>
                            <th>Email</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eleves.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center">Aucun élève trouvé</td>
                            </tr>
                        ) : (
                            eleves.map((e) => (
                                <tr key={e.id}>
                                    <td className="font-bold">{e?.user?.name || 'Élève'}</td>
                                    <td>{e?.matricule || '—'}</td>
                                    <td>{e?.classe?.nom || '—'}</td>
                                    <td>{e?.user?.email || '—'}</td>
                                    <td><span className="badge badge-success">Actif</span></td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Éditer" onClick={() => openEdit(e)}>
                                                <i className="ti ti-edit"></i>
                                            </button>
                                            <button className="btn-icon" title="Détails" onClick={() => openDetail(e)}>
                                                <i className="ti ti-eye"></i>
                                            </button>
                                            <button className="btn-icon" title="Supprimer" onClick={() => openDelete(e)}>
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

            {/* Modal Création */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Nouvel élève</h3>
                            <button className="btn-icon" onClick={() => setShowModal(false)}><i className="ti ti-x"></i></button>
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
                                    <label>Classe</label>
                                    <select value={form.classeId} onChange={(e) => setForm({ ...form, classeId: e.target.value })}>
                                        <option value="">Sélectionner une classe</option>
                                        {classes.map((c: any) => (
                                            <option key={c.id} value={c.id}>{c.nom} - {c.niveau}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Créer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Détails */}
            {showDetail && selectedEleve && (
                <div className="modal-overlay" onClick={() => { setShowDetail(false); setSelectedEleve(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Détails de l'élève</h3>
                            <button className="btn-icon" onClick={() => { setShowDetail(false); setSelectedEleve(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            <div className="field"><label>Nom</label><p>{selectedEleve?.user?.name || '—'}</p></div>
                            <div className="field"><label>Email</label><p>{selectedEleve?.user?.email || '—'}</p></div>
                            <div className="field"><label>Matricule</label><p>{selectedEleve?.matricule || '—'}</p></div>
                            <div className="field"><label>Classe</label><p>{selectedEleve?.classe?.nom || '—'}</p></div>
                            <div className="field"><label>Date de naissance</label><p>{selectedEleve?.dateNaissance ? new Date(selectedEleve.dateNaissance).toLocaleDateString('fr-FR') : '—'}</p></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDetail(false); setSelectedEleve(null); }}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Édition */}
            {showEdit && selectedEleve && (
                <div className="modal-overlay" onClick={() => { setShowEdit(false); setSelectedEleve(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Modifier l'élève</h3>
                            <button className="btn-icon" onClick={() => { setShowEdit(false); setSelectedEleve(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleEdit}>
                            <div className="modal-body">
                                {editError && <div className="error-msg">{editError}</div>}
                                <div className="field">
                                    <label>Nom</label>
                                    <p style={{ padding: '8px 0' }}>{selectedEleve?.user?.name || '—'}</p>
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <p style={{ padding: '8px 0' }}>{selectedEleve?.user?.email || '—'}</p>
                                </div>
                                <div className="field">
                                    <label>Classe</label>
                                    <select value={editForm.classeId} onChange={(e) => setEditForm({ ...editForm, classeId: e.target.value })}>
                                        <option value="">Aucune classe</option>
                                        {classes.map((c: any) => (
                                            <option key={c.id} value={c.id}>{c.nom} - {c.niveau}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setShowEdit(false); setSelectedEleve(null); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Confirmation Suppression */}
            {showDeleteConfirm && selectedEleve && (
                <div className="modal-overlay" onClick={() => { setShowDeleteConfirm(false); setSelectedEleve(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Confirmer la suppression</h3>
                            <button className="btn-icon" onClick={() => { setShowDeleteConfirm(false); setSelectedEleve(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {deleteError && <div className="error-msg">{deleteError}</div>}
                            <p className="text-muted">Voulez-vous vraiment supprimer <strong>{selectedEleve?.user?.name || 'cet élève'}</strong> ? Cette action est irréversible.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDeleteConfirm(false); setSelectedEleve(null); }}>Annuler</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

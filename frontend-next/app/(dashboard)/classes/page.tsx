'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useSchoolData } from '@/lib/school-data-context';
import { api } from '@/lib/api';

export default function ClassesPage() {
    const { user, role } = useAuth();
    const { eleves, professeurs, loading: dataLoading } = useSchoolData();
    const [classes, setClasses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', level: '', years: '' });
    const [error, setError] = useState('');

    const [selectedClasse, setSelectedClasse] = useState<any>(null);

    const [showDetail, setShowDetail] = useState(false);
    const [detailEleves, setDetailEleves] = useState<any[]>([]);
    const [detailLoading, setDetailLoading] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    const [editForm, setEditForm] = useState({ name: '', level: '', years: '' });
    const [editError, setEditError] = useState('');

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        setLoading(true);
        try {
            const data = await api.getClasses();
            let allClasses = Array.isArray(data) ? data : [];
            if (role === 'prof') {
                const profClasses: any[] = (user as any)?.professeur?.classes || [];
                const classeIds = profClasses.map((pc: any) => pc.classeId);
                if (classeIds.length > 0) {
                    allClasses = allClasses.filter((c: any) => classeIds.includes(c.id));
                } else {
                    allClasses = [];
                }
            }
            setClasses(allClasses);
        } catch (error) {
            console.error('Error loading classes:', error);
        }
        setLoading(false);
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await api.createClasse(form);
            if (res?.error) { setError(res.error); return; }
            setShowModal(false);
            setForm({ name: '', level: '', years: '' });
            loadClasses();
        } catch (err: any) {
            setError(err?.message || 'Erreur lors de la création');
        }
    };

    const openDetail = async (c: any) => {
        setSelectedClasse(c);
        setDetailLoading(true);
        setShowDetail(true);
        try {
            const data = await api.getClasse(c.id);
            setDetailEleves(data?.eleves || []);
        } catch (error) {
            console.error('Error loading classe detail:', error);
            setDetailEleves([]);
        }
        setDetailLoading(false);
    };

    const openEdit = (c: any) => {
        setSelectedClasse(c);
        setEditForm({ name: c.nom || '', level: c.niveau || '', years: c.annee || '' });
        setEditError('');
        setShowEdit(true);
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEditError('');
        if (!selectedClasse) return;
        try {
            const res = await api.updateClasse(selectedClasse.id, editForm);
            if (res?.error) { setEditError(res.error); return; }
            setShowEdit(false);
            setSelectedClasse(null);
            loadClasses();
        } catch (err: any) {
            setEditError(err?.message || 'Erreur lors de la modification');
        }
    };

    const openDelete = (c: any) => {
        setSelectedClasse(c);
        setDeleteError('');
        setShowDeleteConfirm(true);
    };

    const handleDelete = async () => {
        if (!selectedClasse) return;
        setDeleteError('');
        try {
            const res = await api.deleteClasse(selectedClasse.id);
            if (res?.error) { setDeleteError(res.error); return; }
            setShowDeleteConfirm(false);
            setSelectedClasse(null);
            loadClasses();
        } catch (err: any) {
            setDeleteError(err?.message || 'Erreur lors de la suppression');
        }
    };

    if (loading) return <div className="loader">Chargement des classes...</div>;

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Gestion des classes</h1>
                    <p>Gérez les classes de l'établissement</p>
                </div>
                {role === 'admin' && (
                    <div className="topbar-actions">
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                            <i className="ti ti-plus"></i> Nouvelle classe
                        </button>
                    </div>
                )}
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2rem' }}>
                <div className="stat-card">
                    <span className="stat-label">Total classes</span>
                    <span className="stat-value">{classes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Élèves total</span>
                    <span className="stat-value">{eleves.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Professeurs</span>
                    <span className="stat-value">{professeurs.length}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Liste des classes</h3>
                </div>
                <table className="notes-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Niveau</th>
                            <th>Élèves</th>
                            <th>Année</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">Aucune classe trouvée</td>
                            </tr>
                        ) : (
                            classes.map((c) => (
                                <tr key={c.id}>
                                    <td className="font-bold">{c?.nom || '—'}</td>
                                    <td>{c?.niveau || '—'}</td>
                                    <td><span className="badge badge-info">{c?._count?.eleves ?? c?.eleves?.length ?? '0'}</span></td>
                                    <td>{c?.annee || '—'}</td>
                                    <td>
                                        <div className="action-buttons">
                                            {role === 'admin' && (
                                                <>
                                                    <button className="btn-icon" title="Éditer" onClick={() => openEdit(c)}>
                                                        <i className="ti ti-edit"></i>
                                                    </button>
                                                    <button className="btn-icon" title="Supprimer" onClick={() => openDelete(c)}>
                                                        <i className="ti ti-trash"></i>
                                                    </button>
                                                </>
                                            )}
                                            <button className="btn-icon" title="Voir élèves" onClick={() => openDetail(c)}>
                                                <i className="ti ti-users"></i>
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
                            <h3>Nouvelle classe</h3>
                            <button className="btn-icon" onClick={() => setShowModal(false)}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleCreate}>
                            <div className="modal-body">
                                {error && <div className="error-msg">{error}</div>}
                                <div className="field">
                                    <label>Nom de la classe</label>
                                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="ex: 6ème A" required />
                                </div>
                                <div className="field">
                                    <label>Niveau</label>
                                    <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} required>
                                        <option value="">Sélectionner</option>
                                        <option value="6ème">6ème</option>
                                        <option value="5ème">5ème</option>
                                        <option value="4ème">4ème</option>
                                        <option value="3ème">3ème</option>
                                        <option value="2nde">2nde</option>
                                        <option value="1ère">1ère</option>
                                        <option value="Terminale">Terminale</option>
                                        <option value="Licence 1">Licence 1</option>
                                        <option value="Licence 2">Licence 2</option>
                                        <option value="Licence 3">Licence 3</option>
                                        <option value="Master 1">Master 1</option>
                                        <option value="Master 2">Master 2</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Année scolaire</label>
                                    <input type="text" value={form.years} onChange={(e) => setForm({ ...form, years: e.target.value })} placeholder="ex: 2025-2026" required />
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

            {/* Modal Voir élèves */}
            {showDetail && selectedClasse && (
                <div className="modal-overlay" onClick={() => { setShowDetail(false); setSelectedClasse(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Élèves de {selectedClasse.nom}</h3>
                            <button className="btn-icon" onClick={() => { setShowDetail(false); setSelectedClasse(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {detailLoading ? (
                                <p className="text-muted">Chargement...</p>
                            ) : detailEleves.length === 0 ? (
                                <p className="text-muted">Aucun élève dans cette classe</p>
                            ) : (
                                <table className="notes-table">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Matricule</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detailEleves.map((e: any) => (
                                            <tr key={e.id}>
                                                <td>{e?.user?.name || '—'}</td>
                                                <td>{e?.matricule || '—'}</td>
                                                <td>{e?.user?.email || '—'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDetail(false); setSelectedClasse(null); }}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Édition */}
            {showEdit && selectedClasse && (
                <div className="modal-overlay" onClick={() => { setShowEdit(false); setSelectedClasse(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Modifier la classe</h3>
                            <button className="btn-icon" onClick={() => { setShowEdit(false); setSelectedClasse(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleEdit}>
                            <div className="modal-body">
                                {editError && <div className="error-msg">{editError}</div>}
                                <div className="field">
                                    <label>Nom de la classe</label>
                                    <input type="text" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Niveau</label>
                                    <select value={editForm.level} onChange={(e) => setEditForm({ ...editForm, level: e.target.value })} required>
                                        <option value="">Sélectionner</option>
                                        <option value="6ème">6ème</option>
                                        <option value="5ème">5ème</option>
                                        <option value="4ème">4ème</option>
                                        <option value="3ème">3ème</option>
                                        <option value="2nde">2nde</option>
                                        <option value="1ère">1ère</option>
                                        <option value="Terminale">Terminale</option>
                                        <option value="Licence 1">Licence 1</option>
                                        <option value="Licence 2">Licence 2</option>
                                        <option value="Licence 3">Licence 3</option>
                                        <option value="Master 1">Master 1</option>
                                        <option value="Master 2">Master 2</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Année scolaire</label>
                                    <input type="text" value={editForm.years} onChange={(e) => setEditForm({ ...editForm, years: e.target.value })} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setShowEdit(false); setSelectedClasse(null); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Confirmation Suppression */}
            {showDeleteConfirm && selectedClasse && (
                <div className="modal-overlay" onClick={() => { setShowDeleteConfirm(false); setSelectedClasse(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Confirmer la suppression</h3>
                            <button className="btn-icon" onClick={() => { setShowDeleteConfirm(false); setSelectedClasse(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {deleteError && <div className="error-msg">{deleteError}</div>}
                            <p className="text-muted">Voulez-vous vraiment supprimer la classe <strong>{selectedClasse.nom}</strong> ? Cette action est irréversible.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDeleteConfirm(false); setSelectedClasse(null); }}>Annuler</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

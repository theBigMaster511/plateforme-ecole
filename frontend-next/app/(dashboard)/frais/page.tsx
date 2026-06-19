'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';

interface Paiement {
    id: string;
    montant: number;
    methode: string;
    reference?: string;
    datePaiement: string;
}

interface FraisScolaire {
    id: string;
    eleveId: string;
    libelle: string;
    montant: number;
    montantPaye: number;
    echeance: string;
    statut: string;
    ecoleId: string;
    createdAt: string;
    updatedAt: string;
    eleve: { id: string; matricule: string; user: { name: string; email: string } };
    paiements: Paiement[];
}

interface FraisStats {
    totalDu: number;
    totalPaye: number;
    enRetard: number;
    total: number;
}

export default function FraisPage() {
    const { user, role } = useAuth();
    const isAdmin = role === 'admin';

    const [fraisList, setFraisList] = useState<FraisScolaire[]>([]);
    const [stats, setStats] = useState<FraisStats | null>(null);
    const [eleves, setEleves] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Create modal
    const [showCreate, setShowCreate] = useState(false);
    const [createForm, setCreateForm] = useState({ eleveId: '', libelle: '', montant: '', echeance: '' });
    const [createError, setCreateError] = useState('');

    // Edit modal
    const [showEdit, setShowEdit] = useState(false);
    const [editForm, setEditForm] = useState({ eleveId: '', libelle: '', montant: '', echeance: '' });
    const [editError, setEditError] = useState('');
    const [selectedFrais, setSelectedFrais] = useState<FraisScolaire | null>(null);

    // Delete modal
    const [showDelete, setShowDelete] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    // Voir paiements modal
    const [showPaiements, setShowPaiements] = useState(false);
    const [selectedPaiements, setSelectedPaiements] = useState<Paiement[]>([]);
    const [paiementsFraisLabel, setPaiementsFraisLabel] = useState('');

    // Add paiement modal
    const [showAddPaiement, setShowAddPaiement] = useState(false);
    const [addPaiementForm, setAddPaiementForm] = useState({ montant: '', methode: 'especes', reference: '' });
    const [addPaiementError, setAddPaiementError] = useState('');
    const [addPaiementFraisId, setAddPaiementFraisId] = useState('');

    // Delete paiement modal
    const [showDeletePaiement, setShowDeletePaiement] = useState(false);
    const [deletePaiementId, setDeletePaiementId] = useState('');
    const [deletePaiementError, setDeletePaiementError] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await api.getFrais();
            setFraisList(Array.isArray(data) ? data : []);

            if (isAdmin) {
                const statsData = await api.getFraisStats();
                setStats(statsData as FraisStats);
                const elevesData = await api.getEleves();
                setEleves(Array.isArray(elevesData) ? elevesData : []);
            }
        } catch (error) {
            console.error('Error loading frais:', error);
        }
        setLoading(false);
    };

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString('fr-FR');

    const getStatutStyle = (statut: string) => {
        switch (statut) {
            case 'payé': return { background: '#d4edda', color: '#155724' };
            case 'en_retard': return { background: '#f8d7da', color: '#721c24' };
            case 'partiel': return { background: '#fff3cd', color: '#856404' };
            case 'impayé': return { background: '#e2e3e5', color: '#383d41' };
            default: return { background: '#e2e3e5', color: '#383d41' };
        }
    };

    const getStatutLabel = (statut: string) => {
        switch (statut) {
            case 'payé': return 'Payé';
            case 'en_retard': return 'En retard';
            case 'partiel': return 'Partiel';
            case 'impayé': return 'Impayé';
            default: return statut;
        }
    };

    const isPastDue = (echeance: string, reste: number) =>
        reste > 0 && new Date(echeance) < new Date();

    // Create
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreateError('');
        try {
            const res = await api.createFrais({
                eleveId: createForm.eleveId,
                libelle: createForm.libelle,
                montant: parseFloat(createForm.montant),
                echeance: createForm.echeance,
            });
            if (res?.error) { setCreateError(res.error); return; }
            setShowCreate(false);
            setCreateForm({ eleveId: '', libelle: '', montant: '', echeance: '' });
            loadData();
        } catch (err: any) {
            setCreateError(err?.message || 'Erreur lors de la création');
        }
    };

    // Edit
    const openEdit = (f: FraisScolaire) => {
        setSelectedFrais(f);
        setEditForm({
            eleveId: f.eleveId,
            libelle: f.libelle,
            montant: f.montant.toString(),
            echeance: f.echeance.split('T')[0],
        });
        setEditError('');
        setShowEdit(true);
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEditError('');
        if (!selectedFrais) return;
        try {
            const res = await api.updateFrais(selectedFrais.id, {
                libelle: editForm.libelle,
                montant: parseFloat(editForm.montant),
                echeance: editForm.echeance,
            });
            if (res?.error) { setEditError(res.error); return; }
            setShowEdit(false);
            setSelectedFrais(null);
            loadData();
        } catch (err: any) {
            setEditError(err?.message || 'Erreur lors de la modification');
        }
    };

    // Delete
    const openDelete = (f: FraisScolaire) => {
        setSelectedFrais(f);
        setDeleteError('');
        setShowDelete(true);
    };

    const handleDelete = async () => {
        if (!selectedFrais) return;
        setDeleteError('');
        try {
            const res = await api.deleteFrais(selectedFrais.id);
            if (res?.error) { setDeleteError(res.error); return; }
            setShowDelete(false);
            setSelectedFrais(null);
            loadData();
        } catch (err: any) {
            setDeleteError(err?.message || 'Erreur lors de la suppression');
        }
    };

    // Voir paiements
    const openPaiements = (f: FraisScolaire) => {
        setSelectedPaiements(f.paiements || []);
        setPaiementsFraisLabel(`${f.libelle} - ${f.eleve?.user?.name || 'Élève'}`);
        setShowPaiements(true);
    };

    // Add paiement
    const openAddPaiement = (fraisId: string) => {
        setAddPaiementFraisId(fraisId);
        setAddPaiementForm({ montant: '', methode: 'especes', reference: '' });
        setAddPaiementError('');
        setShowAddPaiement(true);
    };

    const handleAddPaiement = async (e: React.FormEvent) => {
        e.preventDefault();
        setAddPaiementError('');
        try {
            const res = await api.addPaiement(addPaiementFraisId, {
                montant: parseFloat(addPaiementForm.montant),
                methode: addPaiementForm.methode,
                reference: addPaiementForm.reference || undefined,
            });
            if (res?.error) { setAddPaiementError(res.error); return; }
            setShowAddPaiement(false);
            loadData();
        } catch (err: any) {
            setAddPaiementError(err?.message || 'Erreur lors de l\'ajout du paiement');
        }
    };

    // Delete paiement
    const openDeletePaiement = (paiementId: string) => {
        setDeletePaiementId(paiementId);
        setDeletePaiementError('');
        setShowDeletePaiement(true);
    };

    const handleDeletePaiement = async () => {
        setDeletePaiementError('');
        try {
            const res = await api.deletePaiement(deletePaiementId);
            if (res?.error) { setDeletePaiementError(res.error); return; }
            setShowDeletePaiement(false);
            setDeletePaiementId('');
            loadData();
        } catch (err: any) {
            setDeletePaiementError(err?.message || 'Erreur lors de la suppression du paiement');
        }
    };

    const getMethodeLabel = (methode: string) => {
        switch (methode) {
            case 'especes': return 'Espèces';
            case 'virement': return 'Virement';
            case 'mobile_money': return 'Mobile Money';
            case 'cheque': return 'Chèque';
            default: return methode;
        }
    };

    if (loading) return <div className="loader">Chargement des frais...</div>;

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Gestion des frais</h1>
                    <p>Suivi des frais scolaires et des paiements</p>
                </div>
                {isAdmin && (
                    <div className="topbar-actions">
                        <button className="btn btn-primary" onClick={() => setShowCreate(true)}>
                            <i className="ti ti-plus"></i> Nouveau frais
                        </button>
                    </div>
                )}
            </div>

            {isAdmin && stats && (
                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
                    <div className="stat-card">
                        <span className="stat-label">Total dû</span>
                        <span className="stat-value">{formatCurrency(stats.totalDu)}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Total payé</span>
                        <span className="stat-value">{formatCurrency(stats.totalPaye)}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">En retard</span>
                        <span className="stat-value">{stats.enRetard}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Total frais</span>
                        <span className="stat-value">{stats.total}</span>
                    </div>
                </div>
            )}

            <div className="card">
                <div className="card-header">
                    <h3>Liste des frais</h3>
                </div>
                <table className="notes-table">
                    <thead>
                        <tr>
                            <th>Élève</th>
                            <th>Libellé</th>
                            <th>Montant</th>
                            <th>Payé</th>
                            <th>Reste</th>
                            <th>Échéance</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fraisList.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center">Aucun frais trouvé</td>
                            </tr>
                        ) : (
                            fraisList.map((f) => {
                                const reste = f.montant - f.montantPaye;
                                const pastDue = isPastDue(f.echeance, reste);
                                return (
                                    <tr key={f.id}>
                                        <td className="font-bold">{f.eleve?.user?.name || 'Élève'}</td>
                                        <td>{f.libelle}</td>
                                        <td>{formatCurrency(f.montant)}</td>
                                        <td>{formatCurrency(f.montantPaye)}</td>
                                        <td style={{ color: reste === 0 ? '#155724' : pastDue ? '#721c24' : 'inherit', fontWeight: reste > 0 ? 600 : 'normal' }}>
                                            {formatCurrency(reste)}
                                        </td>
                                        <td>{formatDate(f.echeance)}</td>
                                        <td>
                                            <span className="badge" style={getStatutStyle(f.statut)}>
                                                {getStatutLabel(f.statut)}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                {isAdmin && (
                                                    <>
                                                        <button className="btn-icon" title="Modifier" onClick={() => openEdit(f)}>
                                                            <i className="ti ti-edit"></i>
                                                        </button>
                                                        <button className="btn-icon" title="Supprimer" onClick={() => openDelete(f)}>
                                                            <i className="ti ti-trash"></i>
                                                        </button>
                                                        <button className="btn-icon" title="Ajouter un paiement" onClick={() => openAddPaiement(f.id)}>
                                                            <i className="ti ti-currency-euro"></i>
                                                        </button>
                                                    </>
                                                )}
                                                <button className="btn-icon" title="Voir les paiements" onClick={() => openPaiements(f)}>
                                                    <i className="ti ti-receipt"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Création */}
            {showCreate && (
                <div className="modal-overlay" onClick={() => setShowCreate(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Nouveau frais</h3>
                            <button className="btn-icon" onClick={() => setShowCreate(false)}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleCreate}>
                            <div className="modal-body">
                                {createError && <div className="error-msg">{createError}</div>}
                                <div className="field">
                                    <label>Élève</label>
                                    <select value={createForm.eleveId} onChange={(e) => setCreateForm({ ...createForm, eleveId: e.target.value })} required>
                                        <option value="">Sélectionner un élève</option>
                                        {eleves.map((e: any) => (
                                            <option key={e.id} value={e.id}>{e?.user?.name || 'Élève'} - {e?.matricule || ''}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Libellé</label>
                                    <input type="text" value={createForm.libelle} onChange={(e) => setCreateForm({ ...createForm, libelle: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Montant</label>
                                    <input type="number" step="0.01" min="0" value={createForm.montant} onChange={(e) => setCreateForm({ ...createForm, montant: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Échéance</label>
                                    <input type="date" value={createForm.echeance} onChange={(e) => setCreateForm({ ...createForm, echeance: e.target.value })} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => setShowCreate(false)}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Créer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Édition */}
            {showEdit && selectedFrais && (
                <div className="modal-overlay" onClick={() => { setShowEdit(false); setSelectedFrais(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Modifier le frais</h3>
                            <button className="btn-icon" onClick={() => { setShowEdit(false); setSelectedFrais(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleEdit}>
                            <div className="modal-body">
                                {editError && <div className="error-msg">{editError}</div>}
                                <div className="field">
                                    <label>Élève</label>
                                    <p style={{ padding: '8px 0' }}>{selectedFrais?.eleve?.user?.name || 'Élève'}</p>
                                </div>
                                <div className="field">
                                    <label>Libellé</label>
                                    <input type="text" value={editForm.libelle} onChange={(e) => setEditForm({ ...editForm, libelle: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Montant</label>
                                    <input type="number" step="0.01" min="0" value={editForm.montant} onChange={(e) => setEditForm({ ...editForm, montant: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Échéance</label>
                                    <input type="date" value={editForm.echeance} onChange={(e) => setEditForm({ ...editForm, echeance: e.target.value })} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setShowEdit(false); setSelectedFrais(null); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Confirmation Suppression */}
            {showDelete && selectedFrais && (
                <div className="modal-overlay" onClick={() => { setShowDelete(false); setSelectedFrais(null); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Confirmer la suppression</h3>
                            <button className="btn-icon" onClick={() => { setShowDelete(false); setSelectedFrais(null); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {deleteError && <div className="error-msg">{deleteError}</div>}
                            <p className="text-muted">
                                Voulez-vous vraiment supprimer le frais <strong>{selectedFrais.libelle}</strong> de <strong>{selectedFrais?.eleve?.user?.name || 'cet élève'}</strong> ? Cette action est irréversible.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDelete(false); setSelectedFrais(null); }}>Annuler</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Voir paiements */}
            {showPaiements && (
                <div className="modal-overlay" onClick={() => { setShowPaiements(false); setSelectedPaiements([]); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Paiements - {paiementsFraisLabel}</h3>
                            <button className="btn-icon" onClick={() => { setShowPaiements(false); setSelectedPaiements([]); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {selectedPaiements.length === 0 ? (
                                <p className="text-muted" style={{ textAlign: 'center', padding: '20px 0' }}>Aucun paiement enregistré</p>
                            ) : (
                                <table className="notes-table" style={{ margin: 0 }}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Montant</th>
                                            <th>Méthode</th>
                                            <th>Référence</th>
                                            {isAdmin && <th>Action</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedPaiements.map((p) => (
                                            <tr key={p.id}>
                                                <td>{formatDate(p.datePaiement)}</td>
                                                <td>{formatCurrency(p.montant)}</td>
                                                <td>{getMethodeLabel(p.methode)}</td>
                                                <td>{p.reference || '—'}</td>
                                                {isAdmin && (
                                                    <td>
                                                        <button className="btn-icon" title="Supprimer le paiement" onClick={() => openDeletePaiement(p.id)}>
                                                            <i className="ti ti-trash"></i>
                                                        </button>
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowPaiements(false); setSelectedPaiements([]); }}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Ajouter paiement */}
            {showAddPaiement && (
                <div className="modal-overlay" onClick={() => setShowAddPaiement(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Ajouter un paiement</h3>
                            <button className="btn-icon" onClick={() => setShowAddPaiement(false)}><i className="ti ti-x"></i></button>
                        </div>
                        <form onSubmit={handleAddPaiement}>
                            <div className="modal-body">
                                {addPaiementError && <div className="error-msg">{addPaiementError}</div>}
                                <div className="field">
                                    <label>Montant</label>
                                    <input type="number" step="0.01" min="0" value={addPaiementForm.montant} onChange={(e) => setAddPaiementForm({ ...addPaiementForm, montant: e.target.value })} required />
                                </div>
                                <div className="field">
                                    <label>Méthode</label>
                                    <select value={addPaiementForm.methode} onChange={(e) => setAddPaiementForm({ ...addPaiementForm, methode: e.target.value })}>
                                        <option value="especes">Espèces</option>
                                        <option value="virement">Virement</option>
                                        <option value="mobile_money">Mobile Money</option>
                                        <option value="cheque">Chèque</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Référence (optionnel)</label>
                                    <input type="text" value={addPaiementForm.reference} onChange={(e) => setAddPaiementForm({ ...addPaiementForm, reference: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => setShowAddPaiement(false)}>Annuler</button>
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Confirmation Suppression Paiement */}
            {showDeletePaiement && (
                <div className="modal-overlay" onClick={() => { setShowDeletePaiement(false); setDeletePaiementId(''); }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Confirmer la suppression</h3>
                            <button className="btn-icon" onClick={() => { setShowDeletePaiement(false); setDeletePaiementId(''); }}><i className="ti ti-x"></i></button>
                        </div>
                        <div className="modal-body">
                            {deletePaiementError && <div className="error-msg">{deletePaiementError}</div>}
                            <p className="text-muted">Voulez-vous vraiment supprimer ce paiement ? Cette action est irréversible.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={() => { setShowDeletePaiement(false); setDeletePaiementId(''); }}>Annuler</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeletePaiement}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

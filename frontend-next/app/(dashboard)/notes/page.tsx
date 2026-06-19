'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';

export default function NotesPage() {
    const { user, role } = useAuth();
    const [notes, setNotes] = useState<any[]>([]);
    const [evaluations, setEvaluations] = useState<any[]>([]);
    const [eleves, setEleves] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editTarget, setEditTarget] = useState<any>(null);
    const [editingNote, setEditingNote] = useState<any>(null);
    const [deleteTarget, setDeleteTarget] = useState<any>(null);
    const [error, setError] = useState('');
    const [form, setForm] = useState({ eleveId: '', evaluationId: '', valeur: '', appreciation: '', matiereText: '' });

    const [selectedEleveId, setSelectedEleveId] = useState<string>('');

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (role === 'parent' && selectedEleveId) {
            loadNotesForChild(selectedEleveId);
        }
    }, [selectedEleveId]);

    const loadNotesForChild = async (eleveId: string) => {
        const notesByEleve = await api.getNotesByEleve(eleveId);
        setNotes(Array.isArray(notesByEleve) ? notesByEleve : []);
    };

    const loadData = async () => {
        setLoading(true);
        try {
            if (role === 'eleve') {
                let mesNotes: any[] = [];
                const eleveId = (user as any)?.eleve?.id;
                if (eleveId) {
                    const notesByEleve = await api.getNotesByEleve(eleveId);
                    if (Array.isArray(notesByEleve)) mesNotes = notesByEleve;
                }
                setNotes(mesNotes);
                setEvaluations([]);
                setEleves([]);
            } else if (role === 'prof') {
                const profClasses: any[] = (user as any)?.professeur?.classes || [];
                const classeIds = profClasses.map((pc: any) => pc.classeId);
                const [notesRes, evaluationsRes, elevesRes] = await Promise.all([
                    api.getNotes(),
                    api.getEvaluations(),
                    api.getEleves(),
                ]);
                let allEleves = Array.isArray(elevesRes) ? elevesRes : [];
                if (classeIds.length > 0) {
                    allEleves = allEleves.filter((e: any) => e.classe && classeIds.includes(e.classe.id));
                }
                setNotes(Array.isArray(notesRes) ? notesRes : []);
                setEvaluations(Array.isArray(evaluationsRes) ? evaluationsRes : []);
                setEleves(allEleves);
            } else if (role === 'parent') {
                const enfants = (user as any)?.parent?.enfants || [];
                const elevesList = enfants.map((pe: any) => pe.eleve);
                setEleves(elevesList);
                const targetId = selectedEleveId || elevesList[0]?.id || '';
                if (!selectedEleveId && elevesList.length > 0) {
                    setSelectedEleveId(elevesList[0].id);
                }
                if (targetId) {
                    const notesByEleve = await api.getNotesByEleve(targetId);
                    setNotes(Array.isArray(notesByEleve) ? notesByEleve : []);
                }
            } else {
                const [notesRes, evaluationsRes, elevesRes] = await Promise.all([
                    api.getNotes(),
                    api.getEvaluations(),
                    api.getEleves(),
                ]);
                setNotes(Array.isArray(notesRes) ? notesRes : []);
                setEvaluations(Array.isArray(evaluationsRes) ? evaluationsRes : []);
                setEleves(Array.isArray(elevesRes) ? elevesRes : []);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
        setLoading(false);
    };

    const handleSaveNote = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const trimmed = form.matiereText.trim();
        if (!trimmed) { setError('Veuillez indiquer une matière.'); return; }
        const payload = {
            eleveId: form.eleveId,
            matiereNom: trimmed,
            valeur: parseFloat(form.valeur),
            appreciation: form.appreciation || undefined,
        };
        const res = editingNote
            ? await api.updateNote(editingNote.id, { valeur: payload.valeur, appreciation: payload.appreciation })
            : await api.createNote(payload);
        if (res?.error) {
            setError(res.error);
            return;
        }
        setShowAddModal(false);
        setEditingNote(null);
        setForm({ eleveId: '', evaluationId: '', valeur: '', appreciation: '', matiereText: '' });
        loadData();
    };

    const handleEditNote = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const res = await api.updateNote(editTarget.id, {
            valeur: parseFloat(form.valeur),
            appreciation: form.appreciation || undefined,
        });
        if (res?.error) {
            setError(res.error);
            return;
        }
        setEditTarget(null);
        setForm({ eleveId: '', evaluationId: '', valeur: '', appreciation: '', matiereText: '' });
        loadData();
    };

    const handleDeleteNote = async () => {
        if (!deleteTarget) return;
        setError('');
        const res = await api.deleteNote(deleteTarget.id);
        if (res?.error) {
            setError(res.error);
            return;
        }
        setDeleteTarget(null);
        loadData();
    };

    if (loading) {
        return <div className="loader">Chargement...</div>;
    }

    if (role === 'admin') {
        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Gestion des notes</h1>
                        <p>Consulter et valider toutes les notes</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Toutes les notes</h3>
                    </div>
                    <table className="notes-table">
                        <thead>
                            <tr>
                                <th>Élève</th>
                                <th>Matière</th>
                                <th>Classe</th>
                                <th>Note</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center">Aucune note</td>
                                </tr>
                            ) : (
                                notes.map((note) => (
                                    <tr key={note.id}>
                                        <td className="font-bold">{note?.eleve?.user?.name || '—'}</td>
                                        <td>{note?.evaluation?.matiere?.nom || '—'}</td>
                                        <td>{note?.eleve?.classe?.nom || '—'}</td>
                                        <td><span className="badge badge-info">{note?.valeur}/20</span></td>
                                        <td>{note?.createdAt ? new Date(note.createdAt).toLocaleDateString('fr-FR') : '—'}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    if (role === 'prof') {
        const classesUniques = [...new Map(
            eleves.filter(e => e.classe).map(e => [e.classe.id, e.classe])
        ).values()];

        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Saisie des notes</h1>
                        <p>Sélectionnez une classe pour saisir les notes</p>
                    </div>
                </div>

                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2rem' }}>
                    <div className="stat-card">
                        <span className="stat-label">Classes</span>
                        <span className="stat-value">{classesUniques.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Élèves</span>
                        <span className="stat-value">{eleves.length}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-label">Évaluations</span>
                        <span className="stat-value">{evaluations.length}</span>
                    </div>
                </div>

                {classesUniques.map((classe: any) => {
                    const elevesDeClasse = eleves.filter((e: any) => e?.classe?.id === classe.id);
                    const matieresDeClasse = evaluations.filter((ev: any) => ev?.matiere?.classeId === classe.id);
                    return (
                        <details key={classe.id} className="card" style={{ marginBottom: '1rem' }}>
                            <summary className="card-header" style={{ cursor: 'pointer' }}>
                                <h3>{classe.nom} <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 400 }}>({elevesDeClasse.length} élèves)</span></h3>
                            </summary>
                            <div className="card-body" style={{ padding: 0 }}>
                                <table className="notes-table">
                                    <thead>
                                        <tr>
                                            <th>Élève</th>
                                            {matieresDeClasse.length > 0 ? matieresDeClasse.slice(0, 5).map((ev: any) => (
                                                <th key={ev.id}>{ev?.matiere?.nom || ev.titre}</th>
                                            )) : <th>Note</th>}
                                            <th style={{ width: 80 }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {elevesDeClasse.length === 0 ? (
                                            <tr>
                                                <td colSpan={matieresDeClasse.length + 2} className="text-center">Aucun élève dans cette classe</td>
                                            </tr>
                                        ) : (
                                            elevesDeClasse.map((eleve: any) => (
                                                <tr key={eleve.id}>
                                                    <td className="font-bold">{eleve?.user?.name || '—'}</td>
                                                    {matieresDeClasse.length > 0 ? matieresDeClasse.slice(0, 5).map((ev: any) => {
                                                        const noteExistante = notes.find((n: any) => n.eleveId === eleve.id && n.evaluationId === ev.id);
                                                        return (
                                                            <td key={ev.id}>
                                                                {noteExistante ? (
                                                                    <span className="badge badge-info">{noteExistante.valeur}/20</span>
                                                                ) : (
                                                                    <span className="badge badge-outline" style={{ color: 'var(--color-text-muted)' }}>—</span>
                                                                )}
                                                            </td>
                                                        );
                                                    }) : (
                                                        <td><span className="badge badge-outline" style={{ color: 'var(--color-text-muted)' }}>—</span></td>
                                                    )}
                                                    <td>
                                                        <button className="btn-icon" title={notes.find((n: any) => n.eleveId === eleve.id) ? 'Modifier la note' : 'Saisir une note'} onClick={() => {
                                                            const existante = notes.find((n: any) => n.eleveId === eleve.id);
                                                            if (existante) {
                                                                setEditingNote(existante);
                                                                const ev = evaluations.find((e: any) => e.id === existante.evaluationId);
                                                                setForm({ eleveId: eleve.id, evaluationId: existante.evaluationId, valeur: String(existante.valeur), appreciation: existante.appreciation || '', matiereText: ev?.matiere?.nom || '' });
                                                            } else {
                                                                setEditingNote(null);
                                                                setForm({ eleveId: eleve.id, evaluationId: evaluations[0]?.id || '', valeur: '', appreciation: '', matiereText: '' });
                                                            }
                                                            setEditTarget(eleve);
                                                            setError('');
                                                            setShowAddModal(true);
                                                        }}>
                                                            <i className={`ti ${notes.find((n: any) => n.eleveId === eleve.id) ? 'ti-edit' : 'ti-plus'}`}></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </details>
                    );
                })}

                {showAddModal && (
                    <div className="modal-overlay" onClick={() => { setShowAddModal(false); setEditingNote(null); setError(''); }}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>{editingNote ? 'Modifier' : 'Saisir'} une note pour {editTarget?.user?.name || '—'}</h3>
                                <button className="btn-icon" onClick={() => { setShowAddModal(false); setEditingNote(null); setError(''); }}>
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <form onSubmit={handleSaveNote}>
                                <div className="modal-body">
                                    {error && <div className="error-msg">{error}</div>}
                                    <div className="field">
                                        <label>Matière</label>
                                        <input type="text" value={form.matiereText} onChange={(e) => setForm({ ...form, matiereText: e.target.value })} placeholder="ex: Mathématiques" list="matieres-list" required />
                                        <datalist id="matieres-list">
                                            {[...new Map(evaluations.filter((ev: any) => ev?.matiere?.nom).map((ev: any) => [ev.matiere.nom, ev.matiere]))].map(([nom]) => (
                                                <option key={nom} value={nom} />
                                            ))}
                                        </datalist>
                                    </div>
                                    <div className="field">
                                        <label>Note (sur 20)</label>
                                        <input type="number" min="0" max="20" step="0.5" value={form.valeur} onChange={(e) => setForm({ ...form, valeur: e.target.value })} required />
                                    </div>
                                    <div className="field">
                                        <label>Appréciation (optionnelle)</label>
                                        <textarea value={form.appreciation} onChange={(e) => setForm({ ...form, appreciation: e.target.value })} rows={2} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => { setShowAddModal(false); setEditingNote(null); setError(''); }}>Annuler</button>
                                <button type="submit" className="btn btn-primary">{editingNote ? 'Modifier' : 'Enregistrer'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    }

    if (role === 'parent') {
        const enfants = (user as any)?.parent?.enfants || [];
        const enfantActuel = enfants.find((pe: any) => pe.eleve.id === selectedEleveId);

        return (
            <>
                <div className="topbar">
                    <div>
                        <h1>Notes des enfants</h1>
                        <p>Consultez les résultats scolaires de vos enfants</p>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <div className="card-header"><h3>Sélectionner un enfant</h3></div>
                    <div className="card-body">
                        <div className="field">
                            <select
                                value={selectedEleveId}
                                onChange={(e) => setSelectedEleveId(e.target.value)}
                            >
                                {enfants.length === 0 && <option value="">Aucun enfant lié</option>}
                                {enfants.map((pe: any) => (
                                    <option key={pe.eleve.id} value={pe.eleve.id}>
                                        {pe.eleve?.user?.name || 'Élève'} {pe.eleve?.classe?.nom ? `(${pe.eleve.classe.nom})` : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {enfantActuel && (
                    <div className="card">
                        <div className="card-header">
                            <h3>Notes de {enfantActuel.eleve?.user?.name || 'l\'élève'}</h3>
                        </div>
                        <table className="notes-table">
                            <thead>
                                <tr>
                                    <th>Matière</th>
                                    <th>Note</th>
                                    <th>Appréciation</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center">Aucune note disponible</td>
                                    </tr>
                                ) : (
                                    notes.map((note) => (
                                        <tr key={note.id}>
                                            <td className="font-bold">{note?.evaluation?.matiere?.nom || '—'}</td>
                                            <td><span className="badge badge-success">{note?.valeur}/20</span></td>
                                            <td>{note?.appreciation || '—'}</td>
                                            <td>{note?.createdAt ? new Date(note.createdAt).toLocaleDateString('fr-FR') : '—'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            <div className="topbar">
                <div>
                    <h1>Mes notes</h1>
                    <p>Consultation de vos résultats scolaires</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Moyenne générale</span>
                    <span className="stat-value">14.5</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Notes cette année</span>
                    <span className="stat-value">{notes.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Meilleure note</span>
                    <span className="stat-value">18/20</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Rang</span>
                    <span className="stat-value">4e</span>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Détail des notes</h3>
                </div>
                <table className="notes-table">
                    <thead>
                        <tr>
                            <th>Matière</th>
                            <th>Note</th>
                            <th>Coefficient</th>
                            <th>Contribution</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">Aucune note disponible</td>
                            </tr>
                        ) : (
                            notes.map((note) => (
                                <tr key={note.id}>
                                    <td className="font-bold">{note?.evaluation?.matiere?.nom || '—'}</td>
                                    <td><span className="badge badge-success">{note?.valeur}/20</span></td>
                                    <td>1</td>
                                    <td>{((note?.valeur || 0) / 20 * 100).toFixed(1)}%</td>
                                    <td>{note?.createdAt ? new Date(note.createdAt).toLocaleDateString('fr-FR') : '—'}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
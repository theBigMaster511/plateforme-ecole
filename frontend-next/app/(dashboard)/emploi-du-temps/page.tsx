'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';

const JOURS = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];
const JOURS_LABEL: Record<string, string> = {
  LUNDI: 'Lundi', MARDI: 'Mardi', MERCREDI: 'Mercredi',
  JEUDI: 'Jeudi', VENDREDI: 'Vendredi', SAMEDI: 'Samedi',
};
const HEURES = Array.from({ length: 12 }, (_, i) => `${String(i + 8).padStart(2, '0')}:00`);

export default function EmploiDuTempsPage() {
  const { user, role } = useAuth();
  const [grid, setGrid] = useState<Record<string, any>>({});
  const [classes, setClasses] = useState<any[]>([]);
  const [matieres, setMatieres] = useState<any[]>([]);
  const [selectedClasse, setSelectedClasse] = useState<string>('');
  const [editing, setEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedEnfantId, setSelectedEnfantId] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setLoading(true);
    try {
      if (role === 'admin') {
        const [c, m] = await Promise.all([api.getClasses(), api.getMatieres()]);
        setClasses(Array.isArray(c) ? c : []);
        setMatieres(Array.isArray(m) ? m : []);
      } else if (role === 'prof') {
        const pId = (user as any)?.professeur?.id;
        if (pId) {
          const data = await api.getEmploiTempsProfesseur(pId);
          buildGrid(Array.isArray(data) ? data : []);
        }
      } else if (role === 'eleve') {
        const cId = (user as any)?.eleve?.classeId;
        if (cId) {
          const data = await api.getEmploiTempsClasse(cId);
          buildGrid(Array.isArray(data) ? data : []);
        }
      } else if (role === 'parent') {
        const enfants = (user as any)?.parent?.enfants || [];
        if (enfants.length > 0) {
          const firstId = enfants[0].eleve.id;
          setSelectedEnfantId(firstId);
          const cId = enfants[0].eleve?.classeId;
          if (cId) {
            const data = await api.getEmploiTempsClasse(cId);
            buildGrid(Array.isArray(data) ? data : []);
          }
        }
      }
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const buildGrid = (entries: any[]) => {
    const g: Record<string, any> = {};
    for (const e of entries) {
      const key = `${e.jour}_${e.heureDebut}`;
      g[key] = e;
    }
    setGrid(g);
  };

  const loadByClasse = async (classeId: string) => {
    if (!classeId) { setGrid({}); return; }
    setLoading(true);
    try {
      const data = await api.getEmploiTempsClasse(classeId);
      buildGrid(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleClasseChange = (id: string) => {
    setSelectedClasse(id);
    loadByClasse(id);
  };

  const startEdit = (jour: string, heure: string) => {
    const key = `${jour}_${heure}`;
    const entry = grid[key];
    setEditing(key);
    setEditValue(entry?.matiere?.nom || '');
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const saveCell = useCallback(async () => {
    if (!editing || !selectedClasse) return;
    const [jour, heure] = editing.split('_');
    const val = editValue.trim();
    const key = editing;

    if (!val) {
      if (grid[key]?.id) {
        await api.deleteEmploiTemps(grid[key].id);
      }
      setGrid((prev) => { const n = { ...prev }; delete n[key]; return n; });
      setEditing(null);
      return;
    }

    const existing = grid[key];
    let matiereId = existing?.matiereId || '';

    if (!matiereId) {
      let match = matieres.find((m) => m.nom.toLowerCase() === val.toLowerCase() && m.classeId === selectedClasse);
      if (!match) {
        const created = await api.createMatiere({ nom: val, coefficient: 1, classeId: selectedClasse });
        if (created?.error) return;
        match = created;
        setMatieres((prev) => [...prev, match]);
      }
      matiereId = match.id;
    }

    const payload = { jour, heureDebut: heure, heureFin: `${String(parseInt(heure) + 1).padStart(2, '0')}:00`, matiereId, classeId: selectedClasse };

    if (existing?.id) {
      const res = await api.updateEmploiTemps(existing.id, payload);
      if (!res?.error) setGrid((prev) => ({ ...prev, [key]: res }));
    } else {
      const res = await api.createEmploiTemps(payload);
      if (!res?.error) setGrid((prev) => ({ ...prev, [key]: res }));
    }
    setEditing(null);
  }, [editing, editValue, selectedClasse, grid, matieres]);

  const deleteEntry = async (jour: string, heure: string) => {
    const key = `${jour}_${heure}`;
    const entry = grid[key];
    if (!entry?.id) return;
    await api.deleteEmploiTemps(entry.id);
    setGrid((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  const isReadonly = role === 'prof' || role === 'eleve' || role === 'parent';

  if (loading) return <div className="loader">Chargement...</div>;

  if (isReadonly) {
    const enfants = role === 'parent' ? (user as any)?.parent?.enfants || [] : [];

    const handleEnfantChange = async (enfantId: string) => {
      setSelectedEnfantId(enfantId);
      const pe = enfants.find((pe: any) => pe.eleve.id === enfantId);
      const cId = pe?.eleve?.classeId;
      if (cId) {
        setLoading(true);
        const data = await api.getEmploiTempsClasse(cId);
        buildGrid(Array.isArray(data) ? data : []);
        setLoading(false);
      } else {
        setGrid({});
      }
    };

    return (
      <>
        <div className="topbar">
          <div>
            <h1>Mon emploi du temps</h1>
            <p>{role === 'prof' ? 'Vos cours' : role === 'parent' ? 'Emploi du temps de votre enfant' : 'Emploi du temps de votre classe'}</p>
          </div>
          {role === 'parent' && enfants.length > 0 && (
            <div className="topbar-actions">
              <select value={selectedEnfantId} onChange={(e) => handleEnfantChange(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '13px' }}>
                {enfants.map((pe: any) => (
                  <option key={pe.eleve.id} value={pe.eleve.id}>{pe.eleve?.user?.name || 'Élève'}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        {role === 'parent' && !selectedEnfantId && (
          <div className="text-center text-muted" style={{ padding: '4rem 0' }}>
            Aucun enfant lié à votre compte.
          </div>
        )}
        {(role !== 'parent' || selectedEnfantId) && renderGrid(grid, JOURS, HEURES, null, '', null, null, null)}
      </>
    );
  }

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Emploi du temps</h1>
          <p>Cliquez sur une case et tapez le nom de la matière pour ajouter un cours</p>
        </div>
        <div className="topbar-actions">
          <select value={selectedClasse} onChange={(e) => handleClasseChange(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '13px' }}>
            <option value="">Sélectionner une classe</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.niveau} {c.nom}</option>
            ))}
          </select>
        </div>
      </div>

      {!selectedClasse && (
        <div className="text-center text-muted" style={{ padding: '4rem 0' }}>
          Sélectionnez une classe pour éditer son emploi du temps
        </div>
      )}

      {selectedClasse && renderGrid(grid, JOURS, HEURES, editing, editValue, setEditValue, startEdit, saveCell, deleteEntry, inputRef)}
    </>
  );
}

function renderGrid(
  grid: Record<string, any>, JOURS: string[], HEURES: string[],
  editing: string | null, editValue: string, setEditValue?: any,
  startEdit?: ((j: string, h: string) => void) | null,
  saveCell?: (() => void) | null,
  deleteEntry?: ((j: string, h: string) => void) | null,
  inputRef?: React.RefObject<HTMLInputElement | null>,
) {
  const readonly = !startEdit;

  return (
    <div className="card" style={{ overflowX: 'auto', maxHeight: '70vh', overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 600 }}>
        <thead style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 2 }}>
          <tr>
            <th style={{ width: 50, textAlign: 'center', padding: '6px 4px', borderBottom: '1px solid #e5e7eb', fontSize: 11, color: '#9ca3af' }}>H</th>
            {JOURS.map((j) => (
              <th key={j} style={{ textAlign: 'center', padding: '6px 4px', borderBottom: '1px solid #e5e7eb', fontSize: 12, fontWeight: 600, minWidth: 90 }}>
                {JOURS_LABEL[j]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HEURES.map((heure) => (
            <tr key={heure}>
              <td style={{ textAlign: 'center', padding: '2px', borderBottom: '1px solid #f3f4f6', fontSize: 10, color: '#9ca3af', fontWeight: 600 }}>
                {heure}
              </td>
              {JOURS.map((jour) => {
                const key = `${jour}_${heure}`;
                const entry = grid[key];
                const isEditing = editing === key;
                return (
                  <td key={jour} style={{
                    padding: 0, borderBottom: '1px solid #f3f4f6', borderLeft: '1px solid #f9fafb',
                    height: 36, verticalAlign: 'middle', position: 'relative',
                    background: isEditing ? '#fef9e7' : (entry ? '#eef2ff' : '#fff'),
                    cursor: readonly ? 'default' : 'pointer',
                    transition: 'background 0.15s',
                  }}
                    onClick={() => { if (!readonly && !isEditing) startEdit?.(jour, heure); }}
                  >
                    {isEditing ? (
                      <input
                        ref={inputRef as any}
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue?.(e.target.value)}
                        onBlur={() => saveCell?.()}
                        onKeyDown={(e) => { if (e.key === 'Enter') saveCell?.(); if (e.key === 'Escape') saveCell?.(); }}
                        style={{
                          width: '100%', height: '100%', border: '2px solid #a13d63',
                          borderRadius: 4, padding: '2px 6px', fontSize: 12,
                          background: '#fff', outline: 'none', fontFamily: "'DM Sans', sans-serif",
                          boxSizing: 'border-box',
                        }}
                        placeholder="Matière..."
                      />
                    ) : entry ? (
                      <div style={{ padding: '2px 6px', fontSize: 12, lineHeight: 1.3, position: 'relative' }}>
                        <div style={{ fontWeight: 600, color: '#a13d63' }}>{entry.matiere?.nom}</div>
                        {entry.salle && <div style={{ fontSize: 10, color: '#6b7280' }}>{entry.salle}</div>}
                        {!readonly && (
                          <button
                            style={{
                              position: 'absolute', top: 0, right: 0, width: 16, height: 16,
                              border: 'none', background: 'transparent', color: '#d1d5db',
                              cursor: 'pointer', fontSize: 14, lineHeight: '16px', padding: 0,
                            }}
                            onClick={(e) => { e.stopPropagation(); deleteEntry?.(jour, heure); }}
                            title="Supprimer"
                          >×</button>
                        )}
                      </div>
                    ) : readonly ? (
                      <span style={{ color: '#e5e7eb', fontSize: 11 }}>—</span>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

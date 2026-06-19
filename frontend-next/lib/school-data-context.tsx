'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useAuth } from './auth-context';
import { api } from './api';

interface SchoolData {
  eleves: any[];
  classes: any[];
  professeurs: any[];
  notes: any[];
  matieres: any[];
  evaluations: any[];
  bulletins: any[];
  communications: any[];
  frais: any[];
}

interface SchoolDataContextType extends SchoolData {
  loading: boolean;
  lastRefreshed: Date | null;
  refetch: () => Promise<void>;
}

const defaults: SchoolData = {
  eleves: [],
  classes: [],
  professeurs: [],
  notes: [],
  matieres: [],
  evaluations: [],
  bulletins: [],
  communications: [],
  frais: [],
};

const SchoolDataContext = createContext<SchoolDataContextType | undefined>(undefined);

const asArray = (data: any): any[] => (Array.isArray(data) ? data : []);

async function safeFetch<T>(fn: () => Promise<T>): Promise<T[]> {
  try {
    const res = await fn();
    return asArray(res);
  } catch { return []; }
}

export function SchoolDataProvider({ children }: { children: ReactNode }) {
  const { user, role } = useAuth();
  const [data, setData] = useState<SchoolData>(defaults);
  const [loading, setLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      if (!role) { setData(defaults); setLoading(false); return; }

      if (role === 'admin') {
        const [eleves, classes, professeurs, notes, matieres, evaluations, communications, frais] = await Promise.all([
          safeFetch(() => api.getEleves()),
          safeFetch(() => api.getClasses()),
          safeFetch(() => api.getProfesseurs()),
          safeFetch(() => api.getNotes()),
          safeFetch(() => api.getMatieres()),
          safeFetch(() => api.getEvaluations()),
          safeFetch(() => api.getCommunications()),
          safeFetch(() => api.getFrais()),
        ]);
        const bulletins = await safeFetch(() => api.getBulletins());
        setData({ eleves, classes, professeurs, notes, matieres, evaluations, bulletins, communications, frais });
      } else if (role === 'prof') {
        const [classes, notes, matieres] = await Promise.all([
          safeFetch(() => api.getClasses()),
          safeFetch(() => api.getNotes()),
          safeFetch(() => api.getMatieres()),
        ]);
        const eleves = await safeFetch(() => api.getEleves());
        setData({ ...defaults, eleves, classes, notes, matieres });
      } else if (role === 'eleve') {
        const eleveId = (user as any)?.eleve?.id;
        if (eleveId) {
          const [notes, bulletins] = await Promise.all([
            safeFetch(() => api.getNotesByEleve(eleveId)),
            safeFetch(() => api.getBulletinByEleve(eleveId)),
          ]);
          const frais = await safeFetch(() => api.getFraisEleve(eleveId));
          setData({ ...defaults, notes, bulletins, frais });
        } else {
          setData(defaults);
        }
      } else if (role === 'parent') {
        const enfants = (user as any)?.parent?.enfants || [];
        const bulletins: any[] = [];
        const notes: any[] = [];
        const frais: any[] = [];
        for (const pe of enfants) {
          const eid = pe.eleve.id;
          const [n, b, f] = await Promise.all([
            safeFetch(() => api.getNotesByEleve(eid)),
            safeFetch(() => api.getBulletinByEleve(eid)),
            safeFetch(() => api.getFraisEleve(eid)),
          ]);
          notes.push(...n.map((x: any) => ({ ...x, _eleveId: eid })));
          bulletins.push(...b.map((x: any) => ({ ...x, _eleveId: eid })));
          frais.push(...f.map((x: any) => ({ ...x, _eleveId: eid })));
        }
        setData({ ...defaults, notes, bulletins, frais });
      }
      setLastRefreshed(new Date());
    } catch {
      // silent
    }
    setLoading(false);
  }, [role, user]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <SchoolDataContext.Provider value={{ ...data, loading, lastRefreshed, refetch }}>
      {children}
    </SchoolDataContext.Provider>
  );
}

export function useSchoolData() {
  const ctx = useContext(SchoolDataContext);
  if (!ctx) throw new Error('useSchoolData must be used within SchoolDataProvider');
  return ctx;
}

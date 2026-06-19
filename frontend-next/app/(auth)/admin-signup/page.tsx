'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function AdminSignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', schoolName: '', schoolPhone: '', schoolAddress: '', schoolCity: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.schoolName.trim()) {
      setError('Veuillez indiquer le nom de l\'école.');
      return;
    }
    try {
      const res = await api.signUpSchool(form);
      if (res.error) {
        setError(res.error);
      } else {
        localStorage.removeItem('onb_admin');
        router.push('/admin-login');
      }
    } catch (err: any) {
      setError(err?.message || 'Erreur');
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left">
          <div className="login-brand">
            <h1>Créer un compte</h1>
            <p>Inscription administrateur</p>
          </div>
        </div>
        <div className="login-right">
          <h2>Inscription établissement</h2>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Nom de l'école</label>
              <input type="text" value={form.schoolName} onChange={(e) => setForm({ ...form, schoolName: e.target.value })} placeholder="Ex: Lycée de Dakar" required />
            </div>
            <div className="field">
              <label>Votre nom</label>
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
            <details style={{ marginBottom: '1rem' }}>
              <summary style={{ cursor: 'pointer', fontSize: 13, color: '#6b7280' }}>Informations facultatives</summary>
              <div className="field" style={{ marginTop: '0.75rem' }}>
                <label>Téléphone</label>
                <input type="text" value={form.schoolPhone} onChange={(e) => setForm({ ...form, schoolPhone: e.target.value })} placeholder="+221 77 123 45 67" />
              </div>
              <div className="field">
                <label>Adresse</label>
                <input type="text" value={form.schoolAddress} onChange={(e) => setForm({ ...form, schoolAddress: e.target.value })} placeholder="Adresse de l'école" />
              </div>
              <div className="field">
                <label>Ville</label>
                <input type="text" value={form.schoolCity} onChange={(e) => setForm({ ...form, schoolCity: e.target.value })} placeholder="Dakar" />
              </div>
            </details>
            <button type="submit" className="btn btn-primary btn-full">Créer le compte</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="/admin-login" style={{ color: 'var(--color-info)' }}>← Retour à la connexion</a>
          </div>
        </div>
      </div>
    </div>
  );
}

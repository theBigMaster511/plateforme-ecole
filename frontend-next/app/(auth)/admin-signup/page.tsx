'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function AdminSignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.signUpSchool({ ...form, code: form.code || undefined });
      if (res.error) {
        setError(res.error);
      } else {
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
          <h2>Inscription</h2>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Nom</label>
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
              <label>Code d'inscription</label>
              <input type="text" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="Optionnel" />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Créer le compte</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="/" style={{ color: 'var(--color-info)' }}>Retour à l'accueil</a>
          </div>
        </div>
      </div>
    </div>
  );
}

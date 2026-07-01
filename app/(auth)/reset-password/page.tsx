'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function ResetForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!token) setError('Lien de réinitialisation invalide ou manquant.');
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!password || password.length < 8) { setError('Le mot de passe doit contenir au moins 8 caractères.'); return; }
    if (password !== confirm) { setError('Les mots de passe ne correspondent pas.'); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: password, token }),
      });
      const data = await res.json();
      if (data.error || !res.ok) { setError(data.error || data.message || 'Erreur lors de la réinitialisation.'); setIsSubmitting(false); return; }
      setSuccess(true);
      setTimeout(() => router.push('/login'), 3000);
    } catch { setError('Erreur réseau. Veuillez réessayer.'); }
    setIsSubmitting(false);
  };

  return (
    <div className="login-right">
      {success ? (
        <>
          <div className="login-header">
            <h2>Mot de passe réinitialisé</h2>
            <p>Vous allez être redirigé vers la page de connexion.</p>
          </div>
          <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <i className="ti ti-circle-check" style={{ fontSize: 48, color: 'var(--color-success)' }}></i>
          </div>
        </>
      ) : (
        <>
          <div className="login-header">
            <h2>Nouveau mot de passe</h2>
            <p>Choisissez un mot de passe sécurisé</p>
          </div>

          {error && (
            <div className="error-msg" style={{ display: 'block' }}>
              <i className="ti ti-alert-circle"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Nouveau mot de passe</label>
              <input type="password" placeholder="Minimum 8 caractères" autoComplete="new-password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
              <label>Confirmer le mot de passe</label>
              <input type="password" placeholder="Confirmer" autoComplete="new-password"
                value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting || !token}
              style={{ background: '#1D9E75' }}>
              <i className="ti ti-device-floppy"></i>
              <span>Réinitialiser</span>
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link href="/login" style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>
              <i className="ti ti-arrow-left"></i> Retour à la connexion
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left" style={{ background: 'linear-gradient(135deg, #0f2d4a 0%, #1D9E75 100%)' }}>
          <div className="login-brand">
            <div className="login-brand-icon">
              <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 32 }} />
            </div>
            <h1>Jangoo.sn</h1>
            <p>Nouveau mot de passe</p>
          </div>
          <div className="login-year">Année scolaire 2025 — 2026</div>
        </div>

        <Suspense fallback={
          <div className="login-right"><div className="loader">Chargement...</div></div>
        }>
          <ResetForm />
        </Suspense>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email) { setError('Veuillez saisir votre email.'); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); setIsSubmitting(false); return; }
      setSent(true);
    } catch { setError('Erreur réseau. Veuillez réessayer.'); }
    setIsSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left" style={{ background: 'linear-gradient(135deg, #0f2d4a 0%, #1D9E75 100%)' }}>
          <div className="login-brand">
            <div className="login-brand-icon">
              <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 32 }} />
            </div>
            <h1>Jangoo.sn</h1>
            <p>Réinitialisation de votre mot de passe</p>
          </div>
          <div className="login-year">Année scolaire 2025 — 2026</div>
        </div>

        <div className="login-right">
          {sent ? (
            <>
              <div className="login-header">
                <h2>Email envoyé</h2>
                <p>Si un compte existe avec cette adresse, vous recevrez un lien de réinitialisation.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <i className="ti ti-mail-check" style={{ fontSize: 48, color: 'var(--color-success)' }}></i>
                <p style={{ marginTop: '1rem', fontSize: 14, color: 'var(--color-text-secondary)' }}>
                  Vérifiez votre boîte de réception et suivez les instructions.
                </p>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/login" style={{ fontSize: 14, color: 'var(--color-info)' }}>
                  <i className="ti ti-arrow-left"></i> Retour à la connexion
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="login-header">
                <h2>Mot de passe oublié</h2>
                <p>Saisissez votre email pour recevoir un lien de réinitialisation</p>
              </div>

              {error && (
                <div className="error-msg" style={{ display: 'block' }}>
                  <i className="ti ti-alert-circle"></i> {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="email@ecole.sn" autoComplete="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}
                  style={{ background: '#1D9E75' }}>
                  <i className="ti ti-send"></i>
                  <span>Envoyer</span>
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
      </div>
    </div>
  );
}

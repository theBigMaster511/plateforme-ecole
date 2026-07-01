'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      setIsSubmitting(false);
      return;
    }

    const result = await login(email, password);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      router.push('/dashboard');
    }
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="loader">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left" style={{ background: 'linear-gradient(135deg, #0f2d4a 0%, #1D9E75 100%)' }}>
          <div className="login-brand">
            <div className="login-brand-icon">
              <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 32 }} />
            </div>
            <h1>Jangoo.sn</h1>
            <p>Plateforme unifiée pour administrer, enseigner et suivre la progression des élèves.</p>
          </div>
          <div className="login-features">
            <div className="feat">
              <div className="feat-dot" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <i className="ti ti-clipboard-list"></i>
              </div>
              <span>Saisie et consultation des notes en temps réel</span>
            </div>
            <div className="feat">
              <div className="feat-dot" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <i className="ti ti-users"></i>
              </div>
              <span>Gestion des classes, matières et emplois du temps</span>
            </div>
            <div className="feat">
              <div className="feat-dot" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <i className="ti ti-file-analytics"></i>
              </div>
              <span>Bulletins scolaires générés automatiquement</span>
            </div>
            <div className="feat">
              <div className="feat-dot" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <i className="ti ti-shield-lock"></i>
              </div>
              <span>Accès sécurisé selon votre rôle</span>
            </div>
          </div>
          <div className="login-year">Année scolaire 2025 — 2026</div>
        </div>

        <div className="login-right">
          <div className="login-header">
            <h2>Connexion</h2>
            <p>Connectez-vous à votre espace personnel</p>
          </div>

          {error && (
            <div className="error-msg" style={{ display: 'block' }}>
              <i className="ti ti-alert-circle"></i> {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label>Identifiant</label>
              <input
                type="email"
                placeholder="email@ecole.sn"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <div className="field-row">
                <label>Mot de passe</label>
                <Link className="forgot" href="/forgot-password">
                  Mot de passe oublié ?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full" style={{ background: '#1D9E75' }} disabled={isSubmitting}>
              <i className="ti ti-login"></i>
              <span>Se connecter</span>
            </button>
          </form>

          <div className="divider">
            <hr />
            <span>ou</span>
            <hr />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-muted" style={{ marginBottom: 8 }}>
              Problème ?{' '}
              <a href="#" style={{ color: 'var(--color-info)' }}>
                Contacter l'administration
              </a>
            </div>
            <a href="/" style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              <i className="ti ti-arrow-left" style={{ verticalAlign: -1 }}></i> Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

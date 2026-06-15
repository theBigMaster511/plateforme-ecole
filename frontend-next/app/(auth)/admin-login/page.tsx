'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const { login, user, isLoading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && user && user.role === 'admin') {
      router.replace('/dashboard');
    }
  }, [isLoading, user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      setIsSubmitting(false);
      return;
    }

    const result = await login(email, password, 'admin');
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

  if (user && user.role === 'admin') return null;

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left">
          <div className="login-brand">
            <div className="login-brand-icon">
              <i className="ti ti-shield-lock"></i>
            </div>
            <h1>Administration</h1>
            <p>Accès réservé aux administrateurs de l&apos;établissement</p>
          </div>
          <div className="login-features">
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-building-school"></i>
              </div>
              <span>Gestion complète de l&apos;établissement</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-users"></i>
              </div>
              <span>Création et gestion des comptes utilisateurs</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-file-analytics"></i>
              </div>
              <span>Configuration des classes et matières</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-eye-off"></i>
              </div>
              <span>Page masquée — accessible uniquement par lien direct</span>
            </div>
          </div>
          <div className="login-year">Année scolaire 2025 — 2026</div>
        </div>

        <div className="login-right">
          <div className="login-header">
            <h2>Connexion Admin</h2>
            <p>Connectez-vous avec vos identifiants administrateur</p>
          </div>

          {error && (
            <div className="error-msg" style={{ display: 'block' }}>
              <i className="ti ti-alert-circle"></i> {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="admin@ecole.sn"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <div className="field-row">
                <label>Mot de passe</label>
                <a className="forgot" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
              <i className="ti ti-login"></i>
              <span>Se connecter</span>
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a href="/" style={{ color: 'var(--color-info)' }}>
              Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

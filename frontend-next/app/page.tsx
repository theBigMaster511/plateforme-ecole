'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('prof');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && isLoggedIn()) {
      router.push('/dashboard');
    }
  }, [isLoading, isLoggedIn, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      setIsSubmitting(false);
      return;
    }

    const result = await login(email, password, role);

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
        {/* Panneau gauche */}
        <div className="login-left">
          <div className="login-brand">
            <div className="login-brand-icon">
              <i className="ti ti-school"></i>
            </div>
            <h1>Système de Gestion Scolaire</h1>
            <p>Plateforme unifiée pour administrer, enseigner et suivre la progression des élèves.</p>
          </div>
          <div className="login-features">
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-clipboard-list"></i>
              </div>
              <span>Saisie et consultation des notes en temps réel</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-users"></i>
              </div>
              <span>Gestion des classes, matières et emplois du temps</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-file-analytics"></i>
              </div>
              <span>Bulletins scolaires générés automatiquement</span>
            </div>
            <div className="feat">
              <div className="feat-dot">
                <i className="ti ti-shield-lock"></i>
              </div>
              <span>Accès sécurisé selon votre rôle</span>
            </div>
          </div>
          <div className="login-year">Année scolaire 2025 — 2026</div>
        </div>

        {/* Panneau droit */}
        <div className="login-right">
          <div className="login-header">
            <h2>Bienvenue 👋</h2>
            <p>Connectez-vous à votre espace personnel</p>
          </div>

          <div className="role-tabs">
            <button
              className={`tab ${role === 'prof' ? 'active' : ''}`}
              onClick={() => setRole('prof')}
            >
              <i className="ti ti-chalkboard"></i> Professeur
            </button>
            <button
              className={`tab ${role === 'eleve' ? 'active' : ''}`}
              onClick={() => setRole('eleve')}
            >
              <i className="ti ti-user-circle"></i> Élève / Parent
            </button>
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
                placeholder={role === 'prof' ? 'prof.nom@ecole.sn' : 'eleve@ecole.sn'}
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
              <span>Se connecter en tant que {role === 'prof' ? 'Professeur' : 'Élève'}</span>
            </button>
          </form>

          <div className="divider">
            <hr />
            <span>ou</span>
            <hr />
          </div>
          <div className="text-center text-muted">
            Problème ?{' '}
            <a href="#" style={{ color: 'var(--color-info)' }}>
              Contacter l'administration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

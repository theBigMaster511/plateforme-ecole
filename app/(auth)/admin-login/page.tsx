'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const { login, user, role, isLoading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && user && role === 'admin') {
      router.replace('/dashboard');
    }
  }, [isLoading, user, role, router]);

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

  if (user && role === 'admin') return null;

  const roseBg = 'linear-gradient(135deg, #a13d63 0%, #7a2a4a 50%, #5c1f38 100%)';

  return (
    <div className="login-container" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="login-page" style={{ boxShadow: '0 20px 60px rgba(161, 61, 99, 0.2)' }}>
        <div className="login-left" style={{ background: roseBg, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}></div>
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }}></div>
          <div className="login-brand" style={{ position: 'relative', zIndex: 1 }}>
            <div className="login-brand-icon" style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <i className="ti ti-shield-lock" style={{ fontSize: '32px', color: '#fff' }}></i>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', lineHeight: '1.35', marginBottom: '.75rem' }}>Administration</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>Accès réservé aux administrateurs de l&apos;établissement</p>
          </div>
          <div className="login-features" style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
            <div className="feat" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ti ti-building-school" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}></i>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>Gestion complète de l&apos;établissement</span>
            </div>
            <div className="feat" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ti ti-users" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}></i>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>Création et gestion des comptes utilisateurs</span>
            </div>
            <div className="feat" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ti ti-file-analytics" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}></i>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>Configuration des classes et matières</span>
            </div>
            <div className="feat" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ti ti-eye-off" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}></i>
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>Page masquée — accessible uniquement par lien direct</span>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 1, fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: 'auto' }}>Année scolaire 2025 — 2026</div>
        </div>

        <div className="login-right">
          <div className="login-header">
            <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#1a1a2e', marginBottom: '.35rem' }}>Connexion Admin</h2>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>Connectez-vous avec vos identifiants administrateur</p>
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
                style={{ borderColor: '#f0d4e0' }}
                onFocus={(e) => { e.target.style.borderColor = '#a13d63'; e.target.style.boxShadow = '0 0 0 3px rgba(161,61,99,0.12)' }}
                onBlur={(e) => { e.target.style.borderColor = '#f0d4e0'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <div className="field">
              <div className="field-row">
                <label>Mot de passe</label>
                <Link className="forgot" href="/forgot-password" style={{ color: '#a13d63' }}>
                  Mot de passe oublié ?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: '#f0d4e0' }}
                onFocus={(e) => { e.target.style.borderColor = '#a13d63'; e.target.style.boxShadow = '0 0 0 3px rgba(161,61,99,0.12)' }}
                onBlur={(e) => { e.target.style.borderColor = '#f0d4e0'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            <button type="submit" className="btn btn-full" disabled={isSubmitting}
              onMouseOver={(e) => { if (!isSubmitting) (e.target as HTMLElement).style.opacity = '0.85' }}
              onMouseOut={(e) => { (e.target as HTMLElement).style.opacity = '1' }}
              style={{ background: 'linear-gradient(135deg, #a13d63, #7a2a4a)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', width: '100%', fontFamily: "'DM Sans', sans-serif", transition: 'opacity .2s' }}>
              <i className="ti ti-login" style={{ fontSize: '16px' }}></i>
              <span>Se connecter</span>
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a href="/" style={{ color: '#a13d63' }}>
              Retour à l&apos;accueil
            </a>
            <span style={{ color: '#ccc', margin: '0 8px' }}>•</span>
            <a href="/admin-signup" style={{ color: '#a13d63', fontWeight: 500 }}>
              Créer un compte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

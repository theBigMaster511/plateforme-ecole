'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await login(email, password, 'admin');
    if (result.error) {
      setError(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-left">
          <div className="login-brand">
            <h1>Administration</h1>
            <p>Accès réservé aux administrateurs</p>
          </div>
        </div>
        <div className="login-right">
          <h2>Connexion Admin</h2>
          {error && <div className="error-msg">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <label>Mot de passe</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Se connecter</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="/" style={{ color: 'var(--color-info)' }}>Retour à l'accueil</a>
          </div>
        </div>
      </div>
    </div>
  );
}

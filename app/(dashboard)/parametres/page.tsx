'use client';

import React, { useState, useRef } from 'react';
import { useAuth } from '@/lib/auth-context';

export default function ParametresPage() {
  const { user, role } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profileMsg, setProfileMsg] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const [logo, setLogo] = useState(user?.ecole?.logo || '');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState(user?.ecole?.logo || '');
  const [logoMsg, setLogoMsg] = useState('');

  const roleLabels: Record<string, string> = {
    admin: 'Administrateur',
    prof: 'Professeur',
    eleve: 'Élève',
    parent: 'Parent',
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileMsg('');
    try {
      const res = await fetch('/api/auth/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.error) { setProfileMsg(data.error); return; }
      setProfileMsg('Profil mis à jour avec succès.');
    } catch { setProfileMsg('Erreur lors de la mise à jour.'); }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg('');
    if (newPassword.length < 8) { setPasswordMsg('Minimum 8 caractères.'); return; }
    if (newPassword !== confirmPassword) { setPasswordMsg('Les mots de passe ne correspondent pas.'); return; }
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (data.error || !res.ok) { setPasswordMsg(data.error || 'Erreur lors du changement.'); return; }
      setPasswordMsg('Mot de passe modifié avec succès.');
      setCurrentPassword(''); setNewPassword(''); setConfirmPassword('');
    } catch { setPasswordMsg('Erreur réseau.'); }
  };

  const handleLogoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 600000) { setLogoMsg('Image trop volumineuse (max 600 Ko).'); return; }
    setLogoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setLogoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleUploadLogo = async () => {
    if (!logoFile) return;
    setLogoMsg('');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = async () => {
      let w = img.width, h = img.height;
      const maxDim = 400;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio); h = Math.round(h * ratio);
      }
      canvas.width = w; canvas.height = h;
      ctx?.drawImage(img, 0, 0, w, h);
      const compressed = canvas.toDataURL('image/jpeg', 0.7);
      try {
        const res = await fetch(`/api/ecole/${user?.ecole?.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ logo: compressed }),
        });
        const data = await res.json();
        if (data.error) { setLogoMsg(data.error); return; }
        setLogo(compressed);
        setLogoMsg('Logo mis à jour avec succès.');
        setLogoFile(null);
      } catch { setLogoMsg('Erreur lors de l\'envoi.'); }
    };
    img.src = logoPreview;
  };

  const isAdmin = role === 'admin';

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Paramètres</h1>
          <p>Gérez vos informations personnelles</p>
        </div>
      </div>

      {profileMsg && (
        <div className={profileMsg.includes('succès') ? 'pill-green' : 'pill-red'}
          style={{ padding: '8px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: 13, display: 'inline-block' }}>
          <i className={`ti ti-${profileMsg.includes('succès') ? 'circle-check' : 'alert-circle'}`}></i> {profileMsg}
        </div>
      )}

      {passwordMsg && (
        <div className={passwordMsg.includes('succès') ? 'pill-green' : 'pill-red'}
          style={{ padding: '8px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: 13, display: 'inline-block' }}>
          <i className={`ti ti-${passwordMsg.includes('succès') ? 'circle-check' : 'alert-circle'}`}></i> {passwordMsg}
        </div>
      )}

      {logoMsg && (
        <div className={logoMsg.includes('succès') ? 'pill-green' : 'pill-red'}
          style={{ padding: '8px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: 13, display: 'inline-block' }}>
          <i className={`ti ti-${logoMsg.includes('succès') ? 'circle-check' : 'alert-circle'}`}></i> {logoMsg}
        </div>
      )}

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header"><h3>Mon profil</h3></div>
        <div className="card-body">
          <form onSubmit={handleUpdateProfile}>
            <div className="field">
              <label>Nom</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <label>Rôle</label>
              <p style={{ padding: '8px 0', fontSize: '14px' }}>{roleLabels[role || ''] || role || '—'}</p>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="ti ti-device-floppy"></i> Enregistrer
            </button>
          </form>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header"><h3>Mot de passe</h3></div>
        <div className="card-body">
          <form onSubmit={handleChangePassword}>
            <div className="field">
              <label>Mot de passe actuel</label>
              <input type="password" value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>
            <div className="field">
              <label>Nouveau mot de passe</label>
              <input type="password" placeholder="Minimum 8 caractères" value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="field">
              <label>Confirmer</label>
              <input type="password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="ti ti-key"></i> Changer le mot de passe
            </button>
          </form>
        </div>
      </div>

      {isAdmin && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div className="card-header"><h3>Logo de l'école</h3></div>
          <div className="card-body">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {logoPreview ? (
                <img src={logoPreview} alt="Logo" style={{ height: 80, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', objectFit: 'contain' }} />
              ) : (
                <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-sm)', border: '1px dashed var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--color-text-muted)' }}>Aucun logo</div>
              )}
              <div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoSelect} hidden />
                <button type="button" className="btn btn-outline" onClick={() => fileInputRef.current?.click()}>
                  <i className="ti ti-upload"></i> Choisir une image
                </button>
                {logoFile && (
                  <button type="button" className="btn btn-primary" style={{ marginLeft: 8 }} onClick={handleUploadLogo}>
                    <i className="ti ti-cloud-upload"></i> Envoyer
                  </button>
                )}
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 8 }}>JPEG/PNG, max 600 Ko, compression automatique.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

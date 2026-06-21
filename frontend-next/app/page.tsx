'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function LandingPage() {
  const router = useRouter();
  const { user } = useAuth();
  const isLoggedIn = !!user;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goDashboard = () => router.push('/dashboard');
  const goLogin = () => router.push('/login');
  const goAction = isLoggedIn ? goDashboard : goLogin;

  const btnLabel = isLoggedIn ? 'Dashboard' : 'Se connecter';
  const btnIcon = isLoggedIn ? 'ti-layout-dashboard' : 'ti-login';

  const container: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    color: '#1a1a2e',
    background: '#f8fafc',
    minHeight: '100vh',
    width: '100%',
  };

  const nav: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 4rem',
    background: '#fff',
    borderBottom: '1px solid #f0f0f0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const navLinks: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '14px',
    fontWeight: 500,
    color: '#6b7280',
    cursor: 'pointer',
  };

  const btnConnecter: React.CSSProperties = {
    padding: '10px 24px',
    background: '#0f2d4a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  };

  const hero: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5rem 4rem',
    maxWidth: 1200,
    margin: '0 auto',
    gap: '4rem',
  };

  const heroTitle: React.CSSProperties = {
    fontSize: '42px',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '1.5rem',
    color: '#0f2d4a',
  };

  const heroSub: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: 1.7,
    marginBottom: '2rem',
    maxWidth: 480,
  };

  const ctaRow: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  };

  const ctaPrimary: React.CSSProperties = {
    padding: '14px 32px',
    background: '#0f2d4a',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  };

  const ctaSecondary: React.CSSProperties = {
    padding: '14px 32px',
    background: '#fff',
    color: '#1D9E75',
    border: '1px solid #1D9E75',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  };

  const section: React.CSSProperties = {
    padding: '5rem 4rem',
    maxWidth: 1200,
    margin: '0 auto',
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 700,
    color: '#0f2d4a',
    marginBottom: '0.75rem',
    textAlign: 'center',
  };

  const sectionSub: React.CSSProperties = {
    fontSize: '15px',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: 600,
    margin: '0 auto 3rem',
  };

  const features: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  };

  const featureCard: React.CSSProperties = {
    background: '#fff',
    borderRadius: '14px',
    padding: '2rem',
    border: '1px solid #f0f0f0',
    transition: 'box-shadow 0.2s',
  };

  const iconBox: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#fff',
    marginBottom: '1.25rem',
  };

  const featTitle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#1a1a2e',
  };

  const featDesc: React.CSSProperties = {
    fontSize: '13.5px',
    color: '#6b7280',
    lineHeight: 1.7,
  };

  const rolesGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  };

  const roleCard: React.CSSProperties = {
    background: '#fff',
    borderRadius: '14px',
    padding: '2rem',
    border: '1px solid #f0f0f0',
    textAlign: 'center',
  };

  const roleIcon: React.CSSProperties = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: '#fff',
    margin: '0 auto 1rem',
  };

  const footer: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem 4rem',
    borderTop: '1px solid #f0f0f0',
    fontSize: '13px',
    color: '#9ca3af',
    marginTop: '2rem',
  };

  return (
    <div style={container}>
      <nav className="landing-nav" style={nav}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/jangoo.png" alt="Jangoo.sn" style={{ height: 36 }} />
        </div>
        <div className="landing-nav-links" style={navLinks}>
          <span onClick={() => scrollTo('features')}>Fonctionnalités</span>
          <span onClick={() => scrollTo('roles')}>Rôles</span>
          <span onClick={() => scrollTo('contact')}>Contact</span>
          <button style={btnConnecter} onClick={goAction}>
            <i className={`ti ${btnIcon}`} style={{ marginRight: 6 }}></i>
            {btnLabel}
          </button>
        </div>
      </nav>

      <section className="landing-hero" style={hero}>
        <div>
          <h1 style={heroTitle}>La plateforme qui<br />simplifie la gestion<br />scolaire</h1>
          <p style={heroSub}>
            Gérez vos établissements, suivez les notes, les classes et les professeurs
            en toute simplicité. Une solution moderne adaptée aux écoles africaines.
          </p>
          <div className="landing-cta-row" style={ctaRow}>
            <button style={ctaPrimary} onClick={goAction}>
              <i className={`ti ${btnIcon}`} style={{ marginRight: 6 }}></i>
              {isLoggedIn ? 'Mon tableau de bord' : 'Commencer'}
            </button>
            <button className="cta-secondary" style={ctaSecondary} onClick={() => scrollTo('features')}>
              En savoir plus
            </button>
          </div>
        </div>
        <div className="landing-hero-img" style={{
          width: 420,
          height: 360,
          background: '#fff',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          border: '1px solid #f0f0f0',
          padding: 32,
        }}>
          <img src="/jangoo.png" alt="Jangoo.sn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </section>

      <section id="features" className="landing-section" style={section}>
        <h2 style={sectionTitle}>Fonctionnalités</h2>
        <p style={sectionSub}>
          Tout ce dont vous avez besoin pour gérer votre établissement au quotidien
        </p>
        <div className="landing-features" style={features}>
          {[
            { icon: 'ti ti-clipboard-list', bg: '#0f2d4a', title: 'Gestion des notes', desc: 'Saisie et consultation en temps réel par les professeurs et les élèves.' },
            { icon: 'ti ti-users', bg: '#1D9E75', title: 'Élèves & Professeurs', desc: 'CRUD complet, affectation aux classes et matières, suivi des effectifs.' },
            { icon: 'ti ti-books', bg: '#B8860B', title: 'Matières & Classes', desc: 'Organisation hiérarchique niveaux & classes, attribution des enseignements.' },
            { icon: 'ti ti-file-analytics', bg: '#0f2d4a', title: 'Bulletins', desc: 'Génération automatique des bulletins de notes par trimestre.' },
            { icon: 'ti ti-message', bg: '#1D9E75', title: 'Communication', desc: 'Messages internes entre administration, professeurs et élèves.' },
            { icon: 'ti ti-shield-lock', bg: '#B8860B', title: 'Sécurité', desc: 'Accès par rôle (admin, professeur, élève, parent) avec session sécurisée.' },
          ].map((f, i) => (
            <div key={i} style={featureCard}>
              <div style={{ ...iconBox, background: f.bg }}><i className={f.icon}></i></div>
              <h3 style={featTitle}>{f.title}</h3>
              <p style={featDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" className="landing-section" style={{ ...section, background: '#f1f5f9', borderRadius: 24, margin: '0 4rem 3rem', maxWidth: 'none' }}>
        <h2 style={sectionTitle}>Quatre rôles, une plateforme</h2>
        <p style={sectionSub}>
          Chaque utilisateur accède à un espace adapté à ses besoins
        </p>
        <div className="landing-roles" style={rolesGrid}>
          {[
            { icon: 'ti ti-user-shield', bg: '#0f2d4a', title: 'Administration', desc: 'Gère les classes, les matières, les professeurs, les élèves et la communication.' },
            { icon: 'ti ti-user-check', bg: '#1D9E75', title: 'Professeur', desc: 'Saisit les notes, consulte ses classes et matières, suit ses élèves.' },
            { icon: 'ti ti-user', bg: '#B8860B', title: 'Élève', desc: 'Consulte ses notes, ses bulletins et reçoit les communications.' },
            { icon: 'ti ti-users', bg: '#8B5CF6', title: 'Parent', desc: 'Suit la scolarité de ses enfants : notes, bulletins, emploi du temps et communications.' },
          ].map((r, i) => (
            <div key={i} style={roleCard}>
              <div style={{ ...roleIcon, background: r.bg }}><i className={r.icon}></i></div>
              <h3 style={featTitle}>{r.title}</h3>
              <p style={featDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="landing-section" style={{ ...section, textAlign: 'center' }}>
        <h2 style={sectionTitle}>Prêt à moderniser votre école ?</h2>
        <p style={{ ...sectionSub, marginBottom: '2rem' }}>
          Contactez-nous pour une démonstration ou un déploiement
        </p>
        <div className="landing-contact" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#6b7280' }}>
            <i className="ti ti-mail" style={{ color: '#0f2d4a', fontSize: 18 }}></i>
            contact@jangoo.sn
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#6b7280' }}>
            <i className="ti ti-phone" style={{ color: '#0f2d4a', fontSize: 18 }}></i>
            +221 76 013 88 43
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <button style={ctaPrimary} onClick={goAction}>
            <i className={`ti ${btnIcon}`} style={{ marginRight: 6 }}></i>
            {isLoggedIn ? 'Mon tableau de bord' : 'Accéder à la plateforme'}
          </button>
        </div>
      </section>

      <footer style={footer}>
        &copy; {new Date().getFullYear()} Jangoo.sn. Tous droits réservés.
      </footer>
    </div>
  );
}

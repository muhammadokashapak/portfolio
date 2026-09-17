import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, Sun, Moon, Volume2, VolumeX, Sparkles, Zap, Award, Mic, ArrowUpRight } from 'lucide-react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TerminalModal from './components/TerminalModal';
import RecruiterModal from './components/RecruiterModal';
import VoiceCommandOverlay from './components/VoiceCommandOverlay';
import AiChatbot from './components/AiChatbot';
import LanguageSelector from './components/LanguageSelector';
import { playSound, isSoundMuted, setSoundMuted } from './utils/soundFx';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [soundMuted, setSoundMutedState] = useState(() => isSoundMuted());
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    playSound('click');
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    const nextState = !soundMuted;
    setSoundMutedState(nextState);
    setSoundMuted(nextState);
    if (!nextState) {
      playSound('success');
    }
  };

  const navItems = [
    { label: t('nav_about', 'About'), href: '#about' },
    { label: t('nav_expertise', 'Expertise'), href: '#expertise' },
    { label: t('nav_projects', 'Projects'), href: '#projects' },
    { label: t('nav_experience', 'Experience'), href: '#experience' },
    { label: t('nav_skills', 'Skills'), href: '#skills' },
    { label: t('nav_contact', 'Contact'), href: '#contact' },
  ];

  return (
    <>
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
      <RecruiterModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
      <VoiceCommandOverlay
        isOpen={voiceOpen}
        onClose={() => setVoiceOpen(false)}
        onOpenRecruiter={() => setRecruiterOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <AiChatbot />

      <nav className="glass-nav">
        <div className="nav-content">
          {/* Brand Logo (Desktop + Mobile) */}
          <a
            href="#hero"
            onClick={() => playSound('hover')}
            className="nav-brand-link"
          >
            <span className="nav-brand">
              Okasha<span style={{ color: 'var(--accent-color)' }}>.</span>
            </span>
            <span className="badge-neon" style={{ fontSize: '0.66rem', padding: '2px 7px' }}>
              <span className="pulse-dot" style={{ width: '5px', height: '5px', background: '#10b981', boxShadow: '0 0 8px #10b981' }} /> AI
            </span>
          </a>

          {/* Desktop Center Group: Section Links */}
          <div className="nav-links nav-links-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => playSound('hover')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Group: Action Suite */}
          <div className="nav-actions-desktop">
            {/* Multilingual Selector */}
            <LanguageSelector />

            {/* Voice Command Button */}
            <button
              onClick={() => {
                playSound('open');
                setVoiceOpen(true);
              }}
              className="sound-toggle-btn"
              title="Voice Control Mode"
              aria-label="Voice Command Mode"
            >
              <Mic size={15} />
            </button>

            {/* Recruiter Fast-Track Header Pill */}
            <button
              onClick={() => {
                playSound('open');
                setRecruiterOpen(true);
              }}
              style={{
                height: '36px',
                background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.16) 0%, rgba(79, 70, 229, 0.22) 100%)',
                border: '1px solid rgba(129, 140, 248, 0.35)',
                color: '#c7d2fe',
                padding: '0 13px',
                borderRadius: '18px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.2)'
              }}
              title="Open Recruiter 30-Second Executive Fast-Track"
            >
              <Zap size={14} color="#a5b4fc" /> <span>{t('nav_recruiter_brief', 'Recruiter Brief')}</span>
            </button>

            {/* Audio Sound Effects Toggle */}
            <button
              onClick={toggleSound}
              className="sound-toggle-btn"
              title={soundMuted ? "Unmute Sci-Fi UI Sounds" : "Mute Sci-Fi UI Sounds"}
              aria-label="Toggle Sound Effects"
            >
              {soundMuted ? <VolumeX size={15} color="var(--text-muted)" /> : <Volume2 size={15} color="var(--accent-hover)" />}
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={15} color="#fbbf24" />
              ) : (
                <Moon size={15} color="#7c3aed" />
              )}
            </button>

            {/* CLI Terminal Launcher */}
            <button
              onClick={() => {
                playSound('open');
                setTerminalOpen(true);
              }}
              style={{
                height: '36px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: 'var(--accent-alt)',
                padding: '0 13px',
                borderRadius: '18px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              <Terminal size={14} /> <span>{t('nav_cli', 'CLI')}</span>
            </button>

            {/* Resume Download */}
            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              onClick={() => playSound('click')}
              style={{
                height: '36px',
                background: 'linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)',
                border: '1px solid rgba(199, 210, 254, 0.35)',
                color: '#ffffff',
                padding: '0 16px',
                borderRadius: '18px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 14px rgba(79, 70, 229, 0.35)',
                textDecoration: 'none'
              }}
            >
              <FileText size={14} /> <span>{t('nav_resume', 'Resume')}</span>
            </a>
          </div>

          {/* Mobile Actions (Language + Theme + Audio + Hamburger) */}
          <div style={{ display: 'none' }} className="mobile-actions-wrapper">
            <LanguageSelector isMobile={true} />
            <button
              onClick={toggleSound}
              className="sound-toggle-btn"
              title={soundMuted ? "Unmute Sci-Fi UI Sounds" : "Mute Sci-Fi UI Sounds"}
              aria-label="Toggle Sound Effects"
            >
              {soundMuted ? <VolumeX size={15} color="var(--text-muted)" /> : <Volume2 size={15} color="var(--accent-color)" />}
            </button>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} color="#fbbf24" /> : <Moon size={15} color="#7c3aed" />}
            </button>
            <button
              className="nav-toggle"
              onClick={() => {
                playSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} color="var(--accent-color)" /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  playSound('hover');
                  setMobileMenuOpen(false);
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={14} color="var(--text-muted)" />
              </a>
            ))}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <button
                onClick={() => {
                  playSound('open');
                  setMobileMenuOpen(false);
                  setVoiceOpen(true);
                }}
                style={{
                  background: 'rgba(0, 255, 204, 0.15)',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)',
                  padding: '11px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <Mic size={16} /> <span>Voice Control Mode</span>
              </button>

              <button
                onClick={() => {
                  playSound('open');
                  setMobileMenuOpen(false);
                  setRecruiterOpen(true);
                }}
                style={{
                  background: 'linear-gradient(135deg, #00ffcc 0%, #38bdf8 100%)',
                  color: '#030308',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <Zap size={16} /> <span>{t('hero_cta_recruiter', 'Recruiter 30s Fast-Track')}</span>
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  onClick={() => {
                    playSound('open');
                    setMobileMenuOpen(false);
                    setTerminalOpen(true);
                  }}
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid var(--accent-alt)',
                    color: 'var(--accent-alt)',
                    padding: '11px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Terminal size={15} /> <span>{t('nav_cli', 'CLI')}</span>
                </button>

                <a
                  href="/Muhammad_Okasha_Resume.pdf"
                  download="Muhammad_Okasha_Resume.pdf"
                  onClick={() => playSound('click')}
                  style={{
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    padding: '11px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    textDecoration: 'none'
                  }}
                >
                  <FileText size={15} /> <span>{t('nav_resume', 'Resume')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenRecruiter={() => setRecruiterOpen(true)}
          theme={theme}
        />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* ── Ultra-Luxury Executive Footer ── */}
      <footer style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--card-border)',
        background: 'var(--bg-color)',
        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(12px, 3vw, 24px) 2rem',
        marginTop: '2rem',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.8rem', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', width: '100%' }}>
            <div style={{ maxWidth: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="nav-brand" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', fontWeight: 800 }}>
                  Muhammad Okasha<span style={{ color: 'var(--accent-color)' }}>.</span>
                </span>
                <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', fontSize: '0.72rem' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} /> Available for Hire
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginTop: '6px', maxWidth: '460px', lineHeight: 1.5 }}>
                {t('footer_text', 'Designed & engineered by Muhammad Okasha. Built for enterprise AI resilience & edge performance.')}
              </p>
            </div>

            {/* Footer Navigation Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(8px, 2vw, 14px)', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => playSound('hover')}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', fontWeight: 600, transition: 'color 0.2s', padding: '3px 0' }}
                >
                  {item.label}
                </a>
              ))}
              
              <button
                onClick={() => {
                  playSound('click');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--btn-sec-border)',
                  color: 'var(--accent-color)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                ↑ Top
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.25rem', width: '100%' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: '100%' }}>
              © 2026 Muhammad Okasha. Engineered with Neural Precision &amp; Distributed Architecture.
            </div>

            <div style={{ display: 'flex', gap: 'clamp(10px, 2.5vw, 16px)', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/muhammadokashapak" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600 }}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/muhammad-okasha23" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600 }}>
                LinkedIn
              </a>
              <a href="https://wa.me/923495696659" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 600 }}>
                WhatsApp
              </a>
              <a href="mailto:muhammad.okasha2146@gmail.com" style={{ color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 600 }}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1100px) {
          .mobile-actions-wrapper {
            display: flex !important;
            align-items: center;
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}

export default App;

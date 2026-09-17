import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Terminal, Zap, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import AudioPitchPlayer from './AudioPitchPlayer';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenTerminal, onOpenChat, onOpenRecruiter, theme = 'dark' }) {
  const { t } = useLanguage();
  const isLight = theme === 'light';

  const heroMetrics = [
    { num: "5,700+", label: t('hero_metric_1_label', 'Vector Embeddings Shipped') },
    { num: "<50ms", label: t('hero_metric_2_label', 'Real-Time RAG Latency') },
    { num: "100%", label: t('hero_metric_3_label', 'On-Device Neural Models') },
    { num: "250%", label: t('hero_metric_4_label', 'Search Revenue Surge') }
  ];

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100dvh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* High-Performance GPU Ambient Aurora Mesh (0% CPU, 120 FPS) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: 'clamp(300px, 45vw, 650px)',
          height: 'clamp(300px, 45vw, 650px)',
          background: isLight 
            ? 'radial-gradient(circle, rgba(79, 70, 229, 0.14) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, transparent 70%)',
          filter: 'blur(75px)',
          transform: 'translateZ(0)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: 'clamp(280px, 40vw, 550px)',
          height: 'clamp(280px, 40vw, 550px)',
          background: isLight 
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(75px)',
          transform: 'translateZ(0)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '35%',
          width: 'clamp(250px, 35vw, 500px)',
          height: 'clamp(250px, 35vw, 500px)',
          background: isLight 
            ? 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 70%)',
          filter: 'blur(65px)',
          transform: 'translateZ(0)',
          borderRadius: '50%'
        }} />
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        padding: '130px 20px 70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '960px' }}
        >
          {/* Status Badge */}
          <div 
            className="hero-status-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: isLight ? 'rgba(79, 70, 229, 0.06)' : 'rgba(99, 102, 241, 0.08)',
              border: `1px solid ${isLight ? 'rgba(79, 70, 229, 0.25)' : 'rgba(129, 140, 248, 0.28)'}`,
              padding: '6px 18px',
              borderRadius: '30px',
              marginBottom: '1.5rem',
              pointerEvents: 'auto',
              backdropFilter: 'blur(12px)',
              boxShadow: `0 4px 20px -4px ${isLight ? 'rgba(79, 70, 229, 0.12)' : 'rgba(99, 102, 241, 0.2)'}`
            }}
          >
            <span className="pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
            <span style={{ color: 'var(--accent-hover)', fontSize: '0.86rem', fontWeight: 600, letterSpacing: '0.3px' }}>
              {t('hero_status', 'Available for AI / ML Engineer & Solutions Architect Roles')}
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.1rem, 7vw, 4.8rem)', 
            marginBottom: '1.2rem', 
            textShadow: isLight ? '0 4px 20px rgba(0,0,0,0.06)' : '0 10px 40px rgba(0,0,0,0.7)', 
            wordBreak: 'break-word',
            letterSpacing: '-1px'
          }}>
            {t('hero_greeting_pre', "Hi, I'm")}{' '}
            <span className="gradient-text">{t('hero_name', 'Muhammad Okasha')}</span>
          </h1>

          {/* Subtitle / Roles */}
          <h2 style={{ 
            fontSize: 'clamp(1.05rem, 3.5vw, 2rem)', 
            color: 'var(--text-secondary)', 
            fontWeight: 400, 
            letterSpacing: '0.4px', 
            lineHeight: 1.4,
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{t('hero_role_1', 'AI Solutions Architect')}</span> &bull;{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{t('hero_role_2', 'Machine Learning Engineer')}</span> &bull;{' '}
            <span style={{ color: 'var(--accent-alt)', fontWeight: 600 }}>{t('hero_role_3', 'Full-Stack Systems Specialist')}</span>
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.92rem, 2vw, 1.08rem)',
            maxWidth: '720px',
            margin: '1.3rem auto 0',
            lineHeight: 1.65
          }}>
            {t('hero_bio', 'Architecting enterprise RAG pipelines, on-device neural edge models, and ultra-high performance AI ecosystems that turn complex intelligence into seamless reality.')}
          </p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-cta-group"
            style={{
              marginTop: 'clamp(2rem, 5vw, 2.8rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.1rem',
              pointerEvents: 'auto'
            }}
          >
            {/* VIP Recruiter Fast-Track Button */}
            <button
              onClick={() => {
                playSound('open');
                if (onOpenRecruiter) onOpenRecruiter();
              }}
              className="btn-primary"
              style={{
                background: 'linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)',
                color: '#ffffff',
                fontWeight: 700,
                border: '1px solid rgba(199, 210, 254, 0.35)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 8px 24px -4px rgba(79, 70, 229, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Zap size={18} /> {t('hero_cta_recruiter', 'Recruiter 30s Brief')}
            </button>

            <a 
              href="#projects" 
              className="btn-secondary"
              onClick={() => playSound('click')}
            >
              <Code2 size={18} color="var(--accent-color)" /> {t('hero_cta_projects', 'Explore Projects (10)')}
            </a>

            <a
              href="/Muhammad_Okasha_Resume.pdf"
              download="Muhammad_Okasha_Resume.pdf"
              className="btn-secondary"
              onClick={() => playSound('click')}
            >
              <FileText size={18} color="var(--accent-cyan)" />
              {t('hero_cta_resume', 'Resume PDF')}
            </a>

            <button
              onClick={() => {
                playSound('open');
                onOpenTerminal();
              }}
              className="btn-secondary"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.4)',
                background: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--accent-alt)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Terminal size={18} color="var(--accent-alt)" />
              {t('hero_cta_cli', 'Matrix CLI')}
            </button>
          </motion.div>

          {/* Interactive 15-Second Executive Audio Pitch */}
          <div style={{ pointerEvents: 'auto', width: '100%' }}>
            <AudioPitchPlayer />
          </div>

          {/* Live Impact Counters Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-metrics-grid"
            style={{
              marginTop: 'clamp(2.5rem, 6vw, 4.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '12px',
              maxWidth: '900px',
              width: '100%',
              pointerEvents: 'auto'
            }}
          >
            {heroMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="card hero-metric-card spotlight-card"
                onMouseEnter={() => playSound('hover')}
                style={{ 
                  padding: '16px 14px', 
                  borderRadius: '18px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
                  fontWeight: 900, 
                  color: 'var(--accent-color)', 
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.5px'
                }}>
                  {item.num}
                </div>
                <div style={{ 
                  fontSize: '0.76rem', 
                  color: 'var(--text-secondary)', 
                  fontWeight: 600, 
                  marginTop: '2px' 
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

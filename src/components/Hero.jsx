import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenTerminal, onOpenChat, onOpenRecruiter, theme = 'dark' }) {
  const { t } = useLanguage();
  const isLight = theme === 'light';

  const heroMetrics = [
    { num: "5,700+", label: t('hero_metric_1_label', 'Vector Embeddings Shipped'), sub: "FastEmbed ONNX & Vector Chunks" },
    { num: "<50ms", label: t('hero_metric_2_label', 'Real-Time RAG Latency'), sub: "Sub-second Query Processing" },
    { num: "10+", label: "Production Systems", sub: "Enterprise & Local Shipped" },
    { num: "100%", label: t('hero_metric_3_label', 'On-Device Neural Models'), sub: "Zero-cloud Local Edge Inference" }
  ];

  return (
    <section id="home" className="hero-section">
      {/* Subtle Ambient Studio Light */}
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
          top: '8%',
          right: '8%',
          width: 'clamp(350px, 45vw, 650px)',
          height: 'clamp(350px, 45vw, 650px)',
          background: isLight 
            ? 'radial-gradient(circle, rgba(79, 70, 229, 0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          filter: 'blur(85px)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: 'clamp(300px, 40vw, 550px)',
          height: 'clamp(300px, 40vw, 550px)',
          background: isLight 
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%'
        }} />
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 24px',
        zIndex: 1
      }}>
        {/* 2-Column Balanced Human Hero Layout */}
        <div className="hero-2col-layout">
          {/* Left Column: Human Story, Credentials & Clean Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-text-col"
          >
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-indicator-dot" />
              <span>{t('hero_status', 'Available for AI & Full-Stack Systems Roles')}</span>
            </div>

            {/* Name Heading */}
            <h1 className="hero-human-name">
              {t('hero_greeting_pre', "Hi, I'm")}{' '}
              <span className="hero-name-highlight">{t('hero_name', 'Muhammad Okasha')}</span>
            </h1>

            {/* Role Title */}
            <h2 className="hero-human-role">
              {t('hero_role_1', 'AI Solutions Architect')} &bull; {t('hero_role_3', 'Full-Stack Engineer')}
            </h2>

            {/* Clean Human Bio */}
            <p className="hero-human-bio">
              {t('hero_bio', 'I design and build high-performance web applications, scalable distributed systems, and real-time AI architectures. Dedicated to clean code, resilient infrastructure, and practical business impact.')}
            </p>

            {/* Clean 2-Button Action Suite */}
            <div className="hero-actions-suite">
              <a 
                href="#projects" 
                className="hero-primary-btn"
                onClick={() => playSound('click')}
              >
                <span>{t('hero_cta_projects', 'Explore Projects')}</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="/Muhammad_Okasha_Resume.pdf"
                download="Muhammad_Okasha_Resume.pdf"
                className="hero-secondary-btn"
                onClick={() => playSound('click')}
              >
                <FileText size={17} />
                <span>{t('hero_cta_resume', 'Resume PDF')}</span>
              </a>

              {onOpenRecruiter && (
                <button
                  onClick={() => {
                    playSound('open');
                    onOpenRecruiter();
                  }}
                  className="hero-tertiary-btn"
                  title="30-Second Recruiter Fast-Track"
                >
                  <Zap size={15} />
                  <span>Brief</span>
                </button>
              )}
            </div>

            {/* Human Metadata & Credentials */}
            <div className="hero-meta-strip">
              <div className="hero-meta-item">
                <span>📍</span>
                <span>Karachi, PK (UTC+5)</span>
              </div>
              <span className="meta-divider">•</span>
              <div className="hero-meta-item">
                <span>💼</span>
                <span>Open to Global Remote</span>
              </div>
              <span className="meta-divider">•</span>
              <div className="hero-meta-item">
                <span>🎓</span>
                <span>UET Peshawar (Systems Eng.)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Human Portrait & Studio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-portrait-col"
          >
            <div className="hero-portrait-card">
              <div className="hero-portrait-frame">
                <img
                  src="/profile.png"
                  alt="Muhammad Okasha - AI Solutions Architect"
                  className="hero-portrait-img"
                />
                <div className="hero-portrait-overlay" />
              </div>

              {/* Editorial Card Footer */}
              <div className="hero-card-meta">
                <div className="hero-card-header">
                  <div>
                    <div className="hero-card-title">Muhammad Okasha</div>
                    <div className="hero-card-subtitle">AI Solutions Architect & ML Engineer</div>
                  </div>
                  <div className="hero-verified-badge">
                    <span className="verified-dot" /> Active Systems
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="hero-tech-pills">
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>Vector DBs</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Horizontal Metric Anchor Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hero-metrics-bar"
        >
          {heroMetrics.map((item, idx) => (
            <div key={idx} className="hero-metric-item" onMouseEnter={() => playSound('hover')}>
              <div className="hero-metric-num">{item.num}</div>
              <div className="hero-metric-label">{item.label}</div>
              <div className="hero-metric-sub">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

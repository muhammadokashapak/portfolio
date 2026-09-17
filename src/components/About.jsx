import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Cpu, Clock, Zap, Layers, Globe } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "5,700+", label: t('hero_metric_1_label', 'Vector Chunks Indexed'), desc: t('about_stat_1_desc', 'FastEmbed ONNX & ChromaDB') },
    { value: "10+", label: t('proj_title_highlight', 'Production AI Systems'), desc: t('about_stat_2_desc', 'Enterprise RAG & Edge ML') },
    { value: "100%", label: t('hero_metric_3_label', 'On-Device Neural Models'), desc: t('about_stat_3_desc', 'Whisper INT8 + MarianMT') },
    { value: "250%", label: t('hero_metric_4_label', 'Search Revenue Surge'), desc: t('about_stat_4_desc', 'Automated Intent Routing') }
  ];

  const education = [
    {
      degree: t('about_edu_1_degree', 'B.E. Computer Systems Engineering'),
      school: t('about_edu_1_school', 'UET Peshawar'),
      period: t('about_edu_1_period', 'Oct 2022 – Present'),
      icon: "🎓",
      badge: t('about_edu_1_badge', 'Major in AI & Systems'),
      highlights: t('about_edu_1_highlights', 'Deep Learning, Edge Inference & Distributed Architectures')
    },
    {
      degree: t('about_edu_2_degree', 'Intermediate in Pre-Engineering'),
      school: t('about_edu_2_school', 'APSACS Secretariat, Attock'),
      period: t('about_edu_2_period', 'Aug 2020 – Jun 2022'),
      icon: "📚",
      badge: t('about_edu_2_badge', 'Top Academic Tier'),
      highlights: t('about_edu_2_highlights', 'Advanced Mathematics & Analytical Physics')
    }
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> {t('about_tag', 'Background & Vision')}
          </div>
          <h2 className="section-title">
            {t('about_title_pre', 'About')}{' '}
            <span className="gradient-text">{t('about_title_post', 'Muhammad Okasha')}</span>
          </h2>
          <p className="section-subtitle">
            {t('about_subtitle', 'Bridging cutting-edge Generative AI research, on-device edge intelligence, and resilient software systems.')}
          </p>
        </div>

        {/* ── Top Bio + Profile Row ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }}
          className="about-top-row"
        >
          {/* Profile Photo with Radiant Neon Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(190px, 45vw, 240px)', height: 'clamp(190px, 45vw, 240px)' }}>
              {/* VIP Ambient Studio Backlight Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 75%)',
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />
              {/* Outer Precision Hairline Rim */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(99, 102, 241, 0.2) 100%)',
                  zIndex: 1
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '2px',
                  borderRadius: '50%',
                  background: 'var(--bg-color)',
                  zIndex: 2
                }}
              />
              <img
                src="/profile.png"
                alt="Muhammad Okasha"
                style={{
                  position: 'absolute',
                  inset: '5px',
                  borderRadius: '50%',
                  width: 'calc(100% - 10px)',
                  height: 'calc(100% - 10px)',
                  objectFit: 'cover',
                  zIndex: 3,
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-bio-container"
          >
            <h3 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: '0.3rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              {t('hero_name', 'Muhammad Okasha')}
            </h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              {t('hero_role_1', 'AI Solutions Architect')} &amp; {t('hero_role_2', 'Machine Learning Engineer')}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, maxWidth: '680px' }}>
              {t('about_bio_p1', 'I am a Computer Systems Engineer specializing in Enterprise Generative AI, Multimodal RAG Architectures, and On-Device Neural Edge Inference.')}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, maxWidth: '680px', marginTop: '0.8rem' }}>
              {t('about_bio_p2', 'From building ChatGPT-grade enterprise RAG engines indexing 5,700+ vector chunks to deploying quantized INT8 Whisper models and YOLO vision systems on edge microcontrollers, I design architectures that translate complex ML research into high-impact production systems.')}
            </p>

            <div className="about-badges" style={{ display: 'flex', gap: '1.4rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent-color)" />
                {t('about_status_loc', 'Islamabad / Peshawar, PK')}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Globe size={16} color="var(--accent-cyan)" />
                {t('about_local_time', 'Local Time (PKT)')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bento Grid Section ── */}
        <div className="bento-grid" style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          
          {/* Card 1: Core Architecture Pillars (Span 8) */}
          <div
            className="bento-card bento-col-8 spotlight-card"
            onMouseEnter={() => playSound('hover')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <Zap size={20} color="var(--accent-color)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                {t('exp_tag', 'Architectural DNA & Core Focus')}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              {t('exp_subtitle', 'Specialized in high-throughput enterprise pipelines and on-device neural acceleration. Designed for mission-critical reliability across healthcare, conversational voice, and automated intelligence.')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '12px' }}>
                <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Layers size={14} /> {t('exp_1_title', 'Multimodal RAG')}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                  {t('exp_1_desc', 'Hybrid dense/sparse embeddings, ChromaDB, FastEmbed & RRF ranking.')}
                </div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '12px' }}>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Cpu size={14} /> {t('exp_2_title', 'Edge Neural ML')}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                  {t('exp_2_desc', 'Quantized INT8 weights, offline Whisper & MarianMT on Android/ESP32.')}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Live Time & Availability (Span 4) */}
          <div
            className="bento-card bento-col-4 spotlight-card"
            onMouseEnter={() => playSound('hover')}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t('about_local_time', 'Local Time (PKT)')}
                </span>
                <Clock size={16} color="var(--accent-color)" />
              </div>
              <div style={{ fontSize: '1.9rem', fontWeight: 900, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-color)' }}>
                {currentTime || '09:00:00 AM'}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '4px' }}>
                Islamabad, Pakistan (UTC+5)
              </div>
            </div>

            <div style={{ marginTop: '1.4rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <span style={{ color: '#10b981', fontSize: '0.86rem', fontWeight: 700 }}>
                  {t('hero_status', 'Available for AI / ML Roles')}
                </span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '4px' }}>
                Full-Time &amp; Enterprise Architecture
              </div>
            </div>
          </div>

          {/* Card 3: Four Metrics Strip (Span 12) */}
          <div className="bento-col-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="card spotlight-card"
                onMouseEnter={() => playSound('hover')}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '1.6rem 1rem', borderRadius: '18px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.3rem',
                    letterSpacing: '-1px'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 700 }}>
                  {stat.label}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '4px' }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Card 4: Academic Foundations (Span 12) */}
          <div className="bento-card bento-col-12 spotlight-card" onMouseEnter={() => playSound('hover')}>
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-primary)'
              }}
            >
              <GraduationCap color="var(--accent-color)" size={24} />
              {t('about_edu_title', 'Academic Foundations & Credentials')}
            </h3>

            <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ fontSize: '2rem', lineHeight: 1 }}>{edu.icon}</div>
                  <div>
                    <span className="badge-neon" style={{ fontSize: '0.7rem', display: 'inline-block', marginBottom: '4px' }}>
                      {edu.badge}
                    </span>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem', marginTop: '4px' }}>{edu.highlights}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '2px' }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .about-top-row {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-badges {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

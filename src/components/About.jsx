import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Cpu, Clock, Zap, Layers, Globe, CheckCircle2 } from 'lucide-react';
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

  const education = [
    {
      degree: t('about_edu_1_degree', 'B.E. Computer Systems Engineering'),
      school: t('about_edu_1_school', 'UET Peshawar'),
      period: t('about_edu_1_period', 'Oct 2022 – Present'),
      badge: t('about_edu_1_badge', 'Major in AI & Systems'),
      highlights: t('about_edu_1_highlights', 'Deep Learning, Edge Inference & Distributed Architectures')
    },
    {
      degree: t('about_edu_2_degree', 'Intermediate in Pre-Engineering'),
      school: t('about_edu_2_school', 'APSACS Secretariat, Attock'),
      period: t('about_edu_2_period', 'Aug 2020 – Jun 2022'),
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
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> {t('about_tag', 'Background & Philosophy')}
          </div>
          <h2 className="section-title">
            {t('about_title_pre', 'About My')}{' '}
            <span className="gradient-text">{t('about_title_post', 'Engineering Practice')}</span>
          </h2>
          <p className="section-subtitle">
            {t('about_subtitle', 'Bridging cutting-edge Generative AI research, on-device edge intelligence, and resilient software systems.')}
          </p>
        </div>

        {/* ── Balanced 2-Column About Grid ── */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '32px',
            alignItems: 'stretch',
            width: '100%'
          }}
          className="about-balanced-grid"
        >
          {/* Left Column: Philosophy & Core Architectural Pillars */}
          <div className="card spotlight-card" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                <div style={{
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  padding: '8px',
                  borderRadius: '12px',
                  color: 'var(--accent-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Zap size={20} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                  {t('exp_tag', 'Architectural DNA & Engineering Focus')}
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {t('about_bio_p1', 'I am a Computer Systems Engineer specializing in Enterprise Generative AI, Multimodal RAG Architectures, and On-Device Neural Edge Inference. My engineering philosophy centers on low-latency, privacy-first AI pipelines capable of operating in air-gapped, zero-cloud environments as smoothly as in massive distributed vector clusters.')}
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '1.6rem' }}>
                {t('about_bio_p2', 'From building ChatGPT-grade enterprise RAG engines indexing 5,700+ vector chunks to deploying quantized INT8 Whisper models and YOLO vision systems on edge microcontrollers, I design architectures that translate complex ML research into high-impact production systems.')}
              </p>
            </div>

            {/* Core Pillars Subcards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: 'auto' }}>
              <div style={{ background: 'var(--btn-sec-bg)', border: '1px solid var(--btn-sec-border)', borderRadius: '16px', padding: '16px' }}>
                <div style={{ color: 'var(--accent-hover)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={16} /> {t('exp_1_title', 'Multimodal RAG & Vector Search')}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px', lineHeight: 1.5 }}>
                  {t('exp_1_desc', 'Hybrid dense/sparse embeddings, ChromaDB, FastEmbed & Reciprocal Rank Fusion (RRF).')}
                </div>
              </div>

              <div style={{ background: 'var(--btn-sec-bg)', border: '1px solid var(--btn-sec-border)', borderRadius: '16px', padding: '16px' }}>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={16} /> {t('exp_2_title', 'Edge Neural Inference')}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px', lineHeight: 1.5 }}>
                  {t('exp_2_desc', 'Quantized INT8 weights, offline Whisper & MarianMT on Android & ESP32.')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Clock & Academic Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
            {/* Live Clock & Availability Card */}
            <div className="card spotlight-card" style={{ padding: 'clamp(1.4rem, 3vw, 1.8rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t('about_local_time', 'Local Time (PKT)')}
                </span>
                <Clock size={16} color="var(--accent-hover)" />
              </div>

              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--accent-hover)', letterSpacing: '-1px' }}>
                {currentTime || '09:00:00 AM'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.86rem', marginTop: '6px' }}>
                <MapPin size={14} color="var(--accent-hover)" />
                <span>Islamabad / Peshawar, Pakistan (UTC+5)</span>
              </div>

              <div style={{ marginTop: '1.4rem', paddingTop: '1.2rem', borderTop: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-indicator-dot" />
                  <span style={{ color: '#10b981', fontSize: '0.86rem', fontWeight: 700 }}>
                    {t('hero_status', 'Available for AI & Systems Roles')}
                  </span>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Full-Time &amp; Consulting</span>
              </div>
            </div>

            {/* Academic Foundations & Credentials */}
            <div className="card spotlight-card" style={{ padding: 'clamp(1.4rem, 3vw, 1.8rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                <div style={{
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  padding: '8px',
                  borderRadius: '12px',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GraduationCap size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                  {t('about_edu_title', 'Academic Foundations')}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {education.map((edu, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--btn-sec-bg)',
                      border: '1px solid var(--btn-sec-border)',
                      borderRadius: '14px',
                      padding: '12px 14px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                      <h4 style={{ fontSize: '0.94rem', color: 'var(--text-primary)', fontWeight: 700, margin: 0 }}>
                        {edu.degree}
                      </h4>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <div style={{ color: 'var(--accent-hover)', fontSize: '0.82rem', fontWeight: 600 }}>{edu.school}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '3px' }}>{edu.highlights}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 960px) {
          .about-balanced-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

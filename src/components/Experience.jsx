import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, BookMarked, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('work_exp_1_role', 'Artificial Intelligence Intern'),
      company: "BIT BUILD",
      location: "Peshawar, Pakistan",
      duration: t('work_exp_1_period', 'Oct 2025 – Feb 2026'),
      type: "Work",
      color: "#6366f1",
      icon: <TrendingUp size={22} />,
      highlights: ["250% Revenue Surge", "20+ Campaigns", "C-Suite Reporting"],
      points: [
        t('work_exp_1_p1', 'Acted as a strategic partner to senior leadership, leveraging AI and data analytics to radically transform digital marketing campaigns.'),
        t('work_exp_1_p2', 'Engineered automated reporting pipelines that visualized performance across 20+ global campaigns, enabling rapid A/B testing and precision targeting.'),
        t('work_exp_1_p3', 'Delivered high-level, actionable insights directly to the C-suite, which streamlined operations and fueled a remarkable 250% surge in search revenue.')
      ]
    },
    {
      role: t('work_exp_2_role', 'Deep Learning BootCamp'),
      company: "NAVTTC",
      location: "Peshawar, Pakistan",
      duration: t('work_exp_2_period', 'Mar 2025 – Jun 2025'),
      type: "Training",
      color: "#8b5cf6",
      icon: <BookMarked size={22} />,
      highlights: ["CNNs & LSTM", "End-to-End Projects", "Model Deployment"],
      points: [
        t('work_exp_2_p1', 'Immersed in an intensive, hands-on environment focused on modern deep learning techniques, including Convolutional Neural Networks (CNNs).'),
        t('work_exp_2_p2', 'Architected and deployed end-to-end real-world projects, bridging the gap between theoretical algorithms and practical software engineering.'),
        t('work_exp_2_p3', 'Honed expertise in full-cycle model development: from data preprocessing and training to rigorous evaluation and deployment.')
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> {t('work_tag', 'Career Milestones')}
          </div>
          <h2 className="section-title">
            {t('work_title_pre', 'Professional')}{' '}
            <span className="gradient-text">{t('work_title_highlight', 'Experience & Training')}</span>
          </h2>
          <p className="section-subtitle">
            {t('work_subtitle', 'Proven track record in deploying revenue-generating AI solutions and mastering modern deep learning architectures.')}
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className="card exp-card spotlight-card"
        style={{
          borderLeft: `3px solid ${exp.color}`,
          cursor: 'pointer',
          padding: '0'
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Card Header */}
        <div className="exp-header" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flex: 1 }}>
            {/* Icon Badge */}
            <div className="exp-icon-badge" style={{
              width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
              background: `${exp.color}18`,
              border: `1px solid ${exp.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: exp.color
            }}>
              {exp.icon}
            </div>

            {/* Title & Company */}
            <div>
              <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                {exp.role}
              </h3>
              <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>
                {exp.company}
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}> · {exp.location}</span>
              </p>
            </div>
          </div>

          {/* Right: Duration + Type badge + expand arrow */}
          <div className="exp-right-meta" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              background: `${exp.color}18`, color: exp.color,
              border: `1px solid ${exp.color}40`,
              padding: '3px 10px', borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px'
            }}>
              {exp.type}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{exp.duration}</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
          </div>
        </div>

        {/* Highlight chips */}
        <div className="exp-highlights" style={{ padding: '0 1.5rem 1.2rem', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {exp.highlights.map((h, i) => (
            <span
              key={i}
              style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                color: 'var(--text-secondary)',
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '8px',
                fontWeight: 600
              }}
            >
              ✦ {h}
            </span>
          ))}
        </div>

        {/* Expandable detailed bullet points */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', borderTop: '1px solid var(--card-border)' }}
            >
              <ul style={{
                padding: '1.2rem 1.5rem 1.5rem 2.8rem',
                margin: 0,
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.8
              }}>
                {exp.points.map((pt, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

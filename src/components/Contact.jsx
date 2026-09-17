import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ExternalLink,
  Download
} from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = (text, type) => {
    playSound('success');
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    playSound('success');
    setSentStatus(true);

    const email = "muhammad.okasha2146@gmail.com";
    const subject = encodeURIComponent(formData.subject || `AI Architecture Project Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);

    // Open Web Gmail in new tab for seamless compose
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    // Mailto fallback
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 300);
  };

  return (
    <section id="contact" style={{ position: 'relative', borderTop: '1px solid var(--card-border)', marginTop: 'clamp(3rem, 6vw, 6rem)', padding: 'clamp(2.5rem, 5vw, 5rem) 0 2rem 0', overflow: 'hidden', width: '100%', maxWidth: '100vw', boxSizing: 'border-box' }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(800px, 95vw)',
        height: 'min(700px, 95vw)',
        background: 'radial-gradient(circle, var(--accent-gradient-color-2, rgba(139,92,246,0.12)) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, padding: '0 clamp(12px, 3vw, 24px)', maxWidth: '1240px', width: '100%', boxSizing: 'border-box' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="section-header" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)', padding: '0 8px' }}>
            <div className="section-tag">
              <Sparkles size={14} /> {t('contact_tag', 'Initiate Transmission')}
            </div>
            <h2 className="section-title">
              {t('contact_title_pre', "Let's Build")}{' '}
              <span className="gradient-text">{t('contact_title_highlight', 'Something Extraordinary')}</span>
            </h2>
            <p className="section-subtitle">
              {t('contact_subtitle', 'Available for full-time AI/ML Engineer roles, high-impact architectural consulting, and collaborative research.')}
            </p>
          </div>

          {/* ── 2-Column Executive Contact Bento Grid ── */}
          <div className="contact-bento-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            gap: 'clamp(1.2rem, 3vw, 2.2rem)',
            alignItems: 'stretch',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            width: '100%',
            boxSizing: 'border-box'
          }}>

            {/* ── Left Column: Direct Info & Quick Action Cards ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', height: '100%', width: '100%', boxSizing: 'border-box' }}>
              
              {/* Primary Direct Card: Email */}
              <div 
                className="card contact-action-card spotlight-card" 
                style={{
                  padding: 'clamp(1.1rem, 3vw, 1.4rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  borderRadius: '20px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0, flex: '1 1 200px' }}>
                  <div style={{
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(129, 140, 248, 0.28)',
                    padding: '10px',
                    borderRadius: '14px',
                    color: 'var(--accent-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Primary Email
                    </div>
                    <a 
                      href="mailto:muhammad.okasha2146@gmail.com" 
                      style={{ 
                        color: 'var(--text-primary)', 
                        fontWeight: 700, 
                        fontSize: 'clamp(0.8rem, 2.4vw, 0.96rem)',
                        display: 'block',
                        wordBreak: 'break-all',
                        overflowWrap: 'anywhere',
                        marginTop: '2px'
                      }}
                    >
                      muhammad.okasha2146@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('muhammad.okasha2146@gmail.com', 'email')}
                  className="contact-card-btn"
                  style={{
                    background: copiedEmail ? 'rgba(16, 185, 129, 0.18)' : 'var(--btn-sec-bg)',
                    border: `1px solid ${copiedEmail ? 'rgba(16, 185, 129, 0.4)' : 'var(--btn-sec-border)'}`,
                    color: copiedEmail ? 'var(--accent-emerald)' : 'var(--text-primary)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div 
                className="card contact-action-card spotlight-card" 
                style={{
                  padding: 'clamp(1.1rem, 3vw, 1.4rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  borderRadius: '20px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0, flex: '1 1 200px' }}>
                  <div style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '10px',
                    borderRadius: '14px',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Direct Phone / WhatsApp
                    </div>
                    <a 
                      href="https://wa.me/923495696659" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'var(--text-primary)', 
                        fontWeight: 700, 
                        fontSize: 'clamp(0.85rem, 2.4vw, 0.96rem)',
                        display: 'block',
                        marginTop: '2px'
                      }}
                    >
                      +92 349 5696659
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+923495696659', 'phone')}
                  className="contact-card-btn"
                  style={{
                    background: copiedPhone ? 'rgba(16, 185, 129, 0.18)' : 'var(--btn-sec-bg)',
                    border: `1px solid ${copiedPhone ? 'rgba(16, 185, 129, 0.4)' : 'var(--btn-sec-border)'}`,
                    color: copiedPhone ? 'var(--accent-emerald)' : 'var(--text-primary)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Resume Card (High-Impact VIP Glow) */}
              <div 
                className="card contact-action-card spotlight-card" 
                style={{
                  padding: 'clamp(1.1rem, 3vw, 1.4rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.85rem',
                  flexWrap: 'wrap',
                  borderRadius: '20px',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  background: 'rgba(99, 102, 241, 0.05)',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0, flex: '1 1 200px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                    padding: '10px',
                    borderRadius: '14px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
                  }}>
                    <FileText size={20} color="#fff" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Official Curriculum Vitae
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '0.94rem', marginTop: '1px' }}>
                      Muhammad Okasha Resume
                    </div>
                  </div>
                </div>

                <a
                  href="/Muhammad_Okasha_Resume.pdf"
                  download="Muhammad_Okasha_Resume.pdf"
                  onClick={() => playSound('click')}
                  className="btn-primary contact-card-btn"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.82rem',
                    borderRadius: '12px',
                    flexShrink: 0,
                    justifyContent: 'center'
                  }}
                >
                  <Download size={14} /> Download PDF
                </a>
              </div>

              {/* Interactive Live Google Maps Location Card */}
              <div 
                className="card spotlight-card" 
                style={{
                  padding: 'clamp(1rem, 3vw, 1.3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '22px',
                  marginTop: 'auto',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  background: 'var(--btn-sec-bg)',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0, flex: 1 }}>
                    <div style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      padding: '8px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={16} color="var(--accent-alt)" />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '0.9rem', wordBreak: 'break-word' }}>
                        Ghauri Town, Islamabad, Pakistan
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '1px' }}>
                        PKT (UTC+5) • Open for Global Remote &amp; On-Site
                      </div>
                    </div>
                  </div>

                  <span className="badge-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 7px', fontSize: '0.68rem', flexShrink: 0 }}>
                    <span className="pulse-dot" style={{ width: '5px', height: '5px' }} /> Live Coordinates
                  </span>
                </div>

                {/* Embedded Interactive Google Map */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '160px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)'
                }}>
                  <iframe
                    title="Muhammad Okasha Location - Ghauri Town Islamabad"
                    src="https://maps.google.com/maps?q=Ghauri%20Town%2C%20Islamabad%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      display: 'block'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Map Action Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px', paddingTop: '2px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Lat: 33.6261° N, Long: 73.1198° E
                  </span>
                  <a
                    href="https://maps.google.com/?q=Ghauri+Town+Islamabad+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click')}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--accent-alt)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right Column: Direct Message Dispatch Cockpit ── */}
            <div
              className="card spotlight-card"
              style={{
                padding: 'clamp(1.2rem, 3.5vw, 2.2rem)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.3rem' }}>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  padding: '8px',
                  borderRadius: '10px',
                  color: 'var(--accent-alt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageSquare size={17} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '-0.3px' }}>
                  {t('contact_tag', 'Direct Message Transmission')}
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                {t('contact_subtitle', 'Fill out the brief scope below to immediately transmit your project specs to my primary inbox.')}
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', boxSizing: 'border-box' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%' }} className="contact-form-row">
                  <div style={{ width: '100%' }}>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                      {t('contact_name_label', 'YOUR NAME *')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '12px',
                        padding: '10px 12px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                    />
                  </div>

                  <div style={{ width: '100%' }}>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                      {t('contact_email_label', 'YOUR EMAIL *')}
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--btn-sec-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '12px',
                        padding: '10px 12px',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                    />
                  </div>
                </div>

                <div style={{ width: '100%' }}>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {t('contact_subject_label', 'PROJECT SCOPE / TOPIC')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise RAG Assistant / Machine Learning Model"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--btn-sec-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>

                <div style={{ width: '100%' }}>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {t('contact_msg_label', 'MESSAGE DETAILS *')}
                  </label>
                  <textarea
                    placeholder="Describe your vision, timeline, or technical requirements..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--btn-sec-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '12px',
                    borderRadius: '14px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    marginTop: '2px',
                    boxSizing: 'border-box'
                  }}
                >
                  {sentStatus ? (
                    <>
                      <Check size={17} /> {t('contact_sending', 'Opening Mail Client...')}
                    </>
                  ) : (
                    <>
                      <Send size={17} /> {t('contact_submit', 'Transmit Message')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .social-hover-btn:hover {
          border-color: var(--accent-color) !important;
          background: rgba(0, 255, 204, 0.08) !important;
          transform: translateY(-2px);
          color: var(--accent-color) !important;
        }
        @media (max-width: 960px) {
          .contact-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-action-card {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .contact-card-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

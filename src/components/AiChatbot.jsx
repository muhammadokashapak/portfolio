import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  User, 
  Sparkles, 
  X, 
  Send, 
  RefreshCw, 
  ArrowRight, 
  FileText, 
  ExternalLink,
  Layers,
  Zap,
  CheckCircle2,
  Database,
  Cpu,
  CornerDownLeft
} from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { queryKnowledgeBase } from '../data/okashaKnowledge';

const QUICK_PROMPTS = [
  "⚡ What is the GHL RAG architecture?",
  "🎙️ How does the Sales Voice Co-Pilot work in real-time?",
  "📱 Tell me about his 100% On-Device Video Translator",
  "🎓 What are the features of Apex Digital School OS?",
  "🏥 How does the Hospital Clinical Care ERP work?",
  "🩺 Tell me about MedPrep Pro & FCPS Engine",
  "🛠️ Which AI, Deep Learning & Full-Stack tools does he use?",
  "📄 How can I download his resume or contact him?"
];

const cleanText = (txt) => {
  if (!txt) return '';
  return txt.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '');
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hello! I'm Okasha AI, Muhammad's personal executive knowledge assistant.\n\nI have instant access to his 10 production systems, RAG architectures, on-device neural models, and experience. What would you like to explore?",
      source: "System Knowledge Base",
      actions: [
        { label: "⚡ GHL RAG (5.7k Chunks)", prompt: "Tell me about GHL RAG architecture" },
        { label: "🎙️ Sales Voice Co-Pilot", prompt: "How does Sales Voice Co-Pilot work?" },
        { label: "🎬 Offline Video Translator", prompt: "Explain Offline Video Translator Android App" },
        { label: "📄 Download Resume", href: "/Muhammad_Okasha_Resume.pdf", download: true }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);
  const lastUserMessageRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.sender === 'ai' && messages.length > 1) {
      // Align the START of the USER's QUESTION cleanly to the top of the viewport
      setTimeout(() => {
        if (lastUserMessageRef.current) {
          lastUserMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (queryText) => {
    const q = queryText || input;
    if (!q || !q.trim()) return;

    playSound('click');
    const userMsg = { id: Date.now(), sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Query the Neural Knowledge Base
    setTimeout(() => {
      const retrieved = queryKnowledgeBase(q);
      playSound('success');

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: cleanText(retrieved.answer),
        source: cleanText(retrieved.chunk ? retrieved.chunk.title : (retrieved.source || "Okasha Neural Index")),
        actions: retrieved.actionChips || []
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    playSound('click');
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: "👋 Chat refreshed! Ask me anything about Muhammad's AI architectures, deep learning models, full-stack systems, or credentials.",
        source: "System Knowledge Base",
        actions: [
          { label: "Explore 10 Projects", href: "#projects" },
          { label: "Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true }
        ]
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <motion.button
        onClick={() => {
          playSound(isOpen ? 'close' : 'open');
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9990,
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          border: '1px solid var(--card-border)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '30px',
          padding: '10px 18px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), 0 0 15px rgba(99, 102, 241, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          cursor: 'pointer',
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          fontSize: '0.86rem',
          letterSpacing: '0.1px'
        }}
        className="ai-widget-trigger-btn"
        aria-label="Open Assistant Widget"
      >
        <Sparkles size={16} color="var(--accent-hover)" />
        <span>Ask Assistant</span>
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#10b981',
            display: 'inline-block'
          }}
        />
      </motion.button>

      {/* Interactive AI Chat Drawer / Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            style={{
              position: 'fixed',
              bottom: '86px',
              right: '20px',
              width: 'min(440px, calc(100vw - 32px))',
              height: 'min(620px, 82vh)',
              zIndex: 9995,
              background: 'var(--modal-bg)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid var(--modal-border)',
              borderRadius: '24px',
              boxShadow: 'var(--modal-shadow)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Widget Top Header */}
            <div
              style={{
                padding: '14px 18px',
                borderBottom: '1px solid var(--card-border)',
                background: 'var(--glass-nav-bg)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '12px',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)'
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Okasha AI <span style={{ fontSize: '0.72rem', background: 'rgba(0, 255, 204, 0.1)', color: 'var(--accent-color)', padding: '2px 7px', borderRadius: '8px', border: '1px solid rgba(0, 255, 204, 0.3)' }}>RAG v4.2</span>
                  </h3>
                  <p style={{ fontSize: '0.74rem', color: '#10b981', margin: 0, display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                    Indexed Knowledge Engine Online
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  style={{
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--btn-sec-border)',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  <RefreshCw size={14} />
                </button>
                <button
                  onClick={() => {
                    playSound('close');
                    setIsOpen(false);
                  }}
                  title="Close Assistant"
                  style={{
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--btn-sec-border)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {messages.map((m, idx) => {
                const isLastUser = m.sender === 'user' && idx === messages.map(x => x.sender).lastIndexOf('user');
                return (
                  <div
                    key={m.id}
                    ref={isLastUser ? lastUserMessageRef : null}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '100%',
                      scrollMarginTop: '12px'
                    }}
                  >
                  {/* Source Attribution Tag (For AI answers) */}
                  {m.sender === 'ai' && m.source && (
                    <div style={{
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      <Database size={11} color="var(--accent-color)" /> {m.source}
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    style={{
                      maxWidth: '90%',
                      padding: '12px 16px',
                      borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      background:
                        m.sender === 'user'
                          ? 'var(--accent-gradient)'
                          : 'var(--btn-sec-bg)',
                      color: m.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                      border: m.sender === 'user' ? 'none' : '1px solid var(--card-border)',
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      fontWeight: m.sender === 'user' ? 600 : 400,
                      wordBreak: 'break-word',
                      whiteSpace: 'pre-line',
                      boxShadow: m.sender === 'user' ? '0 4px 15px rgba(0, 255, 204, 0.2)' : 'none'
                    }}
                  >
                    {m.text}
                  </div>

                  {/* Interactive Action Chips */}
                  {m.actions && m.actions.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                      {m.actions.map((act, idx) => {
                        if (act.prompt) {
                          return (
                            <button
                              key={idx}
                              onClick={() => handleSend(act.prompt)}
                              style={{
                                background: 'rgba(0, 255, 204, 0.08)',
                                border: '1px solid rgba(0, 255, 204, 0.3)',
                                color: 'var(--accent-color)',
                                padding: '5px 11px',
                                borderRadius: '12px',
                                fontSize: '0.76rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                transition: 'all 0.2s'
                              }}
                            >
                              {act.label} <ArrowRight size={12} />
                            </button>
                          );
                        }

                        return (
                          <a
                            key={idx}
                            href={act.href}
                            target={act.external ? '_blank' : undefined}
                            rel={act.external ? 'noopener noreferrer' : undefined}
                            download={act.download ? true : undefined}
                            onClick={() => {
                              playSound('click');
                              if (act.href && act.href.startsWith('#')) {
                                setIsOpen(false);
                              }
                            }}
                            style={{
                              background: 'var(--btn-sec-bg)',
                              border: '1px solid var(--btn-sec-border)',
                              color: 'var(--text-primary)',
                              padding: '5px 11px',
                              borderRadius: '12px',
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'all 0.2s'
                            }}
                          >
                            {act.label} {act.download ? <FileText size={12} /> : <ArrowRight size={12} />}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)', animation: 'pulse 1s infinite' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'pulse 1s infinite 0.2s' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-alt)', animation: 'pulse 1s infinite 0.4s' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '4px' }}>Querying neural chunks...</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div
              style={{
                padding: '8px 12px',
                background: 'var(--glass-nav-bg)',
                borderTop: '1px solid var(--card-border)',
                overflowX: 'auto',
                display: 'flex',
                gap: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              {QUICK_PROMPTS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  style={{
                    background: 'var(--btn-sec-bg)',
                    border: '1px solid var(--btn-sec-border)',
                    color: 'var(--text-secondary)',
                    padding: '5px 12px',
                    borderRadius: '14px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.2s'
                  }}
                  className="quick-prompt-btn"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{
                padding: '12px 16px',
                background: 'var(--card-bg)',
                borderTop: '1px solid var(--card-border)',
                display: 'flex',
                gap: '10px'
              }}
            >
              <input
                type="text"
                placeholder="Ask Okasha AI anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--btn-sec-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  padding: '9px 14px',
                  borderRadius: '14px',
                  fontSize: '0.88rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--accent-gradient)',
                  border: 'none',
                  color: '#fff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 255, 204, 0.3)'
                }}
                title="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .quick-prompt-btn:hover {
          background: rgba(0, 255, 204, 0.12) !important;
          border-color: var(--accent-color) !important;
          color: var(--accent-color) !important;
        }
        @media (max-width: 480px) {
          .ai-widget-trigger-btn {
            bottom: 14px !important;
            right: 14px !important;
            padding: 9px 14px !important;
            font-size: 0.82rem !important;
          }
        }
      `}</style>
    </>
  );
}

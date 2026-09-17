import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, Sparkles, X, Check, ArrowRight, Zap } from 'lucide-react';
import { playSound } from '../utils/soundFx';

export default function VoiceCommandOverlay({ 
  isOpen, 
  onClose, 
  onOpenRecruiter, 
  onOpenTerminal, 
  onToggleTheme,
  currentTheme 
}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('Click microphone or speak a command...');
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      setFeedback('Voice recognition is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setFeedback('Listening for voice commands...');
      playSound('open');
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      setFeedback(`Voice error: ${event.error}. Click mic to retry.`);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let current = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        current += event.results[i][0].transcript;
      }
      setTranscript(current);
      processVoiceCommand(current.toLowerCase());
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  const processVoiceCommand = (cmd) => {
    if (cmd.includes('project') || cmd.includes('work') || cmd.includes('system')) {
      executeAction('Navigating to Featured Systems...', () => {
        window.location.hash = '#projects';
      });
    } else if (cmd.includes('rag') || cmd.includes('simulator') || cmd.includes('lab')) {
      executeAction('Opening RAG Pipeline Simulator...', () => {
        window.location.hash = '#rag-simulator';
      });
    } else if (cmd.includes('recruiter') || cmd.includes('brief') || cmd.includes('cheat sheet')) {
      executeAction('Opening Recruiter 30-Second Fast-Track...', () => {
        if (onOpenRecruiter) onOpenRecruiter();
      });
    } else if (cmd.includes('terminal') || cmd.includes('cli') || cmd.includes('matrix')) {
      executeAction('Launching Cyber Matrix CLI Terminal...', () => {
        if (onOpenTerminal) onOpenTerminal();
      });
    } else if (cmd.includes('resume') || cmd.includes('cv') || cmd.includes('download')) {
      executeAction('Triggering Official Resume PDF Download...', () => {
        window.open('/Muhammad_Okasha_Resume.pdf', '_blank');
      });
    } else if (cmd.includes('light mode') || cmd.includes('dark mode') || cmd.includes('theme')) {
      executeAction('Toggling Visual Theme Mode...', () => {
        if (onToggleTheme) onToggleTheme();
      });
    } else if (cmd.includes('contact') || cmd.includes('hire') || cmd.includes('email') || cmd.includes('call')) {
      executeAction('Scrolling to Direct Contact & Coordinates...', () => {
        window.location.hash = '#contact';
      });
    } else if (cmd.includes('topology') || cmd.includes('architecture') || cmd.includes('graph')) {
      executeAction('Opening System Architecture Graph...', () => {
        window.location.hash = '#architecture-graph';
      });
    } else if (cmd.includes('benchmark') || cmd.includes('performance') || cmd.includes('metric')) {
      executeAction('Navigating to Performance Benchmarks Matrix...', () => {
        window.location.hash = '#benchmarks';
      });
    } else if (cmd.includes('calculator') || cmd.includes('roi') || cmd.includes('cost') || cmd.includes('scope')) {
      executeAction('Opening System Scope & ROI Calculator...', () => {
        window.location.hash = '#roi-calculator';
      });
    }
  };

  const executeAction = (msg, callback) => {
    playSound('success');
    setFeedback(`✓ ${msg}`);
    setTimeout(() => {
      callback();
      onClose();
    }, 1200);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    playSound('click');
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      setFeedback('Listening... Speak a command');
      try {
        recognitionRef.current.start();
      } catch (e) {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-backdrop"
        onClick={() => {
          if (recognitionRef.current) try { recognitionRef.current.stop(); } catch(e){}
          playSound('close');
          onClose();
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'rgba(3, 4, 12, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)'
        }}
      >
        <motion.div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '580px',
            borderRadius: '26px',
            background: 'var(--modal-bg)',
            border: '1.5px solid var(--accent-color)',
            boxShadow: '0 0 50px rgba(0, 255, 204, 0.3), var(--modal-shadow)',
            padding: 'clamp(1.5rem, 4vw, 2.2rem)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            zIndex: 100000
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-neon" style={{ padding: '3px 10px', fontSize: '0.74rem' }}>
                <Sparkles size={12} /> AI Voice Control
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {isListening ? '🟢 Live Mic Streaming' : 'Standby'}
              </span>
            </div>

            <button
              onClick={() => {
                if (recognitionRef.current) try { recognitionRef.current.stop(); } catch(e){}
                playSound('close');
                onClose();
              }}
              style={{
                background: 'var(--btn-sec-bg)',
                border: '1px solid var(--btn-sec-border)',
                color: 'var(--text-primary)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Central Glowing Mic Orb */}
          <div style={{ position: 'relative', margin: '1rem 0' }}>
            {isListening && (
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  position: 'absolute',
                  inset: -15,
                  borderRadius: '50%',
                  background: 'var(--accent-color)',
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />
            )}

            <button
              onClick={toggleListening}
              style={{
                position: 'relative',
                zIndex: 1,
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: isListening ? 'var(--accent-gradient)' : 'var(--btn-sec-bg)',
                border: `2px solid ${isListening ? 'var(--accent-hover)' : 'var(--card-border)'}`,
                color: isListening ? '#ffffff' : 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: isListening ? '0 0 35px rgba(99, 102, 241, 0.55)' : 'none',
                transition: 'all 0.3s'
              }}
            >
              {isListening ? <Mic size={36} color="#fff" /> : <MicOff size={34} />}
            </button>
          </div>

          {/* Status Feedback */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
              {isListening ? 'Listening to your command...' : 'Voice Control Standby'}
            </h3>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', minHeight: '24px' }}>
              {feedback}
            </p>
          </div>

          {/* Live Transcript Bubble */}
          {transcript && (
            <div style={{
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--btn-sec-border)',
              padding: '10px 16px',
              borderRadius: '16px',
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              fontSize: '0.88rem',
              maxWidth: '100%'
            }}>
              "{transcript}"
            </div>
          )}

          {/* Quick Example Voice Chips */}
          <div style={{ width: '100%', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '8px' }}>
              TRY SAYING:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
              {[
                "Show me projects",
                "Open RAG simulator",
                "Recruiter brief",
                "Download resume",
                "Launch terminal",
                "Toggle theme",
                "Contact Okasha"
              ].map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTranscript(cmd);
                    processVoiceCommand(cmd.toLowerCase());
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-secondary)',
                    borderRadius: '12px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  "{cmd}"
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

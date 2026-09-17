import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft, Sparkles, Gamepad2 } from 'lucide-react';
import { playSound } from '../utils/soundFx';
import { queryKnowledgeBase } from '../data/okashaKnowledge';

const COMMANDS = [
  'help', 'projects', 'ghl', 'sales', 'translator', 'school',
  'hospital', 'medprep', 'medconnect', 'chashm', 'shina', 'toxicity',
  'stats', 'skills', 'whoami', 'resume', 'contact', 'matrix', 'snake', 'clear', 'exit'
];

export default function TerminalModal({ isOpen, onClose, onTriggerMatrix }) {
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [history, setHistory] = useState([
    { text: '⚡ OKASHA AI NEURAL TERMINAL v4.2.0 [ONLINE]', type: 'system' },
    { text: 'Type "help" for commands, "matrix" for cyber rain, or ask any natural question directly.', type: 'info' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [history, isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      playSound('close');
      onClose();
      return;
    }

    // Arrow Up / Down for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      playSound('hover');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
      playSound('hover');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = COMMANDS.find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
        playSound('hover');
      }
    }
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = input.trim();
    if (!rawCmd) return;

    playSound('click');
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { text: `okasha@ai-core:~$ ${rawCmd}`, type: 'input' }];

    // Direct 'ask <query>' command or questions
    if (cmd.startsWith('ask ')) {
      const query = rawCmd.substring(4);
      const result = queryKnowledgeBase(query);
      newHistory.push({
        text: `🤖 [NEURAL KNOWLEDGE ENGINE]:\n${result.answer}`,
        type: 'output'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: '═══════════════ AVAILABLE COMMANDS ═══════════════', type: 'system' },
          { text: '  projects     - List all 10 production AI & systems projects', type: 'output' },
          { text: '  ghl          - GoHighLevel Enterprise RAG (5,717 Chunks, Gemini 3.7)', type: 'output' },
          { text: '  sales        - Real-Time Sales Voice Co-Pilot & Intent Decider (<50ms)', type: 'output' },
          { text: '  translator   - 100% On-Device AI Video & Subtitle Translator (Android)', type: 'output' },
          { text: '  school       - Apex Digital School OS & Socratic AI Tutor', type: 'output' },
          { text: '  hospital     - Clinical Care & Hospital Management ERP', type: 'output' },
          { text: '  medprep      - MedPrep Pro & FCPS Medical Licensure Engine', type: 'output' },
          { text: '  medconnect   - Med Connect Telemedicine Network', type: 'output' },
          { text: '  chashm       - CHASHM AI Assistive Smart Headset (YOLO INT8 + ESP32)', type: 'output' },
          { text: '  shina        - Shina NLP Linguistic Deep Learning Architecture', type: 'output' },
          { text: '  toxicity     - Toxicity Sentinel & Social Media Moderation', type: 'output' },
          { text: '  matrix       - 🟢 Trigger Fullscreen Digital Matrix Rain Mode', type: 'system' },
          { text: '  snake        - 🐍 Launch Terminal Arcade Snake Game', type: 'system' },
          { text: '  ask <query>  - Ask the neural knowledge engine directly', type: 'output' },
          { text: '  stats        - Live system metrics & performance indicators', type: 'output' },
          { text: '  skills       - Core technology matrix & competencies', type: 'output' },
          { text: '  whoami       - Engineer bio & architectural philosophy', type: 'output' },
          { text: '  resume       - Trigger official Resume PDF download', type: 'output' },
          { text: '  contact      - Direct communication channels & socials', type: 'output' },
          { text: '  clear / cls  - Reset terminal window', type: 'output' },
          { text: '  exit / quit  - Close terminal window', type: 'output' }
        );
        break;

      case 'matrix':
        newHistory.push({ text: '🟢 INITIALIZING CYBER MATRIX PROTOCOL...', type: 'system' });
        if (onTriggerMatrix) {
          onTriggerMatrix();
        }
        break;

      case 'snake':
        newHistory.push({ text: '🐍 [SNAKE ARCADE ACTIVE]: Use arrow keys in your browser or commands to navigate. Score: 120 pts [SIMULATED]. Type "help" to resume console.', type: 'system' });
        break;

      case 'projects':
      case 'ls':
      case 'dir':
        newHistory.push(
          { text: 'ACTIVE ENGINEERING REPOSITORY (10 Production Systems):', type: 'system' },
          { text: '  1. [ghl]        - GoHighLevel Enterprise RAG (FastAPI + ChromaDB 5.7k Chunks)', type: 'output' },
          { text: '  2. [sales]      - Sub-50ms Real-Time Voice Intelligence (Whisper + Ollama + HUD)', type: 'output' },
          { text: '  3. [translator] - 100% On-Device Whisper INT8 + MarianMT Android Player', type: 'output' },
          { text: '  4. [school]     - Apex Digital School OS & Socratic AI Engine (5 Portals)', type: 'output' },
          { text: '  5. [hospital]   - Cross-Platform Clinical Operations & Patient EHR Ledger', type: 'output' },
          { text: '  6. [medprep]    - AI Medical Licensure Exam Platform (10k+ Clinical MCQs)', type: 'output' },
          { text: '  7. [medconnect] - Telehealth Network & Specialist Consultation Hub', type: 'output' },
          { text: '  8. [chashm]     - CHASHM AI Assistive Smart Headset (Quantized YOLO on ESP32-CAM)', type: 'output' },
          { text: '  9. [shina]      - Shina NLP Hybrid LSTM/CNN Deep Learning for Endangered Dialects', type: 'output' },
          { text: ' 10. [toxicity]   - Toxicity Sentinel NLP Content Safety & Moderation (10k req/sec)', type: 'output' }
        );
        break;

      case 'ghl':
        newHistory.push({
          text: `⚡ GOHIGHLEVEL (GHL) ENTERPRISE RAG PLATFORM
Architecture: Enterprise ChatGPT-Grade AI Cockpit for GHL Developers & SaaS Architects
• Vector Database: 5,717 semantic chunks indexing REST API v2 & OAuth 2.0 specs in ChromaDB
• Embedding Pipeline: FastEmbed ONNX (nomic-embed-text-v1.5) with sub-150ms embedding latency
• Retrieval Strategy: Reciprocal Rank Fusion (RRF) combining dense vectors with exact token match
• Multimodal Ingestion: Clipboard OCR screenshot inspection, voice note waveform audio transcription
• Real-Time Output: Gemini 3.7 Flash with Server-Sent Events (SSE) token typewriter streaming
• Impact: Zero-hallucination workflow code generation, OAuth token exchange, and custom webhook solutions`,
          type: 'output'
        });
        break;

      case 'sales':
        newHistory.push({
          text: `🎙️ SALES VOICE CO-PILOT & REAL-TIME RAG
Architecture: Sub-50ms Voice AI Sales Intelligence & Psychological Intent Classifier
• Live Audio Ingestion: Browser tab and mic audio capture over WebRTC & WebSockets
• Local Speech-to-Text: On-device OpenAI Whisper STT with Voice Activity Detection (VAD)
• Intent Classification: Local Ollama LLM classifies hesitation (Budget, Authority, Skepticism)
• Battlecard Retrieval: ChromaDB vector query latency under 50ms with proven closing pitches
• Stealth Interface: Ultra-compact floating transparent Zoom HUD and secret whisper TTS earpiece cues
• Impact: Closes live objections without awkward pauses or screen-share visibility`,
          type: 'output'
        });
        break;

      case 'translator':
        newHistory.push({
          text: `🎬 OFFLINE AI VIDEO & SUBTITLE TRANSLATOR (ANDROID)
Architecture: 100% On-Device Neural Video Subtitling & Translation Native Android App
• On-Device STT: Quantized INT8 OpenAI Whisper speech recognition running on ONNX Runtime
• Machine Translation: Autoregressive MarianMT / OPUS-MT seq2seq models (English to Urdu, Spanish, etc.)
• Media Player Engine: Google Media3 ExoPlayer with binary search timestamp subtitle synchronization
• Local Persistence: Room SQLite caching ensuring media files are transcribed exactly once
• Privacy & Cost: 0 KB cloud data transfer, zero internet dependency, and zero recurring API costs`,
          type: 'output'
        });
        break;

      case 'school':
      case 'apex':
        newHistory.push({
          text: `🎓 APEX DIGITAL SCHOOL OPERATING SYSTEM
Architecture: Unified 5-Portal School Management ERP & Socratic AI Learning Engine
• Role-Based Access: Dedicated portals for Student, Teacher, Parent, Admin, and Finance with RBAC
• AI Socratic Tutor: Step-by-step diagnostic tutor with XP streaks, answer review, and automated quiz generation
• Live Virtual Studio: WebRTC virtual classroom with real-time collaborative whiteboard and class messaging
• Document Generation: Cryptographic PDF marksheet and student transcript generator with automated GPA calculation
• Administrative Suite: 360 Parent fee ledger tracking, automated receipts, and bus GPS route status`,
          type: 'output'
        });
        break;

      case 'hospital':
      case 'erp':
        newHistory.push({
          text: `🏥 CLINICAL CARE & HOSPITAL MANAGEMENT ERP
Architecture: Enterprise Hospital Administration, Patient EHR & Pharmacy Billing Suite
• Centralized EHR: Sanitized electronic health records tracking patient histories, vitals, and lab reports
• Clinical Inpatient/Outpatient: Real-time OPD/IPD ward allocation, bed occupancy logs, and nurse handovers
• Pharmacy POS: Inventory tracking with batch expiration warnings, low-stock triggers, and supplier reordering
• Cross-Platform: Built with React & FastAPI, compiled natively for Android tablets and Windows desktop via Capacitor
• Clinical Security: Strict compliance-ready access controls separating doctors, nurses, and billing staff`,
          type: 'output'
        });
        break;

      case 'medprep':
      case 'fcps':
        newHistory.push({
          text: `🩺 MEDPREP PRO & FCPS MEDICAL LICENSURE ENGINE
Architecture: AI Medical Licensure Exam Platform with 10,000+ High-Yield Clinical MCQs
• Question Bank: Clinical questions across Anatomy, Physiology, Pathology, Pharmacology, Surgery, Medicine
• Clinical Reasoning: In-depth pathophysiological explanations and textbook references for every option
• Exam Simulator: Configurable timed examination modes featuring official negative marking rules
• Spaced Repetition: Intelligent algorithms tracking user mistake patterns to resurface weak clinical topics
• Distribution: Standalone Windows executable installer (.exe) via PyInstaller and native Android APK`,
          type: 'output'
        });
        break;

      case 'medconnect':
      case 'telehealth':
        newHistory.push({
          text: `🌐 MED CONNECT TELEMEDICINE NETWORK
Architecture: Decentralized Telehealth & Doctor-Patient Consultation Network
• Specialist Directory: Search and filter verified medical specialists by specialty, fees, and ratings
• Live Scheduling: Real-time appointment booking with instant calendar slot reservation
• Digital Prescriptions: Automated electronic prescription issuance with dosage schedules and pharmacy sync
• Encrypted Health Vault: Secure cloud repository for diagnostic reports with permissioned physician access`,
          type: 'output'
        });
        break;

      case 'chashm':
      case 'chashm-ai':
      case 'glasses':
        newHistory.push({
          text: `👁️ CHASHM AI ASSISTIVE SMART HEADSET
Architecture: Edge Computer Vision & Spatial Audio Navigation for the Visually Impaired
• Edge Video Stream: Wireless ESP32-CAM module streaming ultra-low latency MJPEG video over WebSockets
• Quantized Neural Model: Custom INT8 quantized YOLO (.tflite) performing sub-30ms obstacle detection
• 3D Audio Navigation: Directional Text-to-Speech (TTS) alerts (e.g. 'Obstacle ahead, 1.5m right')
• Caretaker Console: Real-time browser telemetry dashboard with bounding box visualizer and proximity logs`,
          type: 'output'
        });
        break;

      case 'shina':
      case 'nlp':
        newHistory.push({
          text: `📜 SHINA NLP LINGUISTIC DEEP LEARNING ENGINE
Architecture: Deep Learning Architecture for Regional Endangered Shina Language Preservation
• Linguistic Corpus: First standardized computational text corpus for Shina with morphological normalization
• Custom Embeddings: Domain-specific dense vector matrices capturing regional phonetic variations
• Neural Architecture: Hybrid Bidirectional LSTM and 1D-CNN contextual representation network
• Benchmark Accuracy: Achieved 94%+ F1 classification benchmark score across regional dialects and sentiment`,
          type: 'output'
        });
        break;

      case 'toxicity':
      case 'sentinel':
        newHistory.push({
          text: `🛡️ TOXICITY SENTINEL & NLP MODERATION ENGINE
Architecture: High-Throughput Content Safety & Hate Speech Detection Microservice
• High Capacity: Async FastAPI gateway handling 10,000 requests/second with sub-5ms latency
• Text Normalization: Regex slang expansion, lemmatization, and customized stop-word tuning
• Multi-Label Classifier: N-gram TF-IDF vectorization with ensemble classifiers (Insult, Threat, Toxic)
• Precision Metric: 98.2% detection precision with an ultra-low false-positive rate on noisy social streams`,
          type: 'output'
        });
        break;

      case 'stats':
        newHistory.push({
          text: `📊 VERIFIED PRODUCTION METRICS & BENCHMARKS:
• 5,717+ ChromaDB Vector Chunks Shipped in Production
• <50ms Real-Time RAG Battlecard Retrieval Latency
• 100% On-Device Neural Model Execution (Whisper INT8 + MarianMT)
• 250% Search Revenue Surge Driven at Bit Build
• 10+ Production AI, Embedded Vision & Full-Stack Systems Deployed
• 94%+ F1 Benchmark Accuracy on Regional NLP Models`,
          type: 'output'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `⚡ TECHNICAL MASTERY & TOOL ARSENAL:
• Generative AI & RAG: Gemini 3.7 Flash, ChromaDB, FastEmbed ONNX, LangChain, LlamaIndex, Ollama
• Deep Learning & Edge AI: PyTorch, TensorFlow, Whisper INT8, MarianMT, YOLOv8 .tflite, OpenCV, ONNX Runtime
• Full-Stack & Systems: FastAPI (Async), React 19/18, WebSockets, WebRTC, SSE, Jetpack Compose, SQLite WAL, Docker
• Databases & Storage: PostgreSQL, SQLite WAL, Redis Caching, Room SQLite`,
          type: 'output'
        });
        break;

      case 'whoami':
        newHistory.push({
          text: `Muhammad Okasha | AI Solutions Architect & Machine Learning Engineer
• Base: Islamabad, Pakistan (PKT UTC+5)
• Education: B.E. Computer Systems Engineering, UET Peshawar (2022 – Present)
• Specialization: Enterprise Multimodal RAG, On-Device Edge AI, High-Throughput Distributed Microservices
• Track Record: 10+ Production systems shipped, 250% search revenue surge delivered`,
          type: 'output'
        });
        break;

      case 'resume':
      case 'cv':
        newHistory.push({
          text: '📄 Downloading Muhammad_Okasha_Resume.pdf...',
          type: 'system'
        });
        window.open('/Muhammad_Okasha_Resume.pdf', '_blank');
        break;

      case 'contact':
        newHistory.push({
          text: '📫 DIRECT CONTACT CHANNELS:\n• Email: muhammad.okasha2146@gmail.com\n• Phone: +92 3495696659\n• Location: Islamabad, Pakistan (PKT UTC+5)',
          type: 'output'
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        // Automatically query the Neural Knowledge Base for natural language questions
        const fallbackResult = queryKnowledgeBase(rawCmd);
        newHistory.push({
          text: `🤖 [NEURAL KNOWLEDGE RESPONSE]:\n${fallbackResult.answer}`,
          type: 'output'
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'rgba(3, 3, 10, 0.88)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)'
        }}
        onClick={() => {
          playSound('close');
          onClose();
        }}
      >
        <motion.div
          className="modal-dialog terminal-modal-dialog crt-scanlines"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '860px',
            maxHeight: '85vh',
            borderRadius: '24px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 100000
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(0, 255, 204, 0.25)',
              paddingBottom: '0.8rem',
              marginBottom: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-hover)', marginLeft: '8px', fontWeight: 600 }}>
                okasha@neural-terminal: ~ (bash v4.2)
              </span>
            </div>

            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#f8fafc',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(244, 63, 94, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
              title="Close Terminal (Esc)"
            >
              <X size={16} />
            </button>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              maxHeight: '440px',
              overflowY: 'auto',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.86rem',
              lineHeight: 1.65,
              color: '#f1f5f9',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              paddingRight: '8px'
            }}
          >
            {history.map((item, idx) => {
              if (item.type === 'input') {
                return (
                  <div key={idx} style={{ color: '#38bdf8', fontWeight: 600 }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'system') {
                return (
                  <div key={idx} style={{ color: '#fbbf24', fontWeight: 600, whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'error') {
                return (
                  <div key={idx} style={{ color: '#f43f5e', whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'info') {
                return (
                  <div key={idx} style={{ color: '#94a3b8', whiteSpace: 'pre-line' }}>
                    {item.text}
                  </div>
                );
              }
              return (
                <div key={idx} style={{ color: '#f8fafc', whiteSpace: 'pre-line' }}>
                  {item.text}
                </div>
              );
            })}

            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleCommand}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid rgba(0, 255, 204, 0.2)',
              paddingTop: '0.9rem',
              marginTop: '1rem',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            <span style={{ color: 'var(--accent-hover)', fontSize: '0.9rem', flexShrink: 0, fontWeight: 700 }}>
              okasha@ai-core:~$
            </span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. chashm, ghl, projects, help)..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                outline: 'none',
                caretColor: 'var(--accent-hover)'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(129, 140, 248, 0.5)',
                color: 'var(--accent-hover)',
                borderRadius: '8px',
                padding: '5px 10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Execute Command"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

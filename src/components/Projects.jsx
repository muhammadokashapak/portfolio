import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Mic, 
  Video, 
  GraduationCap, 
  Hospital, 
  Stethoscope, 
  HeartHandshake, 
  Glasses, 
  Languages, 
  ShieldAlert,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export const allProjects = [
  {
    id: "ghl-rag",
    title: "GHL Enterprise RAG & Multimodal AI",
    subtitle: "Enterprise GoHighLevel RAG Platform with Gemini 3.7 & ChromaDB",
    category: "GenAI & RAG",
    status: "Production Ready",
    icon: <Bot size={26} color="#6366f1" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "5,717+", label: "Indexed Vector Chunks" },
      { val: "<150ms", label: "FastEmbed ONNX Latency" },
      { val: "100%", label: "API v2 & OAuth 2.0 Coverage" }
    ],
    pipeline: [
      "REST API & Docs Scraper",
      "FastEmbed ONNX Vectorizer",
      "ChromaDB (5,717 Chunks)",
      "Gemini 3.7 Multimodal",
      "Typewriter SSE Stream"
    ],
    tags: ["Gemini 3.7 Flash", "ChromaDB", "FastEmbed ONNX", "FastAPI", "Multimodal Vision", "SSE Stream", "SQLite WAL"],
    description: "Enterprise ChatGPT-Grade AI Cockpit powered by Gemini 3.7 Flash and a hybrid ChromaDB vector store indexing 5,717 chunks of official GoHighLevel specs, REST API v2, and OAuth 2.0. Supports clipboard screenshot analysis, voice notes, and document ingestion.",
    deepOverview: "Engineered a high-throughput hybrid RAG architecture using nomic-embed-text-v1.5 running on ONNX runtime for sub-second embeddings. Combines Reciprocal Rank Fusion (RRF) with exact entity token matching. Features a pixel-perfect 1:1 ChatGPT Dark UI with Server-Sent Events (SSE) word streaming, clipboard paste vision inspection, voice note waveforms, and complete GHL workflows architecture solutions.",
    features: [
      "5,717 vector chunks indexed in ChromaDB with zero hallucination fallback",
      "Multimodal document, clipboard image OCR, and audio notes processing",
      "Real-time token typewriter stream via SSE and FastAPI async gateway",
      "Direct GHL REST API v2, Webhooks, and custom Front-End deliverables"
    ]
  },
  {
    id: "sales-copilot",
    title: "Sales Voice Co-Pilot & Real-Time RAG",
    subtitle: "Sub-50ms Voice AI Sales Intelligence & Intent Decider",
    category: "GenAI & RAG",
    status: "Active System",
    icon: <Mic size={26} color="#38bdf8" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "<50ms", label: "Battlecard Retrieval" },
      { val: "Live", label: "Zoom & Meet Tab Capture" },
      { val: "Local", label: "Ollama LLM + Whisper STT" }
    ],
    pipeline: [
      "Zoom/Meet WebRTC Audio",
      "Local Whisper STT",
      "Psychological Intent Decider",
      "ChromaDB Sub-50ms Vector RAG",
      "Floating Zoom HUD"
    ],
    tags: ["FastAPI", "WebSockets", "Local Whisper STT", "Ollama LLM", "ChromaDB", "WebRTC", "Zoom HUD"],
    description: "Real-time voice intelligence co-pilot capturing live audio from Google Meet and Zoom tabs. Transcribes speaker audio with local Whisper and retrieves objection-handling battlecards within 50ms, giving reps secret in-ear cues.",
    deepOverview: "Built a complete real-time local sales assistance pipeline. Using WebSockets and WebRTC, the system listens to client objections during sales meetings, classifies psychological intent, searches internal vector knowledge bases, and provides instant closing pitches and tactical Do's/Don'ts through an ultra-compact floating Zoom HUD overlay.",
    features: [
      "Live microphone and browser tab audio capture with noise suppression",
      "Sub-second local LLM intent classification (Objection vs Budget vs Skepticism)",
      "Floating transparent HUD overlay designed for screen share stealth",
      "Whisper-guided text-to-speech whisper cues directly into earphone feed"
    ]
  },
  {
    id: "offline-video-translator",
    title: "Offline AI Video & Subtitle Translator",
    subtitle: "100% On-Device Neural Video Subtitling & Translation Android App",
    category: "Vision & On-Device AI",
    status: "100% On-Device",
    icon: <Video size={26} color="#8b5cf6" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "0 KB", label: "Cloud Data Used" },
      { val: "INT8", label: "Quantized Whisper ONNX" },
      { val: "4+", label: "Offline Language Pairs" }
    ],
    pipeline: [
      "Media File Input",
      "INT8 Whisper with VAD",
      "MarianMT Seq2Seq Translation",
      "Media3 ExoPlayer Sync",
      "Room Database Cache"
    ],
    tags: ["Android Kotlin", "Jetpack Compose", "OpenAI Whisper ONNX", "MarianMT Seq2Seq", "Media3 ExoPlayer", "Room SQLite"],
    description: "Native Android media player that transcribes and translates video/audio files into synchronized multi-lingual subtitles completely offline with pre-bundled neural models — zero cloud APIs and zero subscription costs.",
    deepOverview: "Architected an end-to-end edge AI pipeline on Android. Utilizes OpenAI Whisper quantized to INT8 with Voice Activity Detection (VAD) alongside MarianMT / OPUS-MT seq2seq models running on ONNX Runtime. Bundles Media3 ExoPlayer with binary-search subtitle synchronization and Room SQLite caching so media is never transcribed twice.",
    features: [
      "Zero internet connection required; all neural models run directly on mobile hardware",
      "Accurate speech-to-text with VAD filtering and neural seq2seq translation (Urdu, Spanish, etc.)",
      "Modern Material 3 Jetpack Compose UI with playback speed, aspect ratio, and gesture controls",
      "Room database caching for instant replay of previously processed subtitles"
    ]
  },
  {
    id: "apex-school",
    title: "Apex Digital School Operating System",
    subtitle: "Next-Gen School Management ERP & Socratic AI Education Platform",
    category: "Full-Stack & Systems",
    status: "Production Grade",
    icon: <GraduationCap size={26} color="#fbbf24" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "5 Portals", label: "Role-Based Access (RBAC)" },
      { val: "Live", label: "Collaborative Whiteboard" },
      { val: "Instant", label: "PDF Marksheets & Transcripts" }
    ],
    pipeline: [
      "Role-Based RBAC Gateway",
      "Socratic AI Tutor Engine",
      "Live Classroom Studio",
      "Gradebook Assessment Suite",
      "Cryptographic PDF Export"
    ],
    tags: ["React 18", "Vite", "AI Socratic Tutor", "Glassmorphism", "Dynamic Analytics", "PDF Engine"],
    description: "Unified AI-powered education operating system featuring 5 role-based portals (Student, Teacher, Parent, Admin, Finance), live virtual broadcast studios with collaborative whiteboards, automated marksheet PDF generators, and Socratic AI diagnostic tutors.",
    deepOverview: "Engineered a robust multi-role educational management suite. Includes interactive student quiz hubs with XP streaks and answer review modes, teacher digital roll-call and rubric grading workspaces, parent 360° fee pipelines and GPS tracking, and an AI education engine that generates custom quizzes and predictive at-risk student analytics.",
    features: [
      "Comprehensive Role-Based Access Control (RBAC) across 5 distinct user portals",
      "Interactive quizzes with real-time countdown, score breakdowns, and answer rationales",
      "Live virtual studio with real-time collaborative whiteboard and chat",
      "Instant official PDF transcript and marksheet export with cryptographic stamps"
    ]
  },
  {
    id: "hospital-erp",
    title: "Clinical Care & Hospital Management ERP",
    subtitle: "Enterprise Hospital Administration, EHR & Billing Suite",
    category: "HealthTech & EdTech",
    status: "Cross-Platform",
    icon: <Hospital size={26} color="#10b981" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "Full Suite", label: "OPD, IPD & Pharmacy" },
      { val: "EHR", label: "Electronic Health Records" },
      { val: "Multi-OS", label: "Android & Desktop Native" }
    ],
    pipeline: [
      "Patient EHR Central Ledger",
      "OPD/IPD Bed Allocation",
      "Automated Prescription Engine",
      "Pharmacy POS & Expiry Tracker",
      "Capacitor Native Deployment"
    ],
    tags: ["React", "FastAPI", "Capacitor", "TailwindCSS", "PostgreSQL/SQLite", "Role Security"],
    description: "Enterprise hospital management platform supporting electronic health records (EHR), multi-specialty doctor appointment scheduling, OPD/IPD inpatient admission workflows, pharmacy inventory tracking, and point-of-sale billing pipelines.",
    deepOverview: "Designed a high-reliability clinical management system built for high-throughput hospitals. Features sanitized medical record storage, automated prescription formatting, real-time bed occupancy monitoring, pharmacy batch tracking, and native multi-platform compilation for both desktop and mobile hospital tablets.",
    features: [
      "Comprehensive Patient EHR ledger with diagnostics, prescriptions, and lab history",
      "OPD/IPD ward management, bed allocation, and nurse handover logs",
      "Pharmacy POS inventory tracking with low-stock warnings and batch expiration audits",
      "Cross-platform Capacitor packaging for native Android and desktop deployments"
    ]
  },
  {
    id: "medprep-pro",
    title: "MedPrep Pro & FCPS Medical Exam Engine",
    subtitle: "AI-Powered Medical Licensure & Clinical MCQ Preparation Engine",
    category: "HealthTech & EdTech",
    status: "Deployed Suite",
    icon: <Stethoscope size={26} color="#10b981" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "10,000+", label: "High-Yield Medical MCQs" },
      { val: "100%", label: "Clinical Rationale & Refs" },
      { val: "Native", label: "Desktop EXE & Android" }
    ],
    pipeline: [
      "10k+ MCQ Clinical Bank",
      "Spaced Repetition Algorithm",
      "Timed Exam Simulation Engine",
      "Pathophysiology Rationale Matrix",
      "Windows EXE & Android Native"
    ],
    tags: ["Python", "Vite", "React", "PyInstaller", "Capacitor", "SQLite", "Clinical Explanations"],
    description: "Medical licensure and FCPS examination platform packed with thousands of high-yield clinical MCQs, topic-wise diagnostic breakdowns, timed exam simulation engines, and in-depth pathophysiological explanations.",
    deepOverview: "Built for MBBS students and FCPS postgraduate aspirants. Combines structured question banks with intelligent spaced-repetition algorithms, detailed anatomical and pharmacological rationales, custom revision filters, and native offline installer builds for Windows and Android.",
    features: [
      "Massive question bank covering Anatomy, Physiology, Pathology, Surgery & Medicine",
      "Timed examination simulation with real-time negative marking and score projection",
      "Interactive answer review mode showing detailed clinical reasoning for each option",
      "Offline desktop standalone installer (.exe) and Android native APK"
    ]
  },
  {
    id: "med-connect",
    title: "Med Connect Telemedicine Network",
    subtitle: "Decentralized Telehealth & Doctor-Patient Consultation Network",
    category: "HealthTech & EdTech",
    status: "Integrated Platform",
    icon: <HeartHandshake size={26} color="#f43f5e" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "24/7", label: "Doctor Appointment Dispatch" },
      { val: "Instant", label: "Digital Prescription Sync" },
      { val: "Secure", label: "Encrypted Health Data" }
    ],
    pipeline: [
      "Specialist Discovery Directory",
      "Encrypted Health Vault",
      "Real-Time Slot Reservation",
      "Digital Prescription Dispatch",
      "Live Telehealth Hub"
    ],
    tags: ["React", "Node.js", "WebSockets", "Express", "Secure Telehealth"],
    description: "Modern telehealth collaboration network connecting patients with licensed physicians, facilitating instantaneous video consultations, electronic prescription dispatch, and encrypted diagnostic report exchange.",
    deepOverview: "Provides a friction-free healthcare bridge. Enables smart doctor discovery by specialty, calendar availability booking, live consultation rooms, and a unified health passport for patients to store laboratory findings securely.",
    features: [
      "Specialist doctor directory with verified credential badges and reviews",
      "Real-time calendar booking and appointment slot reservation",
      "Digital prescription issuance and automated medicine schedule reminders",
      "Encrypted patient health record vault with permissioned doctor access"
    ]
  },
  {
    id: "chashm-ai",
    title: "CHASHM AI Assistive Smart Headset",
    subtitle: "Hybrid Edge-Computing Vision Headset for the Visually Impaired",
    category: "Vision & On-Device AI",
    status: "Hardware Prototype",
    icon: <Glasses size={26} color="#8b5cf6" />,
    github: "https://github.com/muhammadokashapak/okasha",
    metrics: [
      { val: "INT8", label: "Quantized Custom YOLO" },
      { val: "30 FPS", label: "ESP32-CAM MJPEG Stream" },
      { val: "Spatial", label: "Real-Time 3D Audio TTS" }
    ],
    pipeline: [
      "Wireless ESP32-CAM MJPEG",
      "Quantized INT8 YOLO (.tflite)",
      "3D Spatial Depth Estimator",
      "Directional Text-to-Speech",
      "Audible Navigation Guidance"
    ],
    tags: ["FastAPI", "OpenCV", "YOLO .tflite", "ESP32-CAM", "WebSockets", "Spatial TTS"],
    description: "Smart assistive headset for the visually impaired utilizing an INT8 quantized YOLO model on ESP32-CAM to detect obstacles and stream 3D spatial audio navigation cues in real time.",
    deepOverview: "Conceived and engineered a complete edge-AI assistive hardware ecosystem. An ESP32-CAM module transmits ultra-low latency MJPEG video over WebSockets to a FastAPI backend. Custom computer vision models perform real-time bounding box localization, depth estimation, and generate audible directional speech warnings.",
    features: [
      "Hardware edge video capture via wireless ESP32-CAM module",
      "Sub-30ms object detection inference using quantized INT8 YOLO models",
      "Interactive web monitoring dashboard with real-time bounding box overlays",
      "Dynamic directional Text-to-Speech alerting users of incoming obstacles"
    ]
  },
  {
    id: "shina-nlp",
    title: "Shina NLP Linguistic Deep Learning Engine",
    subtitle: "End-to-End Neural Architecture for Regional Shina Language Preservation",
    category: "GenAI & RAG",
    status: "Research Grade",
    icon: <Languages size={26} color="#8b5cf6" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "94%+", label: "Classification F1-Score" },
      { val: "Custom", label: "Corpus Preprocessing" },
      { val: "Hybrid", label: "LSTM + CNN Architecture" }
    ],
    pipeline: [
      "Indigenous Corpus Ingestion",
      "Morphological Tokenizer",
      "Hybrid Bi-LSTM & 1D-CNN",
      "Dialect & Sentiment Classifier",
      "94%+ F1 Evaluation Benchmark"
    ],
    tags: ["Python", "LSTM", "CNN", "TensorFlow", "Word Embeddings", "NLP Pipeline"],
    description: "Pioneered specialized deep learning architectures to preserve and classify the endangered regional Shina language using custom tokenizers, word embeddings, and hybrid LSTM/CNN models.",
    deepOverview: "Designed an NLP pipeline for a low-resource indigenous language. Handled complex morphological challenges through custom normalization, N-gram tokenization, and trained neural embeddings to classify dialects and semantic sentiment with high precision.",
    features: [
      "First-of-its-kind digital linguistic corpus for the Shina language",
      "Hybrid Bidirectional LSTM and 1D-CNN architecture for contextual representation",
      "Custom word embedding matrix capturing regional phonetic variations",
      "Robust evaluation pipeline achieving state-of-the-art F1 benchmark accuracy"
    ]
  },
  {
    id: "toxicity-sentinel",
    title: "Toxicity Sentinel & NLP Moderation Engine",
    subtitle: "High-Throughput Social Media Content Moderation & Hate Speech Detection",
    category: "Full-Stack & Systems",
    status: "Live Pipeline",
    icon: <ShieldAlert size={26} color="#f43f5e" />,
    github: "https://github.com/muhammadokashapak",
    metrics: [
      { val: "10k/sec", label: "Inference Throughput" },
      { val: "TF-IDF", label: "N-Gram Vectorizer" },
      { val: "98.2%", label: "Detection Accuracy" }
    ],
    pipeline: [
      "Social Stream Ingestion",
      "TF-IDF & Lemmatization Pipeline",
      "Multi-Label NLP Classifier",
      "10k req/sec Async Gateway",
      "Live Content Moderation API"
    ],
    tags: ["NLP", "TF-IDF", "Lemmatization", "Scikit-learn", "FastAPI", "Data Pipelines"],
    description: "High-throughput text-classification sentinel that ingests real-time social media streams, applies rigorous NLP preprocessing (lemmatization, TF-IDF), and flags digital toxicity and hate speech with high precision.",
    deepOverview: "Engineered a production-ready content safety engine. Built to handle noisy social media jargon, slang, and obfuscated text. Delivers instant safety scores, category breakdown (Insult, Threat, Toxic, Severe Toxic), and provides easy REST API integration for platforms.",
    features: [
      "Advanced text cleaning: regex slang expansion, lemmatization, stopword tuning",
      "Multi-label toxicity classification pipeline with low false-positive rate",
      "Interactive playground demo for live instant sentiment & safety checks",
      "Scalable microservice API ready for continuous batch streaming"
    ]
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { key: "All Projects", label: t('proj_filter_all', 'All Systems') },
    { key: "GenAI & RAG", label: t('proj_filter_rag', 'GenAI & RAG') },
    { key: "Vision & On-Device AI", label: t('proj_filter_edge', 'Edge AI & IoT') },
    { key: "Full-Stack & Systems", label: "Full-Stack & Systems" },
    { key: "HealthTech & EdTech", label: t('proj_filter_health', 'Healthcare & Vision') }
  ];

  const filteredProjects = selectedCategory === "All Projects"
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section-container">
      {/* Project Deep-Dive Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />

      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} /> {t('proj_tag', 'Production Work')}
        </div>
        <h2 className="section-title">
          {t('proj_title_pre', 'Featured')}{' '}
          <span className="gradient-text">{t('proj_title_highlight', 'Systems & Deployments')}</span>
        </h2>
        <p className="section-subtitle">
          {t('proj_subtitle', 'Explore 10 end-to-end production AI platforms, edge neural pipelines, and mission-critical applications.')}
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn ${selectedCategory === cat.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="projects-grid"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer' 
                }}
                onClick={() => setActiveModalProject(project)}
              >
                {/* Header Strip */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      padding: '12px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--card-border)', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                        <span style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 700, 
                          color: 'var(--accent-color)', 
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>
                          {project.category}
                        </span>
                        {project.status && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>• {project.status}</span>
                        )}
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', color: 'var(--text-primary)', lineHeight: 1.3, fontWeight: 700 }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }} onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: 'var(--text-secondary)', 
                          padding: '7px', 
                          borderRadius: '10px', 
                          border: '1px solid var(--card-border)', 
                          display: 'inline-flex',
                          background: 'rgba(255, 255, 255, 0.03)'
                        }}
                        title="View GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Subtitle / Hook */}
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.84rem', fontWeight: 500, marginBottom: '0.8rem' }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                {project.metrics && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                    {project.metrics.map((m, i) => (
                      <div key={i} className="metric-pill">
                        <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{m.val}</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.72rem' }}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags Strip */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="badge-neon">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', alignSelf: 'center', padding: '0 4px' }}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Row */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                  paddingTop: '0.9rem',
                  marginTop: 'auto'
                }}>
                  <span style={{ 
                    fontSize: '0.82rem', 
                    color: 'var(--accent-color)', 
                    fontWeight: 600, 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px' 
                  }}>
                    <Layers size={14} /> View Architecture <ArrowUpRight size={14} />
                  </span>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Click for Deep-Dive
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

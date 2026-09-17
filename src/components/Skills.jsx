import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Database, Layout, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const skillCategories = [
  {
    icon: <Bot size={22} color="#6366f1" />,
    title: "Generative AI, RAG & LLMs",
    description: "Enterprise vector pipelines, multimodal agents & semantic retrieval",
    skills: [
      "Gemini 3.7 / 3.6 Flash", "ChromaDB Vector Store", "FastEmbed ONNX",
      "LangChain & LlamaIndex", "Reciprocal Rank Fusion (RRF)", "Multimodal Vision & Audio",
      "Prompt Architecture", "Ollama Local LLMs", "Semantic Hybrid Search"
    ]
  },
  {
    icon: <Cpu size={22} color="#38bdf8" />,
    title: "Edge & On-Device AI / Deep Learning",
    description: "Hardware acceleration, quantized neural weights & real-time inference",
    skills: [
      "OpenAI Whisper INT8", "MarianMT Seq2Seq", "YOLOv8 & .tflite",
      "PyTorch & TensorFlow", "ONNX Runtime", "ESP32-CAM Embedded AI",
      "Voice Activity Detection (VAD)", "OpenCV Computer Vision", "Spatial 3D Audio TTS"
    ]
  },
  {
    icon: <Database size={22} color="#8b5cf6" />,
    title: "Data Science, NLP & ML Engines",
    description: "Predictive analytics, linguistic modeling & high-throughput pipelines",
    skills: [
      "Bidirectional LSTM & 1D-CNN", "TF-IDF & N-Gram Pipelines", "Scikit-Learn",
      "Pandas & NumPy", "Spacy & NLTK", "Custom Corpus Tokenization",
      "Model Quantization & Pruning", "Data Augmentation", "Statistical Analysis"
    ]
  },
  {
    icon: <Layout size={22} color="#10b981" />,
    title: "Full-Stack & Systems Architecture",
    description: "High-concurrency microservices, desktop EXE & native mobile apps",
    skills: [
      "FastAPI (Async Gateway)", "React 19 & Vite", "WebSockets & WebRTC",
      "Server-Sent Events (SSE)", "Android Jetpack Compose", "Capacitor Mobile / Desktop",
      "SQLite WAL & Turso", "PostgreSQL", "REST API v2 & OAuth 2.0"
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> {t('skills_tag', 'Technical Arsenal')}
          </div>
          <h2 className="section-title">
            {t('skills_title_pre', 'Skills &')}{' '}
            <span className="gradient-text">{t('skills_title_highlight', 'Technology Stack')}</span>
          </h2>
          <p className="section-subtitle">
            {t('skills_subtitle', 'Full-spectrum competencies across deep learning, backend pipelines, edge hardware, and modern full-stack engineering.')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card spotlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                padding: 'clamp(1.4rem, 3vw, 1.8rem)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '10px',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                {category.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="badge-neon"
                    style={{
                      fontSize: '0.74rem',
                      padding: '4px 9px',
                      borderRadius: '8px'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

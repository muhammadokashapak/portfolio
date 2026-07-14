import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './components/Section';
import { ProcessBox } from './components/ProcessBox';
import { PricingCard } from './components/PricingCard';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailPanel } from './components/ProjectDetailPanel';
import { PlansSection } from './components/PlansSection';
import { TestimonialCard } from './components/TestimonialCard';
import { ResumeCard } from './components/ResumeCard';
import { ContactForm } from './components/ContactForm';
import { Navigation } from './components/Navigation';
import { IntroAnimation } from './components/IntroAnimation';
import { Scene3D } from './components/Scene3D';
import profilePic from '../profile-pic.png';
import review1 from '../1.png';
import review2 from '../2.png';
import angelinaResume from '../AngelinaSamResume.pdf';
import diambriaResume from '../Diambria Whyte Resume.pdf';

type Service = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

type Project = {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  outcome: string;
  timeline: string;
  role: string;
  resumeLabel: string;
  resumeFile: string;
  thumbnail?: string;
};

type ResumeFile = {
  label: string;
  description: string;
  file: string;
};

const services: Service[] = [
  {
    title: 'Resume Writing',
    description:
      'Custom-crafted resumes, cover letters, and LinkedIn profiles that communicate skills clearly and confidently.',
  },
  {
    title: 'MS Office Support',
    description:
      'Professional Word, Excel, and PowerPoint deliverables that look polished, work reliably, and save you time.',
  },
  {
    title: 'LinkedIn Optimization',
    description:
      'A stronger LinkedIn profile with keyword-rich copy, clean structure, and recruiter-ready messaging.',
  },
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We clarify your goals, experience, and the role you want to win.',
  },
  {
    title: 'Draft',
    description: 'I build polished documents with strong achievement-based language.',
  },
  {
    title: 'Review',
    description: 'We refine the content and ensure every detail is interview-ready.',
  },
  {
    title: 'Deliver',
    description: 'Receive final files, resume links, and optional support for your application process.',
  },
];

const pricingPlans = [
  {
    title: 'Starter',
    price: 50,
    features: ['1-page resume', '1 round of revisions', 'Email support'],
    featured: false,
  },
  {
    title: 'Professional',
    price: 100,
    features: ['Resume + cover letter', 'LinkedIn review', '2 rounds of revisions'],
    featured: true,
  },
  {
    title: 'Premium',
    price: 200,
    features: ['Resume, cover letter, LinkedIn', 'MS Office template', 'Priority delivery'],
    featured: false,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'He executed everything to perfection, can’t wait to see what job I get next from his hands.',
    author: 'Di’Ambria Whyte',
    role: 'Resume Writing · 5.0 · March 19, 2025',
    image: review1,
  },
  {
    quote:
      'Professional and sincere. Displayed good understanding of my environment and locality. At every point he remained polite and friendly.',
    author: 'Ukeh Chuku FCA FCCA Ph.D',
    role: 'Deputy Bursar at Rivers State University of Science and Technology · 5.0 · February 17, 2025',
    image: review2,
  },
];

const projects: Project[] = [
  {
    title: 'Executive Resume Redesign & LinkedIn Optimization',
    summary:
      'Polished an executive career package for stronger leadership visibility and recruiter engagement.',
    description:
      'Complete overhaul of an executive resume and LinkedIn profile for a senior leader who needed a stronger career story and polished executive presence.',
    technologies: ['ATS Optimization', 'LinkedIn Copy', 'Career Storytelling'],
    outcome:
      'Resulted in 4 executive interviews within 2 weeks and a competitive offer with a 25% salary increase.',
    timeline: '6 weeks',
    role: 'Resume strategist & copywriter',
    resumeLabel: 'Angelina Sam Resume',
    resumeFile: angelinaResume,
    thumbnail: review1,
  },
  {
    title: 'Interactive Excel Business Dashboard',
    summary:
      'Designed a decision-ready Excel dashboard for business leaders to review KPIs instantly.',
    description:
      'Built an automated KPI dashboard tracking sales, costs, and conversion metrics for an e-commerce team.',
    technologies: ['MS Excel', 'VBA Macros', 'Pivot Tables'],
    outcome:
      'Cut weekly reporting time by 80% and revealed a 12% logistics cost discrepancy.',
    timeline: '4 weeks',
    role: 'Excel automation specialist',
    resumeLabel: 'Diambria Whyte Resume',
    resumeFile: diambriaResume,
    thumbnail: review2,
  },
  {
    title: 'Corporate Presentation Template Deck',
    summary:
      'Created a reusable pitch deck and template system for investor and executive meetings.',
    description:
      'Designed a pitch deck and reusable template assets for a startup preparing seed funding materials.',
    technologies: ['PowerPoint', 'Visual Design', 'Template Systems'],
    outcome:
      'Helped secure $1.5M in seed funding with investor praise for clarity and polish.',
    timeline: '3 weeks',
    role: 'Visual brand and deck designer',
    resumeLabel: 'Executive Career Package',
    resumeFile: angelinaResume,
  },
];

const resumeFiles: ResumeFile[] = [
  {
    label: 'Angelina Sam Resume',
    description: 'A polished executive resume ready for recruiter review and interview outreach.',
    file: angelinaResume,
  },
  {
    label: 'Diambria Whyte Resume',
    description: 'A professional resume example showcasing clarity, structure, and strong achievement statements.',
    file: diambriaResume,
  },
];

const fiverrConfig = {
  url: 'https://www.fiverr.com/s/1qGv4L4',
  openInNewTab: true,
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <IntroAnimation />
      <Scene3D />
      
      <div className="app-shell glass-layer">
        <Navigation />
        <ProjectDetailPanel project={activeProject} onClose={() => setActiveProject(null)} />

        <header className="hero" id="hero">
          <div className="hero-scene">
            <motion.div 
              className="hero-card glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="hero-copy" variants={fadeInUp}>
                <p className="eyebrow glow-text">Resume, LinkedIn & MS Office Support</p>
                <h1>Modern career branding that helps you land interviews faster.</h1>
                <p className="hero-text">
                  I build polished resumes, cover letters, and Office deliverables with clean styling, strong achievement language, and confidence-driving clarity.
                </p>
                <div className="hero-actions">
                  <a className="button primary pulse-glow" href="#contact">
                    Hire me now
                  </a>
                  <a className="button outline" href="#plans">
                    See Fiverr plans
                  </a>
                </div>
                <div className="hero-badges">
                  <div className="hero-badge"><span>Fast delivery</span></div>
                  <div className="hero-badge"><span>5.0 rating</span></div>
                  <div className="hero-badge"><span>Resume + LinkedIn</span></div>
                </div>
              </motion.div>

              <motion.div className="hero-panel" variants={fadeInUp}>
                <div className="profile-image-container 3d-tilt">
                  <img src={profilePic} alt="Muhammad Huzaifa" className="profile-image glass-border" />
                  <div className="floating-badge badge-top-left glass-badge float-anim-1">
                    <span className="badge-icon">⭐</span>
                    <span className="badge-text">Top Rated</span>
                  </div>
                  <div className="floating-badge badge-bottom-right glass-badge float-anim-2">
                    <span className="badge-icon">⚡</span>
                    <span className="badge-text">Fast Turnaround</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <motion.div 
          className="summary-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.article className="summary-card glass-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
            <h3 className="glow-text">30+ hires supported</h3>
            <p>Resume writing and application assets tuned for recruiters and ATS systems.</p>
          </motion.article>
          <motion.article className="summary-card glass-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
            <h3 className="glow-text">24 hour response</h3>
            <p>Fast communication and clear project updates from brief to delivery.</p>
          </motion.article>
          <motion.article className="summary-card glass-card" variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }}>
            <h3 className="glow-text">Client-focused edits</h3>
            <p>Every package includes review rounds and document polish tailored to your needs.</p>
          </motion.article>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="services" title="How I help" subtitle="Career branding, resumes, and Office outputs designed to feel polished and professional.">
            <div className="grid-3">
              {services.map((service, i) => (
                <motion.article 
                  key={service.title} 
                  className="info-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.article>
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.section 
          className="section process-section" 
          id="process"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeInUp}
        >
          <div className="section-header">
            <p className="section-eyebrow glow-text">Process</p>
            <h2>Fast, clear, and collaborative.</h2>
            <p className="section-subtitle">A simple workflow from briefing to finished files, with review rounds built in.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <ProcessBox key={step.title} step={index + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </motion.section>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="packages" title="Pricing" subtitle="Choose the plan that fits your resume, cover letter, and Office asset needs.">
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <PricingCard
                  key={plan.title}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  featured={plan.featured}
                />
              ))}
            </div>
          </Section>
        </motion.div>

        <PlansSection plans={pricingPlans} fiverrUrl={fiverrConfig.url} openInNewTab={fiverrConfig.openInNewTab} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="portfolio" title="Featured projects" subtitle="Real work examples and career-branding wins.">
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} onSelect={setActiveProject} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="testimonials" title="Client feedback" subtitle="Stories from professionals who booked resume and Office support.">
            <div className="grid-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.author}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="resume" title="Resume downloads" subtitle="Download sample resume files used in project work and case studies.">
            <div className="resume-grid">
              {resumeFiles.map((resume) => (
                <ResumeCard key={resume.label} label={resume.label} file={resume.file} description={resume.description} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="contact" title="Contact" subtitle="Ready to work together on your next application?">
            <div className="contact-layout glass-card">
              <div className="contact-panel">
                <h3>Let's build your next resume package</h3>
                <p>
                  Reach out for a custom quote, a review of your current resume, or a full LinkedIn and Office asset package.
                </p>
                <div className="contact-links">
                  <a href="https://linkedin.com/in/muhammad-huzaifa-1aa08a282/?skipRedirect=true" target="_blank" rel="noreferrer" className="button outline">
                    LinkedIn
                  </a>
                  <a href="https://www.fiverr.com/s/1qGv4L4" target="_blank" rel="noreferrer" className="button outline">
                    Fiverr plans
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </Section>
        </motion.div>
      </div>
    </>
  );
}

export default App;

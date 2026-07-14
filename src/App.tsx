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

// Smooth animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <IntroAnimation />
      
      {/* Premium Animated Background */}
      <div className="animated-bg">
        <div className="bg-grid"></div>
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      <div className="app-shell">
        <Navigation />
        <ProjectDetailPanel project={activeProject} onClose={() => setActiveProject(null)} />

        <header className="hero" id="hero">
          <div className="hero-grid">
            <motion.div 
              className="hero-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="eyebrow">Professional Career Services</span>
              </motion.div>
              <motion.h1 variants={fadeInUp}>
                Land interviews faster with a <span className="gradient-text">powerful resume</span>.
              </motion.h1>
              <motion.p className="hero-text" variants={fadeInUp}>
                I craft meticulously structured resumes, compelling LinkedIn profiles, and highly polished Microsoft Office deliverables to help you stand out.
              </motion.p>
              
              <motion.div className="hero-actions" variants={fadeInUp}>
                <a className="button primary" href="#contact">Hire me now</a>
                <a className="button outline" href="#packages">View pricing</a>
              </motion.div>

              <motion.div className="hero-badges" variants={fadeInUp}>
                <div className="hero-badge"><div className="dot"></div> Fast delivery</div>
                <div className="hero-badge"><div className="dot"></div> 5.0 rating</div>
                <div className="hero-badge"><div className="dot"></div> ATS Optimized</div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-image-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <div className="image-glow"></div>
              <div className="hero-image-inner">
                <img src={profilePic} alt="Muhammad Huzaifa" className="profile-image" />
                <div className="floating-pill pill-1">⭐ Top Rated</div>
                <div className="floating-pill pill-2">⚡ 24h Turnaround</div>
              </div>
            </motion.div>
          </div>
        </header>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="services" title="How I help" subtitle="Career branding, resumes, and Office outputs designed to feel polished and professional.">
            <div className="grid-3">
              {services.map((service, i) => (
                <motion.div 
                  key={service.title} 
                  className="info-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="process" title="My Process" subtitle="A simple workflow from briefing to finished files, with review rounds built in.">
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <ProcessBox key={step.title} step={index + 1} title={step.title} description={step.description} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="packages" title="Pricing" subtitle="Choose the plan that fits your resume, cover letter, and Office asset needs.">
            <div className="grid-3">
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
          <Section id="portfolio" title="Featured Projects" subtitle="Real work examples and career-branding wins.">
            <div className="grid-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} onSelect={setActiveProject} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="testimonials" title="Client Feedback" subtitle="Stories from professionals who booked resume and Office support.">
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
          <Section id="resume" title="Resume Downloads" subtitle="Download sample resume files used in project work and case studies.">
            <div className="grid-2">
              {resumeFiles.map((resume) => (
                <ResumeCard key={resume.label} label={resume.label} file={resume.file} description={resume.description} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Section id="contact" title="Contact Me" subtitle="Ready to work together on your next application?">
            <div className="contact-layout">
              <div className="contact-panel">
                <h3>Let's build your next resume package</h3>
                <p>
                  Reach out for a custom quote, a review of your current resume, or a full LinkedIn and Office asset package. I'm ready to help you shine.
                </p>
                <div className="contact-links">
                  <a href="https://linkedin.com/in/muhammad-huzaifa-1aa08a282/?skipRedirect=true" target="_blank" rel="noreferrer" className="button outline">
                    LinkedIn
                  </a>
                  <a href="https://www.fiverr.com/s/1qGv4L4" target="_blank" rel="noreferrer" className="button outline">
                    Fiverr Plans
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

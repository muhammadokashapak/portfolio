import { Section } from './components/Section';

type Service = {
  title: string;
  description: string;
};

type Package = {
  title: string;
  price: string;
  details: string[];
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type PortfolioItem = {
  title: string;
  highlight: string;
};

const services: Service[] = [
  {
    title: 'Resume Writing',
    description:
      'Custom-crafted resumes, cover letters, and LinkedIn profiles tailored for high-impact job applications, career upgrades, and professional branding.',
  },
  {
    title: 'MS Office Support',
    description:
      'Professional Microsoft Word, Excel, and PowerPoint services for reports, presentations, data workflows, templates, and document automation.',
  },
  {
    title: 'CV Optimization',
    description:
      'Keyword-rich, ATS-friendly CVs that highlight achievements, skills, and measurable results for your target industry or role.',
  },
];

const packages: Package[] = [
  {
    title: 'Essential Launch',
    price: '₨4,500',
    details: ['Resume rewrite', 'Cover letter', 'LinkedIn summary', '2 revisions'],
  },
  {
    title: 'Professional Growth',
    price: '₨8,000',
    details: ['Resume + CV', 'Professional portfolio layout', 'MS Word formatting', '3 revisions'],
  },
  {
    title: 'Executive Impact',
    price: '₨13,000',
    details: ['Elite resume package', 'PowerPoint pitch deck', 'Excel dashboard', 'Priority delivery'],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'Muhammad turned my resume into a powerful story. I landed multiple interviews within a week and felt completely confident presenting myself.',
    author: 'Ayesha Khan',
    role: 'Marketing Specialist',
  },
  {
    quote:
      'The MS Office support was a game-changer for our team presentation. Clear, polished, and on time.',
    author: 'Omar Saeed',
    role: 'Project Coordinator',
  },
];

const portfolio: PortfolioItem[] = [
  {
    title: 'Career Reset Resume',
    highlight: 'Modern resume redesign with ATS optimization for mid-career transition.',
  },
  {
    title: 'Executive Presentation',
    highlight: 'High-impact PowerPoint deck for business development and funding pitches.',
  },
  {
    title: 'Interactive Excel Toolkit',
    highlight: 'Automated expense tracker with dashboards and custom reporting.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Professional Resume & MS Office Services</p>
          <h1>Elevate your career story with compelling documents and polished presentations.</h1>
          <p className="hero-text">
            I help professionals secure interviews, strengthen their personal brand, and present their ideas with clarity and confidence.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Book a consultation
            </a>
            <a className="button secondary" href="https://linkedin.com/in/muhammad-huzaifa-1aa08a282/?skipRedirect=true" target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <span className="panel-eyebrow">Top services</span>
            <h2>Resume Writing + MS Office</h2>
            <p>Clear, strategic, and ready-to-submit documents designed for recruiters and hiring managers.</p>
          </div>
        </div>
      </header>

      <main>
        <Section id="services" title="Services" subtitle="Designed for ambitious professionals and teams.">
          <div className="grid-3">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="process" title="Process" subtitle="A simple, transparent experience from brief to delivery.">
          <div className="grid-steps">
            <article className="step-card">
              <span>1</span>
              <h3>Discovery</h3>
              <p>Share your goals, current documents, and target roles so work is aligned to your career story.</p>
            </article>
            <article className="step-card">
              <span>2</span>
              <h3>Creation</h3>
              <p>A tailored resume, cover letter, LinkedIn summary, or MS Office deliverable is produced with a polished visual style.</p>
            </article>
            <article className="step-card">
              <span>3</span>
              <h3>Review</h3>
              <p>Receive the draft, request revisions, and finalize the document with feedback included in the package.</p>
            </article>
          </div>
        </Section>

        <Section id="packages" title="Packages" subtitle="Choose the right level of support for your next step.">
          <div className="grid-3">
            {packages.map((pkg) => (
              <article key={pkg.title} className="package-card">
                <h3>{pkg.title}</h3>
                <p className="package-price">{pkg.price}</p>
                <ul>
                  {pkg.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials" subtitle="What clients say about the experience.">
          <div className="grid-2">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="testimonial-card">
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <Section id="portfolio" title="Portfolio Samples" subtitle="Recent examples of service work and document design.">
          <div className="grid-3">
            {portfolio.map((item) => (
              <article key={item.title} className="portfolio-card">
                <h3>{item.title}</h3>
                <p>{item.highlight}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Ready to build your next career asset?">
          <div className="contact-panel">
            <p>
              Reach out on LinkedIn or Fiverr to discuss your resume, CV, presentation, or MS Office document needs.
            </p>
            <div className="contact-links">
              <a href="https://linkedin.com/in/muhammad-huzaifa-1aa08a282/?skipRedirect=true" target="_blank" rel="noreferrer" className="button outline">
                LinkedIn
              </a>
              <a href="https://www.fiverr.com/drmuhammadusama/buying?source=avatar_menu_profile" target="_blank" rel="noreferrer" className="button outline">
                Fiverr
              </a>
            </div>
            <div className="contact-card">
              <p className="contact-label">Contact details</p>
              <p>LinkedIn: <a href="https://linkedin.com/in/muhammad-huzaifa-1aa08a282/?skipRedirect=true" target="_blank" rel="noreferrer">linkedin.com/in/muhammad-huzaifa-1aa08a282</a></p>
              <p>Fiverr: <a href="https://www.fiverr.com/drmuhammadusama/buying?source=avatar_menu_profile" target="_blank" rel="noreferrer">fiverr.com/drmuhammadusama</a></p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Professional websites using HTML, CSS, JavaScript, React, and backend support.',
      icon: 'https://img.icons8.com/dusk/64/code.png',
      projects: [
        {
          title: 'Portfolio Website',
          description: 'Responsive personal portfolio with modern design',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop'
        },
        {
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop'
        },
        {
          title: 'Business Dashboard',
          description: 'Analytics dashboard for business intelligence',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, data analysis, and machine learning model development.',
      icon: 'https://img.icons8.com/dusk/64/brain.png',
      projects: [
        {
          title: 'Color Detection System',
          description: 'ML-based color recognition and classification system',
          image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=200&fit=crop'
        },
        {
          title: 'Diabetes Testing System',
          description: 'Predictive model for diabetes risk assessment',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
        },
        {
          title: 'Fraud Detection System',
          description: 'Advanced fraud detection using machine learning',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'resume',
      title: 'Resume Writing',
      description: 'ATS-friendly and industry-focused resumes that get results.',
      icon: 'https://img.icons8.com/dusk/64/resume.png',
      projects: [
        {
          title: 'ATS-Optimized Templates',
          description: 'Professional resume templates for various industries',
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop'
        },
        {
          title: 'Career Consultation',
          description: 'Personalized career guidance and resume optimization',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
        },
        {
          title: 'LinkedIn Optimization',
          description: 'Professional LinkedIn profile enhancement services',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
        }
      ]
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>My <span className="text-primary">Services</span></h2>
        <hr className="section-underline" />
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item" data-service={service.id}>
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="service-btn"
                  onClick={() => openModal(service)}
                >
                  View Projects
                </button>
              </div>
            ))}
          </div>

          {/* Service Projects Modal */}
          {showModal && selectedService && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h3>Related Projects - {selectedService.title}</h3>
                <div className="modal-projects-grid">
                  {selectedService.projects.map((project, index) => (
                    <div key={index} className="modal-project">
                      <img src={project.image} alt={project.title} />
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;

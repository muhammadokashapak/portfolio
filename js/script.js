// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initTypingAnimation();
  initNavbarScroll();
  initActiveLinks();
  initDateButton();
  initServiceModal();
  initProjectFilter();
  initFormHandler();
  initScrollToTop();
});

// Typing Text Animation
function initTypingAnimation() {
  const animatedTextContainer = document.querySelector('.animated-text');
  const phrases = ["Hello, I'm Muhammad Okasha", "Machine Learning Engineer", "Welcome to My Portfolio"];
  let currentPhraseIndex = 0;

  function typeNextPhrase() {
    if (!animatedTextContainer) return;
    animatedTextContainer.style.width = '0';
    animatedTextContainer.innerHTML = phrases[currentPhraseIndex];
    animatedTextContainer.style.animation = 'none';
    void animatedTextContainer.offsetWidth;
    animatedTextContainer.style.animation = 'typing 4s steps(40, end), blink-caret 0.75s step-end infinite';
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }
  
  setInterval(typeNextPhrase, 5000);
  typeNextPhrase();
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Active Link Highlight
function initActiveLinks() {
  const links = document.querySelectorAll('nav ul a');
  const sections = document.querySelectorAll('section[id], header[id]');
  
  // Handle click events
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      links.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Handle scroll events for active link highlighting
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Show Today's Date
function initDateButton() {
  const dateButton = document.querySelector('#showDateButton');
  const dateDisplay = document.querySelector('#dateDisplay');
  
  if (dateButton && dateDisplay) {
    dateButton.addEventListener('click', function() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = today.toLocaleDateString('en-US', options);
      dateDisplay.textContent = `📅 Today is: ${formattedDate}`;
      dateDisplay.style.opacity = '0';
      setTimeout(() => {
        dateDisplay.style.opacity = '1';
      }, 100);
    });
  }
}

// Service Modal Functionality
function initServiceModal() {
  const modal = document.getElementById('service-projects-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalProjects = document.getElementById('modal-projects');
  const closeBtn = document.querySelector('.close');
  const serviceBtns = document.querySelectorAll('.service-btn');
  
  // Project data for each service
  const serviceProjects = {
    'web-dev': [
      {
        title: 'Portfolio Website',
        description: 'Responsive personal portfolio with modern design',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop'
      },
      {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
      },
      {
        title: 'Business Website',
        description: 'Corporate website with CMS integration',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
      }
    ],
    'ai-ml': [
      {
        title: 'Color Detection System',
        description: 'Real-time color detection using computer vision and ML',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
      },
      {
        title: 'Diabetes Testing System',
        description: 'ML-based diabetes prediction with high accuracy',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
      },
      {
        title: 'Fraud Detection System',
        description: 'Advanced fraud detection using anomaly detection',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop'
      },
      {
        title: 'Car Price Prediction',
        description: 'ML model for car price prediction using regression',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop'
      },
      {
        title: 'Chicken Pox Detection',
        description: 'Deep learning CNN model for medical diagnosis',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
      },
      {
        title: 'Emotion Detection System',
        description: 'Real-time emotion detection using DL and NLP',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
      }
    ],
    'resume': [
      {
        title: 'ATS-Optimized Templates',
        description: 'Professional resume templates',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop'
      },
      {
        title: 'Career Consultation',
        description: 'Personalized career guidance services',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
      },
      {
        title: 'LinkedIn Optimization',
        description: 'Professional LinkedIn profile enhancement',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
      }
    ]
  };
  
  // Open modal when service button is clicked
  serviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const serviceType = this.closest('.service-item').dataset.service;
      const projects = serviceProjects[serviceType] || [];
      
      // Set modal title
      const serviceNames = {
        'web-dev': 'Web Development Projects',
        'ai-ml': 'Machine Learning & Deep Learning Projects',
        'resume': 'Resume Writing Projects'
      };
      modalTitle.textContent = serviceNames[serviceType] || 'Related Projects';
      
      // Clear and populate projects
      modalProjects.innerHTML = '';
      projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'modal-project-card';
        projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
          <h4 style="margin-bottom: 0.5rem; color: var(--text-dark);">${project.title}</h4>
          <p style="color: var(--text-light); font-size: 0.9rem;">${project.description}</p>
        `;
        modalProjects.appendChild(projectCard);
      });
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// Project Filter Functionality
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Form Handler
function initFormHandler() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simple form validation
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '#e5e7eb';
        }
      });
      
      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.innerHTML = `
          <div style="background: #10b981; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center;">
            ✅ Thank you for contacting Muhammad Okasha! Your message has been sent.
          </div>
        `;
        form.appendChild(successMsg);
        
        // Reset form after delay
        setTimeout(() => {
          form.reset();
          successMsg.remove();
        }, 3000);
      } else {
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = `
          <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center;">
            ❌ Please fill in all required fields.
          </div>
        `;
        form.appendChild(errorMsg);
        
        setTimeout(() => {
          errorMsg.remove();
        }, 3000);
      }
    });
  }
}

// Scroll to Top Button
function initScrollToTop() {
  // Create scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollToTop';
  scrollBtn.innerHTML = '↑';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(scrollBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.visibility = 'hidden';
    }
  });
  
  // Scroll to top when clicked
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showDate, setShowDate] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  const phrases = [
    "Hello, I'm Muhammad Okasha",
    "AI & Web Developer",
    "Welcome to My Portfolio"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const handleShowDate = () => {
    const today = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(`📅 Today is: ${formattedDate}`);
    setShowDate(true);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <div className="animated-text-container">
          <span className="animated-text" key={currentPhrase}>
            {phrases[currentPhrase]}
          </span>
        </div>
        <p className="title">AI & Web Developer | Problem Solver</p>
        <div className="social">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <button className="btn-primary" onClick={handleShowDate}>
          Show Today's Date
        </button>
        {showDate && (
          <p 
            id="dateDisplay" 
            style={{ 
              marginTop: '1rem', 
              fontSize: '1.1rem', 
              color: 'var(--primary-color)',
              opacity: showDate ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          >
            {currentDate}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;

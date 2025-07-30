import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About <span className="text-primary">Me</span></h2>
        <hr className="section-underline" />
        <div className="about-content">
          <div className="col-1">
            <h3>Hello! I'm Muhammad Okasha</h3>
            <p>
              I am a Machine Learning Engineer and Web Developer passionate about building 
              creative and functional solutions. My journey includes strong technical skills 
              and hands-on experience in Python, JavaScript, and web technologies.
            </p>
            <p>
              With expertise in AI/ML algorithms, modern web frameworks, and full-stack 
              development, I create innovative solutions that bridge the gap between 
              cutting-edge technology and practical business needs.
            </p>
          </div>
          <div className="col-2">
            <p><strong>Email:</strong> okasha@example.com</p>
            <p><strong>Phone:</strong> +92 300 0000000</p>
            <p><strong>Location:</strong> Pakistan</p>
            <p><strong>Experience:</strong> 3+ Years</p>
            <p><strong>Specialization:</strong> AI/ML & Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

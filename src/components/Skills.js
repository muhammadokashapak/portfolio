import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      icon: 'https://img.icons8.com/color/48/000000/python.png'
    },
    {
      name: 'JavaScript',
      icon: 'https://img.icons8.com/color/48/000000/javascript.png'
    },
    {
      name: 'React',
      icon: 'https://img.icons8.com/color/48/000000/react-native.png'
    },
    {
      name: 'HTML5',
      icon: 'https://img.icons8.com/color/48/000000/html-5.png'
    },
    {
      name: 'CSS3',
      icon: 'https://img.icons8.com/color/48/000000/css3.png'
    },
    {
      name: 'Node.js',
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png'
    },
    {
      name: 'MySQL',
      icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png'
    },
    {
      name: 'GitHub',
      icon: 'https://img.icons8.com/color/48/000000/github.png'
    },
    {
      name: 'TensorFlow',
      icon: 'https://img.icons8.com/color/48/000000/tensorflow.png'
    },
    {
      name: 'MongoDB',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png'
    },
    {
      name: 'REST APIs',
      icon: 'https://img.icons8.com/color/48/000000/api.png'
    },
    {
      name: 'Docker',
      icon: 'https://img.icons8.com/color/48/000000/docker.png'
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>My <span className="text-primary">Skills</span></h2>
        <hr className="section-underline" />
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="item">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

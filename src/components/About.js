
import React from 'react';
import data from '../data/data.json';
import '../styles/main.css';

const About = () => {
  const { title, description } = data.about;

  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default About;

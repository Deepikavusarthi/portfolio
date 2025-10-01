import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Skills = () => {
  const skills = data.skills;

  return (
    <section>
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-level"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
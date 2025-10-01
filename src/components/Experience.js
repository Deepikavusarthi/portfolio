
import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Experience = () => {
  const experience = data.experience;

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <div className="container">
        <h2>Experience</h2>
        <div>
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{job.role}</h3>
              <p>{job.company} | {job.period}</p>
              <p>{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

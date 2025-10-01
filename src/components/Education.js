import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Education = () => {
  const education = data.education;

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <div className="container">
        <h2>Education</h2>
        <div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{edu.degree}</h3>
              <p>{edu.institution} | {edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
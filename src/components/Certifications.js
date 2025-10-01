
import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Certifications = () => {
  const certifications = data.certifications;

  return (
    <section>
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              className="certification-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{certification.name}</h3>
              <p>{certification.issuer} - {certification.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

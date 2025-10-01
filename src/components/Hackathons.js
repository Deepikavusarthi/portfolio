
import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Hackathons = () => {
  const hackathons = data.hackathons;

  return (
    <section>
      <div className="container">
        <h2>Hackathons</h2>
        <div className="hackathons-list">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              className="hackathon-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{hackathon.name}</h3>
              <h4>{hackathon.project}</h4>
              <p>{hackathon.award} - {hackathon.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;


import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaGoogle, FaMicrosoft, FaFire, FaCloud, FaServer } from 'react-icons/fa';
import data from '../data/data.json';
import '../styles/main.css';

const iconMap = {
  "AWS": <FaAws />,
  "GCP": <FaGoogle />,
  "Azure": <FaMicrosoft />,
  "Firebase": <FaFire />,
  "Heroku": <FaCloud />,
  "Vercel": <FaServer />,
};

const Cloud = () => {
  const cloud = data.cloud;

  return (
    <section>
      <div className="container">
        <h2>Cloud Technologies</h2>
        <div className="tools-grid">
          {cloud.map((tech, index) => (
            <motion.div
              key={index}
              className="tool-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="tool-icon">{iconMap[tech]}</div>
              <h3>{tech}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cloud;

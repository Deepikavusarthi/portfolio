
import React from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt, FaJira, FaJenkins, FaCode, FaBox, FaCogs } from 'react-icons/fa';
import data from '../data/data.json';
import '../styles/main.css';

const iconMap = {
  "Git": <FaGitAlt />,
  "Jira": <FaJira />,
  "Jenkins": <FaJenkins />,
  "Postman": <FaCogs />,
  "VS Code": <FaCode />,
  "Webpack": <FaBox />,
};

const TechnicalTools = () => {
  const tools = data.technicalTools;

  return (
    <section>
      <div className="container">
        <h2>Technical Tools</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="tool-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="tool-icon">{iconMap[tool]}</div>
              <h3>{tool}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalTools;

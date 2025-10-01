
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import data from '../data/data.json';
import Hero3D from './Hero3D';
import '../styles/main.css';

const Header = () => {
  const { name, role, linkedin, github, email } = data.personal;

  return (
    <header>
      <div className="hero-container">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {name}
          </motion.h1>
          <TypeAnimation
            sequence={[role, 2000, 'A Full-Stack Developer', 2000, 'A Creative Coder', 2000]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub />
            </a>
            <a href={`mailto:${email}`} className="icon-link">
              <FaEnvelope />
            </a>
          </motion.nav>
        </div>
        <div className="hero-3d">
          <Hero3D />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import TechnicalTools from './components/TechnicalTools';
import Cloud from './components/Cloud';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
    // Ensure default cursor is visible
    document.body.style.cursor = 'auto';
  }, [theme]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div style={{ cursor: 'auto' }}>
      <BackgroundAnimation />
      <ThemeSwitcher setTheme={setTheme} />
      <ScrollToTop />
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <Header />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Skills />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Experience />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Projects />
      </motion.div>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Hackathons />
      </motion.div> */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Certifications />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <TechnicalTools />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Cloud />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Education />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Testimonials />
      </motion.div>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Contact />
      </motion.div> */}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import data from '../data/data.json';
import '../styles/main.css';
import project1Image from '../images/project1.jpg';
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';

const projectImages = {
  "images/project1.jpg": project1Image,
  "images/project2.jpg": project2Image,
  "images/project3.jpg": project3Image
};

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = data.projects;

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
            >
              <h3>{project.name}</h3>
              <img src={projectImages[project.image]} alt={project.name} />
            </motion.div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            className="project-modal"
            overlayClassName="project-modal-overlay"
          >
            <h2>{selectedProject.name}</h2>
            <img src={projectImages[selectedProject.image]} alt={selectedProject.name} />
            <p>{selectedProject.description}</p>
            <div className="project-tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Projects;
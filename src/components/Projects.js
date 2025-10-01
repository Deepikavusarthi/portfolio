import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import data from '../data/data.json';
import '../styles/main.css';

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
            <div className="project-modal-header">
              <h2>{selectedProject.name}</h2>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
            </div>
            
            <div className="project-modal-content">
              <div className="project-modal-info">
                <div className="project-description">
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>
                
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="project-tags-section">
                    <h3>Technologies</h3>
                    <div className="project-tags">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-modal-actions">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      View Project
                    </a>
                  )}
                  <button className="project-close-btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Projects;
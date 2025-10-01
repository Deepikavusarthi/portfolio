
import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';
import '../styles/main.css';

const Testimonials = () => {
  const testimonials = data.testimonials || [];

  if (!testimonials.length) {
    return null; // Don't render the section if no testimonials
  }

  return (
    <section>
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.name}, {testimonial.role}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

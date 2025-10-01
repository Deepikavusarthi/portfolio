
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const Contact = () => {
  return (
    <section>
      <div className="container">
        <h2>Contact Me</h2>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Index.css';
import './company.jpeg'
import './company2.jpeg'
import './company3.jpeg'

export const IndexUtama = () => {
  const dataDummy = [
    { id: 1, title: 'Feature One', description: 'This is the first feature.' },
    { id: 2, title: 'Feature Two', description: 'This is the second feature.' },
    { id: 3, title: 'Feature Three', description: 'This is the third feature.' },
    { id: 4, title: 'Feature Four', description: 'This is the fourth feature.' },
    { id: 5, title: 'Feature Five', description: 'This is the fifth feature.' },
  ];

  const handleScroll = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      document.getElementById('features').scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Welcome to Our Job</h1>
          <p>Your gateway to amazing opportunities</p>
          <p></p>
         <button onClick={handleScroll} className="cta-button">Get Started</button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <p>We are a dedicated company focused on connecting job seekers with the best job opportunities in various industries.</p>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Amazing Features
        </motion.h2>
        <div className="features-grid">
          {dataDummy.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="image-text-section">
        <motion.div
          className="image-text-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
           <img src={require('./company.jpeg')} alt="Description 1" className="image" />
          <div className="text">
            <h3>Our Vision</h3>
            <p>We aim to empower job seekers by providing them with a wide range of opportunities and a robust network.</p>
          </div>
        </motion.div>
        
        <motion.div
          className="image-text-item reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <img src={require('./company2.jpeg')} alt="Description 1" className="image" />
          <div className="text">
            <h3>Our Mission</h3>
            <p>To bridge the gap between job seekers and employers by leveraging our technology and network.</p>
          </div>
        </motion.div>

        <motion.div
          className="image-text-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
           <img src={require('./company3.jpeg')} alt="Description 1" className="image" />
          <div className="text">
            <h3>Our Values</h3>
            <p>We believe in trust, transparency, and a commitment to the success of our clients and candidates alike.</p>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <div className="footer-content">
          <p><strong>Ben Manjur</strong></p>
          <p>Jl. Jalan kesana kemari happy, Jawa Tengah</p>
          <p>Phone: (024) 5678910</p>
          <p>Email: info@company.com</p>
          <div className="social-icons">
            <Link to="#" className="social-icon">Facebook</Link>
            <Link to="#" className="social-icon">Twitter</Link>
            <Link to="#" className="social-icon">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/work" className="footer-link">Work</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/connect" className="footer-link">Strategy Call</Link>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <Link to="/services" className="footer-link">Brand Strategy</Link>
          <Link to="/services" className="footer-link">Digital Product</Link>
          <Link to="/services" className="footer-link">Web Engineering</Link>
          <Link to="/services" className="footer-link">Growth Marketing</Link>
          <Link to="/services" className="footer-link">Content & Creative</Link>
        </div>
        <div className="footer-column">
          <h3>Industries</h3>
          <Link to="/industries" className="footer-link">AI, Tech & B2B SaaS</Link>
          <Link to="/industries" className="footer-link">Fintech</Link>
          <Link to="/industries" className="footer-link">Crypto</Link>
          <Link to="/industries" className="footer-link">Enterprise</Link>
          <Link to="/industries" className="footer-link">Healthcare</Link>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p className="footer-text">hello@adveria.com</p>
          <p className="footer-text">+1 415 555 0123</p>
          <div className="footer-social">
            <span className="footer-social-link cursor-pointer">X</span>
            <span className="footer-social-link cursor-pointer">Linkedin</span>
            <span className="footer-social-link cursor-pointer">Facebook</span>
            <span className="footer-social-link cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="https://res.cloudinary.com/dppos5kvq/image/upload/v1772211773/rno1_logo_transparent_sbq7tr.png" alt="Adveria Logo" />
        </div>
        <div className="footer-text">
          © 2026 Adveria, LLC. All Rights Reserved.
        </div>
        <div className="footer-social">
          <span className="footer-divider"></span>
          <p className="footer-text">EST. 2023</p>
          <span className="footer-divider"></span>
          <p className="footer-text">Global</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

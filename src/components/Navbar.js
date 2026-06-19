import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    setIsScrolled(window.scrollY > 50);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/adveria-logo-text.png" alt="Adveria Logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="hidden md:flex items-center gap-10 text-[15px] font-saans font-medium text-black/80">
          <div className="relative group">
            <Link className={`hover:text-black transition-colors py-4 inline-block ${location.pathname === '/services' ? 'text-black font-semibold' : ''}`} to="/services">
              Services
            </Link>
          </div>
          <div className="relative group">
            <span className="cursor-pointer hover:text-black transition-colors py-4 inline-block">Industries</span>
          </div>
          <div className="relative group">
            <Link className={`hover:text-black transition-colors py-4 inline-block ${location.pathname === '/work' ? 'text-black font-semibold' : ''}`} to="/work">
              Work
            </Link>
          </div>
          <div className="relative group">
            <Link className={`hover:text-black transition-colors py-4 inline-block ${location.pathname === '/about' ? 'text-black font-semibold' : ''}`} to="/about">
              About
            </Link>
          </div>
          <div className="relative group">
            <Link className={`hover:text-black transition-colors py-4 inline-block ${location.pathname === '/blog' ? 'text-black font-semibold' : ''}`} to="/blog">
              Blog
            </Link>
          </div>
        </div>

        {/* Mobile hamburger only — no CTA button */}
        <button className="md:hidden p-2 text-black bg-black/10 rounded-full hover:bg-black/20 transition-colors" aria-label="Toggle Menu" onClick={toggleMenu}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-1.5">
          <Link className="hover:text-black transition-colors py-3 inline-block text-black/70" to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link className="hover:text-black transition-colors py-3 inline-block text-black/70" to="/work" onClick={closeMenu}>
            Work
          </Link>
          <Link className="hover:text-black transition-colors py-3 inline-block text-black/70" to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className="hover:text-black transition-colors py-3 inline-block text-black/70" to="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../Common/MagneticButton';
import GlassSurface from '../Common/GlassSurface';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    
    // If it's a hash link (e.g. #features)
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        // We are on a sub-page, navigate to home then to hash
        navigate('/' + path);
      } else {
        // We are already on home page, use Lenis for smooth scroll
        if (window.lenis) {
          window.lenis.scrollTo(path, { offset: -80 });
        } else {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // It's a page route (e.g. /story)
      navigate(path);
      // Reset scroll position instantly for new pages
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
    }
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Features', path: '#features' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact Us', path: '#contact' },
  ];

  return (
    <div className="navbar-container">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={32}
        borderWidth={0.05}
        brightness={60}
        opacity={0.7}
        blur={8}
        displace={0.4}
        backgroundOpacity={0.15}
        saturation={1.1}
        distortionScale={-120}
        redOffset={0}
        greenOffset={6}
        blueOffset={12}
        mixBlendMode="difference"
        className={`navbar ${scrolled ? 'scrolled' : ''} ${dropdownOpen ? 'dropdown-open' : ''}`}
        style={{ 
          maxWidth: 1200, 
          transition: 'background 0.4s ease',
          flexDirection: 'column', 
          alignItems: 'flex-start'
        }}
      >
        <nav className="navbar-inner" aria-label="Main navigation">
          <div className="navbar-logo" onClick={(e) => handleNavClick(e, '/')} style={{ cursor: 'pointer' }}>
            <img className="logo-icon" src="/logo.png" alt="Elixor Technologies Logo" />
            <span className="logo-text">Elixor Technologies.</span>
          </div>

          <ul className="navbar-links" role="list" aria-label="Page sections">
              {/* About Us Dropdown Trigger */}
            <li 
              className="nav-dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="nav-link dropdown-trigger" aria-haspopup="true" aria-expanded={dropdownOpen}>
                About Us
                <svg className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </li>
            
            <div className="nav-separator"></div>

            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <li>
                  <a href={link.path} className="nav-link" onClick={(e) => handleNavClick(e, link.path)}>
                    {link.name}
                  </a>
                </li>
                {index < navLinks.length - 1 && (
                  <div className="nav-separator"></div>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Magnetic Button with an extended hover radius effect */}
          <a href="#contact" className="navbar-cta-link" style={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, '#contact')}>
            <MagneticButton className="liquid-badge-wrapper navbar-cta-wrapper" elasticity={0.25} magneticRadius={120}>
              <div className="liquid-badge">
                <span className="badge-content-text">Book a slot ↗</span>
                <div className="liquid-container">
                  <div className="liquid-wave wave-1"></div>
                  <div className="liquid-wave wave-2"></div>
                </div>
              </div>
            </MagneticButton>
          </a>
        </nav>

        {/* Mega Menu Dropdown Integrated into Navbar */}
        <motion.div
          className="mega-menu-wrapper"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: dropdownOpen ? 'auto' : 0, 
            opacity: dropdownOpen ? 1 : 0 
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden', width: '100%' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="mega-menu-grid">
            
            {/* Column 1: Company */}
            <div className="mega-col">
              <h4 className="mega-heading">COMPANY</h4>
              <Link to="/story" className="mega-link" onClick={() => setDropdownOpen(false)}>Story</Link>
              <Link to="/team" className="mega-link" onClick={() => setDropdownOpen(false)}>Team</Link>
              <Link to="/partners" className="mega-link" onClick={() => setDropdownOpen(false)}>Partners</Link>
              <a href="#features" className="mega-link" onClick={(e) => handleNavClick(e, '#features')}>Integrations</a>
            </div>

            {/* Column 2: Resources */}
            <div className="mega-col">
              <h4 className="mega-heading">RESOURCES</h4>
              <a href="#careers" className="mega-link" onClick={(e) => e.preventDefault()}>Careers</a>
              <a href="#how-we-work" className="mega-link" onClick={(e) => e.preventDefault()}>How We Work</a>
              <a href="#history" className="mega-link" onClick={(e) => e.preventDefault()}>History</a>
              <a href="#advisory" className="mega-link" onClick={(e) => e.preventDefault()}>Advisory</a>
            </div>

            {/* Column 3: Contact Card */}
            <div className="mega-col mega-col-contact">
              <div className="mega-contact-card">
                <h3 className="mega-contact-title">Get in Touch</h3>
                <p className="mega-contact-desc">Ready to transform your business? Let's talk.</p>
                <button className="mega-contact-btn" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;

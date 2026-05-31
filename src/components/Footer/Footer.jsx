import React, { useState } from 'react';
import { Github, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import ProcessModal from '../Common/ProcessModal';
import './Footer.css';

const Footer = () => {
    const [isProcessOpen, setIsProcessOpen] = useState(false);

    return (
        <footer className="footer" id="footer" role="contentinfo" aria-label="Site footer">
            <div className="footer-container">

                {/* 1. TOP CTA DARK CARD - Premium Software Feel */}
                <div className="footer-cta-card">
                    <div className="cta-card-pattern"></div>
                    <div className="cta-card-content">
                        <div className="cta-left">
                            <h2 className="cta-headline">
                                The range of capabilities <br />
                                we offer includes the ability <br />
                                to <span className="cta-glow-text">launch at lightspeed.</span>
                            </h2>
                        </div>
                        <div className="cta-right">
                            <p className="cta-subtext">
                                With a custom-built tech stack and AI-driven workflows that reduce
                                technical debt and automatically accelerate your momentum.
                            </p>
                            <div className="cta-actions">
                                <a href="/contact" style={{ textDecoration: 'none' }}>
                                    <div className="liquid-badge-wrapper cta-main-btn">
                                        <div className="liquid-badge">
                                            <span className="badge-content-text">Get started <ArrowUpRight size={16} /></span>
                                            <div className="liquid-container">
                                                <div className="liquid-wave wave-1"></div>
                                                <div className="liquid-wave wave-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <button className="cta-secondary-btn" onClick={() => setIsProcessOpen(true)}>
                                    Watch how it works <span className="play-icon">▶</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN FOOTER CONTENT */}
                <div className="footer-main">
                    {/* Massive Outline Background Text */}
                    <div className="footer-bg-text">ELIXOR</div>

                    <div className="footer-cols">
                        {/* Column 1: Branding */}
                        <div className="footer-col branding-col">
                            <div className="footer-logo">
                                <img className="logo-icon" src="/logo.webp" alt="Elixor Technologies Logo" />
                                <span>Elixor Technologies.</span>
                            </div>
                            <p className="footer-branding-desc">
                                We are the mission control for founders looking to build, validate, and scale MVPs in record time.
                            </p>
                            <div className="status-badge-glass">
                                <span className="status-dot-pulsing"></span>
                                All systems operational
                            </div>
                        </div>

                        {/* Link Columns */}
                        <div className="links-group" role="navigation" aria-label="Footer navigation">
                            <div className="footer-col">
                                <h4>Agency</h4>
                                <a href="#home">Home</a>
                                <a href="#features">Features</a>
                                <a href="#process">Process</a>
                                <a href="#projects">Projects</a>
                                <a href="/contact">Contact</a>
                            </div>
                            <div className="footer-col">
                                <h4>Support</h4>
                                <a href="#docs">Documentation</a>
                                <a href="#faq">FAQ</a>
                                <a href="#support">Support</a>
                            </div>
                            <div className="footer-col">
                                <h4>Connect</h4>
                                <a href="#" className="social-link" aria-label="Follow Elixor Technologies on Instagram" rel="noopener noreferrer"><Instagram size={14} /> Instagram</a>
                                <a href="#" className="social-link" aria-label="Follow Elixor Technologies on LinkedIn" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn</a>
                                <a href="#" className="social-link" aria-label="View Elixor Technologies GitHub" rel="noopener noreferrer"><Github size={14} /> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © 2024 Elixor Technologies. All rights reserved
                    </div>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Use</a>
                    </div>
                </div>
            </div>
            
            {/* Interactive Process Walkthrough Modal */}
            <ProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />
        </footer>
    );
};

export default Footer;

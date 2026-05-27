import React from 'react';
import { motion } from 'framer-motion';
import ProjectsComponent from '../components/Projects/Projects';
import GlassSurface from '../components/Common/GlassSurface';
import MagneticButton from '../components/Common/MagneticButton';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="projects-hero-pretitle">Our Portfolio</span>
        <h1 className="projects-hero-title">Featured Case Studies</h1>
        <p className="projects-hero-desc">
          We don't just write code; we build digital businesses. Explore some of the products, MVPs, and enterprise systems we've shipped recently.
        </p>
      </motion.section>

      {/* Core Projects Component */}
      <ProjectsComponent />

      {/* Impact / Metrics Section */}
      <motion.section 
        className="projects-metrics"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="metrics-grid">
          <motion.div variants={fadeUp} style={{ height: '100%' }}>
            <GlassSurface className="metric-card" width="100%" height="100%" borderRadius={24} padding="40px" borderWidth={1} blur={12}>
              <div className="metric-value">50+</div>
              <div className="metric-label">Products Shipped</div>
              <div className="metric-desc">From zero-to-one MVPs to full-scale enterprise migrations.</div>
            </GlassSurface>
          </motion.div>
          <motion.div variants={fadeUp} style={{ height: '100%' }}>
            <GlassSurface className="metric-card" width="100%" height="100%" borderRadius={24} padding="40px" borderWidth={1} blur={12}>
              <div className="metric-value">99%</div>
              <div className="metric-label">Client Retention</div>
              <div className="metric-desc">Our partners stay with us because we treat their business like our own.</div>
            </GlassSurface>
          </motion.div>
          <motion.div variants={fadeUp} style={{ height: '100%' }}>
            <GlassSurface className="metric-card" width="100%" height="100%" borderRadius={24} padding="40px" borderWidth={1} blur={12}>
              <div className="metric-value">6 mo</div>
              <div className="metric-label">Average Engagement</div>
              <div className="metric-desc">Long-term architectural partnerships, not just gig work.</div>
            </GlassSurface>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="projects-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <GlassSurface className="cta-card" width="100%" height="auto" borderRadius={32} padding="80px" borderWidth={1} blur={24} brightness={30} opacity={0.9} backgroundOpacity={0.8}>
          <div className="cta-content">
            <h2 className="cta-title">Ready to build your next big thing?</h2>
            <p className="cta-desc">
              Whether you need a rapid MVP or a scalable enterprise architecture, our engineering team is ready to execute.
            </p>
            <MagneticButton className="liquid-badge-wrapper navbar-cta-wrapper" elasticity={0.25} magneticRadius={120} style={{ marginTop: '16px' }}>
              <div className="liquid-badge" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                <span className="badge-content-text">Start a Project ↗</span>
                <div className="liquid-container">
                  <div className="liquid-wave wave-1"></div>
                  <div className="liquid-wave wave-2"></div>
                </div>
              </div>
            </MagneticButton>
          </div>
        </GlassSurface>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;

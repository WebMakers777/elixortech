import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassSurface from '../components/Common/GlassSurface';
import './PageTheme.css';

const partners = [
  'Vercel', 'Stripe', 'Supabase', 'Figma', 'AWS', 'OpenAI'
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Partners = () => {
  useEffect(() => {
    document.title = 'Partners | Elixor Technologies';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Our trusted technology and business partners helping deliver exceptional software solutions globally.');
  }, []);

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          borderWidth={1}
          padding="60px"
          blur={12}
          className="page-surface"
        >
          <h1 className="page-title">Our Partners</h1>
          <div className="page-content">
            <p>
              We collaborate with the world's most powerful platforms to deliver uncompromised scalability. Our infrastructure is built on the backbone of industry leaders.
            </p>
            
            <motion.div 
              className="page-partners-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {partners.map((partner, i) => (
                <motion.div key={i} className="partner-card" variants={fadeUp}>
                  <h3 className="partner-logo" style={{ color: '#fff', fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>{partner}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </GlassSurface>
      </motion.div>
    </div>
  );
};

export default Partners;

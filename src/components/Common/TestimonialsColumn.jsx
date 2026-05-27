import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props) => {
  return (
    <div 
      className={props.className} 
      style={{ 
        overflow: 'hidden', 
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px', 
          paddingBottom: '24px',
          willChange: 'transform'
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '30px', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(0,0,0,0.06)', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    maxWidth: '350px',
                    width: '100%'
                  }}
                >
                  <div style={{ fontSize: '1rem', color: '#333', marginBottom: '20px', lineHeight: '1.5', fontStyle: 'italic' }}>
                    "{text}"
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>{name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

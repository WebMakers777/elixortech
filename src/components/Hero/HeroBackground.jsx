import React, { useState, useEffect } from 'react';
import LiquidEther from './LiquidEther';
import './HeroBackground.css';

const HeroBackground3D = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        // Initial check
        checkMobile();
        // Listener for resize
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="hero-3d-wrapper">
            {/* LiquidEther fluid simulation background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                {!isMobile ? (
                    <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B497CF']}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous
                        viscous={15}
                        iterationsViscous={8}
                        iterationsPoisson={8}
                        resolution={0.25}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                ) : (
                    <div className="mobile-fallback-gradient" style={{
                        width: '100%', 
                        height: '100%',
                        background: 'radial-gradient(circle at 50% 50%, #1e103c 0%, #060b13 100%)'
                    }} />
                )}
            </div>

            {/* Overlays to blend with page context */}
            <div className="hero-3d-vignette" />
            <div className="hero-3d-bottom-fade" />
            <div className="hero-3d-noise" />
        </div>
    );
};

export default HeroBackground3D;

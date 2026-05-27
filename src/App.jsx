import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AmbientBackground from './components/AmbientBackground/AmbientBackground';
import Loader from './components/Loader/Loader';
import Home from './pages/Home';
import Story from './pages/Story';
import Team from './pages/Team';
import Partners from './pages/Partners';
import ProjectsPage from './pages/Projects';
import FAQPage from './pages/FAQPage';
import './App.css';

// Lazy-load the heavy WebGL fluid cursor so it doesn't block initial render
const SplashCursor = lazy(() => import('./components/Common/SplashCursor'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Hide the loader after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Only enable the heavy WebGL cursor on capable devices
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    if (!prefersReducedMotion && !isTouch && !isLowEnd) {
      // Delay loading the cursor until after everything else is rendered
      const t = setTimeout(() => setShowCursor(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);
  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling, which makes
    // scroll-linked animations (like the sticky projects) look perfect.
    // Disable Lenis smooth scrolling entirely on mobile / touch devices.
    // Native scrolling is vastly superior on mobile and Lenis can cause lockups.
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    
    if (isTouch) {
      return; // Skip initialization entirely
    }

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      infinite: false,
    });
    
    // Expose globally so Navbar can use it for smooth section jumping
    window.lenis = lenis;

    // Tie Lenis scrolling to requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`app ${loading ? 'app-loading' : ''}`}>
      {/* Premium Loader Overlay */}
      <Loader isLoading={loading} />

      {/* Global Interactive Elements — only on capable devices */}
      {showCursor && (
        <Suspense fallback={null}>
          <SplashCursor
            SIM_RESOLUTION={32}
            DYE_RESOLUTION={512}
            PRESSURE_ITERATIONS={10}
            DENSITY_DISSIPATION={6.0}
            VELOCITY_DISSIPATION={3.0}
            PRESSURE={0.1}
            CURL={2}
            SPLAT_RADIUS={0.1}
            SPLAT_FORCE={3000}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#A855F7"
          />
        </Suspense>
      )}

      {/* Global pixelated grid and grain */}
      <div className="pixel-overlay"></div>
      <div className="noise-overlay"></div>

      {/* Wavy animated blobs */}
      <div className="wavy-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Subtle ambient floating elements */}
      <AmbientBackground />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

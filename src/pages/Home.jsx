import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Execution from '../components/Execution/Execution';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  useEffect(() => {
    document.title = 'Elixor Technologies | MVP Development Company & SaaS Engineering Agency';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Build launch-ready MVPs and SaaS platforms in 21 days. Full-stack product development for startups globally.');
  }, []);

  return (
    <main className="main-content">
      <Hero />
      <Features />
      <Execution />
      <Testimonials />
    </main>
  );
};

export default Home;

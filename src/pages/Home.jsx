import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Process from '../components/Process/Process';
import Execution from '../components/Execution/Execution';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <main className="main-content">
      <Hero />
      <Features />
      <Process />
      <Execution />
      <Testimonials />
    </main>
  );
};

export default Home;

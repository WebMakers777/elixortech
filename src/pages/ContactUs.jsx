import React, { useEffect } from 'react';
import Contact from '../components/Contact/Contact';

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us | Elixor Technologies';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Get in touch with Elixor Technologies to start building your MVP or SaaS platform. Book a discovery call today.');
  }, []);

  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <Contact />
    </main>
  );
};

export default ContactUs;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Zap, Shield, Target, Smartphone, Globe, RefreshCcw, Rocket } from 'lucide-react';

import './FAQPage.css';

const faqData = [
    {
        question: "What kind of projects does Elixor Technologies handle?",
        answer: "We specialize in building MVPs, full-stack web apps, SaaS platforms, CRM systems, ERP portals, and company websites. From financial platforms like BookMyCA to enterprise-grade tools like ACTTS CRM — if it's digital, we build it.",
        color: "blue",
        icon: <Globe size={24} />,
        size: "large"
    },
    {
        question: "How fast can you deliver a working product?",
        answer: "Speed is in our DNA. A typical MVP or landing page ships in under 4 weeks. More complex systems like ERP portals or CRM dashboards take 6–8 weeks. We cut through the noise to deliver the essential features that prove your market fit first.",
        color: "purple",
        icon: <Zap size={24} />,
        size: "medium"
    },
    {
        question: "What is your tech stack?",
        answer: "We work with modern, battle-tested technologies: React, Next.js, Node.js, TypeScript, Tailwind CSS, MongoDB, and PostgreSQL.",
        color: "emerald",
        icon: <Sparkles size={24} />,
        size: "small"
    },
    {
        question: "How does the pricing work?",
        answer: "No scope creep or runaway hourly bills. We offer clear, milestone-based pricing that aligns with your startup's runway.",
        color: "pink",
        icon: <Target size={24} />,
        size: "small"
    },
    {
        question: "Do you handle design as well, or just development?",
        answer: "We're end-to-end. That means UI/UX design, frontend development, backend engineering, database architecture, and deployment.",
        color: "orange",
        icon: <Smartphone size={24} />,
        size: "medium"
    },
    {
        question: "Do you build mobile apps?",
        answer: "Yes! We build high-performance cross-platform mobile applications using React Native and Flutter, ensuring your product works perfectly on both iOS and Android from day one.",
        color: "blue",
        icon: <Smartphone size={24} />,
        size: "medium"
    },
    {
        question: "Can I see examples of your past work?",
        answer: "Absolutely. Check out our Projects section — we've built BookMyCA (a financial services platform with Razorpay integration), ACTTS CRM (a full customer relationship management system), an Enterprise Resource Planning Portal, and Hansha Pharmaceuticals' website.",
        color: "emerald",
        icon: <Shield size={24} />,
        size: "large"
    },
    {
        question: "Will you sign an NDA?",
        answer: "Of course. Your intellectual property is safe with us. We sign NDAs before we even hear your pitch.",
        color: "purple",
        icon: <Shield size={24} />,
        size: "small"
    },
    {
        question: "Do you integrate third-party APIs?",
        answer: "Yes, we regularly integrate payment gateways like Stripe and Razorpay, AI services like OpenAI, and analytics like Mixpanel.",
        color: "pink",
        icon: <Zap size={24} />,
        size: "small"
    },
    {
        question: "What happens after the project is delivered?",
        answer: "We don't disappear after launch. We offer post-launch support, bug fixes, and iterative improvements. Many of our clients continue working with us as their product evolves.",
        color: "orange",
        icon: <RefreshCcw size={24} />,
        size: "medium"
    },
    {
        question: "Do you help with hosting and domains?",
        answer: "Yes, we manage the entire deployment process to AWS, Vercel, or DigitalOcean, and help configure your custom domains and SSL certificates.",
        color: "blue",
        icon: <Globe size={24} />,
        size: "medium"
    },
    {
        question: "How do I get started?",
        answer: "Simple — hit the 'Book a Slot' button in the navbar or the 'Start your project' CTA in the hero section. Fill in your details and preferred time, and we'll set up a discovery call to understand your vision, scope, and timeline.",
        color: "emerald",
        icon: <Rocket size={24} />,
        size: "large"
    },
];

const FAQBubble = ({ item, index }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply a smooth spring to the scroll progress to completely eliminate jitter
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.75, 1, 1, 0.75]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const xOffset = index % 2 === 0 ? 40 : -40;
  const x = useTransform(smoothProgress, [0, 1], [xOffset, -xOffset]);

  // Determine width based on size
  let widthClass = 'faq-bubble-wrapper-large';
  if (item.size === 'medium') widthClass = 'faq-bubble-wrapper-medium';
  if (item.size === 'small') widthClass = 'faq-bubble-wrapper-small';

  return (
    <div className={`faq-bubble-wrapper ${widthClass}`} ref={ref}>
      <motion.div 
        style={{ scale, opacity, x, width: '100%', willChange: 'transform, opacity' }}
        className={`faq-bubble color-${item.color}`}
      >
        <div className="faq-bubble-header">
          <div className="faq-bubble-icon">{item.icon}</div>
          <h3 className="faq-bubble-q">{item.question}</h3>
        </div>
        <p className="faq-bubble-a">{item.answer}</p>
      </motion.div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="faq-page-container">
      {/* Ambient Background Glowing Orbs */}
      <div className="faq-ambient-orbs">
        <div className="faq-orb faq-orb-1"></div>
        <div className="faq-orb faq-orb-2"></div>
        <div className="faq-orb faq-orb-3"></div>
      </div>
      {/* Hero Section */}
      <motion.section 
        className="faq-page-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="faq-hero-pretitle">The Details</span>
        <h1 className="faq-hero-title">Questions & Answers</h1>
        <p className="faq-hero-desc">
          Everything you need to know before you start building with us. Scroll down to explore our most frequently asked questions.
        </p>
      </motion.section>

      {/* Interactive Scattered FAQ Layout */}
      <section className="faq-scatter-container">
        {faqData.map((item, index) => (
          <FAQBubble key={index} item={item} index={index} />
        ))}
      </section>
    </div>
  );
};

export default FAQPage;

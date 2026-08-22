import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Blocks, Check, Code2, Gauge, Palette, Search, ShieldCheck } from 'lucide-react';
import './Team.css';

const disciplines = [
    {
        icon: <Search size={22} />,
        title: 'Product strategy',
        description: 'Turns the brief into a focused roadmap, clear user journeys, and measurable launch goals.',
        skills: ['Discovery', 'Scope', 'Roadmap'],
    },
    {
        icon: <Palette size={22} />,
        title: 'Product design',
        description: 'Shapes accessible interfaces and prototypes that feel intuitive before engineering begins.',
        skills: ['UX flows', 'UI system', 'Prototype'],
    },
    {
        icon: <Code2 size={22} />,
        title: 'Engineering',
        description: 'Builds production-ready web products with maintainable architecture and practical AI.',
        skills: ['Frontend', 'Backend', 'Integrations'],
    },
    {
        icon: <ShieldCheck size={22} />,
        title: 'Quality & launch',
        description: 'Owns release checks, performance, deployment, and a confident handover to your team.',
        skills: ['QA', 'Performance', 'Launch'],
    },
];

const Team = () => {
    return (
        <section className="team-section" id="team" aria-labelledby="team-title">
            <div className="team-container">
                <Motion.header
                    className="team-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="team-eyebrow"><span className="team-live-dot" /> The team behind your build</div>
                    <div className="team-heading-row">
                        <h2 id="team-title">Small team.<br /><span>Serious ownership.</span></h2>
                        <p>
                            You work with one focused product pod from first workshop to launch—
                            not a revolving bench of people learning your product every week.
                        </p>
                    </div>
                </Motion.header>

                <div className="team-layout">
                    <Motion.article
                        className="team-feature-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="team-feature-grid" aria-hidden="true" />
                        <div className="team-feature-top">
                            <span className="team-feature-icon"><Blocks size={22} /></span>
                            <span className="team-availability"><i /> Taking on select builds</span>
                        </div>
                        <div className="team-feature-copy">
                            <span className="team-kicker">Your core product pod</span>
                            <h3>Strategy, design, and engineering in the same room.</h3>
                            <p>Fewer hand-offs means faster decisions, tighter feedback loops, and a product that stays coherent as it grows.</p>
                        </div>
                        <div className="team-commitments">
                            <span><Check size={15} /> Direct communication</span>
                            <span><Check size={15} /> Weekly working demos</span>
                            <span><Check size={15} /> Clear scope and progress</span>
                        </div>
                        <a href="#contact" className="team-feature-link">
                            Meet your product pod <ArrowUpRight size={17} />
                        </a>
                    </Motion.article>

                    <div className="team-discipline-grid">
                        {disciplines.map((discipline, index) => (
                            <Motion.article
                                className="team-discipline-card"
                                key={discipline.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.45, delay: index * 0.07 }}
                            >
                                <div className="team-card-top">
                                    <span className="team-card-icon">{discipline.icon}</span>
                                    <span className="team-card-number">0{index + 1}</span>
                                </div>
                                <h3>{discipline.title}</h3>
                                <p>{discipline.description}</p>
                                <div className="team-skill-list">
                                    {discipline.skills.map((skill) => <span key={skill}>{skill}</span>)}
                                </div>
                            </Motion.article>
                        ))}
                    </div>
                </div>

                <div className="team-proof-strip" aria-label="How the team works">
                    <span className="team-proof-label"><Gauge size={18} /> Built for momentum</span>
                    <span><strong>01</strong> One accountable pod</span>
                    <span><strong>02</strong> Async-first updates</span>
                    <span><strong>03</strong> Decisions documented</span>
                    <span><strong>04</strong> Clean handover</span>
                </div>
            </div>
        </section>
    );
};

export default Team;

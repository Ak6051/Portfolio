import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { personalInfo } from '../data/portfolioData';

const facts = [
  { icon: 'server',   label: 'Specialisation', value: 'Backend & API Development' },
  { icon: 'shield',   label: 'Auth Expertise',  value: 'JWT · RBAC · Secure APIs' },
  { icon: 'cpu',      label: 'AI Integration',  value: 'Google Gemini AI' },
  { icon: 'map-pin',  label: 'Location',        value: personalInfo.location },
];

function FactCard({ icon, label, value, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  return (
    <motion.div
      ref={ref}
      className="about__fact-card"
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="about__fact-icon">
        <Icon name={icon} size={20} />
      </div>
      <div>
        <div className="about__fact-label">{label}</div>
        <div className="about__fact-value">{value}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">About Me</div>
            <h2 className="section__title">
              Crafting the Logic Behind{' '}
              <span className="text-gradient">Seamless Products</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="about__grid">
          {/* Text block */}
          <AnimatedSection delay={0.1}>
            <div className="about__text">
              <p>
                I'm <strong>{personalInfo.name}</strong>, a Software Developer based in{' '}
                <strong>{personalInfo.location}</strong>. I have hands-on experience in
                MERN Stack development, REST API development, and AI-powered recruitment
                solutions.
              </p>
              <p>
                I've worked on enterprise recruitment platforms, CRM systems, and
                role-based applications using React.js, Node.js, Express.js, MongoDB, and
                JWT Authentication — progressing from full-stack MERN development into
                specialised backend engineering across two companies.
              </p>
              <p>
                I'm passionate about building scalable web applications and continuously
                learning modern technologies. I care about clean API contracts, secure
                authentication patterns, and systems that are maintainable and ready to
                grow.
              </p>

              <div className="about__contacts">
                <a href={`mailto:${personalInfo.email}`} className="about__contact-link">
                  <Icon name="mail" size={15} /> {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="about__contact-link">
                  <Icon name="phone" size={15} /> {personalInfo.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Fact cards */}
          <div className="about__facts">
            {facts.map(({ icon, label, value }, i) => (
              <FactCard key={label} icon={icon} label={label} value={value} delay={0.12 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

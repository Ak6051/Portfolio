import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { skills } from '../data/portfolioData';

function SkillCard({ category, icon, items, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="skill-card__header">
        <div className="skill-card__icon">
          <Icon name={icon} size={20} />
        </div>
        <h3 className="skill-card__title">{category}</h3>
      </div>
      <div className="skill-card__tags">
        {items.map(item => (
          <span key={item} className="skill-tag">{item}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">Technical Skills</div>
            <h2 className="section__title">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="section__subtitle">
              A focused set of technologies I use to build production-ready backend systems.
            </p>
          </div>
        </AnimatedSection>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.category}
              {...skill}
              delay={0.1 + i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

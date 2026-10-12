import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { experience } from '../data/portfolioData';

function TimelineItem({ job, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`timeline-item${isEven ? ' timeline-item--left' : ' timeline-item--right'}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      {/* Connector dot */}
      <div className="timeline-item__dot" aria-hidden="true">
        <div className="timeline-item__dot-inner" />
      </div>

      <div className="timeline-card">
        <div className="timeline-card__header">
          <div>
            <h3 className="timeline-card__role">{job.role}</h3>
            <div className="timeline-card__company">{job.company} · {job.location}</div>
          </div>
          <div className="timeline-card__period">{job.period}</div>
        </div>

        <ul className="timeline-card__highlights">
          {job.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="timeline-card__tags">
          {job.tags.map(tag => (
            <span key={tag} className="skill-tag skill-tag--sm">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">Work History</div>
            <h2 className="section__title">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="section__subtitle">
              My journey building backend systems and APIs across recruitment technology companies.
            </p>
          </div>
        </AnimatedSection>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {experience.map((job, i) => (
            <TimelineItem key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

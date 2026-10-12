import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      ref={ref}
      className="project-card"
      style={{ '--card-accent': project.accentColor }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
    >
      {/* Top accent bar */}
      <div className="project-card__accent-bar" aria-hidden="true" />

      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          <Icon name="server" size={22} />
        </div>
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
      </div>

      {/* Problem / Solution */}
      <div className="project-card__section">
        <div className="project-card__section-label">Problem</div>
        <p className="project-card__text">{project.problem}</p>
      </div>
      <div className="project-card__section">
        <div className="project-card__section-label">Solution</div>
        <p className="project-card__text">{project.solution}</p>
      </div>

      {/* Expandable features */}
      <button
        className="project-card__expand-btn"
        onClick={() => setExpanded(v => !v)}
        aria-expanded={expanded}
      >
        Key Features
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'inline-flex' }}
        >
          <Icon name="arrow-right" size={14} style={{ transform: 'rotate(90deg)' }} />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            className="project-card__features"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.features.map((f, i) => (
              <li key={i}>
                <Icon name="check-circle" size={14} className="feature-check" />
                {f}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* My Role */}
      <div className="project-card__section">
        <div className="project-card__section-label">My Role</div>
        <p className="project-card__text">{project.myRole}</p>
      </div>

      {/* Tags */}
      <div className="project-card__tags">
        {project.technologies.map(tech => (
          <span key={tech} className="skill-tag skill-tag--sm">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        {project.repoUrl !== '#' && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <Icon name="github" size={16} /> Repository
          </a>
        )}
        {project.demoUrl !== '#' && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <Icon name="external-link" size={16} /> Live Demo
          </a>
        )}
        {project.repoUrl === '#' && project.demoUrl === '#' && (
          <span className="project-card__private">
            <Icon name="shield" size={14} /> Private / Confidential
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">Featured Work</div>
            <h2 className="section__title">
              Projects I've <span className="text-gradient">Shipped</span>
            </h2>
            <p className="section__subtitle">
              Case studies from professional engagements — each representing a real-world
              problem solved with thoughtful backend architecture.
            </p>
          </div>
        </AnimatedSection>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

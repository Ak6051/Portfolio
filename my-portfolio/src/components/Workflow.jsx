import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { workflowSteps } from '../data/portfolioData';

function WorkflowStep({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className="workflow-step"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="workflow-step__number" aria-hidden="true">{step.step}</div>
      <div className="workflow-step__icon">
        <Icon name={step.icon} size={22} />
      </div>
      <h3 className="workflow-step__title">{step.title}</h3>
      <p className="workflow-step__desc">{step.description}</p>

      {/* Connector arrow — hidden for last item */}
      {index < workflowSteps.length - 1 && (
        <div className="workflow-step__arrow" aria-hidden="true">
          <Icon name="arrow-right" size={16} />
        </div>
      )}
    </motion.div>
  );
}

export default function Workflow() {
  return (
    <section id="workflow" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">How I Work</div>
            <h2 className="section__title">
              Backend Development <span className="text-gradient">Workflow</span>
            </h2>
            <p className="section__subtitle">
              A structured, security-first approach I follow when delivering backend systems
              from initial brief to production-ready code.
            </p>
          </div>
        </AnimatedSection>

        <div className="workflow__grid">
          {workflowSteps.map((step, i) => (
            <WorkflowStep key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

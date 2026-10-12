import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import Icon from './Icon';

function GridCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw();
    };
    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const spacing = 52;
      // vertical lines
      for (let x = 0; x <= width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0); ctx.lineTo(x, height);
        const alpha = 0.04 + 0.04 * Math.sin(x / width * Math.PI);
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // horizontal lines
      for (let y = 0; y <= height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y); ctx.lineTo(width, y);
        const alpha = 0.03 + 0.03 * Math.sin(y / height * Math.PI);
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // intersection dots
      ctx.fillStyle = 'rgba(99,102,241,0.12)';
      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    return () => ro.disconnect();
  }, []);
  return <canvas ref={canvasRef} className="hero__grid" aria-hidden="true" />;
}

function Orbs() {
  return (
    <div className="hero__orbs" aria-hidden="true">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />
    </div>
  );
}


export default function Hero() {
  const handleScrollTo = href => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="hero-section">
      <GridCanvas />
      <Orbs />

      <motion.div
        className="hero-section__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={item} className="hero__badge">
          <span className="hero__badge-dot" />
          Open to new opportunities
        </motion.div>

        {/* Main headline */}
        <motion.h1 variants={item} className="hero__headline">
          Building Secure Backends<br />
          for <span className="text-gradient">Real-World Applications</span>
        </motion.h1>

        {/* Summary */}
        <motion.p variants={item} className="hero__subheadline">
          {personalInfo.summary}
        </motion.p>

        {/* Identity card */}
        <motion.div variants={item} className="hero__identity">
          <div className="hero__avatar" aria-hidden="true">
            {personalInfo.name.charAt(0)}
          </div>
          <div>
            <div className="hero__name">{personalInfo.name}</div>
            <div className="hero__title">{personalInfo.title}</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="hero__actions">
          <button className="btn btn--primary btn--lg" onClick={() => handleScrollTo('#projects')}>
            <span>Explore My Work</span>
            <Icon name="arrow-right" size={17} />
          </button>
          <button className="btn btn--outline btn--lg" onClick={() => handleScrollTo('#contact')}>
            Contact Me
          </button>
          <a
            href={personalInfo.resume}
            className="btn btn--ghost btn--lg"
            download="Anku_Govardhan_Rajbhar_Resume.pdf"
            style={{ fontSize: '14px' }}
          >
            <Icon name="download" size={16} /> Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="hero__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
            <Icon name="github" size={19} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <Icon name="linkedin" size={19} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
            <Icon name="mail" size={19} />
          </a>
          <div className="hero__socials-divider" aria-hidden="true" />
          <span className="hero__location">
            <Icon name="map-pin" size={13} />
            {personalInfo.location}
          </span>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

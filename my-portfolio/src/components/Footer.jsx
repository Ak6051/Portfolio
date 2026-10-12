import { motion } from 'motion/react';
import Icon from './Icon';
import { personalInfo } from '../data/portfolioData';

const year = new Date().getFullYear();

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo */}
        <button className="footer__logo" onClick={scrollTop} aria-label="Scroll to top">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Anku</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        <p className="footer__tagline">
          Building Secure Backends for Real-World Applications
        </p>

        {/* Social links */}
        <div className="footer__socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="GitHub"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer__social"
            aria-label="Email"
          >
            <Icon name="mail" size={18} />
          </a>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <motion.button
            className="footer__back-top"
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
          >
            <Icon name="arrow-right" size={16} style={{ transform: 'rotate(-90deg)' }} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

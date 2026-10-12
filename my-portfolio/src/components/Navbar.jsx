import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icon';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Intersection observer for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#"
            className="navbar__logo"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Home"
          >
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-name">Anku</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Resume CTA */}
          <a
            href={personalInfo.resume}
            className="btn btn--outline btn--sm"
            download="Anku_Govardhan_Rajbhar_Resume.pdf"
            aria-label="Download Resume"
          >
            <Icon name="download" size={15} />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`mobile-menu__link${activeSection === href.slice(1) ? ' mobile-menu__link--active' : ''}`}
                  onClick={e => handleNavClick(e, href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href={personalInfo.resume}
                className="btn btn--primary btn--full"
                download="Anku_Govardhan_Rajbhar_Resume.pdf"
              >
                <Icon name="download" size={15} /> Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

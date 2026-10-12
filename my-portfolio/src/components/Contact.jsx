import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { personalInfo } from '../data/portfolioData';

const contactDetails = [
  {
    icon: 'mail',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: 'map-pin',
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'View Profile',
    href: personalInfo.github,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect',
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Opens the user's mail client pre-filled — no backend required
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">Get In Touch</div>
            <h2 className="section__title">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            <p className="section__subtitle">
              Open to backend engineering roles, freelance projects, and collaborations.
              Drop a message — I'll get back to you soon.
            </p>
          </div>
        </AnimatedSection>

        <div className="contact__grid">
          {/* Contact details */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="contact__details">
              {contactDetails.map(({ icon, label, value, href }) => (
                <div key={label} className="contact__detail">
                  <div className="contact__detail-icon">
                    <Icon name={icon} size={18} />
                  </div>
                  <div>
                    <div className="contact__detail-label">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contact__detail-value contact__detail-value--link"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="contact__detail-value">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} direction="right">
            <form
              ref={formRef}
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn--primary btn--full"
                whileTap={{ scale: 0.97 }}
              >
                {submitted ? (
                  <>
                    <Icon name="check-circle" size={18} /> Opening mail client…
                  </>
                ) : (
                  <>
                    <Icon name="mail" size={18} /> Send Message
                  </>
                )}
              </motion.button>

              <p className="contact__form-note">
                This form opens your default mail client pre-filled with your message.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

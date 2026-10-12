import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { education, languages, areasOfInterest } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <AnimatedSection>
          <div className="section__header">
            <div className="section__label">Background</div>
            <h2 className="section__title">
              Education & <span className="text-gradient">Languages</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="education__grid">
          {/* Education cards */}
          <div className="education__degrees">
            {education.map((edu, i) => (
              <AnimatedSection key={edu.id} delay={0.1 + i * 0.1} direction="left">
                <div className="edu-card">
                  <div className="edu-card__icon">
                    <Icon name="graduation" size={22} />
                  </div>
                  <div>
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <div className="edu-card__institution">{edu.institution}</div>
                    <div className="edu-card__location">
                      <Icon name="map-pin" size={13} />
                      {edu.location}
                    </div>
                    {edu.year && (
                      <div className="edu-card__year">
                        <Icon name="check-circle" size={13} />
                        Graduated {edu.year}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right column — Languages + Areas of Interest */}
          <div className="education__right">
            {/* Languages */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="languages-card">
                <h3 className="languages-card__title">
                  <Icon name="globe" size={20} />
                  Languages
                </h3>
                <div className="languages-card__list">
                  {languages.map(({ name, level }) => (
                    <div key={name} className="language-item">
                      <div className="language-item__name">{name}</div>
                      <div className="language-item__level">{level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Areas of Interest */}
            <AnimatedSection delay={0.3} direction="right">
              <div className="interests-card">
                <h3 className="interests-card__title">
                  <Icon name="star" size={20} />
                  Areas of Interest
                </h3>
                <div className="interests-card__list">
                  {areasOfInterest.map(({ label, icon }) => (
                    <div key={label} className="interest-item">
                      <div className="interest-item__icon">
                        <Icon name={icon} size={15} />
                      </div>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

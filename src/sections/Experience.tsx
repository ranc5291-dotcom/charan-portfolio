import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/experience';

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      aria-labelledby="experience-heading"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="text-label">Experience</span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          className="text-display-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: 'var(--color-text)', marginBottom: '4rem', maxWidth: '600px' }}
        >
          Where I've built things.
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              left: '11px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'flex', gap: '2rem', paddingLeft: '2.5rem', position: 'relative' }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.3rem',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: item.isCurrent ? 'var(--color-accent)' : 'var(--color-bg-3)',
                    border: `2px solid ${item.isCurrent ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: item.isCurrent ? '0 0 16px rgba(79,142,247,0.4)' : 'none',
                    zIndex: 1,
                  }}
                >
                  {item.isCurrent && (
                    <div
                      style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="card"
                  style={{ flex: 1, padding: '1.75rem' }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                        <h3
                          className="font-display"
                          style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)' }}
                        >
                          {item.company}
                        </h3>
                        {item.isCurrent && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.6rem',
                              color: '#22c55e',
                              background: 'rgba(34,197,94,0.1)',
                              border: '1px solid rgba(34,197,94,0.25)',
                              borderRadius: '99px',
                              padding: '0.15rem 0.5rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            ● Current
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                        {item.role}
                      </p>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <p className="text-meta">{item.period}</p>
                      <p className="text-meta" style={{ marginTop: '0.2rem' }}>{item.location}</p>
                    </div>
                  </div>

                  {/* Focus */}
                  {item.focus && (
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--color-accent)',
                        background: 'var(--color-accent-dim)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.7rem',
                        marginBottom: '1.25rem',
                        display: 'inline-block',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.focus}
                    </p>
                  )}

                  {/* Responsibilities */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                    }}
                    aria-label={`Responsibilities at ${item.company}`}
                  >
                    {item.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.875rem',
                          color: 'var(--color-text-2)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--color-accent)',
                            marginTop: '0.55rem',
                            flexShrink: 0,
                          }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {item.technologies && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                      {item.technologies.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

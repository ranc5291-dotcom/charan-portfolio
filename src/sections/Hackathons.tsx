import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { hackathons } from '../data/certifications';

export default function Hackathons() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="hackathons"
      ref={ref}
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-2)',
      }}
      aria-labelledby="hackathons-heading"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="text-label">Hackathons & Activities</span>
        </motion.div>

        <motion.h2
          id="hackathons-heading"
          className="text-display-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: 'var(--color-text)', marginBottom: '3rem' }}
        >
          Building & competing.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {hackathons.map((h, i) => (
            <motion.div
              key={h.id}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              style={{
                borderLeft: h.isOrganizer
                  ? '3px solid var(--color-accent-2)'
                  : '3px solid var(--color-accent)',
              }}
            >
              {/* Role badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: h.isOrganizer ? '#7c6af7' : 'var(--color-accent)',
                  background: h.isOrganizer ? 'rgba(124,106,247,0.1)' : 'var(--color-accent-dim)',
                  border: `1px solid ${h.isOrganizer ? 'rgba(124,106,247,0.25)' : 'rgba(79,142,247,0.2)'}`,
                  borderRadius: '99px',
                  padding: '0.2rem 0.6rem',
                  marginBottom: '0.75rem',
                }}
              >
                {h.role}
              </span>

              <h3
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--color-text)',
                  marginBottom: '0.35rem',
                }}
              >
                {h.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-text-3)',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem',
                }}
              >
                {h.type}
              </p>

              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-2)', lineHeight: 1.55 }}>
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

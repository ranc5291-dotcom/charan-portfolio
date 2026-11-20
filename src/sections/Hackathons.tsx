import { motion, useReducedMotion } from 'framer-motion';
import { hackathons } from '../data/certifications';

export default function Hackathons() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hackathons"
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-2)',
      }}
      aria-labelledby="hackathons-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <div className="section-eyebrow">
          <span className="text-label">Hackathons & Activities</span>
        </div>

        <h2
          id="hackathons-heading"
          className="text-display-sm"
          style={{ color: 'var(--color-text)', marginBottom: '3rem' }}
        >
          Building & competing.
        </h2>

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
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : (0.08 * i) }}
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
      </motion.div>
    </section>
  );
}

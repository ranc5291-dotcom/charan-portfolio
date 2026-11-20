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
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {hackathons.map((h, i) => {
            const cardContent = (
              <>
                {/* Role badge & link icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: h.isAchievement ? '#f59e0b' : h.isOrganizer ? '#7c6af7' : 'var(--color-accent)',
                      background: h.isAchievement ? 'rgba(245,158,11,0.12)' : h.isOrganizer ? 'rgba(124,106,247,0.1)' : 'var(--color-accent-dim)',
                      border: `1px solid ${
                        h.isAchievement
                          ? 'rgba(245,158,11,0.3)'
                          : h.isOrganizer
                          ? 'rgba(124,106,247,0.25)'
                          : 'rgba(79,142,247,0.2)'
                      }`,
                      borderRadius: '99px',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {h.role}
                  </span>
                  {h.link && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ color: 'var(--color-text-3)', flexShrink: 0 }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </div>

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
              </>
            );

            return h.link ? (
              <motion.a
                key={h.id}
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${h.title} (${h.type}) on HackerRank`}
                className="card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 * i }}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  borderLeft: h.isAchievement ? '3px solid #f59e0b' : '3px solid var(--color-accent)',
                  cursor: 'pointer',
                }}
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={h.id}
                className="card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 * i }}
                style={{
                  borderLeft: h.isOrganizer
                    ? '3px solid var(--color-accent-2)'
                    : '3px solid var(--color-accent)',
                }}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

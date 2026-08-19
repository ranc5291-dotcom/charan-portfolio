import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/certifications';

const ISSUER_ICONS: Record<string, string> = {
  'Google': 'G',
  'AWS': 'AWS',
  'Simplilearn': 'SL',
};

const ISSUER_COLORS: Record<string, string> = {
  'Google': '#4285f4',
  'AWS': '#f7a94f',
  'Simplilearn': '#7c6af7',
};

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      aria-labelledby="certifications-heading"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="text-label">Certifications</span>
        </motion.div>

        <motion.h2
          id="certifications-heading"
          className="text-display-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: 'var(--color-text)', marginBottom: '3rem' }}
        >
          Credentials & Learning.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {certifications.map((cert, i) => {
            const color = ISSUER_COLORS[cert.issuerShort] || 'var(--color-accent)';
            const icon = ISSUER_ICONS[cert.issuerShort] || cert.issuerShort[0];

            return (
              <motion.div
                key={cert.id}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              >
                {/* Issuer badge */}
                <div
                  aria-hidden="true"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: color + '18',
                    border: `1px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: icon.length > 1 ? '0.55rem' : '0.85rem',
                      color: color,
                      letterSpacing: icon.length > 1 ? '-0.02em' : '0',
                    }}
                  >
                    {icon}
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: color,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      lineHeight: 1.4,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {cert.title}
                  </h3>
                  <span className="tag">{cert.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

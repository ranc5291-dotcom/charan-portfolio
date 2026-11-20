import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      aria-labelledby="certifications-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <div className="section-eyebrow">
          <span className="text-label">Certifications</span>
        </div>

        <h2
          id="certifications-heading"
          className="text-display-sm"
          style={{ color: 'var(--color-text)', marginBottom: '3rem' }}
        >
          Credentials & Learning.
        </h2>

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
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : (0.08 * i) }}
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
      </motion.div>
    </section>
  );
}

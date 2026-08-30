import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const AREAS = [
  'Software Development',
  'AI & Generative AI',
  'Frontend Development',
  'Backend Development',
  'Full-Stack Applications',
  'Automation',
  'Data & Visualization',
  'Testing & DevOps',
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        background: 'var(--color-bg-2)',
        borderTop: '1px solid var(--color-border)',
      }}
      aria-labelledby="about-heading"
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr minmax(300px, 450px)',
          gap: '4rem',
        }}
      >
        {/* Left Col - Areas */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            <span className="text-label">What I Build</span>
          </motion.div>

          <motion.h2
            id="about-heading"
            className="text-display-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: 'var(--color-text)', marginBottom: '2.5rem' }}
          >
            Areas I Work Across.
          </motion.h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            {AREAS.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                style={{
                  padding: '0.75rem 1.25rem',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-2)',
                  letterSpacing: '0.02em',
                }}
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Col - Education / Baseline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                aria-hidden="true"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--color-accent-dim)',
                  border: '1px solid rgba(79,142,247,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                  }}
                >
                  HC
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Education
                </h3>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-3)',
                  marginBottom: '0.25rem',
                }}
              >
                Expected Graduation 2027
              </p>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text)' }}>
                B.E. - Computer Science & Engineering (AIML)
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>
                East West Institute of Technology, Bengaluru<br />
                CGPA : 8.5
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

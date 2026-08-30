import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useWebGL } from '../hooks/useInView';

const ContactCanvas = lazy(() => import('../components/three/ContactCanvas'));

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const webglSupported = useWebGL();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
        overflow: 'hidden',
      }}
      aria-labelledby="contact-heading"
    >
      {/* Background 3D */}
      {webglSupported && inView && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          <Suspense fallback={null}>
            <ContactCanvas />
          </Suspense>
        </div>
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="text-label">Get in Touch</span>
        </motion.div>

        <div style={{ maxWidth: '680px' }}>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}
          >
            Let's build something <span className="gradient-text">useful.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: 'var(--color-text-2)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}
          >
            Have an idea, a problem worth solving, or simply want to connect? I'd be happy to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <a
              href="mailto:charanhn629@gmail.com"
              className="btn-primary"
              id="contact-email"
              aria-label="Send an email to H N Charan"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
              </svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/hn-charan-23282329b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="contact-linkedin"
              aria-label="View H N Charan's LinkedIn profile"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/ranc5291-dotcom/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="contact-github"
              aria-label="View H N Charan's GitHub profile"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Email display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="contact-email-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <span className="text-meta">Direct email</span>
            <span style={{ width: '1px', height: '12px', background: 'var(--color-border)' }} aria-hidden="true" />
            <a
              href="mailto:charanhn629@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-accent)',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              aria-label="Email charanhn629@gmail.com"
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              charanhn629@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

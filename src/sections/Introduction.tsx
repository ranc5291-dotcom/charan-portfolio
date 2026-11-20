import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const STATEMENT = "I'm a computer science student and developer who enjoys turning ideas into working products.";
const BODY = "My work spans software development, AI-powered applications, web experiences, automation, and data-driven tools. I like learning by building, experimenting with new technologies, and improving products through iteration.";

export default function Introduction() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  
  const words = STATEMENT.split(' ');

  return (
    <section
      ref={containerRef}
      id="introduction"
      style={{
        padding: '8rem var(--section-pad-x)',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-label="Who I am"
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y, maxWidth: '1200px', margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-eyebrow" style={{ marginBottom: '2rem' }}>
            <span className="text-label">Who I am</span>
          </div>

          <h2
            className="text-display-sm"
            style={{
              color: 'var(--color-text)',
              marginBottom: '2.5rem',
              maxWidth: '860px',
            }}
          >
            {words.map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' }}>
                <motion.span
                  style={{ display: 'inline-block' }}
                  initial={{ y: shouldReduceMotion ? 0 : '100%', opacity: shouldReduceMotion ? 0 : 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.6,
                    delay: shouldReduceMotion ? 0 : (i * 0.03),
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <div style={{ maxWidth: '700px' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.05vw, 1.0625rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                letterSpacing: '0',
                color: 'var(--color-text-2)',
              }}
            >
              {BODY}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

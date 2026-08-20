import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const STATEMENT = "I'm a computer science student and developer who enjoys turning ideas into working products.";
const BODY = "My work spans software development, AI-powered applications, web experiences, automation, and data-driven tools. I like learning by building, experimenting with new technologies, and improving products through iteration.";

export default function Introduction() {
  const containerRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView(0.2);

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
        style={{ y, maxWidth: '1200px', margin: '0 auto' }}
      >
        <div ref={ref}>
          <div className="section-eyebrow" style={{ marginBottom: '2rem' }}>
            <span className="text-label">Who I am</span>
          </div>

          <h2
            className="text-display-sm"
            style={{
              color: 'var(--color-text)',
              marginBottom: '2.5rem',
              maxWidth: '900px',
            }}
          >
            {words.map((word, i) => (
              <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em', paddingBottom: '0.1em' }}>
                <motion.span
                  style={{ display: 'inline-block' }}
                  initial={{ y: '100%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ maxWidth: '680px' }}
          >
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'var(--color-text-2)',
              }}
            >
              {BODY}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

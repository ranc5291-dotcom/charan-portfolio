import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntro } from '../context/IntroContext';

export default function IntroOverlay() {
  const { introActive, completeIntro } = useIntro();
  const [visible, setVisible] = useState(introActive);

  useEffect(() => {
    if (!introActive) return;

    // Show for ~1.2s then fade out
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [introActive]);

  if (!introActive) return null;

  return (
    <AnimatePresence onExitComplete={completeIntro}>
      {visible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={() => setVisible(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#09090b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          aria-label="Click to skip intro"
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.03em',
              display: 'flex',
              alignItems: 'center',
              textShadow: '0 0 32px rgba(79, 142, 247, 0.3)',
            }}
          >
            H<span style={{ color: 'var(--color-accent)' }}>C</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

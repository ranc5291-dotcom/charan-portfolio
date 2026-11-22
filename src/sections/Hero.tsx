import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useWebGL } from '../hooks/useInView';
import { useIntro } from '../context/IntroContext';

const HeroCanvas = lazy(() => import('../components/three/HeroCanvas'));

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const webglSupported = useWebGL();
  const [clicked, setClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mountCanvas, setMountCanvas] = useState(false);
  const { introActive } = useIntro();
  const shouldReduceMotion = useReducedMotion();

  // Lazy-load WebGL Canvas smoothly without blocking initial paint
  useEffect(() => {
    let idleId: number;
    if ('requestIdleCallback' in window) {
      idleId = (window as any).requestIdleCallback(() => setMountCanvas(true), { timeout: 1500 });
      return () => (window as any).cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(() => setMountCanvas(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCoreClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  // Scroll parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const baseDelay = shouldReduceMotion ? 0 : (introActive ? 1.25 : 0.15);

  const headlineLines = [
    { text: 'AI Engineer.', isGradient: false },
    { text: 'Builder.', isGradient: false },
    { text: 'Problem', isGradient: true },
    { text: 'Solver.', isGradient: true },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--section-pad-x)',
        background: 'var(--color-bg)',
        overflow: 'hidden',
      }}
      aria-label="Introduction"
    >
      {/* 3D Background Elements — smoothly fades in post-paint */}
      {webglSupported && mountCanvas && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            y: yBg,
          }}
          aria-hidden="true"
        >
          <Suspense fallback={null}>
            <HeroCanvas
              mouseX={mousePos.x}
              mouseY={mousePos.y}
              clicked={clicked}
              onCoreClick={handleCoreClick}
            />
          </Suspense>
        </motion.div>
      )}

      {/* Hero Typography & Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          y: yText,
          opacity: opacityText,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          {/* 1. Small label */}
          <motion.span
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.5,
              delay: shouldReduceMotion ? 0 : (baseDelay + 0.1),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)',
              color: 'var(--color-accent)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'block',
              fontWeight: 500,
            }}
          >
            H N CHARAN · AI ENGINEER · BENGALURU
          </motion.span>

          {/* 2. Headline line-by-line masked reveals */}
          <h1
            className="text-display"
            style={{
              color: 'var(--color-text)',
              marginBottom: '1.75rem',
              maxWidth: 'min(780px, 100%)',
              textShadow: '0 4px 12px rgba(0,0,0,0.4)',
            }}
          >
            {headlineLines.map((line, idx) => (
              <div key={idx} style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '105%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.65,
                    delay: shouldReduceMotion ? 0 : (baseDelay + 0.22 + idx * 0.14),
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={line.isGradient ? 'gradient-text' : undefined}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* 3. Subtext */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.55,
              delay: shouldReduceMotion ? 0 : (baseDelay + 0.82),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 1.15vw, 1.1rem)',
              fontWeight: 400,
              color: 'var(--color-text-2)',
              lineHeight: 1.6,
              letterSpacing: '0',
              maxWidth: 'min(660px, 100%)',
              marginBottom: '2.5rem',
            }}
          >
            I build digital products, intelligent applications, and practical solutions across software, AI, and modern web technologies.
          </motion.p>

          {/* 4. Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.55,
              delay: shouldReduceMotion ? 0 : (baseDelay + 0.96),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="hero-cta-row"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#work" className="btn-primary" id="hero-btn-work">
              Explore Selected Work →
            </a>
            <a
              href="/Charan_Resume.pdf"
              download="Charan_Resume.pdf"
              className="btn-ghost"
              id="hero-btn-resume"
              aria-label="Download Charan's Resume"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost" id="hero-btn-contact">
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* 5. Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : (baseDelay + 1.18),
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '3.5rem',
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-text-3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

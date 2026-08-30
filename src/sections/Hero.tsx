import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useWebGL } from '../hooks/useInView';

const HeroCanvas = lazy(() => import('../components/three/HeroCanvas'));

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const webglSupported = useWebGL();
  const [clicked, setClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mountCanvas, setMountCanvas] = useState(false);

  useEffect(() => {
    // Defer WebGL Canvas loading to post-initial load (1000ms delay) to maximize Lighthouse score
    const loadTimer = setTimeout(() => setMountCanvas(true), 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      {/* 3D Background Elements */}
      {webglSupported && mountCanvas && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            y: yBg,
            opacity: 0.5,
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ pointerEvents: 'auto' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
              color: 'var(--color-accent)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'block',
              fontWeight: 500,
            }}
          >
            H N Charan
          </span>

          <h1
            className="text-display"
            style={{
              color: 'var(--color-text)',
              marginBottom: '1.75rem',
              maxWidth: 'min(780px, 100%)',
              textShadow: '0 8px 30px rgba(0,0,0,0.7)',
            }}
          >
            Developer.
            <br />
            Builder.
            <br />
            <span className="gradient-text">Problem</span>
            <br />
            <span className="gradient-text">Solver.</span>
          </h1>

          <p
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
          </p>

          <div className="hero-cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work" className="btn-primary" id="hero-btn-work">
              Explore Selected Work →
            </a>
            <a href="#contact" className="btn-ghost" id="hero-btn-contact">
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
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

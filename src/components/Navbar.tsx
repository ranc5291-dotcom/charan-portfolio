import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection, useScrollProgress } from '../hooks/useInView';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['about', 'experience', 'work', 'skills', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
        style={{ backgroundColor: 'var(--color-accent)', scaleX: progress, transformOrigin: '0%' }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav
          className="transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
            padding: scrolled ? '0.85rem var(--section-pad-x)' : '1.5rem var(--section-pad-x)',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              aria-label="H N Charan — Home"
              style={{ textDecoration: 'none' }}
            >
              <motion.span
                className="font-display"
                style={{
                  fontSize: scrolled ? '1.1rem' : '1.3rem',
                  fontWeight: 800,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  transition: 'font-size 0.3s',
                }}
                whileHover={{ color: 'var(--color-accent)' }}
              >
                HC
              </motion.span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8" style={{ listStyle: 'none' }}>
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      aria-label={`Navigate to ${label}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-2)',
                        transition: 'color 0.2s',
                        padding: '0.25rem 0',
                        position: 'relative',
                      }}
                      onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--color-text)'; }}
                      onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--color-text-2)'; }}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          style={{
                            position: 'absolute',
                            bottom: -2,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'var(--color-accent)',
                            borderRadius: '99px',
                          }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Mobile toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="btn-primary hidden md:inline-flex"
                style={{ padding: '0.55rem 1.2rem', fontSize: '0.8rem' }}
                aria-label="Let's Talk — go to contact section"
              >
                Let's Talk
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                style={{
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '8px',
                }}
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--color-text)', borderRadius: '2px' }}
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--color-text)', borderRadius: '2px' }}
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'block', width: '18px', height: '1.5px', background: 'var(--color-text)', borderRadius: '2px' }}
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'rgba(9,9,11,0.97)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--color-border)',
                overflow: 'hidden',
              }}
            >
              <ul style={{ listStyle: 'none', padding: '1.5rem var(--section-pad-x) 2rem' }}>
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.85rem 0',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: activeSection === href.replace('#', '') ? 'var(--color-accent)' : 'var(--color-text)',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} style={{ marginTop: '1.5rem' }}>
                  <a
                    href="mailto:charanhn629@gmail.com"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Send email to H N Charan"
                  >
                    Let's Talk
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

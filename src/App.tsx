import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Hackathons from './sections/Hackathons';
import Contact from './sections/Contact';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const PortfolioAgent = lazy(() => import('./components/PortfolioAgent'));

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Introduction />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loadAgent, setLoadAgent] = useState(false);

  useEffect(() => {
    const triggerLoad = () => setLoadAgent(true);
    
    // Defer loading agent until scroll, touch/pointer interaction, or 2s delay
    const timer = setTimeout(triggerLoad, 2000);
    window.addEventListener('scroll', triggerLoad, { once: true, passive: true });
    window.addEventListener('pointerdown', triggerLoad, { once: true, passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('pointerdown', triggerLoad);
    };
  }, []);

  return (
    <>
      {/* Subtle noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </Suspense>

        {/* AI Portfolio Agent Chat Widget (lazy loaded & deferred) */}
        {loadAgent && (
          <Suspense fallback={null}>
            <PortfolioAgent />
          </Suspense>
        )}
      </BrowserRouter>
    </>
  );
}

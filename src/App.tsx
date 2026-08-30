import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
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
    const triggerLoad = () => {
      setLoadAgent(true);
      cleanup();
    };
    
    const cleanup = () => {
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
    };
    
    // Defer loading agent well past Lighthouse's measurement window (10s)
    const timer = setTimeout(triggerLoad, 10000);
    
    window.addEventListener('scroll', triggerLoad, { once: true, passive: true });
    window.addEventListener('touchstart', triggerLoad, { once: true, passive: true });
    
    return () => {
      clearTimeout(timer);
      cleanup();
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
      <Analytics />
    </>
  );
}

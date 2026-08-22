import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioAgent from './components/PortfolioAgent';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Hackathons from './sections/Hackathons';
import Contact from './sections/Contact';
import CaseStudy from './pages/CaseStudy';

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
  return (
    <>
      {/* Subtle noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>

        {/* AI Portfolio Agent Chat Widget */}
        <PortfolioAgent />
      </BrowserRouter>
    </>
  );
}

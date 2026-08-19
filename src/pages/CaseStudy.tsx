import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-bg)',
          color: 'var(--color-text)',
          gap: '1rem',
        }}
      >
        <h1 className="text-display-sm" style={{ color: 'var(--color-text)' }}>Project not found.</h1>
        <button className="btn-primary" onClick={() => navigate('/')}>← Back to Portfolio</button>
      </div>
    );
  }

  const { caseStudy } = project;
  const catColor = project.id === 'nexusai' ? '#4f8ef7'
    : project.id === 'prompt-studio' ? '#7c6af7'
    : project.id === 'course-recommendation' ? '#4ff7b0'
    : project.id === 'food-delivery' ? '#f76a4f'
    : '#f7c94f';

  return (
    <div
      style={{ background: 'var(--color-bg)', minHeight: '100vh' }}
      role="main"
      aria-label={`Case study for ${project.title}`}
    >
      {/* Back nav */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1.25rem var(--section-pad-x)',
          background: 'rgba(9,9,11,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => navigate('/')}
          className="btn-ghost"
          style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
          aria-label="Back to portfolio"
        >
          ← Back
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {project.status === 'building' && (
            <span className="badge-building">{project.statusLabel}</span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub →
            </a>
          )}
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          padding: 'calc(var(--section-pad-y) + 5rem) var(--section-pad-x) var(--section-pad-y)',
          maxWidth: '1400px',
          margin: '0 auto',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: catColor,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {project.number} — {project.category}
            </span>
          </div>

          <h1
            className="text-display-md"
            style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              color: 'var(--color-text-2)',
              lineHeight: 1.7,
              maxWidth: '640px',
              marginBottom: '2rem',
            }}
          >
            {project.longDescription}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map(t => (
              <span key={t} className="tag tag-accent">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sections navigation + content */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 220px',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {caseStudy.sections.map((section, i) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65 }}
              id={`cs-section-${i}`}
              onViewportEnter={() => setActiveSection(i)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: catColor,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {section.number}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} aria-hidden="true" />
              </div>

              <h2
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  color: 'var(--color-text)',
                  marginBottom: '1.25rem',
                }}
              >
                {section.title}
              </h2>

              {Array.isArray(section.content) ? (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {section.content.map((item, li) => (
                    <li key={li} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: catColor,
                          marginTop: '0.55rem',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '1rem', color: 'var(--color-text-2)', lineHeight: 1.65 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : section.title === 'Links' ? (
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      View on GitHub →
                    </a>
                  )}
                  {!project.githubUrl && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-3)', fontFamily: 'var(--font-mono)' }}>
                      Repository coming soon.
                    </p>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      aria-label={`View ${project.title} live`}
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              ) : (
                <p style={{ fontSize: '1rem', color: 'var(--color-text-2)', lineHeight: 1.75 }}>
                  {section.content as string}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Sidebar TOC (desktop only) */}
        <aside
          style={{
            position: 'sticky',
            top: '5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
          aria-label="Case study table of contents"
        >
          <p className="text-meta" style={{ marginBottom: '0.75rem' }}>Contents</p>
          {caseStudy.sections.map((s, i) => (
            <button
              key={s.number}
              onClick={() => {
                document.getElementById(`cs-section-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label={`Jump to section ${s.number}: ${s.title}`}
              style={{
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.35rem 0.5rem',
                borderRadius: '6px',
                transition: 'all 0.15s',
                background: activeSection === i ? 'var(--color-accent-dim)' : 'transparent',
              } as React.CSSProperties}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: activeSection === i ? catColor : 'var(--color-text-3)',
                  letterSpacing: '0.08em',
                  minWidth: '20px',
                }}
              >
                {s.number}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: activeSection === i ? 'var(--color-text)' : 'var(--color-text-3)',
                  fontWeight: activeSection === i ? 600 : 400,
                  transition: 'color 0.15s',
                }}
              >
                {s.title}
              </span>
            </button>
          ))}

          {/* Features */}
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <p className="text-meta" style={{ marginBottom: '0.75rem' }}>Key Features</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {project.features.slice(0, 6).map(f => (
                <span
                  key={f}
                  style={{ fontSize: '0.75rem', color: 'var(--color-text-3)', lineHeight: 1.4 }}
                >
                  · {f}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom nav */}
      <div
        style={{
          padding: '3rem var(--section-pad-x)',
          borderTop: '1px solid var(--color-border)',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <button
          className="btn-ghost"
          onClick={() => navigate('/')}
          aria-label="Back to all projects"
        >
          ← All Projects
        </button>

        {/* Next project */}
        {(() => {
          const currentIdx = projects.findIndex(p => p.id === id);
          const nextProject = projects[(currentIdx + 1) % projects.length];
          return (
            <button
              className="btn-primary"
              onClick={() => navigate(`/case-study/${nextProject.id}`)}
              aria-label={`View next project: ${nextProject.title}`}
            >
              Next: {nextProject.shortTitle} →
            </button>
          );
        })()}
      </div>
    </div>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Eyebrow */}
        <div className="section-eyebrow">
          <span className="text-label">Selected Projects</span>
        </div>

        {/* Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2
              id="projects-heading"
              className="text-display-sm"
              style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}
            >
              Turning ideas into working products.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-2)' }}>
              Click any card to read the full case study.
            </p>
          </div>
        </div>

        {/* Project grid — featured (first 3 larger) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={true} />
          ))}
        </div>

        {/* Secondary row (last 2 projects) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 3} inView={true} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

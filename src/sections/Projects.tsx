import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      aria-labelledby="projects-heading"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="text-label">Selected Projects</span>
        </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.div>
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
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
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
            <ProjectCard key={project.id} project={project} index={i + 3} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

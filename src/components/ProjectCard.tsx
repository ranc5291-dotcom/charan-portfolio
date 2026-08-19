import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

function ProjectVisual({ type, color }: { type: Project['visualType']; color?: string }) {
  const c = color || '#4f8ef7';

  if (type === 'knowledge-graph') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 120" fill="none" aria-hidden="true">
        {/* Nodes */}
        {[[100,60],[40,30],[160,30],[30,90],[170,90],[100,10]].map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={i === 0 ? 10 : 6} fill={c} opacity={i === 0 ? 0.9 : 0.5} />
            <circle cx={cx} cy={cy} r={i === 0 ? 18 : 11} stroke={c} strokeWidth="0.5" opacity={0.15} />
          </g>
        ))}
        {/* Lines */}
        {[[100,60,40,30],[100,60,160,30],[100,60,30,90],[100,60,170,90],[100,60,100,10],[40,30,100,10],[160,30,100,10]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="0.6" opacity="0.25" />
        ))}
        <style>{`@keyframes kg-pulse { 0%,100%{r:10} 50%{r:13} }`}</style>
      </svg>
    );
  }

  if (type === 'prompt-flow') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 80" fill="none" aria-hidden="true">
        {/* Flow blocks */}
        {[
          { x: 8, label: 'RAW', c: '#52525b' },
          { x: 65, label: 'ANALYZE', c: c },
          { x: 122, label: 'OPTIMIZE', c: '#7c6af7' },
          { x: 155, label: 'OUTPUT', c: '#22c55e' },
        ].map(({ x, label, c: bc }, i) => (
          <g key={i}>
            <rect x={x} y={24} width={42} height={32} rx={4} fill={bc} opacity={0.15} stroke={bc} strokeWidth="0.5" strokeOpacity="0.4" />
            <text x={x + 21} y={44} textAnchor="middle" fill={bc} fontSize="6" fontFamily="monospace" opacity="0.8">{label}</text>
            {i < 3 && <path d={`M${x+42} 40 L${x+52} 40`} stroke={bc} strokeWidth="0.8" markerEnd="url(#arr)" opacity="0.4" />}
          </g>
        ))}
        <defs>
          <marker id="arr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0 0 L4 2 L0 4 Z" fill={c} opacity="0.4" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (type === 'data-viz') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" aria-hidden="true">
        {/* Radar-ish polygon */}
        <polygon points="100,15 150,50 130,90 70,90 50,50" stroke={c} strokeWidth="0.8" fill={c} fillOpacity="0.06" strokeOpacity="0.4" />
        <polygon points="100,30 130,55 118,78 82,78 70,55" stroke={c} strokeWidth="0.5" fill="none" strokeOpacity="0.25" />
        {/* Axes */}
        {[[100,15],[150,50],[130,90],[70,90],[50,50]].map(([x,y],i) => (
          <g key={i}>
            <line x1={100} y1={55} x2={x} y2={y} stroke={c} strokeWidth="0.4" strokeOpacity="0.2" />
            <circle cx={x} cy={y} r={3} fill={c} opacity={0.6} />
          </g>
        ))}
        {/* Bar charts */}
        {[20,35,28,45,32].map((h, i) => (
          <rect key={i} x={155 + i*8} y={90-h} width={5} height={h} fill={c} opacity={0.4} rx={1} />
        ))}
      </svg>
    );
  }

  if (type === 'lms-network') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 110" fill="none" aria-hidden="true">
        {/* Center LMS */}
        <circle cx={100} cy={55} r={14} fill={c} opacity={0.2} stroke={c} strokeWidth="0.8" strokeOpacity="0.5" />
        <text x={100} y={59} textAnchor="middle" fill={c} fontSize="6.5" fontFamily="monospace" opacity="0.8">LMS</text>
        {/* Role nodes */}
        {[
          { cx: 40, cy: 22, label: 'STU', color: '#4f8ef7' },
          { cx: 160, cy: 22, label: 'FAC', color: '#7c6af7' },
          { cx: 40, cy: 88, label: 'PLT', color: '#4ff7b0' },
          { cx: 160, cy: 88, label: 'ADM', color: '#f7c94f' },
        ].map(({ cx, cy, label, color: nc }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={10} fill={nc} opacity={0.18} stroke={nc} strokeWidth="0.6" strokeOpacity="0.5" />
            <text x={cx} y={cy+3} textAnchor="middle" fill={nc} fontSize="6" fontFamily="monospace" opacity="0.8">{label}</text>
            <line x1={cx < 100 ? cx+10 : cx-10} y1={cy < 55 ? cy+10 : cy-10} x2={100 < cx ? 86 : 114} y2={55} stroke={nc} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3,3" />
          </g>
        ))}
      </svg>
    );
  }

  // delivery default
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 90" fill="none" aria-hidden="true">
      <rect x={15} y={30} width={60} height={40} rx={6} fill={c} opacity={0.1} stroke={c} strokeWidth="0.6" strokeOpacity="0.3" />
      <text x={45} y={55} textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" opacity="0.7">API</text>
      <path d={`M75 50 Q100 30 125 50`} stroke={c} strokeWidth="0.8" fill="none" strokeOpacity="0.3" strokeDasharray="4,3" />
      <rect x={125} y={30} width={60} height={40} rx={6} fill={c} opacity={0.1} stroke={c} strokeWidth="0.6" strokeOpacity="0.3" />
      <text x={155} y={55} textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" opacity="0.7">CLIENT</text>
      {[0,1,2].map(i => (
        <circle key={i} cx={93 + i*7} cy={50} r={2} fill={c} opacity={0.5} />
      ))}
    </svg>
  );
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const catColor = project.id === 'nexusai' ? '#4f8ef7'
    : project.id === 'prompt-studio' ? '#7c6af7'
    : project.id === 'course-recommendation' ? '#4ff7b0'
    : project.id === 'food-delivery' ? '#f76a4f'
    : '#f7c94f';

  const isCompact = project.id === 'food-delivery';

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'var(--color-bg-2)',
        border: `1px solid ${hovered ? catColor + '50' : 'var(--color-border)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px ${catColor}18` : 'none',
        gridColumn: isCompact ? 'auto' : 'auto',
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Visual area */}
      <div
        style={{
          height: isCompact ? '100px' : '150px',
          background: `linear-gradient(135deg, ${catColor}0a 0%, transparent 100%)`,
          borderBottom: '1px solid var(--color-border)',
          padding: '1rem',
          overflow: 'hidden',
          position: 'relative',
        }}
        aria-hidden="true"
      >
        <ProjectVisual type={project.visualType} color={catColor} />

        {/* Project number */}
        <span
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: catColor,
            opacity: 0.7,
            letterSpacing: '0.08em',
          }}
        >
          {project.number}
        </span>

        {/* Status badge */}
        {project.status === 'building' && (
          <span
            className="badge-building"
            style={{ position: 'absolute', top: '0.75rem', right: '1rem' }}
          >
            {project.statusLabel}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: isCompact ? '1.25rem' : '1.5rem' }}>
        {/* Category */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: catColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: isCompact ? '1rem' : '1.1rem',
            color: 'var(--color-text)',
            marginBottom: '0.65rem',
            lineHeight: 1.25,
          }}
        >
          {project.shortTitle}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-text-2)',
            lineHeight: 1.6,
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: isCompact ? 2 : 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        {!isCompact && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.technologies.slice(0, 4).map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tag">+{project.technologies.length - 4}</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate(`/case-study/${project.id}`)}
            className="btn-primary"
            style={{ fontSize: '0.78rem', padding: '0.5rem 1rem' }}
            id={`case-study-${project.id}`}
            aria-label={`View case study for ${project.title}`}
          >
            {project.status === 'building' ? 'View Progress →' : 'Case Study →'}
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label={`View ${project.title} on GitHub`}
              onClick={e => e.stopPropagation()}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

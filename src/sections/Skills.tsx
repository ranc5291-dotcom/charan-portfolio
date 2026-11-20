import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { skillCategories, allSkills, type SkillNode } from '../data/skills';
import { SkillIcon } from '../components/SkillIcon';

export default function Skills() {
  const defaultSkill = allSkills.find(s => s.id === 'rag') || allSkills[0];
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(defaultSkill);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      style={{
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-2)',
      }}
      aria-labelledby="skills-heading"
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
          <span className="text-label">Skills</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Left: heading + detail panel */}
          <div>
            <h2
              id="skills-heading"
              className="text-display-sm"
              style={{ color: 'var(--color-text)', marginBottom: '1rem' }}
            >
              Technology I work with.
            </h2>

            <p
              style={{ fontSize: '0.9rem', color: 'var(--color-text-2)', lineHeight: 1.65, marginBottom: '2rem' }}
            >
              Click any skill to learn more about how I've used it.
            </p>

            {/* Category filters */}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
              role="group"
              aria-label="Filter skills by category"
            >
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  background: activeCategory === null ? 'var(--color-accent)' : 'transparent',
                  border: `1px solid ${activeCategory === null ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  color: activeCategory === null ? '#fff' : 'var(--color-text-2)',
                  borderRadius: '99px',
                  padding: '0.3rem 0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}
                aria-pressed={activeCategory === null}
              >
                All
              </button>
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  style={{
                    background: activeCategory === cat.id ? cat.color + '22' : 'transparent',
                    border: `1px solid ${activeCategory === cat.id ? cat.color : 'var(--color-border)'}`,
                    color: activeCategory === cat.id ? cat.color : 'var(--color-text-2)',
                    borderRadius: '99px',
                    padding: '0.3rem 0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    cursor: 'pointer',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Selected skill detail */}
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                  style={{ borderColor: 'rgba(79,142,247,0.3)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'var(--color-bg-2)',
                          border: '1px solid var(--color-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-accent)',
                          flexShrink: 0,
                        }}
                      >
                        <SkillIcon id={selectedSkill.id} size={20} color="var(--color-accent)" />
                      </div>
                      <div>
                        <span className="text-label" style={{ marginBottom: '0.2rem', display: 'block' }}>
                          {selectedSkill.category}
                        </span>
                        <h3
                          className="font-display"
                          style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-text)', margin: 0 }}
                        >
                          {selectedSkill.label}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      aria-label="Close skill detail"
                      style={{ background: 'none', border: 'none', color: 'var(--color-text-3)', cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1 }}
                    >
                      ×
                    </button>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-2)', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {selectedSkill.description}
                  </p>
                  {selectedSkill.related.length > 0 && (
                    <>
                      <p className="text-meta" style={{ marginBottom: '0.5rem' }}>Related:</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {selectedSkill.related.map(relId => {
                          const relSkill = allSkills.find(s => s.id === relId);
                          return relSkill ? (
                            <button
                              key={relId}
                              onClick={() => setSelectedSkill(relSkill)}
                              className="tag"
                              style={{
                                cursor: 'pointer',
                                background: 'var(--color-accent-dim)',
                                borderColor: 'rgba(79,142,247,0.25)',
                                color: 'var(--color-accent)',
                                transition: 'all 0.15s',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.35rem',
                              }}
                              aria-label={`View ${relSkill.label} skill`}
                            >
                              <SkillIcon id={relSkill.id} size={12} color="var(--color-accent)" />
                              <span>{relSkill.label}</span>
                            </button>
                          ) : null;
                        })}
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ fontSize: '0.8rem', color: 'var(--color-text-3)', fontFamily: 'var(--font-mono)' }}
                >
                  ← Select a skill node to explore
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Skill grid with staggered children */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <AnimatePresence>
              {(activeCategory ? skillCategories.filter(c => c.id === activeCategory) : skillCategories).map((cat, catIdx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : (0.08 * catIdx) }}
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: `3px solid ${cat.color}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
                    <div
                      aria-hidden="true"
                      style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: cat.color,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                      }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {cat.skills.map(skill => (
                      <motion.button
                        key={skill.id}
                        onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                        style={{
                          background: selectedSkill?.id === skill.id ? cat.color + '22' : 'var(--color-bg-2)',
                          border: `1px solid ${selectedSkill?.id === skill.id ? cat.color : 'var(--color-border)'}`,
                          color: selectedSkill?.id === skill.id ? cat.color : 'var(--color-text-2)',
                          borderRadius: '8px',
                          padding: '0.35rem 0.75rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                        }}
                        aria-pressed={selectedSkill?.id === skill.id}
                        aria-label={`${skill.label} — click for details`}
                      >
                        <SkillIcon id={skill.id} size={14} color={selectedSkill?.id === skill.id ? cat.color : 'currentColor'} />
                        <span>{skill.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

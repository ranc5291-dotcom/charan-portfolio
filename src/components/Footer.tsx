export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: '2.5rem var(--section-pad-x)',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            className="font-display"
            style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-text)' }}
          >
            HC
          </span>
          <span style={{ color: 'var(--color-border)' }} aria-hidden="true">·</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-3)' }}>
            H N Charan
          </span>
        </div>
        <p
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-3)' }}
        >
          © {year} — Built with React + Three.js
        </p>
      </div>
    </footer>
  );
}

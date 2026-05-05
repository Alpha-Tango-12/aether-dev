export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">AETHER</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'Cinzel Decorative', fontSize: '0.7rem', color: 'var(--cyan)',    opacity: 0.6, letterSpacing: '0.1em' }}>11</span>
        <span style={{ fontFamily: 'Cinzel Decorative', fontSize: '0.7rem', color: 'var(--purple)',  opacity: 0.6, letterSpacing: '0.1em' }}>222</span>
        <span style={{ fontFamily: 'Cinzel Decorative', fontSize: '0.7rem', color: 'var(--magenta)', opacity: 0.6, letterSpacing: '0.1em' }}>12</span>
      </div>
      <p>Sound · Spirit · Code &nbsp;·&nbsp; © 2026 AETHER</p>
    </footer>
  )
}

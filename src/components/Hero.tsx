import Starfield from './shared/Starfield'
import { TigerSun, WolfMoon } from './shared/CosmicSymbols'

const GOLD = '#f5c842'
const CYAN = '#00d4ff'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <Starfield />

      {/* Orbiting cosmic symbols */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 0, height: 0, zIndex: 1, animation: 'orbitCW 40s linear infinite', pointerEvents: 'none' }}>
        <div style={{ transform: 'translateX(40vw) translateY(-50%)', opacity: 0.55 }}>
          <TigerSun color={GOLD} />
        </div>
      </div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 0, height: 0, zIndex: 1, animation: 'orbitCCW 55s linear infinite', animationDelay: '-18s', pointerEvents: 'none' }}>
        <div style={{ transform: 'translateX(38vw) translateY(-50%)', opacity: 0.55 }}>
          <WolfMoon color={CYAN} />
        </div>
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">DJ · Cosmic Seeker · Developer</div>
        <h1 className="hero-title">AETHER</h1>
        <p className="hero-sub">Sound · Spirit · Code</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div className="hero-numbers">
            <div className="angel-pill ap-cyan">11</div>
            <div className="angel-pill ap-purple">222</div>
            <div className="angel-pill ap-magenta">12</div>
          </div>
        </div>

        <div className="hero-ctas">
          <a href="#music"   className="btn-primary">Soundscape</a>
          <a href="#contact" className="btn-ghost">Shape Reality</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

import { SITE_CONFIG } from '../config/site'

const GENRES = ['Future Bass', 'Trap', 'Melodic Dubstep', 'Ethereal Dubstep', 'Experimental Bass', 'Melodic Techno', 'House', 'Chill']

export default function EPK() {
  const { soundcloud } = SITE_CONFIG.social

  return (
    <section id="epk">
      <div className="nebula" style={{ width: 400, height: 400, bottom: '0', left: '-5%', background: 'radial-gradient(ellipse,rgba(0,212,255,0.07),transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">Press Kit</div>
        <h2 className="section-title">Electronic Press Kit</h2>
        <div className="section-divider" />

        <div className="epk-grid">
          <div className="epk-block">
            <h3>Artist Bio</h3>
            <p>AETHER is a genre-fluid DJ based in Charlotte, NC — crafting sets that move between future bass, melodic dubstep, and ethereal sound design. The music is intentional: each transition is a chapter, each drop a revelation.</p>
            <p>Rooted in a deep love for bass and an ear trained by years of obsessive listening, AETHER's sound is less about genre and more about journey — taking the listener somewhere they didn't know they needed to go.</p>
            <p>With a handful of unforgettable opening slots alongside established act, an AETHER set is rare, but for good reason — they are meant build something real, one set at a time.</p>
            <div className="stat-row">
              <div className="stat">
                <span className="stat-val">9+</span>
                <span className="stat-key">Genres</span>
              </div>
              <div className="stat">
                <span className="stat-val" style={{ color: 'var(--pink)', textShadow: '0 0 20px rgba(255,183,197,0.4)' }}>CLT</span>
                <span className="stat-key">Based</span>
              </div>
              <div className="stat">
                <span className="stat-val" style={{ color: 'var(--magenta)', textShadow: '0 0 20px rgba(224,64,255,0.4)' }}>2015</span>
                <span className="stat-key">DJing Since</span>
              </div>
            </div>
          </div>

          <div className="epk-block">
            <h3>Sound & Style</h3>
            <p>AETHER's sets are crafted to tell a story — atmospheric builds, intentional transitions, and emotional payoffs. When the moment calls for it, the energy shifts: harder, heavier, built for openers and live crowds. The range is the point. Influences include <em>Illenium</em>, <em>INZO</em>, <em>ODESZA</em>, <em>Subtronics</em>, and <em>Seven Lions</em>.</p>
            <div className="genres-row" style={{ justifyContent: 'flex-start', marginTop: '1.5rem', marginBottom: '2rem' }}>
              {GENRES.map(g => <span key={g} className="genre-tag">{g}</span>)}
            </div>
            <a href={soundcloud} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.56 8.87V17h8.76c.89-.01 1.68-.67 1.68-1.56 0-.87-.68-1.57-1.56-1.58-.23 0-.43.05-.63.14-.04-2.05-1.7-3.7-3.76-3.7-.7 0-1.35.2-1.9.54-.38-1.44-1.68-2.5-3.24-2.5a3.4 3.4 0 0 0-.35.03zm-5.11 1.39c-.56 0-1.01.45-1.01 1.01v5.41c0 .56.45 1.01 1.01 1.01.56 0 1.01-.45 1.01-1.01v-5.41c0-.56-.45-1.01-1.01-1.01zm-3.34 1.77c-.47 0-.85.38-.85.85v3.64c0 .47.38.85.85.85s.85-.38.85-.85v-3.64c0-.47-.38-.85-.85-.85zm-2.27.93c-.38 0-.68.3-.68.68v1.98c0 .38.3.68.68.68s.68-.3.68-.68v-1.98c0-.38-.3-.68-.68-.68zm-1.26.56a.42.42 0 0 0-.42.42v.86c0 .23.19.42.42.42s.42-.19.42-.42v-.86a.42.42 0 0 0-.42-.42z" />
              </svg>
              SoundCloud · aether-dj-704
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

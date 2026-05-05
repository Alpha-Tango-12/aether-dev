const ANGEL_CARDS = [
  {
    num: '11',
    numCls: 'num-cyan',
    cardCls: 'ac-cyan',
    symbol: 'Butterfly · Time',
    title: 'The Journey',
    body: 'The Butterfly represents Time — a reminder that the smallest moments can create the biggest changes. Every set, every note, every connection is a ripple that reshapes the cosmos.',
  },
  {
    num: '222',
    numCls: 'num-purple',
    cardCls: 'ac-purple',
    symbol: 'Moon · Reality',
    title: 'The Awakening',
    body: "The Moon holds Thailand inside it — the mountains where I found stillness and myself. The cherry blossoms represent D.C., where I took a leap of faith and moved temporarily to pursue a new career as a software engineer. It came at a time when I was unsure what to do with my life.",
  },
  {
    num: '12',
    numCls: 'num-magenta',
    cardCls: 'ac-magenta',
    symbol: 'Tesseract · Creation',
    title: 'The Mission',
    body: 'The Tesseract is a portal to dimensions you build yourself. I left a factory floor and taught myself software engineering. Now I use AI to build realities — for clients and myself. The universe rewards those who dare to create.',
  },
]

const JOURNEY = [
  { dot: '🦋', label: 'Origin',           desc: 'A lifelong passion for music and building things — two core traits that shaped both a software engineering career and a growth as a DJ. Everything flows from the same source.' },
  { dot: '⛩',  label: 'Thailand',         desc: 'A spiritual awakening on my homeland. Found stillness. Found myself. The angels speak loudest in silence.' },
  { dot: '🌸', label: 'Washington D.C.',  desc: 'D.C. - my second home — where the software engineering journey began and where I always find myself returning for cherry blossom season. Some places just stay with you.' },
  { dot: '✦',  label: 'Now',              desc: 'DJ, developer, AI expert — threading sound and code through the cosmos.' },
]

export default function About() {
  return (
    <section id="about">
      <div className="nebula" style={{ width: 500, height: 500, top: '20%', right: '-10%', background: 'radial-gradient(ellipse,rgba(224,64,255,0.08),transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">The Story</div>
        <h2 className="section-title">Angel Numbers & a Cosmic Path</h2>
        <div className="section-divider" />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ position: 'absolute', inset: '-3px', background: 'linear-gradient(135deg,var(--cyan),var(--purple),var(--magenta))', borderRadius: '4px', filter: 'blur(8px)', opacity: 0.7, zIndex: 0 }} />
            <img
              src="/uploads/IMG_5959.jpeg"
              alt="AETHER tattoo — butterfly, moon, tesseract"
              style={{ position: 'relative', zIndex: 1, width: '260px', borderRadius: '2px', border: '2px solid rgba(0,212,255,0.4)', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '0.75rem', background: 'linear-gradient(to top,rgba(4,4,14,0.9),transparent)', fontFamily: 'Cinzel', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(0,212,255,0.85)', textTransform: 'uppercase', textAlign: 'center' }}>
              11 · 222 · 12
            </div>
          </div>
        </div>

        <div className="angel-cards">
          {ANGEL_CARDS.map(card => (
            <div key={card.num} className={`angel-card ${card.cardCls}`}>
              <div className={`card-number ${card.numCls}`}>{card.num}</div>
              <div className="card-symbol">{card.symbol}</div>
              <div className="card-title">{card.title}</div>
              <p className="card-body">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="bio-grid">
          <div className="bio-text">
            <p>My name is <em>Alec</em>. I am a self-taught software engineer and AI consultant with a passion for music and building. AETHER is the space between — where sound, creativity, and spirit converge.</p>
            <p>My journey started in 2019 when I took a leap of faith and went through a coding bootcamp in <em>Washington D.C.</em> Driven to always be the best version of myself, that determination led me to my first software engineering role at <em>UPS</em> — and eventually to my current position at <em>Bank of America</em> in my hometown of Charlotte.</p>
            <p>The universe speaks in patterns. I listen. I build. I transmit.</p>
          </div>

          <div>
            {JOURNEY.map(stop => (
              <div key={stop.label} className="journey-stop">
                <div className="stop-dot">{stop.dot}</div>
                <div>
                  <div className="stop-label">{stop.label}</div>
                  <div className="stop-desc">{stop.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

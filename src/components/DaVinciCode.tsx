import { useState, useMemo } from 'react'
import { DAVINCI_CODES, type DaVinciJournal } from '../data/davinci'

export default function DaVinciCode() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState<DaVinciJournal | null>(null)

  const match = useMemo(() => {
    const normalized = input.trim().toLowerCase()
    if (!normalized) return null
    return DAVINCI_CODES.find((e) => e.passcode.toLowerCase() === normalized) ?? null
  }, [input])

  return (
    <section id="davinci">
      <div
        className="nebula"
        style={{
          width: 450,
          height: 450,
          top: '10%',
          left: '-8%',
          background: 'radial-gradient(ellipse,rgba(155,89,255,0.09),transparent)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">Secrets</div>
        <h2 className="section-title">The Da Vinci Code</h2>
        <div className="section-divider" />

        <div className="davinci-intro">
          <p>
            Not everything on this site is what it seems. Inspired by Dan Brown's{' '}
            <em>The Da Vinci Code</em> — where symbols, hidden messages, and layered meaning
            live beneath the surface — I built this site with secrets woven into its fabric.
          </p>
          <p>
            Some messages are buried in the music. Some live between the lines.
            And some… are locked behind a passcode only the worthy will discover.
          </p>
          <p>
            If you've been paying attention, you might already know the word.
          </p>
        </div>

        <div className="davinci-input-group">
          <label htmlFor="davinci-passcode">Passcode</label>
          <div className="davinci-input-row">
            <input
              id="davinci-passcode"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                setUnlocked(null)
              }}
              placeholder="Enter the passcode..."
              autoComplete="off"
              spellCheck={false}
            />
            {match && !unlocked && (
              <button
                className="btn-primary davinci-unlock"
                onClick={() => setUnlocked(match.journal)}
              >
                Unlock
              </button>
            )}
          </div>
        </div>

        {unlocked && (
          <div className="davinci-journal">
            <div className="davinci-journal-header">
              <div className="davinci-journal-title">{unlocked.title}</div>
              <div className="davinci-journal-sub">{unlocked.subheading}</div>
            </div>

            <div className="davinci-journal-body">
              <div className="journal-section">
                <div className="journal-section-body">
                  {unlocked.body.map((p, i) => (
                    <p key={i} className="journal-p">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {unlocked.media.length > 0 && (
              <div className="davinci-album">
                <div className="davinci-album-label">Photo Album</div>
                <div className="davinci-album-grid">
                  {unlocked.media.map((m, i) => (
                    <figure key={i} className="davinci-media">
                      {m.type === 'image' ? (
                        <img src={m.src} alt={m.caption ?? ''} loading="lazy" />
                      ) : (
                        <video src={m.src} controls preload="metadata" />
                      )}
                      {m.caption && <figcaption>{m.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

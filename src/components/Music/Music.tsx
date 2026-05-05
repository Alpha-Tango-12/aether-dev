import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG } from '../../config/site'
import { CHAPTERS } from '../../data/tracklist'
import { JOURNALS } from '../../data/journals'
import type { Chapter } from '../../data/tracklist'
import Tracklist from './Tracklist'
import JournalPanel from './JournalPanel'

const GENRES = [
  'Future Bass', 'Trap', 'Melodic Dubstep', 'Dubstep',
  'Ethereal Dubstep', 'Experimental Bass', 'Melodic Techno',
  'Melodic House', 'Electronic',
]

export default function Music() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)
  const [activePassphraseHint, setActivePassphraseHint] = useState<string | null>(null)
  const passphraseBannerRef = useRef<HTMLDivElement | null>(null)
  const { sectionTitle, youtubeVideoId } = SITE_CONFIG.music
  const { youtube, youtubePlaylist } = SITE_CONFIG.social

  useEffect(() => {
    if (!activePassphraseHint || !passphraseBannerRef.current) {
      return
    }

    const animationFrame = window.requestAnimationFrame(() => {
      passphraseBannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      passphraseBannerRef.current?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [activePassphraseHint])

  const toggleChapter = (chapter: Chapter) => {
    setActiveChapter(prev => (prev?.id === chapter.id ? null : chapter))
  }

  const trimmedVideoId = youtubeVideoId.trim()
  const hasYoutubeVideo = trimmedVideoId.length > 0
  const youtubeWatchUrl = hasYoutubeVideo
    ? `https://www.youtube.com/watch?v=${trimmedVideoId}`
    : youtubePlaylist
  const embedSrc = hasYoutubeVideo
    ? `https://www.youtube.com/embed/${trimmedVideoId}?autoplay=1&mute=1&loop=1&playlist=${trimmedVideoId}&rel=0&modestbranding=1&color=white`
    : ''

  return (
    <section id="music">
      <div
        className="nebula"
        style={{ width: 600, height: 400, top: '0%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse,rgba(155,89,255,0.15),transparent)' }}
      />
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="section-label" style={{ textAlign: 'center' }}>Listen</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <a href={youtubePlaylist} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            {sectionTitle}
          </a>
        </h2>
        <div className="section-divider" style={{ margin: '0 auto 3.5rem' }} />

        {activePassphraseHint && (
          <div
            ref={passphraseBannerRef}
            className="music-passphrase-banner"
            role="status"
            tabIndex={-1}
          >
            <div>
              <span className="passphrase-label">Passphrase Hint</span>
              <div className="passphrase-text">{activePassphraseHint}</div>
            </div>
            <button
              type="button"
              className="passphrase-close"
              aria-label="Close passphrase hint"
              onClick={() => setActivePassphraseHint(null)}
            >
              ×
            </button>
          </div>
        )}

        <div className="video-tracklist-row">
          <div className="yt-frame">
            {hasYoutubeVideo ? (
              <iframe
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AETHER Entanglement"
              />
            ) : (
              <div className="yt-fallback">
                <span className="yt-fallback-kicker">AETHER</span>
                <h3>Solstice Series</h3>
                <p>
                  Video coming soon! In the meantime, check out my YouTube playlist for the other sets.
                </p>
                <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open on YouTube
                </a>
              </div>
            )}
          </div>

          <Tracklist
            chapters={CHAPTERS}
            activeChapterId={activeChapter?.id ?? null}
            onToggleChapter={toggleChapter}
            onPassphraseHint={setActivePassphraseHint}
          />
        </div>

        <JournalPanel
          activeChapter={activeChapter}
          journals={JOURNALS}
          onClose={() => setActiveChapter(null)}
        />

        <div className="genres-row">
          {GENRES.map(g => <span key={g} className="genre-tag">{g}</span>)}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
            </svg>
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  )
}

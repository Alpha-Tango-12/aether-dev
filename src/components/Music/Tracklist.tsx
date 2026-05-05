import { useEffect, useRef, useCallback, useMemo } from 'react'
import type { Chapter, Track } from '../../data/tracklist'
import { SITE_CONFIG } from '../../config/site'

interface TracklistProps {
  chapters: Chapter[]
  activeChapterId: number | null
  onToggleChapter: (chapter: Chapter) => void
  onPassphraseHint: (hint: string) => void
}

export default function Tracklist({ chapters, activeChapterId, onToggleChapter, onPassphraseHint }: TracklistProps) {
  const chapterRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const setChapterRef = useCallback((id: number) => (el: HTMLDivElement | null) => {
    chapterRefs.current[id] = el
  }, [])

  const chapterTrackStarts = useMemo(() => {
    let trackCount = 0

    return chapters.reduce<Record<number, number>>((starts, chapter) => {
      starts[chapter.id] = trackCount
      trackCount += chapter.tracks.length
      return starts
    }, {})
  }, [chapters])

  useEffect(() => {
    if (activeChapterId != null && chapterRefs.current[activeChapterId]) {
      setTimeout(() => {
        chapterRefs.current[activeChapterId]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [activeChapterId])
  const { spotifyUrl } = SITE_CONFIG.music

  const renderTrackContent = (track: Track, trackNumber: string) => (
    <>
      <span className="track-number">{trackNumber}</span>
      <div className="track-content">
        <div className="track-main">
          <span className="track-name">{track.name}</span>
          {track.remix && (
            <>
              <span className="track-sep">//</span>
              <span className="track-remix">{track.remix}</span>
            </>
          )}
        </div>
        {track.artists && (
          <div className="track-artists">{track.artists}</div>
        )}
      </div>
    </>
  )

  return (
    <div className="tracklist-panel">
      <div className="tracklist-hd">
        <div className="tracklist-hd-row">
          <span>Tracklist</span>
          {spotifyUrl && (
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="spotify-link" title="Listen on Spotify">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.314a.748.748 0 0 1-1.03.25c-2.819-1.722-6.365-2.112-10.542-1.157a.748.748 0 1 1-.334-1.458c4.573-1.045 8.496-.596 11.657 1.337a.748.748 0 0 1 .249 1.028zm1.47-3.27a.937.937 0 0 1-1.288.308c-3.225-1.983-8.144-2.558-11.964-1.4a.937.937 0 0 1-.576-1.787c4.363-1.403 9.786-.723 13.52 1.59a.937.937 0 0 1 .308 1.289zm.127-3.404c-3.868-2.297-10.245-2.509-13.94-1.388a1.122 1.122 0 0 1-.651-2.147c4.246-1.289 11.302-1.04 15.762 1.607a1.122 1.122 0 1 1-1.171 1.928z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {chapters.map(ch => {
        const isActive = activeChapterId === ch.id
        return (
          <div key={ch.id} ref={setChapterRef(ch.id)}>
            <button
              className={`chapter-hd${isActive ? ' active' : ''}`}
              onClick={() => onToggleChapter(ch)}
            >
              <span className="chapter-title-group">
                <span>{ch.title}</span>
                {ch.subtitle && <span className="chapter-subtitle">{ch.subtitle}</span>}
              </span>
              <span className="chapter-hd-right">
                <span className="chapter-timestamp">{ch.timestamp || '—:——:——'}</span>
                <span className="chapter-hd-arrow">›</span>
              </span>
            </button>

            {ch.tracks.length > 0 ? (
              <div className="track-list">
                {ch.tracks.map((track, i) => {
                  const trackNumber = String(chapterTrackStarts[ch.id] + i + 1).padStart(2, '0')
                  const passphraseHint = track.passphraseHint

                  return passphraseHint ? (
                    <button
                      key={i}
                      type="button"
                      className="track-entry track-entry-clickable"
                      onClick={() => onPassphraseHint(passphraseHint)}
                    >
                      {renderTrackContent(track, trackNumber)}
                    </button>
                  ) : (
                    <div key={i} className="track-entry">
                      {renderTrackContent(track, trackNumber)}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="track-empty">Tracks coming soon</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

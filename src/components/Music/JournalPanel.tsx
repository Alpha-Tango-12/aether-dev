import { useEffect, useRef } from 'react'
import type { Chapter } from '../../data/tracklist'
import type { JournalEntry } from '../../data/journals'

interface JournalPanelProps {
  activeChapter: Chapter | null
  journals: Record<number, JournalEntry | null>
  onClose: () => void
}

export default function JournalPanel({ activeChapter, journals, onClose }: JournalPanelProps) {
  const bodyRef = useRef<HTMLDivElement>(null)

  // Scroll to top when chapter changes
  useEffect(() => {
    if (activeChapter && bodyRef.current) {
      bodyRef.current.scrollTop = 0
    }
  }, [activeChapter])

  const entry = activeChapter ? journals[activeChapter.id] : null

  return (
    <div className={`journal-wrapper${activeChapter ? ' open' : ''}`}>
      <div className="journal-panel">
        <div className="journal-header">
          {activeChapter && (
            <div className="journal-ch-title">{activeChapter.title}</div>
          )}
          <button
            type="button"
            className="journal-close"
            aria-label="Close journal"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {activeChapter && (
          <div className="journal-body" ref={bodyRef}>
            {!entry ? (
              <span className="journal-empty">Journal entry coming soon…</span>
            ) : (
              <>
                {entry.title && (
                  <div className="journal-entry-title">{entry.title}</div>
                )}
                {entry.sections.map((section, i) => (
                  <div key={i} className="journal-section">
                    {section.subheading && (
                      <div className="journal-subheading">{section.subheading}</div>
                    )}
                    <div className="journal-section-body">
                      {section.body.map((paragraph, j) => (
                        <p key={j} className="journal-p">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

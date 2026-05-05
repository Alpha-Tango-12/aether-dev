import { SITE_CONFIG } from '../config/site'
import type { ReactNode } from 'react'

interface Service {
  title: string
  desc: string
  tags: string[]
  icon: ReactNode
}

const SERVICES: Service[] = [
  {
    title: 'Custom App Development',
    desc: 'Full-stack applications built from concept to deployment — web apps, internal tools, client-facing products powered by modern frameworks and AI-augmented workflows.',
    tags: ['React', 'Node.js', 'AI Integration', 'Full Stack', 'Angular'],
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'AI Consulting',
    desc: 'Strategic guidance on integrating AI into your business: workflow automation, LLM implementation, prompt engineering, and pinpointing where AI creates genuine leverage.',
    tags: ['LLMs', 'Automation', 'Strategy', 'Efficiency'],
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Marketing',
    desc: 'High-impact pitch decks, brand presentations, and marketing materials — designed to tell your story in a way that converts and resonates with the people who matter.',
    tags: ['Pitch Decks', 'Brand Design', 'Copywriting', 'Visuals'],
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Assistants',
    desc: 'Custom chatbots trained on your data — customer support, lead capture, internal knowledge bases. Conversational AI that actually understands your use case and delivers.',
    tags: ['GPT', 'RAG', 'Customer Support', 'Lead Gen'],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  const { github } = SITE_CONFIG.social

  return (
    <section id="services">
      <div className="nebula" style={{ width: 500, height: 400, top: '30%', right: '-5%', background: 'radial-gradient(ellipse,rgba(155,89,255,0.09),transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">AI & Development</div>
        <h2 className="section-title">What I Build</h2>
        <div className="section-divider" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginBottom: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            github.com/Alpha-Tango-12
          </a>
          <a href="http://localhost:5175" target="_blank" rel="noopener noreferrer" className="social-link social-link--tether" style={{ marginBottom: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Tether — ISS Tracker
          </a>
        </div>

        <div className="services-grid">
          {SERVICES.map(svc => (
            <div key={svc.title} className="service-card">
              <div className="service-icon">{svc.icon}</div>
              <div className="service-title">{svc.title}</div>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map(tag => <span key={tag} className="service-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

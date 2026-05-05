import { useState } from 'react'
import { SITE_CONFIG } from '../config/site'

interface FormState {
  name: string
  email: string
  type: string
  message: string
}

const INQUIRY_TYPES = [
  { value: 'dj',      label: 'DJ Booking' },
  { value: 'app',     label: 'Custom App / Development' },
  { value: 'ai',      label: 'AI Consulting' },
  { value: 'deck',    label: 'Marketing Deck' },
  { value: 'chatbot', label: 'Chatbot / Assistant' },
  { value: 'other',   label: 'Other' },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', type: 'dj', message: '' })
  const [sent, setSent] = useState(false)
  const { youtube, github, soundcloud } = SITE_CONFIG.social

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact">
      <div className="nebula" style={{ width: 400, height: 400, top: '10%', left: '-5%', background: 'radial-gradient(ellipse,rgba(0,212,255,0.07),transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">Get in Touch</div>
        <h2 className="section-title">Let's Create Together</h2>
        <div className="section-divider" />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Connect</h3>
            <p>Whether you want to book AETHER for a set or bring an idea to life with code and AI — the universe brought you here. Let's talk.</p>

            <a href={youtube} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
              </svg>
              YouTube · @aether-dj_7
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub · Alpha-Tango-12
            </a>
            <a href={soundcloud} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.56 8.87V17h8.76c.89-.01 1.68-.67 1.68-1.56 0-.87-.68-1.57-1.56-1.58-.23 0-.43.05-.63.14-.04-2.05-1.7-3.7-3.76-3.7-.7 0-1.35.2-1.9.54-.38-1.44-1.68-2.5-3.24-2.5a3.4 3.4 0 0 0-.35.03zm-5.11 1.39c-.56 0-1.01.45-1.01 1.01v5.41c0 .56.45 1.01 1.01 1.01.56 0 1.01-.45 1.01-1.01v-5.41c0-.56-.45-1.01-1.01-1.01zm-3.34 1.77c-.47 0-.85.38-.85.85v3.64c0 .47.38.85.85.85s.85-.38.85-.85v-3.64c0-.47-.38-.85-.85-.85zm-2.27.93c-.38 0-.68.3-.68.68v1.98c0 .38.3.68.68.68s.68-.3.68-.68v-1.98c0-.38-.3-.68-.68-.68zm-1.26.56a.42.42 0 0 0-.42.42v.86c0 .23.19.42.42.42s.42-.19.42-.42v-.86a.42.42 0 0 0-.42-.42z" />
              </svg>
              SoundCloud · aether-dj-704
            </a>
          </div>

          <div>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontFamily: 'Cinzel Decorative', fontSize: '2.5rem', color: 'var(--cyan)', textShadow: '0 0 30px rgba(0,212,255,0.6)', marginBottom: '1rem' }}>✦</div>
                <div style={{ fontFamily: 'Cinzel', fontSize: '1rem', marginBottom: '0.75rem' }}>Message Received</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>The cosmos will deliver it. I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select name="type" value={form.type} onChange={handle}>
                    {INQUIRY_TYPES.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} required placeholder="Tell me about your project or event..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

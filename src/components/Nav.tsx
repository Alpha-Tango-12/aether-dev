import { useState, useEffect } from 'react'

const NAV_LINKS: [string, string][] = [
  ['Music',    '#music'],
  ['About',    '#about'],
  ['Da Vinci', '#davinci'],
  ['EPK',      '#epk'],
  ['Services', '#services'],
  ['Contact',  '#contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">AETHER</a>
      <ul className="nav-links">
        {NAV_LINKS.map(([label, href]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

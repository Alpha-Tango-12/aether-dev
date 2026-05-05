import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  a: number
  tw: number
  ts: number
}

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const stars: Star[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 420; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.6,
        a: 0.3 + Math.random() * 0.85,
        tw: Math.random() * Math.PI * 2,
        ts: 0.004 + Math.random() * 0.012,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of stars) {
        s.tw += s.ts
        const a = s.a * (0.5 + 0.5 * Math.sin(s.tw))
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${a})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="starfield" ref={ref} />
}

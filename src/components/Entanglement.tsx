import { useEffect, useRef } from 'react'

interface Star {
  x: number; y: number; r: number; a: number; speed: number; phase: number
}

interface Particle {
  angle: number; speed: number; maxR: number; size: number; hue: number; alpha: number; offset: number
}

type Vec4 = [number, number, number, number]
type Edge = [number, number]

// ── 4D math helpers ──────────────────────────────────────────────────────────
function tesseractVerts(): Vec4[] {
  const v: Vec4[] = []
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) for (const w of [-1, 1]) v.push([x, y, z, w])
  return v
}

function tesseractEdges(verts: Vec4[]): Edge[] {
  const e: Edge[] = []
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      let d = 0
      for (let k = 0; k < 4; k++) if (verts[i][k] !== verts[j][k]) d++
      if (d === 1) e.push([i, j])
    }
  }
  return e
}

function rotate4D(v: Vec4, a1: number, a2: number, a3: number): Vec4 {
  let [x, y, z, w] = v
  let nx = x * Math.cos(a1) - w * Math.sin(a1), nw = x * Math.sin(a1) + w * Math.cos(a1); x = nx; w = nw
  let ny = y * Math.cos(a2) - w * Math.sin(a2);    nw = y * Math.sin(a2) + w * Math.cos(a2); y = ny; w = nw
  let nz = z * Math.cos(a3) - w * Math.sin(a3);    nw = z * Math.sin(a3) + w * Math.cos(a3); z = nz; w = nw
  return [x, y, z, w]
}

function project4D(v: Vec4, cx: number, cy: number, scale: number) {
  const [x, y, z, w] = v
  const d4 = 2.5 / (2.5 + w)
  const x3 = x * d4, y3 = y * d4, z3 = z * d4
  const d3 = 2.5 / (2.5 + z3)
  return { px: cx + x3 * d3 * scale, py: cy + y3 * d3 * scale, depth: d4 * d3 }
}

const TVERTS = tesseractVerts()
const TEDGES = tesseractEdges(TVERTS)

// ── Component ────────────────────────────────────────────────────────────────
export default function Entanglement() {
  const bgRef   = useRef<HTMLCanvasElement>(null)
  const mainRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const bgCanvas   = bgRef.current
    const mainCanvas = mainRef.current
    if (!bgCanvas || !mainCanvas) return
    const bgCtx = bgCanvas.getContext('2d')
    const ctx   = mainCanvas.getContext('2d')
    if (!bgCtx || !ctx) return

    let animId: number
    let W = 0, H = 0, cx = 0, cy = 0

    const resize = () => {
      W = bgCanvas.width = mainCanvas.width = window.innerWidth
      H = bgCanvas.height = mainCanvas.height = window.innerHeight
      cx = W / 2; cy = H / 2
    }
    resize()
    window.addEventListener('resize', resize)

    // Stars (background layer)
    let stars: Star[] = []
    const initStars = () => {
      stars = []
      const n = Math.floor(W * H / 1800)
      for (let i = 0; i < n; i++) {
        stars.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + 0.2, a: Math.random(), speed: Math.random() * 0.004 + 0.001, phase: Math.random() * Math.PI * 2 })
      }
    }
    initStars()
    window.addEventListener('resize', initStars)

    function drawBackground(t: number) {
      bgCtx!.clearRect(0, 0, W, H)
      bgCtx!.fillStyle = '#04020e'
      bgCtx!.fillRect(0, 0, W, H)

      const g1 = bgCtx!.createRadialGradient(cx * 0.6, cy * 0.7, 0, cx * 0.6, cy * 0.7, W * 0.55)
      g1.addColorStop(0, 'rgba(80,20,160,0.22)'); g1.addColorStop(0.5, 'rgba(30,10,80,0.12)'); g1.addColorStop(1, 'rgba(4,2,14,0)')
      bgCtx!.fillStyle = g1; bgCtx!.fillRect(0, 0, W, H)

      const g2 = bgCtx!.createRadialGradient(cx * 1.4, cy * 0.4, 0, cx * 1.4, cy * 0.4, W * 0.45)
      g2.addColorStop(0, 'rgba(20,60,160,0.18)'); g2.addColorStop(0.5, 'rgba(10,20,80,0.09)'); g2.addColorStop(1, 'rgba(4,2,14,0)')
      bgCtx!.fillStyle = g2; bgCtx!.fillRect(0, 0, W, H)

      for (const s of stars) {
        const pulse = 0.4 + 0.6 * Math.sin(t * s.speed * 6 + s.phase)
        bgCtx!.beginPath(); bgCtx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        bgCtx!.fillStyle = `rgba(200,190,255,${s.a * pulse})`; bgCtx!.fill()
      }
    }

    // Particles
    const PARTICLES: Particle[] = []
    for (let i = 0; i < 320; i++) {
      const angle = Math.random() * Math.PI * 2, speed = Math.random() * 0.6 + 0.1
      const hue = Math.random() < 0.6 ? 260 + Math.random() * 40 : 200 + Math.random() * 40
      PARTICLES.push({ angle, speed, maxR: (0.25 + Math.random() * 0.75) * Math.min(W, H) * 0.46, size: Math.random() * 2 + 0.5, hue, alpha: Math.random() * 0.7 + 0.3, offset: Math.random() * 1000 })
    }

    function drawParticles(t: number) {
      for (const p of PARTICLES) {
        const dist = (t * p.speed * 60 + p.offset * 50) % p.maxR
        const px = cx + Math.cos(p.angle) * dist, py = cy + Math.sin(p.angle) * dist
        const fade = 1 - dist / p.maxR
        const glow = ctx!.createRadialGradient(px, py, 0, px, py, p.size * 3)
        glow.addColorStop(0, `hsla(${p.hue},90%,75%,${p.alpha * fade * 0.6})`)
        glow.addColorStop(1, `hsla(${p.hue},80%,50%,0)`)
        ctx!.beginPath(); ctx!.arc(px, py, p.size * 3, 0, Math.PI * 2)
        ctx!.fillStyle = glow; ctx!.fill()
      }
    }

    function drawTesseract(t: number, scale: number) {
      const a1 = t * 0.27, a2 = t * 0.19, a3 = t * 0.13
      const projected = TVERTS.map(v => project4D(rotate4D(v, a1, a2, a3), cx, cy, scale))
      for (const [i, j] of TEDGES) {
        const p1 = projected[i], p2 = projected[j]
        const avgD = (p1.depth + p2.depth) / 2
        const alpha = 0.2 + avgD * 0.75
        const isInner = TVERTS[i][3] === -1 && TVERTS[j][3] === -1
        const isOuter = TVERTS[i][3] === 1  && TVERTS[j][3] === 1
        const color = isInner ? `rgba(80,180,255,${alpha * 0.5})` : isOuter ? `rgba(160,80,255,${alpha * 0.5})` : `rgba(120,130,255,${alpha * 0.35})`
        ctx!.beginPath(); ctx!.moveTo(p1.px, p1.py); ctx!.lineTo(p2.px, p2.py)
        ctx!.strokeStyle = color; ctx!.lineWidth = isInner || isOuter ? 1.5 : 0.8
        ctx!.shadowColor = isInner ? '#4fc3f7' : '#9b59ff'; ctx!.shadowBlur = 12
        ctx!.stroke(); ctx!.shadowBlur = 0
      }
      for (const p of projected) {
        ctx!.beginPath(); ctx!.arc(p.px, p.py, 2, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(180,160,255,${p.depth * 0.9})`
        ctx!.shadowColor = '#b39ddb'; ctx!.shadowBlur = 8; ctx!.fill(); ctx!.shadowBlur = 0
      }
    }

    function drawButterfly(x: number, y: number, size: number, t: number) {
      const flap = Math.sin(t * 2.4) * 0.35, ww = size * 1.1, wh = size * 0.75
      const sh1 = 0.55 + 0.25 * Math.sin(t * 1.8), sh2 = 0.55 + 0.25 * Math.sin(t * 1.8 + 2.1)
      ctx!.save(); ctx!.translate(x, y)

      for (let i = 3; i >= 1; i--) {
        const aura = ctx!.createRadialGradient(0, 0, 0, 0, 0, size * i * 1.1)
        aura.addColorStop(0, `rgba(80,160,255,${0.07 / i})`); aura.addColorStop(0.5, `rgba(120,80,255,${0.04 / i})`); aura.addColorStop(1, 'rgba(60,100,255,0)')
        ctx!.fillStyle = aura; ctx!.beginPath(); ctx!.arc(0, 0, size * i * 1.1, 0, Math.PI * 2); ctx!.fill()
      }

      const drawWings = (sx: number) => {
        ctx!.save(); ctx!.scale(sx * (1 - flap * 0.5 * sx), 1)
        ctx!.beginPath(); ctx!.moveTo(0, 0); ctx!.bezierCurveTo(-ww * 0.18, -wh * 0.48, -ww * 0.92, -wh * 1.08, -ww * 0.88, -wh * 0.52); ctx!.bezierCurveTo(-ww * 0.82, -wh * 0.08, -ww * 0.28, -wh * 0.04, 0, 0)
        const g1 = ctx!.createLinearGradient(-ww, -wh, 0, 0)
        g1.addColorStop(0, `rgba(30,100,255,${sh1 * 0.45})`); g1.addColorStop(0.35, `rgba(80,160,255,${sh1 * 0.35})`); g1.addColorStop(0.7, `rgba(140,210,255,${sh1 * 0.35})`); g1.addColorStop(1, `rgba(200,240,255,${sh1 * 0.15})`)
        ctx!.fillStyle = g1; ctx!.shadowColor = '#60c0ff'; ctx!.shadowBlur = 28; ctx!.fill()
        ctx!.beginPath(); ctx!.moveTo(0, 0); ctx!.bezierCurveTo(-ww * 0.14, wh * 0.28, -ww * 0.72, wh * 0.82, -ww * 0.58, wh * 0.48); ctx!.bezierCurveTo(-ww * 0.42, wh * 0.18, -ww * 0.18, wh * 0.09, 0, 0)
        const g2 = ctx!.createLinearGradient(-ww * 0.55, wh * 0.6, 0, 0)
        g2.addColorStop(0, `rgba(40,80,200,${sh2 * 0.65})`); g2.addColorStop(0.5, `rgba(80,140,255,${sh2 * 0.4})`); g2.addColorStop(1, `rgba(160,220,255,${sh2 * 0.15})`)
        ctx!.fillStyle = g2; ctx!.fill(); ctx!.shadowBlur = 0; ctx!.restore()
      }

      drawWings(-1); drawWings(1)

      ctx!.beginPath(); ctx!.ellipse(0, 0, size * 0.04, size * 0.32, 0, 0, Math.PI * 2)
      const bg = ctx!.createLinearGradient(0, -size * 0.28, 0, size * 0.28)
      bg.addColorStop(0, `rgba(180,225,255,${sh1 * 0.8})`); bg.addColorStop(0.5, `rgba(80,140,255,${sh1 * 0.55})`); bg.addColorStop(1, `rgba(30,60,160,${sh1 * 0.4})`)
      ctx!.fillStyle = bg; ctx!.shadowColor = '#80d0ff'; ctx!.shadowBlur = 14; ctx!.fill(); ctx!.shadowBlur = 0
      ctx!.restore()
    }

    function drawEnergyRings(scale: number, t: number) {
      for (let i = 0; i < 5; i++) {
        const phase = (t * 0.4 + i / 5) % 1
        const r = scale * 1.2 * (0.3 + phase * 1.4)
        const alpha = (1 - phase) * 0.35
        ctx!.beginPath(); ctx!.arc(cx, cy, r, 0, Math.PI * 2)
        ctx!.strokeStyle = `hsla(${240 + i * 20},80%,70%,${alpha})`; ctx!.lineWidth = 1.5 - phase; ctx!.stroke()
      }
    }

    function drawAtomOrbitals(scale: number, t: number) {
      const orbitals = [{ a: t * 0.4, tilt: 0.3, rx: scale * 0.85, ry: scale * 0.3 }, { a: t * 0.3, tilt: 1.2, rx: scale * 0.85, ry: scale * 0.3 }, { a: t * 0.5, tilt: -0.6, rx: scale * 0.85, ry: scale * 0.3 }]
      for (const o of orbitals) {
        ctx!.save(); ctx!.translate(cx, cy); ctx!.rotate(o.tilt)
        ctx!.beginPath(); ctx!.ellipse(0, 0, o.rx, o.ry, 0, 0, Math.PI * 2)
        ctx!.strokeStyle = 'rgba(120,160,255,0.2)'; ctx!.lineWidth = 1; ctx!.stroke()
        const ex = Math.cos(o.a) * o.rx, ey = Math.sin(o.a) * o.ry
        const eg = ctx!.createRadialGradient(ex, ey, 0, ex, ey, 5)
        eg.addColorStop(0, 'rgba(80,200,255,0.95)'); eg.addColorStop(1, 'rgba(80,200,255,0)')
        ctx!.beginPath(); ctx!.arc(ex, ey, 5, 0, Math.PI * 2)
        ctx!.fillStyle = eg; ctx!.shadowColor = '#4fc3f7'; ctx!.shadowBlur = 12; ctx!.fill(); ctx!.shadowBlur = 0
        ctx!.restore()
      }
    }

    function drawSphere(t: number) {
      const sx = W * 0.11, sy = H * 0.38, sr = Math.min(W, H) * 0.14
      const breathe = 1 + 0.015 * Math.sin(t * 0.5), pulse = 0.85 + 0.15 * Math.sin(t * 0.3)

      for (let i = 3; i >= 1; i--) {
        const halo = ctx!.createRadialGradient(sx, sy, sr * 0.8, sx, sy, sr * (1.6 + i * 0.5))
        halo.addColorStop(0, `rgba(100,160,255,${0.08 / i})`); halo.addColorStop(1, 'rgba(30,60,180,0)')
        ctx!.fillStyle = halo; ctx!.beginPath(); ctx!.arc(sx, sy, sr * (1.6 + i * 0.5), 0, Math.PI * 2); ctx!.fill()
      }

      ctx!.save()
      ctx!.beginPath(); ctx!.arc(sx, sy, sr * breathe, 0, Math.PI * 2); ctx!.clip()

      const base = ctx!.createRadialGradient(sx - sr * 0.28, sy - sr * 0.28, sr * 0.05, sx, sy, sr * breathe)
      base.addColorStop(0, 'rgba(210,230,255,1)'); base.addColorStop(0.2, 'rgba(160,195,255,1)'); base.addColorStop(0.5, 'rgba(80,120,200,1)'); base.addColorStop(0.78, 'rgba(25,50,120,1)'); base.addColorStop(1, 'rgba(5,15,55,1)')
      ctx!.fillStyle = base; ctx!.fillRect(sx - sr * 1.5, sy - sr * 1.5, sr * 3, sr * 3)

      // Craters
      for (const [cx2, cy2, cr2, op] of [[sx - sr * 0.18, sy + sr * 0.1, sr * 0.22, 0.75], [sx + sr * 0.3, sy - sr * 0.25, sr * 0.13, 0.7], [sx - sr * 0.35, sy - sr * 0.3, sr * 0.09, 0.65], [sx + sr * 0.12, sy + sr * 0.35, sr * 0.07, 0.6]]) {
        const cg = ctx!.createRadialGradient(cx2, cy2, 0, cx2, cy2, cr2)
        cg.addColorStop(0, `rgba(10,30,100,${op})`); cg.addColorStop(1, 'rgba(40,80,180,0)')
        ctx!.fillStyle = cg; ctx!.beginPath(); ctx!.arc(cx2, cy2, cr2, 0, Math.PI * 2); ctx!.fill()
      }

      const shadow = ctx!.createRadialGradient(sx + sr * 0.55, sy, 0, sx + sr * 0.3, sy, sr * 1.05)
      shadow.addColorStop(0, 'rgba(2,5,25,0.92)'); shadow.addColorStop(0.55, 'rgba(2,5,25,0.5)'); shadow.addColorStop(1, 'rgba(2,5,25,0)')
      ctx!.fillStyle = shadow; ctx!.fillRect(sx - sr * 1.5, sy - sr * 1.5, sr * 3, sr * 3)

      const spec = ctx!.createRadialGradient(sx - sr * 0.35, sy - sr * 0.35, 0, sx - sr * 0.25, sy - sr * 0.25, sr * 0.5)
      spec.addColorStop(0, `rgba(240,248,255,${0.5 * pulse})`); spec.addColorStop(0.4, `rgba(180,215,255,${0.2 * pulse})`); spec.addColorStop(1, 'rgba(120,180,255,0)')
      ctx!.fillStyle = spec; ctx!.fillRect(sx - sr * 1.5, sy - sr * 1.5, sr * 3, sr * 3)
      ctx!.restore()

      ctx!.beginPath(); ctx!.arc(sx, sy, sr * breathe, 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(120,180,255,${0.4 * pulse})`; ctx!.lineWidth = 2; ctx!.shadowColor = '#4080ff'; ctx!.shadowBlur = 20; ctx!.stroke(); ctx!.shadowBlur = 0

      ctx!.beginPath(); ctx!.ellipse(sx, sy, sr * 1.5 * breathe, sr * 0.4 * breathe, t * 0.06, 0, Math.PI * 2)
      ctx!.strokeStyle = `rgba(80,140,255,${0.2 * pulse})`; ctx!.lineWidth = 1; ctx!.stroke()
    }

    let start: number | null = null
    const frame = (ts: number) => {
      if (!start) start = ts
      const t = (ts - start) / 1000
      const scale = Math.min(W, H) * 0.19

      drawBackground(t)
      ctx!.clearRect(0, 0, W, H)
      ctx!.globalAlpha = 0.55
      drawParticles(t)
      drawEnergyRings(scale, t)
      drawAtomOrbitals(scale, t)
      drawSphere(t)
      drawTesseract(t, scale)
      drawButterfly(cx, cy, scale * 0.72, t)

      const cg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, scale * 0.5)
      cg.addColorStop(0, 'rgba(180,160,255,0.06)'); cg.addColorStop(1, 'rgba(180,160,255,0)')
      ctx!.fillStyle = cg; ctx!.beginPath(); ctx!.arc(cx, cy, scale * 0.5, 0, Math.PI * 2); ctx!.fill()

      animId = requestAnimationFrame(frame)
    }

    animId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', initStars)
    }
  }, [])

  return (
    <section id="entanglement">
      <canvas ref={bgRef}   style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <canvas ref={mainRef} style={{ position: 'absolute', inset: 0, zIndex: 1, mixBlendMode: 'screen', opacity: 0.75 }} />
      <div className="entanglement-ui">
        <div className="entanglement-tagline">You Are One With The Universe</div>
        <a href="#hero" className="entanglement-enter">
          Into the Abyss
          <div className="enter-line" />
        </a>
      </div>
    </section>
  )
}

interface SymbolProps {
  color: string
}

export function TigerSun({ color }: SymbolProps) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg viewBox="-80 -80 160 160" width="220" height="220" fill="none" style={{ overflow: 'visible' }}>
      <defs>
        <filter id="sunGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g stroke={color} filter="url(#sunGlow)" opacity="0.85">
        <circle cx="0" cy="0" r="38" strokeWidth="1" opacity="0.7" />
        <circle cx="0" cy="0" r="22" strokeWidth="0.8" opacity="0.4" />
        {rays.map(a => {
          const r1 = 44, r2 = 54, rad = (a * Math.PI) / 180
          return (
            <line
              key={a}
              x1={r1 * Math.cos(rad)} y1={r1 * Math.sin(rad)}
              x2={r2 * Math.cos(rad)} y2={r2 * Math.sin(rad)}
              strokeWidth="1.5"
            />
          )
        })}
        <line x1="-28" y1="-18" x2="-10" y2="-32" strokeWidth="1.2" opacity="0.6" />
        <line x1="-10" y1="-18" x2="8"   y2="-32" strokeWidth="1.2" opacity="0.6" />
        <line x1="10"  y1="-18" x2="28"  y2="-32" strokeWidth="1.2" opacity="0.6" />
        <line x1="-28" y1="18"  x2="-10" y2="32"  strokeWidth="1.2" opacity="0.6" />
        <line x1="-10" y1="18"  x2="8"   y2="32"  strokeWidth="1.2" opacity="0.6" />
        <line x1="10"  y1="18"  x2="28"  y2="32"  strokeWidth="1.2" opacity="0.6" />
        <circle cx="0" cy="0" r="4" strokeWidth="1" opacity="0.5" />
      </g>
      <text y="68" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="8" letterSpacing="4" fill={color} opacity="0.6">
        RISING SUN
      </text>
    </svg>
  )
}

export function WolfMoon({ color }: SymbolProps) {
  return (
    <svg viewBox="-80 -80 160 160" width="200" height="200" fill="none" style={{ overflow: 'visible' }}>
      <defs>
        <filter id="moonGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#moonGlow)">
        <path d="M -10 -42 A 44 44 0 1 1 -10 42 A 32 32 0 1 0 -10 -42 Z" stroke={color} strokeWidth="1.2" fill="none" opacity="0.8" />
        <polygon points="-30,-52 -42,-34 -18,-34" stroke={color} strokeWidth="1" fill="none" opacity="0.65" />
        <polygon points="-5,-52 -17,-34 7,-34"   stroke={color} strokeWidth="1" fill="none" opacity="0.65" />
        <line x1="-22" y1="-10" x2="-22" y2="4"  stroke={color} strokeWidth="0.8" opacity="0.4" />
        <line x1="-22" y1="4"   x2="-14" y2="10" stroke={color} strokeWidth="0.8" opacity="0.4" />
        <line x1="-22" y1="4"   x2="-30" y2="10" stroke={color} strokeWidth="0.8" opacity="0.4" />
        <circle cx="0" cy="0" r="58" strokeWidth="0.5" stroke={color} strokeDasharray="3 6" opacity="0.25" />
      </g>
      <text y="72" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="8" letterSpacing="4" fill={color} opacity="0.6">
        SHADOW MOON
      </text>
    </svg>
  )
}

import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const ids = {
    plaque: `menu-frame-plaque-${uid}`,
    glass: `menu-frame-glass-${uid}`,
    glassSheen: `menu-frame-glass-sheen-${uid}`,
    vignette: `menu-frame-vignette-${uid}`,
    texture: `menu-frame-texture-${uid}`,
    bronze: `menu-frame-bronze-${uid}`,
    leftGlow: `menu-frame-left-glow-${uid}`,
    bottomGlow: `menu-frame-bottom-glow-${uid}`,
    cornerGlow: `menu-frame-corner-glow-${uid}`,
    metal: `menu-frame-metal-${uid}`,
    metalDark: `menu-frame-metal-dark-${uid}`,
    shadow: `menu-frame-shadow-${uid}`,
    plaqueShadow: `menu-frame-plaque-shadow-${uid}`,
  };

  const Screw = ({ cx, cy }: { cx: number; cy: number }) => (
    <g filter={`url(#${ids.shadow})`}>
      <circle cx={cx} cy={cy} r="12.5" fill="#080604" opacity=".96" />
      <circle cx={cx} cy={cy} r="10.4" fill={`url(#${ids.metalDark})`} />
      <circle cx={cx} cy={cy} r="8.9" fill={`url(#${ids.metal})`} />
      <ellipse cx={cx - 2.8} cy={cy - 3.1} rx="3.2" ry="1.8" fill="#f0bd72" opacity=".28" />
      <ellipse cx={cx + 2.4} cy={cy + 3.7} rx="4.5" ry="2.4" fill="#120803" opacity=".34" />
    </g>
  );

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 700 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={ids.plaque} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#11100e" />
          <stop offset=".28" stopColor="#080807" />
          <stop offset=".7" stopColor="#050504" />
          <stop offset="1" stopColor="#0b0907" />
        </linearGradient>

        <linearGradient id={ids.glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#080705" stopOpacity=".97" />
          <stop offset=".24" stopColor="#0d0b08" stopOpacity=".93" />
          <stop offset=".55" stopColor="#080706" stopOpacity=".97" />
          <stop offset=".82" stopColor="#0a0806" stopOpacity=".95" />
          <stop offset="1" stopColor="#15100b" stopOpacity=".92" />
        </linearGradient>

        <linearGradient id={ids.glassSheen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d7a56a" stopOpacity=".035" />
          <stop offset=".28" stopColor="#fff2d7" stopOpacity=".012" />
          <stop offset=".52" stopColor="#000" stopOpacity="0" />
          <stop offset=".78" stopColor="#c17b38" stopOpacity=".018" />
          <stop offset="1" stopColor="#f2c07a" stopOpacity=".035" />
        </linearGradient>

        <radialGradient id={ids.vignette} cx=".5" cy=".44" r=".72">
          <stop offset="0" stopColor="#33271d" stopOpacity=".035" />
          <stop offset=".58" stopColor="#090705" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </radialGradient>

        <linearGradient id={ids.bronze} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c4b25" stopOpacity=".55" />
          <stop offset=".16" stopColor="#b16d34" stopOpacity=".68" />
          <stop offset=".42" stopColor="#68401f" stopOpacity=".54" />
          <stop offset=".72" stopColor="#956037" stopOpacity=".45" />
          <stop offset="1" stopColor="#3b2111" stopOpacity=".7" />
        </linearGradient>

        <linearGradient id={ids.leftGlow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff4200" stopOpacity="0" />
          <stop offset=".18" stopColor="#ff4b00" stopOpacity=".2" />
          <stop offset=".46" stopColor="#ff5b00" stopOpacity=".72" />
          <stop offset=".7" stopColor="#ff7417" stopOpacity=".52" />
          <stop offset="1" stopColor="#ff7417" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={ids.bottomGlow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff5a00" stopOpacity="0" />
          <stop offset=".18" stopColor="#ff6200" stopOpacity=".22" />
          <stop offset=".48" stopColor="#ff5b00" stopOpacity=".78" />
          <stop offset=".72" stopColor="#ff6a0a" stopOpacity=".48" />
          <stop offset="1" stopColor="#ff4200" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={ids.cornerGlow} cx=".2" cy=".2" r="1">
          <stop offset="0" stopColor="#ff6a00" stopOpacity=".5" />
          <stop offset=".35" stopColor="#ff5100" stopOpacity=".18" />
          <stop offset="1" stopColor="#ff3d00" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={ids.metalDark} cx=".28" cy=".22" r=".95">
          <stop offset="0" stopColor="#9a6a39" />
          <stop offset=".32" stopColor="#68401f" />
          <stop offset=".72" stopColor="#35200f" />
          <stop offset="1" stopColor="#140a05" />
        </radialGradient>

        <radialGradient id={ids.metal} cx=".28" cy=".2" r=".9">
          <stop offset="0" stopColor="#d19a58" />
          <stop offset=".18" stopColor="#ae7137" />
          <stop offset=".46" stopColor="#79491f" />
          <stop offset=".76" stopColor="#4a2913" />
          <stop offset="1" stopColor="#1a0d06" />
        </radialGradient>

        <filter id={ids.texture} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency=".018 .042" numOctaves="2" seed="17" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 .075" />
          </feComponentTransfer>
        </filter>

        <filter id={ids.leftGlow} x="-700%" y="-40%" width="1500%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>

        <filter id={ids.bottomGlow} x="-40%" y="-700%" width="180%" height="1500%">
          <feGaussianBlur stdDeviation="10" />
        </filter>

        <filter id={ids.shadow} x="-180%" y="-180%" width="460%" height="460%">
          <feDropShadow dx="1.4" dy="2.2" stdDeviation="2.8" floodColor="#000" floodOpacity=".9" />
        </filter>

        <filter id={ids.plaqueShadow} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity=".58" />
        </filter>
      </defs>

      <rect x="9" y="7" width="682" height="386" rx="17" fill={`url(#${ids.plaque})`} filter={`url(#${ids.plaqueShadow})`} />
      <rect x="10" y="8" width="680" height="384" rx="16" fill="none" stroke="#17120e" strokeWidth="2" />
      <rect x="13" y="11" width="674" height="378" rx="13" fill="none" stroke="#000" strokeWidth="1.2" opacity=".7" />

      <rect x="72" y="30" width="556" height="340" rx="2.5" fill={`url(#${ids.glass})`} />
      <rect x="72" y="30" width="556" height="340" rx="2.5" fill={`url(#${ids.glassSheen})`} />
      <rect x="72" y="30" width="556" height="340" rx="2.5" fill={`url(#${ids.vignette})`} />
      <rect x="72" y="30" width="556" height="340" rx="2.5" filter={`url(#${ids.texture})`} opacity=".3" />

      <rect x="70" y="28" width="560" height="344" rx="3" fill="none" stroke="#090604" strokeWidth="4" opacity=".94" />
      <rect x="72" y="30" width="556" height="340" rx="2.5" fill="none" stroke={`url(#${ids.bronze})`} strokeWidth="1.5" opacity=".9" />

      <path d="M72 30V370" fill="none" stroke="#ff4a00" strokeWidth="25" opacity=".27" filter={`url(#${ids.leftGlow})`} />
      <path d="M72 370H628" fill="none" stroke="#ff4a00" strokeWidth="25" opacity=".27" filter={`url(#${ids.bottomGlow})`} />

      <path d="M72 30V370" fill="none" stroke={`url(#${ids.leftGlow})`} strokeWidth="7" opacity=".76" />
      <path d="M72 370H628" fill="none" stroke={`url(#${ids.bottomGlow})`} strokeWidth="7" opacity=".76" />

      <path d="M72 30V370" fill="none" stroke="#d87928" strokeWidth="1.15" opacity=".82" />
      <path d="M72 370H628" fill="none" stroke="#e0782d" strokeWidth="1.2" opacity=".86" />

      <path d="M72 30H628" fill="none" stroke="#6b4729" strokeWidth="1.15" opacity=".62" />
      <path d="M628 30V370" fill="none" stroke="#68452a" strokeWidth="1.15" opacity=".56" />

      <circle cx="72" cy="370" r="19" fill={`url(#${ids.cornerGlow})`} opacity=".26" />
      <circle cx="72" cy="370" r="3.4" fill="#ff6a0a" opacity=".58" />

      <Screw cx={91} cy={50} />
      <Screw cx={609} cy={50} />
      <Screw cx={91} cy={350} />
      <Screw cx={609} cy={350} />
    </svg>
  );
}

"use client";

export default function MenuCardFrame() {
  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 590 644"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="menu-frame-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5a391d" stopOpacity=".72" />
          <stop offset=".22" stopColor="#1d120a" stopOpacity=".92" />
          <stop offset=".76" stopColor="#3f2513" stopOpacity=".78" />
          <stop offset="1" stopColor="#0b0805" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="menu-frame-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7b481d" stopOpacity=".78" />
          <stop offset=".48" stopColor="#c27a2b" stopOpacity=".56" />
          <stop offset="1" stopColor="#6a3b19" stopOpacity=".7" />
        </linearGradient>
        <linearGradient id="menu-frame-left-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff7a00" stopOpacity=".9" />
          <stop offset=".28" stopColor="#ff9a2e" stopOpacity=".48" />
          <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="menu-frame-bottom-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8a18" stopOpacity="0" />
          <stop offset=".52" stopColor="#ff8a18" stopOpacity=".48" />
          <stop offset="1" stopColor="#ff6b00" stopOpacity=".86" />
        </linearGradient>
        <radialGradient id="menu-frame-screw" cx=".35" cy=".28" r=".8">
          <stop offset="0" stopColor="#f3c27a" />
          <stop offset=".28" stopColor="#b46d28" />
          <stop offset=".7" stopColor="#4c2b15" />
          <stop offset="1" stopColor="#140c07" />
        </radialGradient>
        <filter id="menu-frame-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <rect x="1" y="1" width="588" height="642" rx="13" fill="#060504" />
      <rect x="7" y="7" width="576" height="630" rx="10" fill="url(#menu-frame-edge)" opacity=".62" />
      <rect x="20" y="20" width="550" height="604" rx="4" fill="none" stroke="#2e1a0e" strokeWidth="2" />
      <rect x="24" y="24" width="542" height="596" rx="3" fill="none" stroke="url(#menu-frame-gold)" strokeWidth="1" opacity=".72" />

      <path d="M24 28V616" stroke="#ff7a00" strokeWidth="7" opacity=".17" filter="url(#menu-frame-soft-glow)" />
      <path d="M24 28V616" stroke="url(#menu-frame-left-glow)" strokeWidth="1.6" />
      <path d="M24 620H566" stroke="#ff7a00" strokeWidth="9" opacity=".13" filter="url(#menu-frame-soft-glow)" />
      <path d="M24 620H566" stroke="url(#menu-frame-bottom-glow)" strokeWidth="1.8" />

      <g>
        <circle cx="31" cy="31" r="7" fill="url(#menu-frame-screw)" stroke="#9b5d24" strokeWidth=".8" />
        <path d="M27.8 31h6.4M31 27.8v6.4" stroke="#e0a45c" strokeWidth=".65" opacity=".65" />
      </g>
      <g>
        <circle cx="559" cy="31" r="7" fill="url(#menu-frame-screw)" stroke="#9b5d24" strokeWidth=".8" />
        <path d="M555.8 31h6.4M559 27.8v6.4" stroke="#e0a45c" strokeWidth=".65" opacity=".65" />
      </g>
      <g>
        <circle cx="31" cy="613" r="7" fill="url(#menu-frame-screw)" stroke="#9b5d24" strokeWidth=".8" />
        <path d="M27.8 613h6.4M31 609.8v6.4" stroke="#e0a45c" strokeWidth=".65" opacity=".65" />
      </g>
      <g>
        <circle cx="559" cy="613" r="7" fill="url(#menu-frame-screw)" stroke="#9b5d24" strokeWidth=".8" />
        <path d="M555.8 613h6.4M559 609.8v6.4" stroke="#e0a45c" strokeWidth=".65" opacity=".65" />
      </g>
    </svg>
  );
}

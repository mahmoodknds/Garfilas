import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const gold = "menu-frame-gold-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const glow = "menu-frame-glow-" + uid;
  const bloom = "menu-frame-bloom-" + uid;

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 700 430"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7b4822" stopOpacity=".82" />
          <stop offset=".22" stopColor="#b16d2d" stopOpacity=".64" />
          <stop offset=".55" stopColor="#68401f" stopOpacity=".52" />
          <stop offset="1" stopColor="#3a2414" stopOpacity=".78" />
        </linearGradient>

        <linearGradient id={glow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5a00" stopOpacity=".98" />
          <stop offset=".22" stopColor="#ff6500" stopOpacity=".92" />
          <stop offset=".52" stopColor="#ff6b00" stopOpacity=".34" />
          <stop offset="1" stopColor="#ff6b00" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={screw} cx=".32" cy=".22" r=".9">
          <stop offset="0" stopColor="#e0a45e" />
          <stop offset=".2" stopColor="#b87935" />
          <stop offset=".55" stopColor="#71431f" />
          <stop offset=".82" stopColor="#382112" />
          <stop offset="1" stopColor="#160d08" />
        </radialGradient>

        <filter id={bloom} x="-180%" y="-120%" width="460%" height="340%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* The Canva frame: transparent glass only, with the dark plaque removed. */}
      <rect
        x="35"
        y="35"
        width="630"
        height="360"
        rx="2"
        fill="none"
        stroke="#24150c"
        strokeWidth="2.4"
        opacity=".9"
      />
      <rect
        x="37"
        y="37"
        width="626"
        height="356"
        rx="1.5"
        fill="none"
        stroke={"url(#" + gold + ")"}
        strokeWidth="1.2"
        opacity=".92"
      />

      {/* Exact Canva-style L light: a hot orange core with a soft external bloom. */}
      <path
        d="M37 37V393H663"
        fill="none"
        stroke="#ff5d00"
        strokeWidth="15"
        opacity=".2"
        filter={"url(#" + bloom + ")"}
      />
      <path
        d="M37 37V393H663"
        fill="none"
        stroke="#ff5f00"
        strokeWidth="5"
        opacity=".28"
        filter={"url(#" + bloom + ")"}
      />
      <path
        d="M37 37V393"
        stroke={"url(#" + glow + ")"}
        strokeWidth="2.5"
      />
      <path
        d="M37 393H663"
        stroke="#ff6200"
        strokeWidth="2.8"
      />

      {/* Four bronze fasteners, matching the simple round Canva screws. */}
      <g>
        <circle cx="58" cy="58" r="12" fill={"url(#" + screw + ")"} stroke="#8d5525" strokeWidth="1" />
        <ellipse cx="54.5" cy="54" rx="3.5" ry="2.2" fill="#f1bb73" opacity=".42" />
      </g>
      <g>
        <circle cx="642" cy="58" r="12" fill={"url(#" + screw + ")"} stroke="#8d5525" strokeWidth="1" />
        <ellipse cx="638.5" cy="54" rx="3.5" ry="2.2" fill="#f1bb73" opacity=".42" />
      </g>
      <g>
        <circle cx="58" cy="370" r="12" fill={"url(#" + screw + ")"} stroke="#8d5525" strokeWidth="1" />
        <ellipse cx="54.5" cy="366" rx="3.5" ry="2.2" fill="#f1bb73" opacity=".42" />
      </g>
      <g>
        <circle cx="642" cy="370" r="12" fill={"url(#" + screw + ")"} stroke="#8d5525" strokeWidth="1" />
        <ellipse cx="638.5" cy="366" rx="3.5" ry="2.2" fill="#f1bb73" opacity=".42" />
      </g>
    </svg>
  );
}

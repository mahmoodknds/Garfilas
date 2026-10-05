import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const gold = "menu-frame-gold-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const screwShadow = "menu-frame-screw-shadow-" + uid;
  const glow = "menu-frame-glow-" + uid;
  const bloom = "menu-frame-bloom-" + uid;
  const sheen = "menu-frame-sheen-" + uid;

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
          <stop offset="0" stopColor="#8c5428" stopOpacity=".82" />
          <stop offset=".18" stopColor="#b87835" stopOpacity=".7" />
          <stop offset=".48" stopColor="#74461f" stopOpacity=".54" />
          <stop offset=".78" stopColor="#4a2c17" stopOpacity=".58" />
          <stop offset="1" stopColor="#332011" stopOpacity=".82" />
        </linearGradient>

        <linearGradient id={glow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5600" stopOpacity="1" />
          <stop offset=".2" stopColor="#ff6500" stopOpacity=".94" />
          <stop offset=".46" stopColor="#ff7000" stopOpacity=".34" />
          <stop offset="1" stopColor="#ff7000" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1d2" stopOpacity=".16" />
          <stop offset=".18" stopColor="#fff1d2" stopOpacity="0" />
          <stop offset=".78" stopColor="#ffb45a" stopOpacity="0" />
          <stop offset="1" stopColor="#ffb45a" stopOpacity=".1" />
        </linearGradient>

        <radialGradient id={screw} cx=".3" cy=".22" r=".92">
          <stop offset="0" stopColor="#edb66d" />
          <stop offset=".18" stopColor="#c88740" />
          <stop offset=".48" stopColor="#875027" />
          <stop offset=".76" stopColor="#4b2b17" />
          <stop offset="1" stopColor="#170e08" />
        </radialGradient>

        <filter id={bloom} x="-180%" y="-140%" width="460%" height="380%">
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <filter id={screwShadow} x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="1.5" dy="2" stdDeviation="2.2" floodColor="#000000" floodOpacity=".72" />
        </filter>
      </defs>

      {/* Transparent glass. Only the thin mounted frame remains. */}
      <rect x="35" y="35" width="630" height="360" rx="2"
        fill="none" stroke="#21130b" strokeWidth="3" opacity=".92" />
      <rect x="37" y="37" width="626" height="356" rx="1.5"
        fill="none" stroke={"url(#" + gold + ")"} strokeWidth="1.25" opacity=".94" />

      {/* Barely visible glass sheen for depth, without adding a card background. */}
      <path d="M41 41H659L520 389H41Z" fill={"url(#" + sheen + ")"} opacity=".22" />

      {/* Canva signature L-shaped orange illumination. */}
      <path d="M37 37V393H663" fill="none"
        stroke="#ff5a00" strokeWidth="18" opacity=".16" filter={"url(#" + bloom + ")"} />
      <path d="M37 37V393H663" fill="none"
        stroke="#ff6500" strokeWidth="8" opacity=".2" filter={"url(#" + bloom + ")"} />
      <path d="M37 37V393" stroke={"url(#" + glow + ")"} strokeWidth="2.8" />
      <path d="M37 393H663" stroke="#ff6200" strokeWidth="3" />

      {/* Four premium bronze fasteners. */}
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="58" cy="58" r="12" fill={"url(#" + screw + ")"} stroke="#965c29" strokeWidth="1" />
        <ellipse cx="54" cy="53.8" rx="3.7" ry="2.2" fill="#f6c77f" opacity=".45" />
      </g>
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="642" cy="58" r="12" fill={"url(#" + screw + ")"} stroke="#965c29" strokeWidth="1" />
        <ellipse cx="638" cy="53.8" rx="3.7" ry="2.2" fill="#f6c77f" opacity=".45" />
      </g>
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="58" cy="370" r="12" fill={"url(#" + screw + ")"} stroke="#965c29" strokeWidth="1" />
        <ellipse cx="54" cy="365.8" rx="3.7" ry="2.2" fill="#f6c77f" opacity=".45" />
      </g>
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="642" cy="370" r="12" fill={"url(#" + screw + ")"} stroke="#965c29" strokeWidth="1" />
        <ellipse cx="638" cy="365.8" rx="3.7" ry="2.2" fill="#f6c77f" opacity=".45" />
      </g>
    </svg>
  );
}

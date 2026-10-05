import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const glass = "menu-frame-glass-" + uid;
  const glassShade = "menu-frame-glass-shade-" + uid;
  const texture = "menu-frame-texture-" + uid;
  const edge = "menu-frame-edge-" + uid;
  const leftGlow = "menu-frame-left-glow-" + uid;
  const bottomGlow = "menu-frame-bottom-glow-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const screwRim = "menu-frame-screw-rim-" + uid;
  const screwShadow = "menu-frame-screw-shadow-" + uid;

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 700 520"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#050403" stopOpacity=".94" />
          <stop offset=".28" stopColor="#0b0907" stopOpacity=".9" />
          <stop offset=".62" stopColor="#080706" stopOpacity=".94" />
          <stop offset="1" stopColor="#120d09" stopOpacity=".86" />
        </linearGradient>

        <radialGradient id={glassShade} cx=".58" cy=".44" r=".8">
          <stop offset="0" stopColor="#3b3026" stopOpacity=".055" />
          <stop offset=".48" stopColor="#1a130d" stopOpacity=".018" />
          <stop offset="1" stopColor="#000000" stopOpacity=".42" />
        </radialGradient>

        <filter id={texture} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency=".012 .035" numOctaves="2" seed="17" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono">
            <feFuncA type="table" tableValues="0 .07" />
          </feComponentTransfer>
        </filter>

        <linearGradient id={edge} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a2110" stopOpacity=".72" />
          <stop offset=".18" stopColor="#74431f" stopOpacity=".64" />
          <stop offset=".5" stopColor="#452712" stopOpacity=".54" />
          <stop offset=".78" stopColor="#68401f" stopOpacity=".46" />
          <stop offset="1" stopColor="#241408" stopOpacity=".78" />
        </linearGradient>

        <linearGradient id={leftGlow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff4500" stopOpacity="0" />
          <stop offset=".28" stopColor="#ff4d00" stopOpacity=".2" />
          <stop offset=".56" stopColor="#ff5b00" stopOpacity=".7" />
          <stop offset=".8" stopColor="#ff6b0a" stopOpacity=".42" />
          <stop offset="1" stopColor="#ff6b0a" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={bottomGlow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff6a0a" stopOpacity="0" />
          <stop offset=".22" stopColor="#ff6500" stopOpacity=".2" />
          <stop offset=".55" stopColor="#ff5a00" stopOpacity=".72" />
          <stop offset=".82" stopColor="#ff4b00" stopOpacity=".38" />
          <stop offset="1" stopColor="#ff3d00" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={screwRim} cx=".28" cy=".2" r=".92">
          <stop offset="0" stopColor="#c18a4d" />
          <stop offset=".42" stopColor="#74431f" />
          <stop offset=".78" stopColor="#3a2110" />
          <stop offset="1" stopColor="#160c06" />
        </radialGradient>

        <radialGradient id={screw} cx=".28" cy=".2" r=".92">
          <stop offset="0" stopColor="#c58b4c" />
          <stop offset=".16" stopColor="#a86b32" />
          <stop offset=".42" stopColor="#78451f" />
          <stop offset=".7" stopColor="#4b2a14" />
          <stop offset=".88" stopColor="#29170b" />
          <stop offset="1" stopColor="#100804" />
        </radialGradient>

        <filter id={leftGlow + "-blur"} x="-900%" y="-180%" width="1900%" height="460%">
          <feGaussianBlur stdDeviation="13" />
        </filter>

        <filter id={bottomGlow + "-blur"} x="-180%" y="-900%" width="460%" height="1900%">
          <feGaussianBlur stdDeviation="13" />
        </filter>

        <filter id={screwShadow} x="-180%" y="-180%" width="460%" height="460%">
          <feDropShadow dx="1.5" dy="2.2" stdDeviation="2.8" floodColor="#000000" floodOpacity=".86" />
        </filter>
      </defs>

      <rect x="34" y="34" width="632" height="452" rx="1.5" fill={"url(#" + glass + ")"} />
      <rect x="34" y="34" width="632" height="452" rx="1.5" fill={"url(#" + glassShade + ")"} />
      <rect x="34" y="34" width="632" height="452" rx="1.5" filter={"url(#" + texture + ")"} opacity=".28" />

      <rect x="32" y="32" width="636" height="456" rx="2" fill="none" stroke="#0d0804" strokeWidth="4" opacity=".9" />
      <rect x="34" y="34" width="632" height="452" rx="1.5" fill="none" stroke={"url(#" + edge + ")"} strokeWidth="1.35" opacity=".9" />

      <path d="M34 34V486" fill="none" stroke="#ff4a00" strokeWidth="28" strokeLinecap="square" opacity=".25" filter={"url(#" + leftGlow + "-blur)"} />
      <path d="M34 486H666" fill="none" stroke="#ff4a00" strokeWidth="28" strokeLinecap="square" opacity=".25" filter={"url(#" + bottomGlow + "-blur)"} />

      <path d="M34 34V486" fill="none" stroke={"url(#" + leftGlow + ")"} strokeWidth="9" strokeLinecap="square" opacity=".68" />
      <path d="M34 486H666" fill="none" stroke={"url(#" + bottomGlow + ")"} strokeWidth="9" strokeLinecap="square" opacity=".68" />

      <path d="M34 34V486" fill="none" stroke="#f75b08" strokeWidth="2.15" strokeLinecap="square" opacity=".82" />
      <path d="M34 486H666" fill="none" stroke="#f75b08" strokeWidth="2.2" strokeLinecap="square" opacity=".82" />

      <circle cx="34" cy="486" r="18" fill="#ff4d00" opacity=".14" />

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="68" r="13.5" fill="#180d06" opacity=".96" />
        <circle cx="68" cy="68" r="11.4" fill={"url(#" + screwRim + ")"} />
        <circle cx="68" cy="68" r="9.8" fill={"url(#" + screw + ")"} />
        <ellipse cx="64.7" cy="64.2" rx="3.5" ry="2" fill="#e7b16a" opacity=".3" />
        <ellipse cx="70.2" cy="72" rx="4.8" ry="2.8" fill="#130903" opacity=".24" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="68" r="13.5" fill="#180d06" opacity=".96" />
        <circle cx="632" cy="68" r="11.4" fill={"url(#" + screwRim + ")"} />
        <circle cx="632" cy="68" r="9.8" fill={"url(#" + screw + ")"} />
        <ellipse cx="628.7" cy="64.2" rx="3.5" ry="2" fill="#e7b16a" opacity=".3" />
        <ellipse cx="634.2" cy="72" rx="4.8" ry="2.8" fill="#130903" opacity=".24" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="452" r="13.5" fill="#180d06" opacity=".96" />
        <circle cx="68" cy="452" r="11.4" fill={"url(#" + screwRim + ")"} />
        <circle cx="68" cy="452" r="9.8" fill={"url(#" + screw + ")"} />
        <ellipse cx="64.7" cy="448.2" rx="3.5" ry="2" fill="#e7b16a" opacity=".3" />
        <ellipse cx="70.2" cy="456" rx="4.8" ry="2.8" fill="#130903" opacity=".24" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="452" r="13.5" fill="#180d06" opacity=".96" />
        <circle cx="632" cy="452" r="11.4" fill={"url(#" + screwRim + ")"} />
        <circle cx="632" cy="452" r="9.8" fill={"url(#" + screw + ")"} />
        <ellipse cx="628.7" cy="448.2" rx="3.5" ry="2" fill="#e7b16a" opacity=".3" />
        <ellipse cx="634.2" cy="456" rx="4.8" ry="2.8" fill="#130903" opacity=".24" />
      </g>
    </svg>
  );
}

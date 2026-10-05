import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const edge = "menu-frame-edge-" + uid;
  const bronze = "menu-frame-bronze-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const screwShadow = "menu-frame-screw-shadow-" + uid;
  const orangeBloom = "menu-frame-orange-bloom-" + uid;
  const orangeSoft = "menu-frame-orange-soft-" + uid;

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 700 430"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={edge} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b1a0d" stopOpacity=".92" />
          <stop offset=".16" stopColor="#7b4822" stopOpacity=".78" />
          <stop offset=".43" stopColor="#a8662f" stopOpacity=".64" />
          <stop offset=".72" stopColor="#5b351b" stopOpacity=".7" />
          <stop offset="1" stopColor="#2b190d" stopOpacity=".92" />
        </linearGradient>

        <linearGradient id={bronze} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff7a18" stopOpacity=".82" />
          <stop offset=".08" stopColor="#d68138" stopOpacity=".72" />
          <stop offset=".5" stopColor="#87502a" stopOpacity=".55" />
          <stop offset="1" stopColor="#432817" stopOpacity=".72" />
        </linearGradient>

        <radialGradient id={screw} cx=".28" cy=".2" r=".9">
          <stop offset="0" stopColor="#e9b56d" />
          <stop offset=".16" stopColor="#c88a45" />
          <stop offset=".4" stopColor="#8a542b" />
          <stop offset=".72" stopColor="#4d2d18" />
          <stop offset="1" stopColor="#1b1008" />
        </radialGradient>

        <filter id={orangeBloom} x="-900%" y="-100%" width="1900%" height="300%">
          <feGaussianBlur stdDeviation="9" />
        </filter>

        <filter id={orangeSoft} x="-500%" y="-100%" width="1100%" height="300%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>

        <filter id={screwShadow} x="-150%" y="-150%" width="400%" height="400%">
          <feDropShadow
            dx="1.5"
            dy="2"
            stdDeviation="2.4"
            floodColor="#000000"
            floodOpacity=".78"
          />
        </filter>
      </defs>

      {/* Transparent glass: no plaque, no fill, only the mounted perimeter. */}
      <rect
        x="34"
        y="34"
        width="632"
        height="362"
        rx="1.5"
        fill="none"
        stroke="#120b06"
        strokeWidth="4"
        opacity=".72"
      />
      <rect
        x="36"
        y="36"
        width="628"
        height="358"
        rx="1"
        fill="none"
        stroke={"url(#" + edge + ")"}
        strokeWidth="1.45"
        opacity=".92"
      />

      {/* The reference light is an L only: a hot vertical left edge and a hot
          horizontal bottom edge. It blooms outward but never fills the glass. */}
      <path
        d="M36 36V394H664"
        fill="none"
        stroke="#ff4b00"
        strokeWidth="20"
        strokeLinecap="square"
        opacity=".13"
        filter={"url(#" + orangeBloom + ")"}
      />
      <path
        d="M36 36V394H664"
        fill="none"
        stroke="#ff5a00"
        strokeWidth="8"
        strokeLinecap="square"
        opacity=".25"
        filter={"url(#" + orangeSoft + ")"}
      />
      <path
        d="M36 36V394"
        fill="none"
        stroke="#ff6100"
        strokeWidth="2.7"
        strokeLinecap="square"
        opacity=".98"
      />
      <path
        d="M36 394H664"
        fill="none"
        stroke="#ff6100"
        strokeWidth="2.8"
        strokeLinecap="square"
        opacity=".96"
      />

      {/* Four recessed bronze fasteners. Their scale and inset follow the
          reference rather than behaving like decorative UI buttons. */}
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="68" r="13" fill={"url(#" + screw + ")"} stroke="#9a602f" strokeWidth="1" />
        <ellipse cx="64.2" cy="63.3" rx="4" ry="2.35" fill="#ffd28f" opacity=".38" />
        <circle cx="68" cy="68" r="9.8" fill="none" stroke="#2b170b" strokeWidth=".7" opacity=".34" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="68" r="13" fill={"url(#" + screw + ")"} stroke="#9a602f" strokeWidth="1" />
        <ellipse cx="628.2" cy="63.3" rx="4" ry="2.35" fill="#ffd28f" opacity=".38" />
        <circle cx="632" cy="68" r="9.8" fill="none" stroke="#2b170b" strokeWidth=".7" opacity=".34" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="362" r="13" fill={"url(#" + screw + ")"} stroke="#9a602f" strokeWidth="1" />
        <ellipse cx="64.2" cy="357.3" rx="4" ry="2.35" fill="#ffd28f" opacity=".38" />
        <circle cx="68" cy="362" r="9.8" fill="none" stroke="#2b170b" strokeWidth=".7" opacity=".34" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="362" r="13" fill={"url(#" + screw + ")"} stroke="#9a602f" strokeWidth="1" />
        <ellipse cx="628.2" cy="357.3" rx="4" ry="2.35" fill="#ffd28f" opacity=".38" />
        <circle cx="632" cy="362" r="9.8" fill="none" stroke="#2b170b" strokeWidth=".7" opacity=".34" />
      </g>
    </svg>
  );
}

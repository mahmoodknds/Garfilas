import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const glass = "menu-frame-glass-" + uid;
  const glassShade = "menu-frame-glass-shade-" + uid;
  const edge = "menu-frame-edge-" + uid;
  const leftGlow = "menu-frame-left-glow-" + uid;
  const bottomGlow = "menu-frame-bottom-glow-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const screwShadow = "menu-frame-screw-shadow-" + uid;
  const screwRim = "menu-frame-screw-rim-" + uid;

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 700 430"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* The Canva surface is dark glass, not a black card. The outside
            remains completely transparent. */}
        <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#090705" stopOpacity=".82" />
          <stop offset=".34" stopColor="#11100e" stopOpacity=".76" />
          <stop offset=".72" stopColor="#0c0c0b" stopOpacity=".8" />
          <stop offset="1" stopColor="#15120e" stopOpacity=".7" />
        </linearGradient>

        <radialGradient id={glassShade} cx=".58" cy=".46" r=".78">
          <stop offset="0" stopColor="#37332e" stopOpacity=".075" />
          <stop offset=".55" stopColor="#171411" stopOpacity=".025" />
          <stop offset="1" stopColor="#000000" stopOpacity=".34" />
        </radialGradient>

        <linearGradient id={edge} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4c2c17" stopOpacity=".72" />
          <stop offset=".12" stopColor="#8a5128" stopOpacity=".7" />
          <stop offset=".3" stopColor="#5c351b" stopOpacity=".56" />
          <stop offset=".65" stopColor="#3e2413" stopOpacity=".66" />
          <stop offset="1" stopColor="#1e1109" stopOpacity=".86" />
        </linearGradient>

        <linearGradient id={leftGlow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff4300" stopOpacity="0" />
          <stop offset=".48" stopColor="#ff5100" stopOpacity=".58" />
          <stop offset=".74" stopColor="#ff6700" stopOpacity=".94" />
          <stop offset="1" stopColor="#ff7600" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={bottomGlow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff7a10" stopOpacity="0" />
          <stop offset=".38" stopColor="#ff6500" stopOpacity=".58" />
          <stop offset=".72" stopColor="#ff5700" stopOpacity=".9" />
          <stop offset="1" stopColor="#ff3e00" stopOpacity="0" />
        </linearGradient>

        <radialGradient id={screwRim} cx=".3" cy=".2" r=".9">\n          <stop offset="0" stopColor="#e7ad61" />\n          <stop offset=".5" stopColor="#7b4722" />\n          <stop offset="1" stopColor="#2a160b" />\n        </radialGradient>\n\n        <radialGradient id={screw} cx=".28" cy=".2" r=".92">
          <stop offset="0" stopColor="#e9b56d" />
          <stop offset=".13" stopColor="#c88a45" />
          <stop offset=".38" stopColor="#9b612f" />
          <stop offset=".67" stopColor="#56331a" />
          <stop offset=".86" stopColor="#2d190c" />
          <stop offset="1" stopColor="#120a05" />
        </radialGradient>

        <filter id={leftGlow + "-blur"} x="-700%" y="-100%" width="1500%" height="300%">
          <feGaussianBlur stdDeviation="7.5" />
        </filter>

        <filter id={bottomGlow + "-blur"} x="-100%" y="-700%" width="300%" height="1500%">
          <feGaussianBlur stdDeviation="7.5" />
        </filter>

        <filter id={screwShadow} x="-180%" y="-180%" width="460%" height="460%">
          <feDropShadow
            dx="1.5"
            dy="2"
            stdDeviation="2.6"
            floodColor="#000000"
            floodOpacity=".8"
          />
        </filter>
      </defs>

      {/* Glass only. Nothing is painted outside this perimeter. */}
      <rect
        x="36"
        y="36"
        width="628"
        height="358"
        rx="1.5"
        fill={"url(#" + glass + ")"}
      />
      <rect
        x="36"
        y="36"
        width="628"
        height="358"
        rx="1.5"
        fill={"url(#" + glassShade + ")"}
      />

      {/* Very restrained surface reflections. These keep the glass from
          reading as a flat CSS rectangle without adding a visible overlay. */}
      <path
        d="M42 42H658L530 388H42Z"
        fill="none"
        stroke="#fff0d2"
        strokeWidth="1"
        opacity=".025"
      />
      <path
        d="M54 384H652"
        fill="none"
        stroke="#f1a85d"
        strokeWidth="1"
        opacity=".07"
      />

      {/* Dark bronze perimeter. Top/right stay subdued in the reference. */}
      <rect
        x="34"
        y="34"
        width="632"
        height="362"
        rx="2"
        fill="none"
        stroke="#100a05"
        strokeWidth="4"
        opacity=".88"
      />
      <rect
        x="36"
        y="36"
        width="628"
        height="358"
        rx="1.5"
        fill="none"
        stroke={"url(#" + edge + ")"}
        strokeWidth="1.35"
        opacity=".94"
      />

      {/* Orange illumination: two independent blooms create the photographic
          L-light. The bright core remains narrow and controlled. */}
      <path
        d="M36 36V394"
        fill="none"
        stroke="#ff4b00"
        strokeWidth="18"
        strokeLinecap="square"
        opacity=".34"
        filter={"url(#" + leftGlow + "-blur)"}
      />
      <path
        d="M36 394H664"
        fill="none"
        stroke="#ff4b00"
        strokeWidth="18"
        strokeLinecap="square"
        opacity=".34"
        filter={"url(#" + bottomGlow + "-blur)"}
      />

      <path
        d="M36 36V394"
        fill="none"
        stroke={"url(#" + leftGlow + ")"}
        strokeWidth="7"
        strokeLinecap="square"
        opacity=".76"
      />
      <path
        d="M36 394H664"
        fill="none"
        stroke={"url(#" + bottomGlow + ")"}
        strokeWidth="7"
        strokeLinecap="square"
        opacity=".76"
      />

      <path
        d="M36 36V394"
        fill="none"
        stroke="#ff6500"
        strokeWidth="2.45"
        strokeLinecap="square"
        opacity=".98"
      />
      <path
        d="M36 394H664"
        fill="none"
        stroke="#ff6500"
        strokeWidth="2.55"
        strokeLinecap="square"
        opacity=".98"
      />

      {/* Hot corner: the left and bottom light physically meet here. */}
      <circle cx="36" cy="394" r="12" fill="#ff4c00" opacity=".22" />
      <circle cx="36" cy="394" r="4.2" fill="#ff6a00" opacity=".86" />

      {/* Four recessed bronze fasteners, positioned inside the frame rather
          than on its outer edge. */}
      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="68" r="13" fill="#211208" opacity=".92" />
        <circle cx="68" cy="68" r="11.9" fill={"url(#" + screw + ")"} />
        <circle cx="68" cy="68" r="10.1" fill="none" stroke={"url(#" + screwRim + ")"} strokeWidth=".75" opacity=".5" />
        <ellipse cx="64.2" cy="63.3" rx="4" ry="2.3" fill="#ffd99d" opacity=".42" />
        <ellipse cx="70.5" cy="72.4" rx="5.3" ry="3.2" fill="#140a04" opacity=".22" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="68" r="13" fill="#211208" opacity=".92" />
        <circle cx="632" cy="68" r="11.9" fill={"url(#" + screw + ")"} />
        <circle cx="632" cy="68" r="10.1" fill="none" stroke={"url(#" + screwRim + ")"} strokeWidth=".75" opacity=".5" />
        <ellipse cx="628.2" cy="63.3" rx="4" ry="2.3" fill="#ffd99d" opacity=".42" />
        <ellipse cx="634.5" cy="72.4" rx="5.3" ry="3.2" fill="#140a04" opacity=".22" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="68" cy="362" r="13" fill="#211208" opacity=".92" />
        <circle cx="68" cy="362" r="11.9" fill={"url(#" + screw + ")"} />
        <circle cx="68" cy="362" r="10.1" fill="none" stroke={"url(#" + screwRim + ")"} strokeWidth=".75" opacity=".5" />
        <ellipse cx="64.2" cy="357.3" rx="4" ry="2.3" fill="#ffd99d" opacity=".42" />
        <ellipse cx="70.5" cy="366.4" rx="5.3" ry="3.2" fill="#140a04" opacity=".22" />
      </g>

      <g filter={"url(#" + screwShadow + ")"}>
        <circle cx="632" cy="362" r="13" fill="#211208" opacity=".92" />
        <circle cx="632" cy="362" r="11.9" fill={"url(#" + screw + ")"} />
        <circle cx="632" cy="362" r="10.1" fill="none" stroke={"url(#" + screwRim + ")"} strokeWidth=".75" opacity=".5" />
        <ellipse cx="628.2" cy="357.3" rx="4" ry="2.3" fill="#ffd99d" opacity=".42" />
        <ellipse cx="634.5" cy="366.4" rx="5.3" ry="3.2" fill="#140a04" opacity=".22" />
      </g>
    </svg>
  );
}

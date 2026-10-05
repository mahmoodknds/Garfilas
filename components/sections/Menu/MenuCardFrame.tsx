import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const gold = "menu-frame-gold-" + uid;
  const leftGlow = "menu-frame-left-glow-" + uid;
  const bottomGlow = "menu-frame-bottom-glow-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const softGlow = "menu-frame-soft-glow-" + uid;

  return (
    <svg
      className="menu-product__frame-svg"
      viewBox="0 0 644 590"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7b4a24" stopOpacity=".78" />
          <stop offset=".22" stopColor="#a86a2d" stopOpacity=".62" />
          <stop offset=".55" stopColor="#68401f" stopOpacity=".52" />
          <stop offset="1" stopColor="#382313" stopOpacity=".76" />
        </linearGradient>

        <linearGradient id={leftGlow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5d00" stopOpacity=".98" />
          <stop offset=".16" stopColor="#ff6b00" stopOpacity=".9" />
          <stop offset=".42" stopColor="#ff7200" stopOpacity=".32" />
          <stop offset="1" stopColor="#ff7200" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={bottomGlow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff6900" stopOpacity="0" />
          <stop offset=".32" stopColor="#ff6900" stopOpacity=".2" />
          <stop offset=".72" stopColor="#ff6800" stopOpacity=".78" />
          <stop offset="1" stopColor="#ff5b00" stopOpacity=".98" />
        </linearGradient>

        <radialGradient id={screw} cx=".3" cy=".23" r=".84">
          <stop offset="0" stopColor="#d99a55" />
          <stop offset=".28" stopColor="#9a5e27" />
          <stop offset=".7" stopColor="#4b2c18" />
          <stop offset="1" stopColor="#17100a" />
        </radialGradient>

        <filter id={softGlow} x="-120%" y="-80%" width="340%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Glass only. No card/plaque fill. */}
      <rect
        x="38"
        y="43"
        width="568"
        height="504"
        rx="2"
        fill="none"
        stroke="#25170e"
        strokeWidth="2.2"
        opacity=".92"
      />
      <rect
        x="40"
        y="45"
        width="564"
        height="500"
        rx="1.5"
        fill="none"
        stroke={"url(#" + gold + ")"}
        strokeWidth="1.15"
        opacity=".9"
      />

      {/* Reference light: concentrated on the left and bottom glass edges. */}
      <path
        d="M40 46V545"
        stroke="#ff6500"
        strokeWidth="14"
        opacity=".19"
        filter={"url(#" + softGlow + ")"}
      />
      <path
        d="M40 46V545"
        stroke={"url(#" + leftGlow + ")"}
        strokeWidth="2"
      />
      <path
        d="M40 545H604"
        stroke="#ff6500"
        strokeWidth="16"
        opacity=".16"
        filter={"url(#" + softGlow + ")"}
      />
      <path
        d="M40 545H604"
        stroke={"url(#" + bottomGlow + ")"}
        strokeWidth="2.2"
      />

      {/* Four physical screws mounted directly to the glass. */}
      <g>
        <circle cx="63" cy="67" r="9" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M59 67h8M63 63v8" stroke="#e0a15a" strokeWidth=".65" opacity=".48" />
      </g>
      <g>
        <circle cx="581" cy="67" r="9" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M577 67h8M581 63v8" stroke="#e0a15a" strokeWidth=".65" opacity=".48" />
      </g>
      <g>
        <circle cx="63" cy="523" r="9" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M59 523h8M63 519v8" stroke="#e0a15a" strokeWidth=".65" opacity=".48" />
      </g>
      <g>
        <circle cx="581" cy="523" r="9" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M577 523h8M581 519v8" stroke="#e0a15a" strokeWidth=".65" opacity=".48" />
      </g>
    </svg>
  );
}

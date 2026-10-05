import { useId } from "react";

export default function MenuCardFrame() {
  const uid = useId().replace(/:/g, "");
  const edge = "menu-frame-edge-" + uid;
  const gold = "menu-frame-gold-" + uid;
  const leftGlow = "menu-frame-left-glow-" + uid;
  const bottomGlow = "menu-frame-bottom-glow-" + uid;
  const screw = "menu-frame-screw-" + uid;
  const softGlow = "menu-frame-soft-glow-" + uid;
  const surface = "menu-frame-surface-" + uid;

  return (
    <svg className="menu-product__frame-svg" viewBox="0 0 590 644" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={edge} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#161411" />
          <stop offset=".46" stopColor="#090806" />
          <stop offset="1" stopColor="#15110c" />
        </linearGradient>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d431f" stopOpacity=".72" />
          <stop offset=".2" stopColor="#a76a2b" stopOpacity=".58" />
          <stop offset=".55" stopColor="#6b421f" stopOpacity=".5" />
          <stop offset="1" stopColor="#3b2515" stopOpacity=".72" />
        </linearGradient>
        <linearGradient id={leftGlow} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff6a00" stopOpacity=".92" />
          <stop offset=".16" stopColor="#ff7a00" stopOpacity=".76" />
          <stop offset=".48" stopColor="#ff7a00" stopOpacity=".24" />
          <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={bottomGlow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff7200" stopOpacity="0" />
          <stop offset=".42" stopColor="#ff7200" stopOpacity=".24" />
          <stop offset=".78" stopColor="#ff7200" stopOpacity=".72" />
          <stop offset="1" stopColor="#ff6500" stopOpacity=".9" />
        </linearGradient>
        <radialGradient id={screw} cx=".32" cy=".25" r=".82">
          <stop offset="0" stopColor="#d99a55" />
          <stop offset=".3" stopColor="#9a5e27" />
          <stop offset=".72" stopColor="#4c2d18" />
          <stop offset="1" stopColor="#17100a" />
        </radialGradient>
        <filter id={softGlow} x="-100%" y="-30%" width="300%" height="160%">
          <feGaussianBlur stdDeviation="5.5" />
        </filter>
        <radialGradient id={surface} cx=".5" cy=".42" r=".78">
          <stop offset="0" stopColor="#11100d" />
          <stop offset=".5" stopColor="#090806" />
          <stop offset="1" stopColor="#050504" />
        </radialGradient>
      </defs>

      <rect x="1" y="1" width="588" height="642" rx="12" fill="#070706" />
      <rect x="6" y="6" width="578" height="632" rx="10" fill={"url(#" + edge + ")"} opacity=".72" />
      <rect x="72" y="53" width="460" height="534" rx="1.5" fill={"url(#" + surface + ")"} opacity=".9" />

      <rect x="68" y="49" width="468" height="542" rx="2.5" fill="none" stroke="#2d1c11" strokeWidth="2.4" />
      <rect x="70" y="51" width="464" height="538" rx="1.5" fill="none" stroke={"url(#" + gold + ")"} strokeWidth="1.1" opacity=".82" />

      <path d="M70 52V589" stroke="#ff6800" strokeWidth="10" opacity=".18" filter={"url(#" + softGlow + ")"} />
      <path d="M70 52V589" stroke={"url(#" + leftGlow + ")"} strokeWidth="1.8" />
      <path d="M70 589H534" stroke="#ff6800" strokeWidth="12" opacity=".14" filter={"url(#" + softGlow + ")"} />
      <path d="M70 589H534" stroke={"url(#" + bottomGlow + ")"} strokeWidth="2" />

      <g>
        <circle cx="98" cy="75" r="8" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M94.5 75h7M98 71.5v7" stroke="#e0a15a" strokeWidth=".6" opacity=".48" />
      </g>
      <g>
        <circle cx="506" cy="75" r="8" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M502.5 75h7M506 71.5v7" stroke="#e0a15a" strokeWidth=".6" opacity=".48" />
      </g>
      <g>
        <circle cx="98" cy="557" r="8" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M94.5 557h7M98 553.5v7" stroke="#e0a15a" strokeWidth=".6" opacity=".48" />
      </g>
      <g>
        <circle cx="506" cy="557" r="8" fill={"url(#" + screw + ")"} stroke="#82501f" strokeWidth=".9" />
        <path d="M502.5 557h7M506 553.5v7" stroke="#e0a15a" strokeWidth=".6" opacity=".48" />
      </g>
    </svg>
  );
}

import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
});

export const ArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = ({ size, ...p }: P) => (
  <svg {...base(size ?? 14)} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowLeft = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);
export const Chevron = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Check = ({ size, ...p }: P) => (
  <svg {...base(size ?? 15)} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const Sun = ({ size, ...p }: P) => (
  <svg {...base(size ?? 15)} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const Moon = ({ size, ...p }: P) => (
  <svg {...base(size ?? 15)} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
export const Menu = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = ({ size, ...p }: P) => (
  <svg {...base(size ?? 20)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Mail = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const Phone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
export const WhatsApp = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M3 21l1.7-4.6A9 9 0 1 1 8 19.6L3 21z" />
    <path d="M9 8.5c0 3.5 2.5 6.5 6.5 6.5l1-1.5-2-1-1 1c-1-.4-2.6-2-3-3l1-1-1-2L9 8.5z" />
  </svg>
);
export const LinkedIn = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </svg>
);
export const GitHub = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);
export const Shop = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16l-1.5 12a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8L4 7z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);
export const Lock = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
export const Info = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8v.01" />
  </svg>
);
export const Pin = ({ size, ...p }: P) => (
  <svg width={size ?? 22} height={size ?? 22} viewBox="0 0 24 24" aria-hidden focusable={false} {...p}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
  </svg>
);
export const Download = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);
export const Spark = ({ size, ...p }: P) => (
  <svg {...base(size ?? 12)} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
  </svg>
);
export const Send = ({ size, ...p }: P) => (
  <svg {...base(size ?? 16)} {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

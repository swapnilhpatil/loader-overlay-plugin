export const SIZES = {
  sm: { s: 28, f: "11px", g: "8px" },
  md: { s: 44, f: "13px", g: "12px" },
  lg: { s: 64, f: "15px", g: "16px" },
  xl: { s: 88, f: "18px", g: "22px" },
};

export const VARIANTS = {
  light: { bg: "rgba(255,255,255,0.9)", tx: "#1a1a2e" },
  dark: { bg: "rgba(10,10,20,0.92)", tx: "#f0f0f0" },
  blur: { bg: "rgba(20,15,50,0.5)", tx: "#fff" },
  transparent: { bg: "rgba(0,0,0,0)", tx: "#f0f0f0" },
  gradient: {
    bg: "linear-gradient(135deg,rgba(15,15,40,.95),rgba(50,10,80,.95))",
    tx: "#e8d5ff",
  },
};

export const ANIM_CSS = `
  @keyframes lSpin{to{transform:rotate(360deg)}}
  @keyframes lBounce{0%,80%,100%{transform:scale(.6);opacity:.4}40%{transform:scale(1);opacity:1}}
  @keyframes lPR{0%{transform:scale(.8);opacity:.6}100%{transform:scale(1.8);opacity:0}}
  @keyframes lPC{0%,100%{transform:scale(.9)}50%{transform:scale(1.1)}}
  @keyframes lBar{0%,100%{height:30%;opacity:.4}50%{height:100%;opacity:1}}
  @keyframes lFI{from{opacity:0}to{opacity:1}}
  @keyframes lShim{0%{background-position:0 50%}100%{background-position:200% 50%}}
`;

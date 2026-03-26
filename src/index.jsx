import React, { useState, useRef, useEffect } from "react";
import { SIZES, VARIANTS, ANIM_CSS } from "./constants/index.js";
import { ICONS, SpinIcon, DotsIcon, PulseIcon, RingIcon, BarIcon } from "./components/Icons.jsx";

// ─── Named exports for tree-shaking ─────────────────────────────────────────
export { SIZES, VARIANTS, ANIM_CSS };
export { ICONS, SpinIcon, DotsIcon, PulseIcon, RingIcon, BarIcon };

/**
 * A highly customizable, accessible loading overlay.
 * @param {import('./types/index.js').LoaderOverlayProps} props
 */
export default function LoaderOverlay({
  show = true,
  type = "spinner",
  size = "md",
  variant = "dark",
  color = "#a78bfa",
  message = "Loading...",
  submessage = "",
  fullScreen = false,
  zIndex = 999,
  opacity = 1,
  blur = 8,
  showProgress = false,
  progress = 0,
  closable = false,
  onClose = () => {},
  position = "center",
  animateIn = true,
  timeout = 0,
  children = null,
  closeOnOutsideClick = false,
  onOutsideClick = () => {},
}) {
  const [vis, setVis] = useState(show);
  const boxRef = useRef(null);
  const closeRef = useRef(onClose);
  const outsideRef = useRef(onOutsideClick);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);
  useEffect(() => {
    outsideRef.current = onOutsideClick;
  }, [onOutsideClick]);
  useEffect(() => {
    setVis(show);
  }, [show]);

  useEffect(() => {
    if (!vis || !closeOnOutsideClick) return;
    const h = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        outsideRef.current();
        setVis(false);
        closeRef.current();
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [vis, closeOnOutsideClick]);

  useEffect(() => {
    if (timeout > 0 && vis) {
      const t = setTimeout(() => {
        setVis(false);
        closeRef.current();
      }, timeout);
      return () => clearTimeout(t);
    }
  }, [timeout, vis]);

  if (!vis) return null;

  const sc = SIZES[size] || SIZES.md;
  const vc = VARIANTS[variant] || VARIANTS.dark;
  const Icon = ICONS[type] || ICONS.spinner;
  const alignMap = { center: "center", top: "flex-start", bottom: "flex-end" };

  return (
    <>
      <style>{ANIM_CSS}</style>
      <div
        style={{
          position: fullScreen ? "fixed" : "absolute",
          inset: 0,
          zIndex,
          display: "flex",
          alignItems: alignMap[position] || "center",
          justifyContent: "center",
          padding: position !== "center" ? 40 : 0,
          background: vc.bg,
          backdropFilter: blur > 0 ? `blur(${blur}px)` : "none",
          WebkitBackdropFilter: blur > 0 ? `blur(${blur}px)` : "none",
          opacity,
          animation: animateIn ? "lFI .25s ease" : "none",
        }}
      >
        <div
          ref={boxRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: sc.g,
            padding: "28px 36px",
            borderRadius: 16,
            position: "relative",
            background:
              variant === "transparent"
                ? "transparent"
                : variant === "gradient"
                  ? "rgba(255,255,255,.04)"
                  : "rgba(255,255,255,.07)",
            border: variant === "transparent" ? "none" : `1px solid ${color}25`,
            boxShadow:
              variant === "transparent" ? "none" : `0 8px 40px ${color}15`,
          }}
        >
          {closable && (
            <button
              onClick={() => {
                setVis(false);
                closeRef.current();
              }}
              style={{
                position: "absolute",
                top: 8,
                right: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: vc.tx,
                fontSize: 16,
                opacity: 0.45,
                padding: "2px 6px",
                borderRadius: 6,
              }}
            >
              ✕
            </button>
          )}
          {children || <Icon s={sc.s} color={color} />}
          {message && (
            <p
              style={{
                margin: 0,
                color: vc.tx,
                fontSize: sc.f,
                fontWeight: 600,
                letterSpacing: ".04em",
                fontFamily: "system-ui,sans-serif",
              }}
            >
              {message}
            </p>
          )}
          {submessage && (
            <p
              style={{
                margin: 0,
                color: vc.tx,
                fontSize: "11px",
                opacity: 0.5,
                fontFamily: "system-ui,sans-serif",
              }}
            >
              {submessage}
            </p>
          )}
          {showProgress && (
            <div style={{ width: 140, marginTop: 2 }}>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  background: `${color}22`,
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min(100, Math.max(0, progress))}%`,
                    background: `linear-gradient(90deg,${color},${color}88,${color})`,
                    backgroundSize: "200% 100%",
                    borderRadius: 99,
                    transition: "width .3s ease",
                    animation: "lShim 1.5s linear infinite",
                  }}
                />
              </div>
              <p
                style={{
                  margin: "3px 0 0",
                  textAlign: "right",
                  color: vc.tx,
                  opacity: 0.4,
                  fontSize: 10,
                  fontFamily: "monospace",
                }}
              >
                {progress}%
              </p>
            </div>
          )}
          {closeOnOutsideClick && (
            <p
              style={{
                margin: "2px 0 0",
                color: vc.tx,
                opacity: 0.3,
                fontSize: 9,
                fontFamily: "monospace",
              }}
            >
              click outside to dismiss
            </p>
          )}
        </div>
      </div>
    </>
  );
}

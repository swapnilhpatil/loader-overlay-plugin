import React, { useState } from "react";
import LoaderOverlay from "../../index.jsx";

/**
 * Renders the main interactive playground UI, allowing users to tweak every loader property in real-time.
 * @returns {JSX.Element}
 */
const Playground = () => {
  const [props, setProps] = useState({
    show: true,
    fullScreen: false,
    type: "spinner",
    size: "md",
    variant: "dark",
    color: "#c084fc",
    message: "Customizing loader...",
    submessage: "Tweak the controls to see changes",
    blur: 8,
    opacity: 1,
    showProgress: false,
    progress: 45,
    closable: true,
    position: "center",
    closeOnOutsideClick: false,
  });

  const update = (key, value) => setProps((p) => ({ ...p, [key]: value }));

  const sectionStyle = {
    padding: "16px",
    background: "#0c0f1e",
    border: "1px solid #1a1d30",
    borderRadius: "12px",
    marginBottom: "16px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    color: "#6a7a9a",
    marginBottom: "6px",
    fontFamily: "monospace",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #2a2d40",
    background: "#06080f",
    color: "#e2e8f0",
    fontSize: "14px",
    marginBottom: "12px",
  };

  const checkboxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#e2e8f0",
    cursor: "pointer",
    marginBottom: "12px",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "flex-start",
        marginTop: "24px",
      }}
    >
      {/* Controls Panel */}
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h3
          style={{ fontSize: "16px", color: "#e2e8f0", marginBottom: "16px" }}
        >
          Playground Controls
        </h3>

        <div style={sectionStyle}>
          <label style={labelStyle}>Animation Type</label>
          <select
            style={inputStyle}
            value={props.type}
            onChange={(e) => update("type", e.target.value)}
          >
            <option value="spinner">Spinner</option>
            <option value="dots">Dots</option>
            <option value="pulse">Pulse</option>
            <option value="ring">Ring</option>
            <option value="bar">Bar</option>
          </select>

          <label style={labelStyle}>Variant Theme</label>
          <select
            style={inputStyle}
            value={props.variant}
            onChange={(e) => update("variant", e.target.value)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="blur">Blur Backdrop</option>
            <option value="gradient">Gradient</option>
            <option value="transparent">Transparent</option>
          </select>

          <label style={labelStyle}>Size</label>
          <select
            style={inputStyle}
            value={props.size}
            onChange={(e) => update("size", e.target.value)}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
          </select>

          <label style={labelStyle}>Accent Color</label>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <input
              type="color"
              value={props.color}
              onChange={(e) => update("color", e.target.value)}
              style={{
                width: "40px",
                height: "36px",
                padding: "0",
                cursor: "pointer",
                border: "none",
                background: "none",
              }}
            />
            <input
              type="text"
              value={props.color}
              onChange={(e) => update("color", e.target.value)}
              style={{ ...inputStyle, marginBottom: "0" }}
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>Text Message</label>
          <input
            type="text"
            style={inputStyle}
            value={props.message}
            onChange={(e) => update("message", e.target.value)}
          />

          <label style={labelStyle}>Submessage Hint</label>
          <input
            type="text"
            style={inputStyle}
            value={props.submessage}
            onChange={(e) => update("submessage", e.target.value)}
          />

          <label style={labelStyle}>Position Alignment</label>
          <select
            style={inputStyle}
            value={props.position}
            onChange={(e) => update("position", e.target.value)}
          >
            <option value="center">Center</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>

        <div style={sectionStyle}>
          <label style={checkboxStyle}>
            <input
              type="checkbox"
              checked={props.showProgress}
              onChange={(e) => update("showProgress", e.target.checked)}
            />
            Show Progress Bar
          </label>
          {props.showProgress && (
            <div style={{ marginBottom: "12px" }}>
              <label style={labelStyle}>Progress ({props.progress}%)</label>
              <input
                type="range"
                min="0"
                max="100"
                style={{ width: "100%" }}
                value={props.progress}
                onChange={(e) => update("progress", Number(e.target.value))}
              />
            </div>
          )}

          <label style={labelStyle}>Backdrop Blur ({props.blur}px)</label>
          <input
            type="range"
            min="0"
            max="24"
            style={{ width: "100%", marginBottom: "12px" }}
            value={props.blur}
            onChange={(e) => update("blur", Number(e.target.value))}
          />

          <label style={checkboxStyle}>
            <input
              type="checkbox"
              checked={props.closable}
              onChange={(e) => update("closable", e.target.checked)}
            />
            Show Close '✕' Button
          </label>
          <label style={checkboxStyle}>
            <input
              type="checkbox"
              checked={props.closeOnOutsideClick}
              onChange={(e) => update("closeOnOutsideClick", e.target.checked)}
            />
            Dismiss on outside click
          </label>
        </div>
      </div>

      {/* Preview Area */}
      <div style={{ width: "400px", flexShrink: 0 }}>
        <h3
          style={{ fontSize: "16px", color: "#e2e8f0", marginBottom: "16px" }}
        >
          Live Preview
        </h3>
        <div
          style={{
            position: "relative",
            height: "450px",
            background: "#06080f",
            borderRadius: "16px",
            border: "1px solid #1a1d30",
            overflow: "hidden",
          }}
        >
          {/* Mock background content */}
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                height: "40px",
                background: "#111428",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                height: "60px",
                background: "#0c0e1a",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                height: "100px",
                background: "#111428",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                height: "60px",
                background: "#0d1020",
                borderRadius: "8px",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "16px",
              width: "100%",
              textAlign: "center",
              zIndex: 10,
            }}
          >
            {!props.show && (
              <button
                onClick={() => update("show", true)}
                style={{
                  padding: "8px 16px",
                  background: "#c084fc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Re-open Loader
              </button>
            )}
          </div>

          {/* Loader Overlay Mount */}
          <LoaderOverlay
            {...props}
            onClose={() => update("show", false)}
            onOutsideClick={() => console.log("Outside clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Playground;

/**
 * @typedef {"sm" | "md" | "lg" | "xl"} LoaderSize
 *
 * @typedef {"light" | "dark" | "blur" | "transparent" | "gradient"} LoaderVariant
 *
 * @typedef {"spinner" | "dots" | "pulse" | "ring" | "bar"} LoaderType
 *
 * @typedef {"center" | "top" | "bottom"} LoaderPosition
 *
 * @typedef {Object} LoaderOverlayProps
 * @property {boolean} [show=true] Determines if the overlay is visible.
 * @property {LoaderType} [type="spinner"] The type of loading animation.
 * @property {LoaderSize} [size="md"] The size scale of the loader.
 * @property {LoaderVariant} [variant="dark"] Theme backdrop and text colors.
 * @property {string} [color="#a78bfa"] Loader accent hex color.
 * @property {import('react').ReactNode} [message="Loading..."] Primary message displayed below the loader.
 * @property {import('react').ReactNode} [submessage=""] Secondary hint string.
 * @property {boolean} [fullScreen=false] Set to true for position "fixed" to cover the viewport.
 * @property {number} [zIndex=999] CSS z-index value.
 * @property {number} [opacity=1] Overlay backdrop opacity (0-1).
 * @property {number} [blur=8] Overlay backdrop blur amount in px.
 * @property {boolean} [showProgress=false] Display the animated progress bar.
 * @property {number} [progress=0] Progress bar value (0-100).
 * @property {boolean} [closable=false] Provide a close 'x' icon.
 * @property {function(): void} [onClose] Callback fired when dismissed.
 * @property {LoaderPosition} [position="center"] Alignment within the overlay.
 * @property {boolean} [animateIn=true] Whether to apply the fade-in animation.
 * @property {number} [timeout=0] Milliseconds before automatically closing. 0 to disable.
 * @property {import('react').ReactNode} [children=null] Provide custom elements inside the overlay box.
 * @property {boolean} [closeOnOutsideClick=false] Automatically dismiss when user clicks outside the message box.
 * @property {function(): void} [onOutsideClick] Callback fired when clicked outside.
 */

// This file is purely for JSDoc typings; no runtime code exports.
export const _Types = {};

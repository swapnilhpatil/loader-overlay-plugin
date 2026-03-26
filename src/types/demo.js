/**
 * @typedef {Object} SyntaxToken
 * @property {string} v The literal string value of the token.
 * @property {string|null} c The syntax highlighting color category assigned to the token.
 */

/**
 * @typedef {Object} DemoConfiguration
 * @property {boolean} show Controls the visibility of the loader overlay.
 * @property {string} type The animation variant (spinner, dots, pulse, ring, bar).
 * @property {string} size The size scale (sm, md, lg, xl).
 * @property {string} variant The background variant (dark, light, blur, transparent, gradient).
 * @property {string} color The accent color for the loader.
 * @property {string} message The primary text displayed below the loader.
 * @property {string} submessage The secondary hint text.
 * @property {boolean} fullScreen Whether the overlay covers the full window.
 * @property {number} zIndex The CSS z-index property.
 * @property {number} opacity The background opacity scale.
 * @property {number} blur The pixel radius for the backdrop blur.
 * @property {boolean} showProgress Determines if the progress bar renders.
 * @property {number} progress The current percentage of the progress bar (0-100).
 * @property {boolean} closable Shows a close button if true.
 * @property {string} position The flex alignment position (top, center, bottom).
 * @property {boolean} animateIn Determines whether it fades in on mount.
 * @property {number} timeout Auto-hides the overlay after the defined milliseconds.
 * @property {boolean} closeOnOutsideClick Allows dismissal by clicking the backdrop.
 */

export {};

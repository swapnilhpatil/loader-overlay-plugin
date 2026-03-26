import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      // Copy the hand-authored .d.ts into dist after every build
      name: "copy-dts",
      closeBundle() {
        try {
          copyFileSync(
            resolve(__dirname, "src/index.d.ts"),
            resolve(__dirname, "dist/loader-overlay.d.ts")
          );
        } catch {
          // ignore if running in dev mode (no dist yet)
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "LoaderOverlay",
      fileName: (format) => `loader-overlay.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
        },
      },
    },
    // Minify for smaller npm bundle
    minify: "esbuild",
    sourcemap: true,
  },
});

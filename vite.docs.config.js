import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Separate Vite config for building the documentation site.
// This does NOT use lib mode — it outputs a normal SPA into dist-docs/.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-docs",
    emptyOutDir: true,
  },
});

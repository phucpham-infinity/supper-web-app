import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "../public",
    rollupOptions: {
      output: {
        entryFileNames: `frontend/[name].js`,
        chunkFileNames: `frontend/[name].js`,
        assetFileNames: `frontend/[name].[ext]`,
      },
    },
  },
});

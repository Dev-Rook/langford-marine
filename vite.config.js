import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    assetsDir: 'Assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        services: "Routes/Services"
      },
    },
    server: {
      port: 3000,
      open: true
    }
  },
});

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    assetsDir: 'Assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "Routes/Index.jsx"),
        contact: resolve(__dirname, "Routes/Contact.jsx"),
        services: resolve(__dirname, "Routes/Services.jsx"),
        facilities: resolve(__dirname, "Routes/Facilities.jsx"),
        platforms: "Routes/Platforms.jsx",
        hwdi: resolve(__dirname, "Routes/HowWeDoIt.jsx"),
        about: resolve(__dirname, "Routes/About.jsx"),
        template: resolve(__dirname, "Routes/Projects/Tepmplate.jsx"),
      },
    },
    server: {
      port: 3000,
      open: true
    }
  },
});

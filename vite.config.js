import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, "./Routes/Index.jsx"),
        contact: resolve(root, "./Routes/Contact.jsx"),
        services: resolve(root, "./Routes/Services.jsx"),
        about: resolve(root, "./Routes/About.jsx"),
        template: resolve(root, "./Routes/Projects/Template.jsx"),
      },
    },
  },
});

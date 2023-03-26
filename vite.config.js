import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "Routes/Index.js",
        contact: "Routes/Contact.js",
        services: "Routes/Services.js",
        facilities: "Routes/Facilities.js",
        platforms: "Routes/Platforms.js",
        hwdi: "Routes/HowWeDoIt.js",
        about: "Routes/About.js",
        template: "Routes/Projects/Template.jsx"
        
      },
    },
  },
});

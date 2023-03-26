import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "Routes/Index.jsx",
        contact: "Routes/Contact.jsx",
        services: "Routes/Services.jsx",
        facilities: "Routes/Facilities.jsx",
        platforms: "Routes/Platforms.jsx",
        hwdi: "Routes/HowWeDoIt.jsx",
        about: "Routes/About.jsx",
        template: "Routes/Projects/Template.jsx"
        
      },
    },
  },
});

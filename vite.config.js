import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "src/Routes/Index.jsx",
        contact: "src/Routes/Contact.jsx",
        services: "src/Routes/Services.jsx",
        facilities: "src/Routes/Facilities.jsx",
        platforms: "src/Routes/Platforms.jsx",
        hwdi: "src/Routes/HowWeDoIt.jsx",
        about: "src/Routes/About.jsx",
        template: "src/Routes/Projects/Template.jsx"
      },
    },
  },
});

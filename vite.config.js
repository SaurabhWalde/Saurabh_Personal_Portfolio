import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Local dev only
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true, // open browser automatically
    host: false, 
  },
});

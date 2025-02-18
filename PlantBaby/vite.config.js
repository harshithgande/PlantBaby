import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PlantBaby/", // Fixes asset paths for GitHub Pages
});

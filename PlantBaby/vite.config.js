import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PlantBaby/",  // Ensure correct asset paths
  build: {
    outDir: "dist",  // Ensure output goes to `dist/`
  },
});

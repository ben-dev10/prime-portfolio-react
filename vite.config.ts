import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build:{
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        thanks: resolve(__dirname, "src/routes/thanks.html"),
      },
    },
  }
});

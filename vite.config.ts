import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import yamlPlugin from "./vite-yaml-plugin"

export default defineConfig({
  plugins: [
    react(),
    yamlPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


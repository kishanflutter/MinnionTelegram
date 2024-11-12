import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';
 import fs from 'fs'; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true, // Enable access over network IP
    // https: { key: fs.readFileSync(path.resolve(__dirname, 'server.key')), cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')), },
   fs: {
    allow: ['../sdk', './'],
  },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

 
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://clicker-game-api.me",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@hooks": "/src/hooks",
      "@redux": "/src/redux",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@components": "/src/components",
    },
  },

  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:4000",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});

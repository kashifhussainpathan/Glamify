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
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@ui": "/src/components/@ui",
      "@constants": "/src/constants",
      "@components": "/src/components",
    },
  },
});

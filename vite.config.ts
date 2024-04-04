import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@containers", replacement: "/src/containers" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@models", replacement: "/src/models" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@", replacement: "/src" },
    ],
  },
});

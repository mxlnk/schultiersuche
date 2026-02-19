import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import license from "rollup-plugin-license";
import path from "path";

export default defineConfig({
  base: "/schultiersuche/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [
        license({
          thirdParty: {
            output: path.resolve(__dirname, "dist", "licenses.txt"),
            includePrivate: false,
          },
        }),
      ],
    },
  },
});

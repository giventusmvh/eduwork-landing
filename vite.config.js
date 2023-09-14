import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        index2: resolve(__dirname, "index2.html"),
        kelas: resolve(__dirname, "kelas.html"),
        detail_kelas: resolve(__dirname, "detail-kelas.html"),
        list_mentor: resolve(__dirname, "list-mentor.html"),
        detail_mentor: resolve(__dirname, "detail-mentor.html"),
      },
    },
  },
});

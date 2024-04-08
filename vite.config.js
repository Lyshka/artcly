import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        cardNotRegister: resolve(__dirname, "index.html"),
        loanRequestInfo: resolve(__dirname, "404.html"),
        loanRequest: resolve(__dirname, "thanks.html"),
      },
    },
  },
});

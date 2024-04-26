import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        404: resolve(__dirname, "404.html"),
        about: resolve(__dirname, "about.html"),
        addReviews: resolve(__dirname, "add-reviews.html"),
        adventage: resolve(__dirname, "advantage.html"),
        blog: resolve(__dirname, "blog.html"),
        contact: resolve(__dirname, "contact.html"),
        index: resolve(__dirname, "index.html"),
        reviews: resolve(__dirname, "reviews.html"),
        service: resolve(__dirname, "service.html"),
        singleAdventage: resolve(__dirname, "single-adventage.html"),
        singleBlog: resolve(__dirname, "single-blog.html"),
        singleService: resolve(__dirname, "single-service.html"),
        thanks: resolve(__dirname, "thanks.html"),
      },
    },
  },
});

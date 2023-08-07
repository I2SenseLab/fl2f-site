import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ...
  site: "https://fl2f.netlify.com",
  integrations: [sitemap()],
});

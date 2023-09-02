import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // ...
  site: "https://fl2f.netlify.com",
  integrations: [
    sitemap(),
    sanity({
      projectId: "ztbaubpf",
      dataset: "production",
      useCdn: false,
    }),
    react(),
  ],
});

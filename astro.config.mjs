// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: '/cv-site-build/',
  site: 'https://vinyltheduster.github.io/cv-site-build/',
  vite: {
    plugins: [tailwindcss()],
  },
});
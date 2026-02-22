// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rtsdrums-eng.github.io',
  base: '/cookthis',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});

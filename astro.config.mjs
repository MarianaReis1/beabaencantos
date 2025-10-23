// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://marianareis1.github.io',
  base: 'https://www.beabaencantos.com.br/',
  vite: {
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    remotePatterns: [{ 
      protocol: 'https', 
      hostname: 'festival.leonie-pruniaux.fr'
    }]
  },
});
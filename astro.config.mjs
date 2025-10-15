import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tax-meyer.de',
  integrations: [ react()],
    vite: {
        plugins: [ tailwindcss()],
    },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
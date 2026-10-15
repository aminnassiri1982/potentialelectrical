import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://potentialelectrical.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

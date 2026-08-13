import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site,
  integrations: site ? [sitemap()] : [],
  vite: { ssr: { noExternal: ['lucide-astro'] } }
});

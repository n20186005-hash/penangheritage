import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://penangheritage.org';

export default defineConfig({
  output: 'static',
  site,
  integrations: site
    ? [sitemap({ filter: (page) => !page.endsWith('/404/'), i18n: { defaultLocale: 'ms', locales: { ms: 'ms-MY', en: 'en', zh: 'zh-Hans' } } })]
    : [],
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en', 'zh'],
    routing: { prefixDefaultLocale: false }
  },
  vite: { ssr: { noExternal: ['lucide-astro'] } }
});

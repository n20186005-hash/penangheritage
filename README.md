# George Town UNESCO — Jejak Warisan

Astro + Tailwind-compatible CSS architecture + TypeScript single-page tourism guide for George Town UNESCO Historic Site. The page uses Malaysian Malay copy, localStorage-only trip saves, Google Maps embed, FAQPage and TouristAttraction JSON-LD, and optional sitemap generation.

## Commands

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The site URL is `https://penangheritage.org` by default (set in `astro.config.mjs`); override with `PUBLIC_SITE_URL` for preview environments. It is the only site URL configuration point — canonical, `og:url`, JSON-LD and the sitemap integration all derive from it.

For Cloudflare Workers, deploy the Astro output with the Cloudflare adapter using the Cloudflare dashboard or Wrangler. Bind the custom domain `penangheritage.org` in the Cloudflare dashboard (Workers → your worker → Custom Domains). No database, auth, CMS, or server-side storage is used.

## Notes

The page includes a non-official disclaimer in the footer. Google Analytics is configured with measurement ID `G-HXM22WWPKP`. Photos are referenced from stable Unsplash image URLs in the page because the sandbox could not resolve the image CDN during packaging; replace them with downloaded, licensed local files under `public/images` before production if local-only media is required.

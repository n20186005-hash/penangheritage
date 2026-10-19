# George Town UNESCO — Jejak Warisan

Static Astro + Tailwind-compatible CSS architecture + TypeScript single-page tourism guide for George Town UNESCO Historic Site. The page uses Malaysian Malay copy, localStorage-only trip saves, Google Maps embed, FAQPage and TouristAttraction JSON-LD, and optional sitemap generation.

## Commands

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The site URL is `https://penangheritage.org` by default (set in `astro.config.mjs`); override with `PUBLIC_SITE_URL` for preview environments. It is the only site URL configuration point — canonical, `og:url`, JSON-LD and the sitemap integration all derive from it.

For Cloudflare Workers, deploy the static assets and their ASSETS Worker using the Cloudflare dashboard or Wrangler. Bind the custom domain `penangheritage.org` in the Cloudflare dashboard (Workers → your worker → Custom Domains). No Astro server adapter, session KV, database, auth, CMS, or server-side storage is used. Wrangler is pinned as a development dependency so the configured deployment command is available after install.

## SEO checklist

Canonical URL, `og:url`, hreflang and the sitemap all derive from `site` in `astro.config.mjs` (default `https://penangheritage.org`).

The generated Worker redirects HTTP and www production requests to the HTTPS apex host with status 301, preserving path and query. `run_worker_first` ensures the redirect also covers static assets. Confirm both domain bindings in the actual Cloudflare project before release. Its existing project name is retained in `wrangler.toml`.

Structured data includes localized attraction information and FAQ answers. Third-party Maps ratings and listing hours appear only as attributed, dated visitor information, not as this website’s own rating or whole-district opening hours. A noindex 404 page provides links to all three languages.

Images: `public/gallery/*.jpg` are the untouched originals; pages serve `public/gallery/webp/*-800.webp` (thumbnails) and `*-1600.webp` (hero, feature and lightbox) produced by `python scripts/optimize-images.py` (Pillow). Re-run it after adding or replacing photos. The hero image is preloaded and the Google Fonts request is preconnected and loaded with a `<link>` instead of a blocking CSS `@import`.

## Notes

The page includes a non-official disclaimer in the footer. Google Analytics is configured with measurement ID `G-HXM22WWPKP`. Images are served from the local gallery and WebP variants included in this repository.

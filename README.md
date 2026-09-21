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

## SEO checklist

Canonical URL, `og:url`, hreflang and the sitemap all derive from `site` in `astro.config.mjs` (default `https://penangheritage.org`).

Redirects are configured on Cloudflare, not in code — static assets are served directly by the Workers assets binding, so a Worker-level redirect would not cover them:

- SSL/TLS → Edge Certificates → enable **Always Use HTTPS** (301 `http://` → `https://`).
- Rules → Redirect Rules (or Bulk Redirects): `www.penangheritage.org/*` → `https://penangheritage.org/${1}` with status 301, so http/https and www/apex variants stop splitting signals.
- `public/_headers` delivers HSTS (`max-age=31536000; includeSubDomains; preload`) plus `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy`.
- `public/robots.txt` points to `https://penangheritage.org/sitemap-index.xml`.

Structured data is emitted inline by `src/components/Head.astro`: `TouristAttraction` (address, geo, `hasMap`, `includesAttraction`, `availableLanguage`, `publicAccess`, `aggregateRating`) and `FAQPage` built from the translated FAQ list.

Images: `public/gallery/*.jpg` are the untouched originals; pages serve `public/gallery/webp/*-800.webp` (thumbnails) and `*-1600.webp` (hero, feature and lightbox) produced by `python scripts/optimize-images.py` (Pillow). Re-run it after adding or replacing photos. The hero image is preloaded and the Google Fonts request is preconnected and loaded with a `<link>` instead of a blocking CSS `@import`.

## Notes

The page includes a non-official disclaimer in the footer. Google Analytics is configured with measurement ID `G-HXM22WWPKP`. Photos are referenced from stable Unsplash image URLs in the page because the sandbox could not resolve the image CDN during packaging; replace them with downloaded, licensed local files under `public/images` before production if local-only media is required.

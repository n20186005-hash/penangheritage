import { writeFileSync, mkdirSync, copyFileSync } from 'node:fs';

// Keep the Worker entry point outside the publicly served asset set.
mkdirSync('dist', { recursive: true });
copyFileSync('scripts/canonical-worker.mjs', 'dist/canonical-worker.js');
writeFileSync('dist/.assetsignore', 'canonical-worker.js\n');

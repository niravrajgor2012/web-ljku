import { mkdirSync, writeFileSync, cpSync } from 'fs';

mkdirSync('.vercel/output/static', { recursive: true });

writeFileSync('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    {
      src: '/_app/(.*)',
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      continue: true
    },
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/200.html' }
  ]
}));

cpSync('build', '.vercel/output/static', { recursive: true });
console.log('Vercel output prepared successfully');

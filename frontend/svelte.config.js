import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '200.html',
    }),
    alias: {
      $lib: './src/lib',
      $components: './src/lib/components',
      $services: './src/lib/services',
      $types: './src/lib/types',
      $utils: './src/lib/utils',
    },
  },
};

export default config;

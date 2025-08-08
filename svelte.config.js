import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from 'svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  }
};

export default config;

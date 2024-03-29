// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config;
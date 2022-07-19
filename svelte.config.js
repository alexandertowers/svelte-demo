// svelte.config.js
import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
};
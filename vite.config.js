import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		plugins: [sveltekit()],
		build: { minify: mode === 'production' },
		optimizeDeps: { include: ['@carbon/charts'] },
	};
});
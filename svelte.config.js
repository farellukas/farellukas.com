import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] })],

	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],

	kit: {
		adapter: adapter()
	}
};

export default config;

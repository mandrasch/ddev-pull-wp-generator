import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

// from https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
const dev = process.env.NODE_ENV === 'development';

// postcss autoprefixer, recommended for bootstrap sass handling (https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)
import autoprefixer from 'autoprefixer';

// prefix for ghpages, because this will be hosted in subdirectory
const pathsBase = process.env.PATHS_BASE === undefined ? '' : process.env.PATHS_BASE;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		sourceMap: dev,
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	kit: {
		adapter: adapter(),
		paths: {
			base: pathsBase
		},
		// add syntax highlighting via svelte-highlight (https://svhe.onrender.com/)
		vite: {
			optimizeDeps: {
				include: ["highlight.js/lib/core"],
			},
		}
	}
};

export default config;

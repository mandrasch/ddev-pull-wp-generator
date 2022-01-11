import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

// from https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
const dev = process.env.NODE_ENV === 'development';

// postcss autoprefixer, recommended for bootstrap sass handling (https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)
import autoprefixer from 'autoprefixer';

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

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

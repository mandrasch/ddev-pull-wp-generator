<script>
	import { base } from '$app/paths';
	import '../styles/main.scss';
	// import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>DDEV Pull WP Generator</title>
</svelte:head>

<main>
	<slot />
</main>

<footer class="text-center text-secondary container ">
	<hr />
	<p>
		Made with SvelteKit, check out at &nbsp;<a
			href="https://github.com/mandrasch/ddev-pull-wp-generator"
			target="_blank">GitHub</a
		>
		//
		<a href="https://matthias-andrasch.eu/blog/impressum-datenschutz/" target="_blank"
			>Imprint & Privacy Statement</a
		>
	</p>
	<p>
		No personal data or configuration data stored on server. This generator only uses your browser
		and client-side javascript. See <a
			href="https://docs.github.com/en/github/site-policy/github-privacy-statement#github-pages"
			>GitHub Privacy Statement</a
		> for general data collection on visits.
	</p>
	<p>~~~ ! Stop the climate emergency ! ~~~</p>
</footer>

<style>
	p {
		max-width: 40rem;
		margin: 20px auto;
	}
</style>

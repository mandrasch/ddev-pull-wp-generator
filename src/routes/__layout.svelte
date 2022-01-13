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

<footer class="text-center text-secondary">
	<hr />
	Made with SvelteKit, check out at &nbsp;<a
		href="https://github.com/mandrasch/ddev-pull-wp-generator"
		target="_blank">GitHub</a
	>
	//
	<a href="https://matthias-andrasch.eu/blog/impressum-datenschutz/" target="_blank"
		>Imprint & Terms</a
	> // Stop the climate emergency!
</footer>

<style>
</style>

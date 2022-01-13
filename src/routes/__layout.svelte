<script>
	import { base } from '$app/paths';
	import '../styles/main.scss';
	// import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>DDEV WP Boilerplate Generator</title>
</svelte:head>

<main>
	<slot />
</main>

<footer class="text-center text-secondary">
	Made with SvelteKit // <a
		href="https://github.com/mandrasch/ddev-pull-wp-generator"
		target="_blank">GitHub</a
	> // Imprint: // Stop the climate emergency!
</footer>

<style>
</style>

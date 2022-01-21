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
		Made with SvelteKit, check out at <a
			href="https://github.com/mandrasch/ddev-pull-wp-generator"
			target="_blank">GitHub</a
		>
	</p>
	<p>
		No personal data or configuration data is stored on server. This generator only uses your
		browser and client-side javascript. //
		<a href="https://matthias-andrasch.eu/blog/impressum-datenschutz/" target="_blank"
			>Imprint & Privacy Statement</a
		><br /><br />
		<i
			>(If you use the development-only preview on GitHub Pages, see
			<a
				href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
				target="_blank">GitHub Privacy Statement</a
			>. Official site is hosted here:
			<a href="https://ddev-pull-wp.mandrasch.eu">ddev-pull-wp.mandrasch.eu</a>.)</i
		>
	</p>
	<p>~~~ ! Stop the climate emergency ! ~~~</p>
</footer>

<style>
	p {
		max-width: 40rem;
		margin: 20px auto;
	}
</style>

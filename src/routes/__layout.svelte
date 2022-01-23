<script>
	import { base } from '$app/paths';
	import '../styles/main.scss';
	// import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>DDEV pull WordPress generator</title>
	<meta
		name="description"
		content="This interactive tutorial enables you to pull an existing WordPress site into a local DDEV project. Pulling your live site to a local DDEV project allows stress-free local testing and development."
	/>
</svelte:head>
<!--
<nav class="navbar navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">DDEV pull WordPress</a>

		<ul class="navbar-nav mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link" href="https://github.com/mandrasch/ddev-pull-wp-scripts" target="_blank"
					>GitHub: Pull scripts</a
				>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					href="https://github.com/mandrasch/ddev-pull-wp-generator"
					target="_blank">GitHub: Generator</a
				>
			</li>
		</ul>
	</div>
</nav>
 -->

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

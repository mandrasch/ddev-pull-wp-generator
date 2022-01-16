<script>
	import { childThemeFolderName, pullType } from '../stores/stores';

	import CodeGenerator from '../components/CodeGenerator.svelte';
	import FormWizard from '../components/FormWizard.svelte';
</script>

<div class="container px-5 my-5">
	<div class="alert alert-warning" role="alert">
		This generator is work in progress, please use it with caution. There are still some bugs to
		fix. Stay tuned! :-)
	</div>

	<h1><i>ddev pull wp</i>-Generator</h1>
	<p>
		This generator helps you create a config to pull an existing WordPress site into a local DDEV
		project. See <a href="https://github.com/mandrasch/ddev-pull-wp-scripts" target="_blank"
			>ddev-pull-wp-scripts</a
		> for technical information.
	</p>

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>1. Select your configuration</h2>

			<FormWizard />
		</div>

		<div class="col-12 px-4 mb-3">
			<p style="font-style:italic;">
				<small>
					If you are unsure about the server settings, just leave the defaults. They are good to go.
					Optional: For more serious testing you could choose the values accordingly to your live
					website. You can use the WordPress feature <a
						href="https://yoast.com/wordpress-site-health/"
						target="_blank">"Site Health Screen"</a
					>
					to figure out your live sites environment, I'm also testing a small WordPress plugin
					<a href="https://github.com/mandrasch/ddev-pull-wp-helper-plugin" target="_blank"
						>ddev-pull-wp-helper</a
					> which helps getting the information with one click.</small
				>
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>2. Setup project folder</h2>
			<p>Great, that's all we need for configuration!</p>
			<p>
				Create a new local folder and setup a new git repository via "git init" - or create a new
				git repository on GitHub and clone it to your local computer. In this example we called our
				repository "my-wp-site". Copy these files into your local project, they are generated based
				on your selected configuration:
			</p>
		</div>
		<div class="col-12">
			<CodeGenerator showOnlyConfigYaml={false} />
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">3. Optional: Import your child theme</h2>
			<p>
				Now would be a good time to import your child theme from your live site to your local
				project folder. If you want to download it from WP dashboard, you can use the
				<a href="https://wordpress.org/plugins/download-plugins-dashboard/" target="_blank"
					>Download Plugins and Themes from Dashboard plugin</a
				>. This step is only needed once.
			</p>
			{#if $pullType == 'ssh'}
				<p>TODO: provide ssh command to just pull it in :-)</p>
			{/if}
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">4. Start DDEV & pull all the files 🙌</h2>

			{#if $pullType == 'ssh'}
				<ol class="list-group list-group-numbered">
					<li class="list-group-item">Run "ddev start"</li>
					<li class="list-group-item">
						Run "ddev pull ssh" to pull your live sites content (file / database)
					</li>
					<li class="list-group-item">Run "ddev launch" to open your local site in the browser</li>
				</ol>
			{/if}

			{#if $pullType == 'backup'}
				<ol class="list-group list-group-numbered">
					<li class="list-group-item">
						Download a backup file created with <a
							href="https://de.wordpress.org/plugins/backwpup/"
							target="_blank">BackWpUp-plugin</a
						>
					</li>
					<li class="list-group-item">
						Rename the backup file to <i>backup.zip</i> and copy into your project folder
					</li>
					<li class="list-group-item">Run "ddev start"</li>
					<li class="list-group-item">Run "ddev pull backup" to import the backup file</li>
					<li class="list-group-item">Run "ddev launch" to open your local site in the browser</li>
				</ol>
			{/if}
		</div>
	</div>

	<div class="row mt-2">
		<div class="col-12">
			<h2 class="mb-3">5. Develop, commit, have fun!</h2>
			<p>
				You can now pull the latest content anytime you want. Your database and files will be
				overriden (expect for the child theme which you can manage via git). <br /> <br />TODO:
				provide documentation for integration of
				<a href="https://wppusher.com/" target="_blank">WPPusher</a> or similiar tools for deploying
				the git-managed child theme from the repository in an easy way.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 960px;
	}
	h2 {
		font-size: 1.3rem;
		margin-top: 1rem;
	}
</style>

<script>
	import { childThemeFolderName } from '../stores/stores';

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
		This generators enables you to pull a live WordPress site into your local DDEV project. It
		requires connecting to your webspace via SSH (password-less via SSH keys) and it needs WP-CLI or
		mysqldump available on your webspace.</p>
		<p>
		<small>(If your webspace doesn't meet these requirements, check out <a
				href="https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup"
				target="_blank">ddev pull backup</a
			>).</small>
	</p>

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>1. Create a new project folder</h2>
			<p>Create a new local folder, for example "my-wp-site" and create a new git repository ("git init") - or setup a fresh git repository on GitHub and clone it to your local computer.</p>
		</div>
		<div class="col-12 px-4 mb-3">
			<h2>2. Select your configuration</h2>
			<p>If you are unsure about these values, just leave the defaults, they should be good to go.</p>
			<p><small>For serious testing you should choose the values accordingly to your live website. You can use the WordPress feature <a href="https://yoast.com/wordpress-site-health/" target="_blank">"Site Health Screen"</a> to figure out your live sites environment, I'm also testing a small WordPress plugin <a href="https://github.com/mandrasch/ddev-pull-wp-helper-plugin" target="_blank">ddev-pull-wp-helper</a>.</small></p>
		</div>
		<div class="col-lg-6 px-4">
			<FormWizard />
		</div>
		<div class="col-lg-6 px-4">
			<div class="mb-2">Live preview of .ddev/config.yaml:</div>
			<CodeGenerator showOnlyConfigYaml={true} />
		</div>
	</div>
	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>3. Copy generated files to your project folder</h2>
			<p>Great, that's all we need for configuration. Copy these files into your local project:
		</div>
		<div class="col-12 px-4">
			<CodeGenerator showOnlyConfigYaml={false} />
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">4. Optional: Import your child theme</h2>
			<p>Now would be a good time to import your child theme from your live site to your local project folder. If you want to download it from WP dashboard, you can use the
				<a href="https://wordpress.org/plugins/download-plugins-dashboard/" target="_blank"
					>Download Plugins and Themes from Dashboard plugin</a
				>. This step is only needed once.</p>
			<p>TODO: provide ssh command to just pull it in :-)</p>

		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">5. Start DDEV & pull all the files 🙌</h2>
			<ol class="list-group list-group-numbered">
				<li class="list-group-item">Run "ddev start"</li>
				<li class="list-group-item">
					Run "ddev pull ssh" to pull your live sites content (file / database)</li>
				<li class="list-group-item">Run "ddev launch" to open your local site in the browser</li>
			</ol>
		</div>
	</div>

	<div class="row mt-2">
		<div class="col-12">
			<h2 class="mb-3">6. Develop, commit, have fun!</h2>
			<p>TODO: provide documentation for integration of <a href="https://wppusher.com/" target="_blank">WPPusher</a> or similiar tools for deploying the git-managed child theme.</p>	
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

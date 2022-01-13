<script>
	import { childThemeFolderName } from '../stores/stores';

	import CodeGenerator from '../components/CodeGenerator.svelte';
	import FormWizard from '../components/FormWizard.svelte';
</script>

<div class="container px-5 my-5">
	<div class="alert alert-warning" role="alert">
		This generator is work in progress, please use it with caution.
	</div>

	<h1><i>ddev pull wp</i>-Generator</h1>
	<p>
		This generators enables you to pull a live WordPress site into your local DDEV project. It
		requires connecting to your webspace via SSH and it needs WP-CLI or mysqldump available on your
		webspace.(If your webspace doesn't meet these requirements, check out <a
			href="https://github.com/mandrasch/ddev-pull-backwpupfile"
			target="_blank">ddev pull backwpupfile</a
		>).
	</p>

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>1. Create your configuration</h2>
		</div>
		<div class="col-lg-6 px-4">
			<div class="mb-2">.ddev/config.yaml</div>
			<CodeGenerator showOnlyConfigYaml={true} />
		</div>
		<div class="col-lg-6 px-4">
			<FormWizard />
		</div>
	</div>
	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>2. Create your project folder</h2>
			<p>Create a new project folder and insert these files:</p>
		</div>
		<div class="col-12 px-4">
			<CodeGenerator showOnlyConfigYaml={false} />
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">3. Start DDEV project & pull all the files</h2>
			<p>Screencast: coming soon</p>

			<ol class="list-group list-group-numbered">
				<!-- <li class="list-group-item">
					Create a new project folder (or create empty GitHub project)
				</li>
				<li class="list-group-item">Copy the generated files contents to the new project folder</li> -->

				<li class="list-group-item">
					Download the current state of your child theme into <i
						>wp-content/themes/{$childThemeFolderName}</i
					>. If you want to download it from WP dashboard, you can use the
					<a href="https://wordpress.org/plugins/download-plugins-dashboard/" target="_blank"
						>Download Plugins and Themes from Dashboard plugin</a
					>.<br /><small
						>(If you already manage your child theme via git or you don't have a child theme
						currently, you can skip this step.)</small
					>
				</li>
				<li class="list-group-item">Run "ddev start"</li>
				<li class="list-group-item">Run "ddev auth ssh"</li>
				<li class="list-group-item">
					Run "ddev pull wp-production" to pull your live site to the local project
				</li>
				<li class="list-group-item">Run "ddev launch" to open your local site in the browser</li>
				<li class="list-group-item">
					Optional: Git commit & setup child theme via WPPusher (or other methods)
				</li>
			</ol>
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

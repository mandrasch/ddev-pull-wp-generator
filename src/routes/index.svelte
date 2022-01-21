<script>
	import { childThemeFolderName, pullType, sshHost, sshUser, sshWpPath } from '../stores/stores';

	import CodeGenerator from '../components/CodeGenerator.svelte';
	import FormWizard from '../components/FormWizard.svelte';

	import Highlight from 'svelte-highlight';
	import shell from 'svelte-highlight/src/languages/shell';
	import atomOneDark from 'svelte-highlight/src/styles/atom-one-dark';
	$: sshConnectionTestCmd = `ssh ${$sshUser}@${$sshHost}`;
	$: sshConnectionTestWithPathCmd = `ssh -t ${$sshUser}@${$sshHost} "cd ${$sshWpPath}; exec \$SHELL --login"`;
	// this command will use ddev env vars, no need to replace them here
	const ddevRsyncChildThemeCmd =
		"ddev exec 'rsync -azh --stats $PRODUCTION_SSH_USER@$PRODUCTION_SSH_HOST:$PRODUCTION_SSH_WP_PATH/wp-content/themes/$CHILD_THEME_FOLDER_NAME/ /var/www/html/${DDEV_DOCROOT}/wp-content/themes/$CHILD_THEME_FOLDER_NAME/'";
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
	</div>
	<div class="row" />
	{#if $pullType == 'ssh'}
		<div class="row">
			<div class="col-12 px-4 mb-3">
				<h2>Verify SSH connection in terminal</h2>

				{#if $sshUser == '' || $sshHost == '' || $sshWpPath == ''}
					<p>
						<small
							><span class="badge bg-danger">Error</span> Please add all three configuration values for
							SSH in the form above!</small
						>
					</p>
				{/if}
				<p>
					Verify that SSH connection works in general:
					<Highlight language={shell} code={sshConnectionTestCmd} />
					<span class="form-text">Use "exit" to end SSH connection for next test.</span>
				</p>
				<p>
					Verify that the "Path to WordPress" setting is correct:
					<Highlight language={shell} code={sshConnectionTestWithPathCmd} />
					<span class="form-text">Use "exit" to end SSH connection.</span>
				</p>
				<p>Great, that's all we need for configuration!</p>
			</div>
		</div>
	{/if}

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>2. Setup project folder</h2>

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
			<h2 class="mb-3">4. Start DDEV</h2>

			<p>
				Your configuration is all setup, start the project for the first time:
				<Highlight language={shell} code="ddev start" />
			</p>
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">5. Optional: Import your child theme</h2>
			<p><i>Skip this step if you don't want to use a child theme.</i></p>
			<p>
				Now would be a good time to import your child theme from your live site to your local
				project folder. If you want to download it from WP dashboard, you can use the
				<a href="https://wordpress.org/plugins/download-plugins-dashboard/" target="_blank"
					>Download Plugins and Themes from Dashboard plugin</a
				>. This step is only needed once.
			</p>
			{#if $pullType == 'ssh'}
				<p>
					You can as well use a command to download your child theme, run this your project folder:
					<Highlight language={shell} code={ddevRsyncChildThemeCmd} />
				</p>
			{/if}
			<p class="form-text">
				Why isn't the child theme pulled as well in the next step with "ddev pull"? We want to
				manage our child theme via git, therefore it can't be pulled from the live site everytime,
				because we would overwrite local changes.
			</p>
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">6. Start DDEV & pull all the files 🙌</h2>

			{#if $pullType == 'ssh'}
				<p>
					Alright, let's pull the live site (files and database)!
					<Highlight language={shell} code="ddev pull ssh" />
				</p>

				<p>
					Open the locally cloned site in your browser:
					<Highlight language={shell} code="ddev launch" />
				</p>
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
			<h2 class="mb-3">7. Develop, commit, have fun!</h2>
			{#if $pullType == 'ssh'}
				<p>
					You can now pull the latest content anytime you want. Your database and files will be
					overriden (expect for the child theme which you can manage via git):
					<Highlight language={shell} code="ddev pull ssh" />
				</p>
			{:else}
				You can now work with your site locally.
			{/if}
			<p>
				Pro tip: When you add or update your settings in the <i>config.yaml</i>-file afterwards, a
				<i>ddev restart</i> is necessary.
				<Highlight language={shell} code="ddev restart" />
			</p>
			<p>
				If you run into issues, please see <a
					href="https://github.com/mandrasch/ddev-pull-wp-scripts#troubleshooting"
					target="_blank">Troubleshooting</a
				>
				or
				<a href="https://github.com/mandrasch/ddev-pull-wp-scripts/issues" target="_blank"
					>create an issue</a
				>.
			</p>
		</div>
	</div>

	<div class="row mt-2">
		<div class="col-12">
			<h2 class="mb-3">8. Update your child theme via git</h2>
			TODO: provide documentation for integration of
			<a
				href="https://docs.wppusher.com/article/17-setting-up-a-plugin-or-theme-on-github"
				target="_blank">WPPusher</a
			> or similiar tools for deploying the git-managed child theme from the repository in an easy way.
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

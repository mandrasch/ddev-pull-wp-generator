<script context="module">
	// Load current version of Github code (only server-side)
	// https://kit.svelte.dev/docs#loading, only works in routes
	// TODO: convert to endpoint? See https://github.com/sveltejs/kit/discussions/3270 as well (endpoint / hydration?))
	// current version from script is pulled from github while static site generation [server-side]
	// TODO: github raw seems to be updated not immediately, is there a workaround?
	export async function load({ params, fetch, session, stuff }) {
		console.log('Loading providers.yaml from raw github');
		const response = await fetch(
			//'https://raw.githubusercontent.com/mandrasch/ddev-pull-wp-scripts/dev/.ddev/providers/ssh.yaml',
			'https://raw.githubusercontent.com/mandrasch/ddev-pull-wp-scripts/main/.ddev/providers/ssh.yaml',
			{
				headers: {
					'Cache-Control': 'no-cache'
				}
			}
		);
		console.log('Status returned:', response.status);

		let sourceCode;
		if (response.ok) {
			// strip out upper part (-- configuration -- part is prepared in generator)
			let customStringForSplitting = '# eo configuration';
			sourceCode = await response.text();
			sourceCode = sourceCode.substring(
				sourceCode.indexOf(customStringForSplitting) + customStringForSplitting.length
			);
		} else {
			sourceCode = false;
		}

		return {
			status: response.status,
			props: {
				providersYamlFromGithubFetchResult: sourceCode // consumed in CodeGenerator.svelte
			}
		};
	}
</script>

<script>
	import {
		childThemeFolderName,
		providersYamlFromGithub,
		pullType,
		sshHost,
		sshUser,
		sshWpPath
	} from '../stores/stores';

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

	// receive providersYamlFromGithub fetch & save to store
	export let providersYamlFromGithubFetchResult;
	providersYamlFromGithub.set(providersYamlFromGithubFetchResult);
</script>

<div class="container px-5 my-5">
	<h1 class="mb-4"><i>ddev pull WordPress</i>-Generator</h1>
	<p style="font-weight:bold;">
		This interactive tutorial enables you to pull an existing WordPress site into a local <a
			href="https://ddev.readthedocs.io/en/stable/"
			target="_blank">DDEV</a
		>
		project.
	</p>
	<p>
		Pulling your live site to a local DDEV project allows stress-free local testing and development.
		For nerdy details see
		<a
			href="https://github.com/mandrasch/ddev-pull-wp-scripts"
			style="font-style:italic"
			target="_blank">ddev-pull-wp-scripts</a
		>.
	</p>

	<div class="alert alert-warning" role="alert">
		⚠️ This project is work in progress, please use it with caution. Still some bugs to fix. :)
	</div>

	<p />

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>1. Select your configuration</h2>
			<p>Demo videos of the different pull types can be found here:</p>
			<ul>
				<li>
					▶️ <a href="https://www.youtube.com/watch?v=lEGL65H-hts" target="_blank"
						>SSH connection demo video</a
					>
				</li>
				<li>▶️ Backup file demo - coming soon</li>
			</ul>

			<FormWizard />
		</div>
	</div>

	<div class="row">
		<div class="col-12 px-4 mb-3">
			<h2>2. Setup project folder and copy these files</h2>

			<p>
				Create a new empty directory for your project. The followings files were generated based on
				your selected configuration.
			</p>
			<p>Copy and paste these three files into your newly created project folder:</p>
			<CodeGenerator showOnlyConfigYaml={false} />
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<h2 class="mb-3">3. Start DDEV</h2>

			<p>
				Your configuration is all setup, run this command in your project folder:
				<Highlight language={shell} code="ddev start" />
			</p>
			{#if $pullType == 'ssh'}
				<p>
					Add your SSH keys to DDEV to connect with the live site:
					<Highlight language={shell} code="ddev auth ssh" />
				</p>
			{/if}
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			{#if $pullType == 'ssh'}
				<h2 class="mb-3">4. Pull your live site 🙌</h2>
				<p>
					Alright, let's pull the live site content (files and database, except the child theme
					folder):
					<Highlight language={shell} code="ddev pull ssh" />
				</p>

				<p>
					Open the locally cloned site in your browser: <i>ddev launch</i>
				</p>
			{/if}

			{#if $pullType == 'backup'}
				<h2 class="mb-3">4. Import your backup 🙌</h2>
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

			<p>
				Please always check in <i>wp-config.php</i> that the database connection replacement was successfull
				and that you are connected to the local DDEV project database (and not the remote database of
				your live site).
			</p>
		</div>
	</div>

	<div class="row" style="display:none;">
		<div class="col-12">
			<h2 class="mb-3">5. Optional: Import your existing child theme</h2>
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
				Don't forget to run "ddev restart" if you changed values in <i>.ddev/config.yaml</i>.
				Otherwise the above command will use old values.
			</p>
			<p class="form-text">
				Why isn't the child theme pulled as well in the next step with "ddev pull"? We want to
				manage our child theme via git, therefore it can't be pulled from the live site everytime,
				because we would overwrite local changes.
			</p>
		</div>
	</div>

	<div class="row mt-2">
		<div class="col-12">
			<h2 class="mb-3">5. Develop, commit, have fun!</h2>

			<p>
				You can now work with your site locally. If you run into issues, please see <a
					href="https://github.com/mandrasch/ddev-pull-wp-scripts#troubleshooting"
					target="_blank">Troubleshooting</a
				>
				or
				<a href="https://github.com/mandrasch/ddev-pull-wp-scripts/issues" target="_blank"
					>create an issue</a
				>.
			</p>

			{#if $pullType == 'ssh'}
				<p>
					Your live sites content changed, new images were added for example? You can pull again:
				</p>

				<Highlight language={shell} code="ddev pull ssh" />
				<p class="form-text">
					<span class="badge rounded-pill bg-warning text-dark">Info</span> Your local database and files
					will be overwritten with the latest database and files from your live site (expect for the
					child theme folder defined in .ddev/providers/ssh.yaml).
				</p>
			{/if}
			<p />
		</div>
	</div>
	{#if $pullType == 'ssh'}
		<div class="row mt-2">
			<div class="col-12">
				<h2 class="mb-3">
					6. <span class="badge bg-danger">Experimental</span> Push your child theme via SSH
				</h2>

				<p>
					You can push your local child theme folder via SSH (rsync) to your live site. While this
					is a quick and easy way of deploying for single developers, this can cause trouble in team
					projects (See alternatives below). Please check your path configuration beforehand and
					create a backup.
				</p>

				<Highlight language={shell} code="ddev push ssh --skip-db" />

				<small style="font-style:italic;">
					You can as well use 'ddev push ssh' and ignore the warning about the database push - the
					ssh.yaml-script skips the database_push command. Rsync "--delete" is also disabled
					currently.
				</small>

				<p class="mt-3">
					<b>Alternatives for deployment:</b>
				</p>
				<ul>
					<li>
						Deploy your child theme via <a href="//wppusher.com" target="_blank">WPPusher plugin</a>
						on your live site. WPPusher offers the option of pulling the child theme from a repository
						subfolder. The best thing: Git is not required on your webspace, because WPPusher uses the
						HTTPS-API to get the repository contents. See WPPusher documentation for more information:
						<a
							href="https://docs.wppusher.com/article/17-setting-up-a-plugin-or-theme-on-github"
							target="_blank">WPPusher - Setting up a theme</a
						>
						and screencast example 🎥
						<a href="https://youtu.be/lEGL65H-hts?t=145" target="_blank"
							>Pull a WordPress site into a local DDEV project (2022 edition - ddev pull ssh)
						</a>
					</li>
					<li style="color:grey;">
						Use <a href="https://github.com/afragen/git-updater" target="_blank">git-updater</a> (doesn't
						support subdirectory deployments, needs a workaround)
					</li>
					<li>Use a Github Action to deploy your child theme (via sftp/ssh)</li>
				</ul>

				<p />

				<!-- <p>
				<img
					src="images/README_ddev_pull_ssh.png"
					class="img-fluid"
					alt="Technical concept between live site, ddev pull, local ddev site and wppusher which connects live site and GitHub"
					style="border: 1px solid #999"
				/>
			</p> -->
			</div>
		</div>
	{/if}

	{#if $pullType == 'ssh'}
		<div class="row">
			<div class="col-12 mb-3">
				<h2>Troubleshooting: Verify SSH connection in terminal</h2>

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
			</div>
		</div>
	{/if}
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

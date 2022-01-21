<script>
	import {
		pullType,
		projectName,
		childThemeFolderName,
		webServerType,
		selectedPhpVersion,
		selectedDbVersionString,
		selectedDbVersionNumber,
		selectedDbVersionType,
		sshHost,
		sshUser,
		sshWpPath
	} from '../stores/stores.js';

	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/src/languages/yaml';
	import atomOneDark from 'svelte-highlight/src/styles/atom-one-dark';

	import { FileCode } from 'svelte-bootstrap-icons';

	export let showOnlyConfigYaml; // prop for this component

	const code = 'const add = (a: number, b: number) => a + b;';

	$: configYaml = `name: ${$projectName}
type: wordpress
docroot: ""
nfs_mount_enabled: false
mutagen_enabled: false

# WebServer settings
php_version: "${$selectedPhpVersion}"
${$selectedDbVersionType}: "${$selectedDbVersionNumber}"
webserver_type: ${$webServerType}

# Variables for the pull (provider) script
# - if you change these, run 'ddev restart' !
web_environment:
- CHILD_THEME_FOLDER_NAME=${$childThemeFolderName}`;

	// only added if pull type == ssh
	$: configYamlSsh =
		$pullType == 'ssh'
			? `
- PRODUCTION_SSH_USER=${$sshUser}
- PRODUCTION_SSH_HOST=${$sshHost}
- PRODUCTION_SSH_WP_PATH=${$sshWpPath}`
			: '';

	$: gitIgnoreContent = `
# Ignore all ...
/*

# ... but track specific files / folders: 

!.gitignore
!/README.md
!/LICENSE

# DDEV config
!/.ddev
/.ddev/*
!/.ddev/config.yaml
!/.ddev/providers
/.ddev/providers/*
!/.ddev/providers/ssh.yaml

# Child theme:
!/wp-content
/wp-content/*
!/wp-content/themes
/wp-content/themes/*
!/wp-content/themes/${$childThemeFolderName}
`;

	const providersYaml = `\${sshWpDir} `;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{#if showOnlyConfigYaml}
	<Highlight language={yaml} code={configYaml + configYamlSsh} />
{:else}
	<div class="card card-small">
		<div class="card-body">
			<h5 class="card-title">.gitignore</h5>
			<h6 class="card-subtitle mb-2 text-muted">
				Ignore pattern for tracking only the child theme
			</h6>
			<p class="card-text">
				<Highlight code={gitIgnoreContent} />
				<details>
					<summary>Why is this needed?</summary>
					<p>
						This is needed to track the child theme via git. On synchronization (<i>ddev pull ssh</i
						>) the whole website is downloaded to the local project folder - but we don't want to
						override the child theme, because maybe we changed some styles already and just want to
						test them with the newest site content. <!-- The sync uses rsync with the option
          <i>--include-from='.gitignore' --exclude='*'</i>, therefore it syncs everything except
          the child theme folder.)-->
						The sync uses "--exclude=wp-content/themes/{$childThemeFolderName}" to avoid overriding
						local changes.
					</p>
				</details>
			</p>
			<!-- <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> -->
		</div>
	</div>

	<div class="card card-small">
		<div class="card-body">
			<h5 class="card-title">.ddev/config.yaml</h5>
			<h6 class="card-subtitle mb-2 text-muted">DDEV project configuration</h6>
			<p class="card-text">
				<Highlight language={yaml} code={configYaml + configYamlSsh} />

				<details>
					<summary>Why is this file needed?</summary>
					<p>
						This is the DDEV configuration of your project folder. The <i>web_environment</i>-values
						are our custom variables. These will then be used in the provider pull script, see
						below. The awesome thing is that this config can be shared via git: This means it can be
						used in team projects as well and everyone uses the same webserver configuration. Check
						out the DDEV documentation for more information:
						<a
							href="https://ddev.readthedocs.io/en/stable/users/extend/config_yaml/"
							target="_blank">config.yaml-docs</a
						>.
					</p>
				</details>
			</p>
			<!-- <a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a> -->
		</div>
	</div>
	{#if $pullType == 'ssh'}
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">.ddev/providers/ssh.yaml</h5>
				<h6 class="card-subtitle mb-2 text-muted">
					The actual pull script, runs via 'ddev pull ssh'
				</h6>
				<p class="card-text">
					<small
						>Requirement: <a
							href="https://github.com/drud/ddev/releases/tag/v1.18.2"
							target="_blank">DDEV >= 1.18.2</a
						></small
					>
					<br />
					<br />
					This file is work in progress. Please copy the latest version from Github:
				</p>
				<ul>
					<li>
						<b
							><a
								href="https://github.com/mandrasch/ddev-pull-wp-scripts/blob/main/.ddev/providers/ssh.yaml"
								target="_blank">.ddev/providers/ssh.yaml</a
							></b
						>
					</li>
				</ul>
				<p>
					(It will be added later here for copy & paste).
					<!-- 
				<Highlight language={yaml} code={providersYaml} />-->

					<details>
						<summary>Why is this file needed?</summary>
						<p>
							This is our pull script which takes care of pulling the live web site to your local
							DDEV project. See DDEV docs for more information:<a
								href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/"
								target="_blank">Hosting Provider Integration</a
							>
						</p>
					</details>
				</p>
				<!-- <a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a> -->
			</div>
		</div>
	{/if}

	{#if $pullType == 'backup'}
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">.ddev/providers/backup.yaml</h5>
				<h6 class="card-subtitle mb-2 text-muted">
					The actual pull script, runs via 'ddev pull backup'
				</h6>
				<p class="card-text">
					<small
						>Requirement: <a
							href="https://github.com/drud/ddev/releases/tag/v1.18.2"
							target="_blank">DDEV >= 1.18.2</a
						></small
					>
					<br />
					<br />
					This file is work in progress. Please copy the latest version from Github:
				</p>
				<ul>
					<li>
						<b
							><a
								href="https://github.com/mandrasch/ddev-pull-wp-scripts/blob/main/.ddev/providers/backup.yaml"
								target="_blank">.ddev/providers/backup.yaml</a
							></b
						>
					</li>
				</ul>
				<p>
					(It will be added later here for copy & paste).
					<!-- 
				<Highlight language={yaml} code={providersYaml} />-->

					<details>
						<summary>Why is this file needed?</summary>
						<p>
							This is our pull script which takes care of importing the backup.zip into your local
							DDEV project. See DDEV docs for more information:<a
								href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/"
								target="_blank">Hosting Provider Integration</a
							>
						</p>
					</details>
				</p>
				<!-- <a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a> -->
			</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	h3 {
		font-size: 1.15rem;
	}
	details {
		margin: 10px auto;
		p {
			margin-top: 5px;
			padding: 5px;
			font-size: 0.85rem;
			// TODO: how can we use bootstrap variables in here?
			// color: $secondary;
			color: #6c757d;
		}
	}
	.card {
		margin: 10px auto;
		max-width: 50rem;
		&.card-small {
			/*width: 35rem;*/
		}
	}
</style>

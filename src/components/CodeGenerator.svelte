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
		sshWpPath,
		providersSshYamlFromGithub,
		providersBackupYamlFromGithub
	} from '../stores/stores.js';

	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/src/languages/yaml';
	import atomOneDark from 'svelte-highlight/src/styles/atom-one-dark';
	import { FileCode, Git } from 'svelte-bootstrap-icons';

	export let showOnlyConfigYaml; // prop for this component

	const code = 'const add = (a: number, b: number) => a + b;';

	$: providersSshYamlScriptPart = $providersSshYamlFromGithub; // ssh
	$: providersBackupYamlScriptPart = $providersBackupYamlFromGithub; // backup

	$: configYaml = `name: ${$projectName}
type: wordpress
docroot: ""
nfs_mount_enabled: false
mutagen_enabled: false

# WebServer settings
php_version: "${$selectedPhpVersion}"
${$selectedDbVersionType}: "${$selectedDbVersionNumber}"
webserver_type: ${$webServerType}`;

	// old version, where config for provider script was stored in config.yaml
	/* # Variables for the pull (provider) script
# - if you change these, run 'ddev restart' !
web_environment:
- CHILD_THEME_FOLDER_NAME=${$childThemeFolderName}`;*/

	// only added if pull type == ssh
	/*$: configYamlSsh =
		$pullType == 'ssh'
			? `
- PRODUCTION_SSH_USER=${$sshUser}
- PRODUCTION_SSH_HOST=${$sshHost}
- PRODUCTION_SSH_WP_PATH=${$sshWpPath}
- REMOTE_DB_CHARSET=utf8`
			: '';*/

	$: gitIgnoreContent = `
# Ignore all ...
/*

# ... but track specific files / folders: 

# General files
!.gitignore
!/README.md
!/LICENSE

# DDEV config and provider script
!/.ddev
/.ddev/*
!/.ddev/config.yaml
!/.ddev/providers
/.ddev/providers/*
!/.ddev/providers/ssh.yaml
!/.ddev/providers/backup.yaml

# Child theme:
!/wp-content
/wp-content/*
!/wp-content/themes
/wp-content/themes/*
!/wp-content/themes/${$childThemeFolderName}
`;
	// TODO: move to separate file, because it's huuuge ;-)
	$: providersSshYamlConfigurationPart = `# Pull a live site WordPress site into DDEV

# Commands:
#   'ddev pull ssh' - pulls a live wordpress site via SSH/mysqldump and rsync into DDEV.
#   'ddev push ssh' - pushes the child theme folder to the remote server
# Project repository: https://github.com/mandrasch/ddev-pull-wp-scripts

# Requires DDEV version >= 1.18.2 !
# https://github.com/drud/ddev/releases/tag/v1.18.2
# https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/

# ------------------------------   configuration  ---------------------------------------------
environment_variables:
  sshUser: ${$sshUser}
  sshHost: ${$sshHost}
  sshWpPath: ${$sshWpPath}
  # path to wordpress on ssh server without(!) trailing slash, 
  # e.g.: /var/www/html/my-website.eu
  
  childThemeFolderName: ${$childThemeFolderName}
  # just the folder name in wp-content/themes/, no slashes
  # if you don't use a child theme currently, just leave 'twentytwentyone-child'

# -----------------------------  eo configuration  -------------------------------------------`;

	$: providersBackupYamlConfigurationPart = `# ddev pull backup
# Imports a backup.zip from docroot into the DDEV project

# - This script extracts and imports a .zip-backup-file created with
#   plugin BackWPup https://wordpress.org/plugins/backwpup/
# - The script will automatically replace (migrate) the URLs in database
#   in the last step (See: files_import_command)
# - The child theme folder will not be overwritten when files are imported

# - Requires DDEV version >= 1.18.2 !
#   (https://github.com/drud/ddev/releases/tag/v1.18.2)

# --------- configuration  ------------

environment_variables:
  backupfile: backup.zip # needs to be in docroot (your project folder)
  childThemeFolderName: "${$childThemeFolderName}"

# -----------------------------  eo configuration  -------------------------------------------`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{#if showOnlyConfigYaml}
	<Highlight language={yaml} code={configYaml} />
{:else}
	<div class="card card-small">
		<div class="card-body">
			<h5 class="card-title">2.1 DDEV project configuration</h5>
			<h6 class="card-subtitle mb-2 text-muted">.ddev/config.yaml</h6>
			<p class="card-text">
				<Highlight language={yaml} code={configYaml} />

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
				<h5 class="card-title">2.2 DDEV provider script</h5>
				<h6 class="card-subtitle mb-2 text-muted">.ddev/providers/ssh.yaml</h6>

				<p>
					<Highlight
						language={yaml}
						code={providersSshYamlConfigurationPart + providersSshYamlScriptPart}
						style="max-height:375px"
					/>
				</p>

				<details>
					<summary>Why is this file needed?</summary>
					<p>
						This is our pull script which takes care of pulling the live web site to your local DDEV
						project. See DDEV docs for more information: <a
							href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/"
							target="_blank">Hosting Provider Integration</a
						>
					</p>
				</details>

				<small>
					Source:
					<a
						href="https://github.com/mandrasch/ddev-pull-wp-scripts/blob/main/.ddev/providers/ssh.yaml"
						target="_blank">mandrasch/ddev-pull-wp-scripts/.ddev/providers/ssh.yaml</a
					></small
				>

				<!-- <a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a> -->
			</div>
		</div>
	{/if}

	{#if $pullType == 'backup'}
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">2.2 DDEV provider script</h5>
				<h6 class="card-subtitle mb-2 text-muted">.ddev/providers/backup.yaml</h6>

				<p>
					<Highlight
						language={yaml}
						code={providersBackupYamlConfigurationPart + providersBackupYamlScriptPart}
						style="max-height:375px"
					/>
				</p>

				<p>
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

	<div class="card card-small">
		<div class="card-body">
			<h5 class="card-title">2.3 Ignore everything except child theme folder (optional)</h5>

			<p class="card-text">
				<span class="form-text"
					>This is for git usage. You can skip this file if you don't use a git repository.</span
				>
			</p>
			<h6 class="card-subtitle mb-2 text-muted">.gitignore</h6>
			<p>
				<Highlight code={gitIgnoreContent} />
				<details>
					<summary>Why is this needed?</summary>
					<p>
						This is needed to track and manage the child theme in a git repository, but ignore the
						rest of the WordPress files which will be pulled to the local project in the next step. <!-- On synchronization (<i>ddev pull ssh</i
						>) the whole website is downloaded to the local project folder - but we don't want to
						override the child theme, because maybe we changed some styles already and just want to
						test them with the newest site content. 
						The sync uses "--exclude=wp-content/themes/{$childThemeFolderName}" to avoid overriding
						local changes. -->
					</p>
				</details>
			</p>
			<!-- <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> -->
		</div>
	</div>
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

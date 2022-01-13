<script>
	import {
		projectName,
		childThemeFolderName,
		webServerType,
		selectedPhpVersion,
		selectedDbVersionString,
		selectedDbVersionNumber,
		selectedDbVersionType,
		sshHost,
		sshUser,
		pathToWordPressOnServer
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
php_version: "${$selectedPhpVersion}"
webserver_type: ${$webServerType}
router_http_port: "80"
router_https_port: "443"
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
${$selectedDbVersionType}: "${$selectedDbVersionNumber}"
nfs_mount_enabled: false
mutagen_enabled: false
use_dns_when_possible: true
composer_version: "2"
web_environment:
- PRODUCTION_SSH_HOST=${$sshHost}
- PRODUCTION_SSH_USER=${$sshUser}
- PRODUCTION_SSH_WP_DIR=${$pathToWordPressOnServer}`;

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
!/.ddev/providers/wp-production.yaml

# Child theme:
!/wp-content
/wp-content/*
!/wp-content/themes
/wp-content/themes/*
!/wp-content/themes/${$childThemeFolderName}
`;

	const providersYaml = `# Pull a live site into DDEV
# These values are loaded via .ddev/config.yaml
# (Use 'ddev restart' if you change .ddev/config.yaml)
environment_variables:
  sshUser: \${PRODUCTION_SSH_USER}
  sshHost: \${PRODUCTION_SSH_HOST}
  sshWpDir: \${PRODUCTION_SSH_WP_DIR}

# 1. Add ssh keys to the user agent
auth_command:
  command: |
    ssh-add -l >/dev/null || ( echo "Please 'ddev auth ssh' before running this command." && exit 1 )

# 2. Pull a fresh database dump via SSH
# (Either via WP-CLI or - if WP-CLI is not available - via mysqldump)
db_pull_command:
  command: |
    # set -x   # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    pushd "/var/www/html/\${DDEV_DOCROOT}" >/dev/null
    echo "Connect to SSH and check if WP-CLI is available ..."
    # TODO: is there a more robust way? Any unexpected output will cause an error?
    WP_CLI_AVAILABLE="$(ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && if [[ -x 'command -v wp' ]]; then echo "1"; else echo "0"; fi")"
    if [ "$WP_CLI_AVAILABLE" = "1" ]; then echo "WP-CLI is available remotely"; else echo "WP-CLI not available remotely, we'll try mysqldump instead"; fi
    #
    # Database dump via WP-CLI 'wp db export':
    # 
    if [ "$WP_CLI_AVAILABLE" = "1" ]; then ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && wp db export | gzip -9 -c" > .ddev/.downloads/db.sql.gz; fi
    #
    # Database dump via mysqldump (if WP-CLI not available):
    #
    if [ "$WP_CLI_AVAILABLE" = "0" ]; then ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && mysqldump --user=\$(cat wp-config.php | grep DB_USER | cut -d \' -f 4) --password=\$(cat wp-config.php | grep DB_PASSWORD | cut -d \' -f 4) --host=\$(cat wp-config.php | grep DB_HOST | cut -d \' -f 4) \$(cat wp-config.php | grep DB_NAME | cut -d \' -f 4) | gzip -9 -c" > .ddev/.downloads/db.sql.gz; fi
    # 
  service: web

# 3. Rsync all the files (except git-tracked ones)
# 
# We rsync files from remote to local docroot which are _not_ tracked via git
# (This allows us to track a child theme in git and doesnt't overwrite it. It is
# achieved with --include-from='.gitignore' --exclude='*')
files_pull_command:
  command: |
    # set -x   # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    ls /var/www/html/.ddev >/dev/null # This just refreshes stale NFS if possible
    pushd /var/www/html/\${DDEV_DOCROOT} >/dev/null
    # Add trailing slash for sshWpDir if missing, 
    # thanks to https://gist.github.com/luciomartinez/c322327605d40f86ee0c
    [[ "\${sshWpDir}" != */ ]] && sshWpDir="\${sshWpDir}/"
    # Sync files from remote (\${sshUser}@\${sshHost}:\${sshWpDir}) to local docroot (.)
    rsync -azh --progress --stats --include-from='.gitignore' --exclude='*' \${sshUser}@\${sshHost}:\${sshWpDir} .
  service: web

# 4. Set database connection + migrate URLs in DB
# 
# We use this step to run some important WP-CLI commands locally
# a) Replace db connection settings in wp-config.php
# b) Replace live site url (determined from backup)
# with DDEV_PRIMARY_URL (<your-project>.ddev.site) in local databse
# TODO: c) re-generate permalinks? other steps needed?
files_import_command:
  command: |
    # set -x  # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    pushd "/var/www/html/\${DDEV_DOCROOT}" >/dev/null
    echo "Adjusting wp-config db connection settings for DDEV ..."
    wp config set DB_NAME "db" && wp config set DB_USER "db" && wp config set DB_PASSWORD "db" && wp config set DB_HOST "db"
    # Important use wp search-replace for URL replacement
    echo "Replacing the old URL ($(wp option get siteurl)) in database with DDEV local url (\${DDEV_PRIMARY_URL})..."
    wp search-replace $(wp option get siteurl) "\${DDEV_PRIMARY_URL}"
    # echo "Deleting config path for WP Super Cache (if installed) ..."
    # wp config delete WPCACHEHOME
    echo "All set, have fun! Run 'ddev launch' to open your site."
  service: web
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{#if showOnlyConfigYaml}
	<Highlight language={yaml} code={configYaml} />
{:else}
	<div class="card card-small">
		<div class="card-body">
			<h5 class="card-title">.ddev/config.yaml</h5>
			<h6 class="card-subtitle mb-2 text-muted">DDEV project configuration</h6>
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
						This is needed to track the child theme via git. On synchronization (<i
							>ddev pull wp-production</i
						>) the whole website is downloaded to the local project folder - but we don't want to
						override the child theme, because maybe we changed some styles already and just want to
						test them with the newest site content. The sync uses rsync with the option
						<i>--include-from='.gitignore' --exclude='*'</i>, therefore it syncs everything except
						the child theme folder.)
					</p>
				</details>
			</p>
			<!-- <a href="#" class="card-link">Card link</a>
			<a href="#" class="card-link">Another link</a> -->
		</div>
	</div>

	<div class="card">
		<div class="card-body">
			<h5 class="card-title">.ddev/providers/wp-production.yaml</h5>
			<h6 class="card-subtitle mb-2 text-muted">
				The actual pull script, runs via 'ddev pull wp-production'
			</h6>
			<p class="card-text">
				<small
					>Requirement: <a href="https://github.com/drud/ddev/releases/tag/v1.18.2" target="_blank"
						>DDEV >= 1.18.2</a
					></small
				>
				<Highlight language={yaml} code={providersYaml} />

				<details>
					<summary>Why is this file needed?</summary>
					<p>
						This is our pull script which takes care of pulling the live web site to your local DDEV
						project. See DDEV docs for more information:<a
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
		margin: 20px auto;
		max-width: 50rem;
		&.card-small {
			/*width: 35rem;*/
		}
	}
</style>

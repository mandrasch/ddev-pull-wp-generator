<script>
	import {
		projectName,
		selectedDbVersionType,
		selectedDbVersionNumber,
		selectedPhpVersion
	} from '../stores/stores';

	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/src/languages/yaml';
	import atomOneDark from 'svelte-highlight/src/styles/atom-one-dark';

	const code = 'const add = (a: number, b: number) => a + b;';

	$: configYaml = `    name: ${$projectName}
    type: wordpress
    docroot: ""
    php_version: "${$selectedPhpVersion}"
    webserver_type: nginx-fpm
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
    - PRODUCTION_SSH_USER=
    - PRODUCTION_SSH_HOST=
    - PRODUCTION_SSH_WP_DIR=`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<h2>Code Generator:</h2>

<h3>.ddev/config.yaml</h3>
<Highlight language={yaml} code={configYaml} />

<h3>.ddev/providers/wp-production.yaml</h3>

TODO: ...

<h3>.gitignore</h3>

TODO: CHILD THEME IN GITIGNORE

<h2>Afterwards:</h2>

1. Copy these files to a project folder 2. ddev start<br />3. ddev pull wp-production

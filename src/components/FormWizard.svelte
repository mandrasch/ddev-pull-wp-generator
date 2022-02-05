<script>
	import {
		pullType,
		projectName,
		childThemeFolderName,
		webServerType,
		selectedPhpVersion,
		selectedDbVersionString,
		sshHost,
		sshUser,
		sshWpPath
	} from '../stores/stores.js';

	import CodeGenerator from '../components/CodeGenerator.svelte';

	// TODO: move them to store as well
	let phpVersions = ['8.0', '7.4', '7.3', '7.2', '7.1', '7.0', '5.6'];
	let databaseVersions = [
		{
			value: 'maria-10.3',
			displayText: 'MariaDB 10.3 (default)'
		},
		{
			value: 'maria-10.4',
			displayText: 'MariaDB 10.4'
		},
		{
			value: 'maria-10.5',
			displayText: 'MariaDB 10.5'
		},
		{
			value: 'maria-10.6',
			displayText: 'MariaDB 10.6'
		},
		{
			value: 'mysql-5.5',
			displayText: 'MySQL 5.5'
		},
		{
			value: 'mysql-5.6',
			displayText: 'MySQL 5.6'
		},
		{
			value: 'mysql-5.7',
			displayText: 'MySQL 5.7'
		},
		{
			value: 'mysql-8.0',
			displayText: 'MySQL 8.0'
		}
	];

	// filter for {#each}, thanks to https://stackoverflow.com/a/64016553
	function getDatabaseVersionsForType(databaseVersions, stringToMatch) {
		if (stringToMatch) {
			return databaseVersions.filter((version) => {
				return version.value.includes(stringToMatch);
			});
		} else {
			return databaseVersions;
		}
	}
</script>

<form>
	<div class="mb-4 mt-3">
		<fieldset>
			<legend class="">How do you want to pull your site?</legend>
			<div class="form-check">
				<input
					class="form-check-input"
					id="pullTypeSsh"
					type="radio"
					name="pullType"
					bind:group={$pullType}
					value="ssh"
				/>
				<label class="form-check-label" for="pullTypeSsh"
					>SSH connection <span class="form-text">
						(<i>mysqldump</i> must available on server)</span
					></label
				>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					id="pullTypeBackup"
					type="radio"
					name="pullType"
					bind:group={$pullType}
					value="backup"
				/>
				<label class="form-check-label" for="pullTypeBackup">
					Backup file <span class="form-text">(Manual download, BackWpUp plugin)</span></label
				>
			</div>
		</fieldset>
	</div>

	<div class="row">
		<div class="col-lg-6">
			<div class="mb-3">
				<label class="form-label" for="projectName">DDEV project name</label>
				<input
					class="form-control"
					id="projectName"
					type="text"
					bind:value={$projectName}
					placeholder="Project name"
				/>
				<div class="form-text">
					You local project name, the local site will be available via the local URL
					https://PROJECT-NAME.ddev.site.
				</div>
			</div>

			{#if $pullType == 'ssh'}
				<div class="mb-3">
					<label class="form-label" for="sshUsername">SSH username</label>
					<input
						class="form-control"
						id="sshUsername"
						type="text"
						placeholder="user123"
						bind:value={$sshUser}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label" for="sshHost">SSH host</label>
					<input
						class="form-control"
						id="sshHost"
						type="text"
						placeholder="example.org"
						bind:value={$sshHost}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label" for="sshWpPath">SSH - path to WordPress on server</label>
					<input
						class="form-control"
						id="sshWpPath"
						type="text"
						placeholder="/sites/my-website/wordpress"
						bind:value={$sshWpPath}
					/>
					<div class="form-text">
						Copy this value from Site Health &raquo; Info &raquo; Directories & sizes &raquo;
						WordPress directory location (<a
							href="https://yoast.com/wordpress-site-health/"
							target="_blank">?</a
						>). <br />Example: "/sites/my-website/wordpress" (no trailing slash)
					</div>
				</div>
			{/if}
			<div class="mb-3">
				<label class="form-label" for="childThemeFolderName"
					>Child theme folder name (optional)</label
				>
				<input
					class="form-control"
					id="childThemeFolderName"
					type="text"
					placeholder="twentytwentyone-child"
					bind:value={$childThemeFolderName}
				/>
				<div class="form-text">
					If you don't use a child theme currently, just keep "twentytwentyone-child". It can be
					changed later as well. <!-- If you use a child theme which you manage in git: Just enter the
					folder name without slashes from /wp-content/themes/. -->
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="mb-2"><b>DDEV local project settings</b></div>
			<CodeGenerator showOnlyConfigYaml={true} />

			<details>
				<summary style="font-weight:bold;"> ✏️ Edit web server settings</summary>
				<div class="mb-3">
					<fieldset>
						<legend>PHP version</legend>

						<div class="phpVersionRadios">
							{#each phpVersions as phpVersion, i}
								<div class="form-check">
									<input
										class="form-check-input"
										id={phpVersion}
										type="radio"
										name="phpVersion"
										bind:group={$selectedPhpVersion}
										value={phpVersion}
									/>
									<label class="form-check-label" for={phpVersion}>{phpVersion}</label>
								</div>
							{/each}
						</div>
					</fieldset>
				</div>

				<fieldset>
					<legend>Database version</legend>
					<!-- TODO: this is double coded currently, need to figure out how to use bind:group in nested components, see https://github.com/sveltejs/svelte/issues/2308 and then use: 
								<DatabaseRadioButton {displayText} {value} /> -->
					<div class="row">
						<div class="col">
							{#each getDatabaseVersionsForType(databaseVersions, 'maria') as { displayText, value }, i}
								<div class="form-check">
									<input
										class="form-check-input"
										id={'radioDbVersion-' + value}
										type="radio"
										name="dbVersion"
										bind:group={$selectedDbVersionString}
										{value}
									/>
									<label class="form-check-label" for={'radioDbVersion-' + value}
										>{displayText}</label
									>
								</div>
							{/each}
						</div>
						<div class="col">
							{#each getDatabaseVersionsForType(databaseVersions, 'mysql') as { displayText, value }, i}
								<!-- <DatabaseRadioButton {displayText} {value} /> -->
								<div class="form-check">
									<input
										class="form-check-input"
										id={'radioDbVersion-' + value}
										type="radio"
										name="dbVersion"
										bind:group={$selectedDbVersionString}
										{value}
									/>
									<label class="form-check-label" for={'radioDbVersion-' + value}
										>{displayText}</label
									>
								</div>
							{/each}
						</div>
					</div>
				</fieldset>

				<div class="mb-3">
					<fieldset>
						<legend>Web Server</legend>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								id="nginx"
								type="radio"
								name="webServerType"
								value="nginx-fpm"
								bind:group={$webServerType}
							/>
							<label class="form-check-label" for="nginx">nginx (default)</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								id="apache2"
								type="radio"
								value="apache-fpm"
								name="webServerType"
								bind:group={$webServerType}
							/>
							<label class="form-check-label" for="apache2">apache2</label>
						</div>
					</fieldset>
				</div>
			</details>

			<details>
				<summary>FAQ: What settings should I choose?</summary>
				<p>
					If you are unsure about the server settings, just leave the defaults. They are good to go.
					Optional: For more serious testing you could choose the values accordingly to your live
					website. You can use the WordPress feature <a
						href="https://yoast.com/wordpress-site-health/"
						target="_blank">"Site Health Screen"</a
					>
					to figure out your live sites environment, I'm also testing a small WordPress plugin
					<a href="https://github.com/mandrasch/ddev-pull-wp-helper-plugin" target="_blank"
						>ddev-pull-wp-helper</a
					> which helps getting the information with one click.
				</p>
			</details>
		</div>
	</div>

	<!-- 
	<div class="d-grid">
		<button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
	</div>
	-->
</form>

<style lang="scss">
	input[type='radio'],
	label {
		cursor: pointer;
	}
	fieldset {
		margin-top: 5px;
	}
	label.form-label {
		font-weight: bold;
	}
	legend {
		font-size: 1rem;
		font-weight: bold;
		margin-top: 5px;
	}

	div.phpVersionRadios {
		column-count: 2;
		column-gap: 2rem;
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
</style>

<script>
	import {
		projectName,
		childThemeFolderName,
		webServerType,
		selectedPhpVersion,
		selectedDbVersionString,
		sshHost,
		sshUser,
		pathToWordPressOnServer
	} from '../stores/stores.js';
	// TODO: move them to store as well
	let phpVersions = ['8.0', '7.4', '7.3', '7.2', '7.1', '7.0', '5.6'];
	let dbVersions = [
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
</script>

<form id="contactForm">
	<div class="mb-3">
		<label class="form-label" for="projectName">Project name</label>
		<input
			class="form-control"
			id="projectName"
			type="text"
			bind:value={$projectName}
			placeholder="Project name"
		/>
	</div>
	<div class="mb-3">
		<label class="form-label d-block">PHP version</label>
		{#each phpVersions as phpVersion, i}
			<div class="form-check form-check-inline">
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
	<div class="mb-3">
		<label class="form-label" for="database">Database version</label>
		{#each dbVersions as { displayText, value }, i}
			<div class="form-check">
				<input
					class="form-check-input"
					id={'dbVersion' + i}
					type="radio"
					name="dbVersion"
					bind:group={$selectedDbVersionString}
					{value}
				/>
				<label class="form-check-label" for={'dbVersion' + i}>{displayText}</label>
			</div>
		{/each}
	</div>
	<div class="mb-3">
		<label class="form-label d-block">Web server</label>
		<div class="form-check form-check-inline">
			<input
				class="form-check-input"
				id="nginx"
				type="radio"
				name="webServerType"
				value="nginx"
				bind:group={$webServerType}
			/>
			<label class="form-check-label" for="nginx">nginx</label>
		</div>
		<div class="form-check form-check-inline">
			<input
				class="form-check-input"
				id="apache2"
				type="radio"
				value="apache2"
				name="webServerType"
				bind:group={$webServerType}
			/>
			<label class="form-check-label" for="apache2">apache2</label>
		</div>
	</div>
	<div class="mb-3">
		<label class="form-label" for="childThemeFolderName"
			>Child theme folder (in wp-content/themes/)</label
		>
		<input
			class="form-control"
			id="childThemeFolderName"
			type="text"
			placeholder="twentytwentyone-child"
			bind:value={$childThemeFolderName}
		/>
		<div class="invalid-feedback" data-sb-feedback="childThemeFolderInWpContentThemes:required">
			Child theme folder (in wp-content/themes/) is required.
		</div>
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
		<label class="form-label" for="pathToWordPressOnServer">Path to WordPress on server</label>
		<input
			class="form-control"
			id="pathToWordPressOnServer"
			type="text"
			placeholder="/sites/my-website.eu/"
			bind:value={$pathToWordPressOnServer}
		/>
	</div>
	<div class="d-none" id="submitSuccessMessage">
		<div class="text-center mb-3">
			<div class="fw-bolder">Form submission successful!</div>
			<p>To activate this form, sign up at</p>
			<a href="https://startbootstrap.com/solution/contact-forms"
				>https://startbootstrap.com/solution/contact-forms</a
			>
		</div>
	</div>
	<div class="d-none" id="submitErrorMessage">
		<div class="text-center text-danger mb-3">Error sending message!</div>
	</div>
	<div class="d-grid">
		<button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
	</div>
</form>

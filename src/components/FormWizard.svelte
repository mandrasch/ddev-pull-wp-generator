<script>
	import { selectedPhpVersion } from '../stores/stores.js';
	let phpVersions = ['5.6', '7.0', '7.1', '7.2', '7.3', '7.4', '8.0'];
	let dbVersions = [
		{
			value: 'maria103',
			displayText: 'MariaDB 10.3'
		},
		{
			value: 'maria104',
			displayText: 'MariaDB 10.4'
		},
		{
			value: 'maria105',
			displayText: 'MariaDB 10.5'
		},
		{
			value: 'maria106',
			displayText: 'MariaDB 10.6'
		},
		{
			value: 'mysql55',
			displayText: 'MySQL 5.5'
		},
		{
			value: 'mysql56',
			displayText: 'MySQL 5.6'
		},
		{
			value: 'mysql57',
			displayText: 'MySQL 5.7'
		},
		{
			value: 'mysql80',
			displayText: 'MySQL 8.0'
		}
	];
	let selectedDbVersion = 'maria103';
</script>

<form id="contactForm">
	<div class="mb-3">
		<label class="form-label" for="projectTitle">Project title</label>
		<input
			class="form-control"
			id="projectTitle"
			type="text"
			placeholder="Project title"
			data-sb-validations="required"
		/>
		<div class="invalid-feedback" data-sb-feedback="projectTitle:required">
			Project title is required.
		</div>
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
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					id={'dbVersion' + i}
					type="radio"
					name="dbVersion"
					bind:group={selectedDbVersion}
					{value}
				/>
				<label class="form-check-label" for={'dbVersion' + i}>{displayText}</label>
			</div>
		{/each}
	</div>
	<div class="mb-3">
		<label class="form-label d-block">Web server</label>
		<div class="form-check form-check-inline">
			<input class="form-check-input" id="nginx" type="radio" name="webServer" />
			<label class="form-check-label" for="nginx">nginx</label>
		</div>
		<div class="form-check form-check-inline">
			<input
				class="form-check-input"
				id="apache2"
				type="radio"
				name="webServer"
				data-sb-validations=""
			/>
			<label class="form-check-label" for="apache2">Apache2</label>
		</div>
	</div>
	<div class="mb-3">
		<label class="form-label" for="childThemeFolderInWpContentThemes"
			>Child theme folder (in wp-content/themes/)</label
		>
		<input
			class="form-control"
			id="childThemeFolderInWpContentThemes"
			type="text"
			placeholder="Child theme folder (in wp-content/themes/)"
			data-sb-validations="required"
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
			placeholder="SSH host"
			data-sb-validations="required"
		/>
		<div class="invalid-feedback" data-sb-feedback="sshHost:required">SSH host is required.</div>
	</div>
	<div class="mb-3">
		<label class="form-label" for="sshUsername">SSH username</label>
		<input
			class="form-control"
			id="sshUsername"
			type="text"
			placeholder="SSH username"
			data-sb-validations="required"
		/>
		<div class="invalid-feedback" data-sb-feedback="sshUsername:required">
			SSH username is required.
		</div>
	</div>
	<div class="mb-3">
		<label class="form-label" for="pathToWordPressOnServer">Path to WordPress on server</label>
		<input
			class="form-control"
			id="pathToWordPressOnServer"
			type="text"
			placeholder="Path to WordPress on server"
			data-sb-validations="required"
		/>
		<div class="invalid-feedback" data-sb-feedback="pathToWordPressOnServer:required">
			Path to WordPress on server is required.
		</div>
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

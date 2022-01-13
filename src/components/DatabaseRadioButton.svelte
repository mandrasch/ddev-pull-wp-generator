<script>
	// currently not used
	// TODO: figure out how to use bind:group in nested components
	// https://github.com/sveltejs/svelte/issues/2308
</script>

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

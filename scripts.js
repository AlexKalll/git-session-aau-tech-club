(function () {
	const infoEl = document.getElementById('project-info');
	if (infoEl) {
		const name = infoEl.dataset.name || 'unknown';
		const version = infoEl.dataset.version || '0.0';
		infoEl.textContent = `Project: ${name} — v${version}`;
		console.log(`Loaded ${name} v${version}`);
	}
})();

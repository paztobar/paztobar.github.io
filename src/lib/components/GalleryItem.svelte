<script module>
	function getColor(category) {
		const colors = {
			escenografia: '#1a1a2e',
			instalacion: '#1a2e1a',
			pintura: '#2e1a1a',
			otro: '#1a2e2e'
		};
		return colors[category] || '#1a1a1a';
	}
</script>

<script>
	let { project } = $props();
</script>

<a href="/portfolio/{project.slug}" class="gallery-item">
	<div class="gallery-image-wrap">
		<div class="gallery-placeholder" style="background-color: {getColor(project.category)}">
			<span class="placeholder-text">{project.title.charAt(0)}</span>
		</div>
		<div class="gallery-overlay">
			<span class="gallery-category">{project.category}</span>
			<h3 class="gallery-title">{project.title}</h3>
			<span class="gallery-year">{project.year}</span>
		</div>
	</div>
</a>

<style>
	.gallery-item {
		display: block;
		position: relative;
		overflow: hidden;
		aspect-ratio: 4 / 5;
		background-color: var(--color-surface);
	}

	.gallery-image-wrap {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.gallery-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--transition-slow);
	}

	.placeholder-text {
		font-family: var(--font-heading);
		font-size: 4rem;
		font-weight: 200;
		color: rgba(255, 255, 255, 0.1);
	}

	.gallery-item:hover .gallery-placeholder {
		transform: scale(1.05);
	}

	.gallery-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--space-md);
		background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, transparent 60%);
		opacity: 0;
		transition: opacity var(--transition-base);
	}

	.gallery-item:hover .gallery-overlay {
		opacity: 1;
	}

	.gallery-category {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-xs);
	}

	.gallery-title {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		font-weight: 400;
		color: var(--color-text);
		line-height: 1.3;
	}

	.gallery-year {
		font-size: var(--text-sm);
		color: var(--color-text-dim);
		margin-top: var(--space-xs);
	}
</style>

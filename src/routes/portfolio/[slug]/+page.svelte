<script>
	let { data } = $props();
	let project = $derived(data.project);
	let prev = $derived(data.prev);
	let next = $derived(data.next);
</script>

<svelte:head>
	<title>{project.title} — Paz Tobar</title>
</svelte:head>

<section class="project-page">
	<div class="container">
		<div class="project-header">
			<a href="/portfolio" class="back-link">&larr; Portfolio</a>
			<span class="project-category">{project.category}</span>
		</div>

		<h1 class="project-title">{project.title}</h1>

		<div class="project-meta">
			{#if project.year}
				<span class="meta-item">{project.year}</span>
			{/if}
			{#if project.location}
				<span class="meta-sep">&mdash;</span>
				<span class="meta-item">{project.location}</span>
			{/if}
			{#if project.collaborators}
				<span class="meta-sep">&mdash;</span>
				<span class="meta-item">{project.collaborators}</span>
			{/if}
		</div>

		<div class="project-hero">
			<div class="project-placeholder" style="background-color: {project.category === 'escenografia' ? '#1a1a2e' : project.category === 'instalacion' ? '#1a2e1a' : project.category === 'pintura' ? '#2e1a1a' : '#1a2e2e'}">
				<span class="placeholder-letter">{project.title.charAt(0)}</span>
			</div>
		</div>

		<div class="project-description">
			<p>{project.description}</p>
		</div>

		<nav class="project-nav">
			{#if prev}
				<a href="/portfolio/{prev.slug}" class="nav-prev">
					<span class="nav-label">&larr; Anterior</span>
					<span class="nav-title">{prev.title}</span>
				</a>
			{:else}
				<div></div>
			{/if}
			{#if next}
				<a href="/portfolio/{next.slug}" class="nav-next">
					<span class="nav-label">Siguiente &rarr;</span>
					<span class="nav-title">{next.title}</span>
				</a>
			{:else}
				<div></div>
			{/if}
		</nav>
	</div>
</section>

<style>
	.project-page {
		padding-top: calc(var(--header-height) + var(--space-2xl));
		padding-bottom: var(--space-2xl);
		min-height: 100vh;
	}

	.project-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--space-lg);
	}

	.back-link {
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-accent);
	}

	.project-category {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.project-title {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 300;
		letter-spacing: 0.05em;
		line-height: 1.1;
		margin-bottom: var(--space-md);
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		color: var(--color-text-dim);
		font-size: var(--text-sm);
		margin-bottom: var(--space-xl);
	}

	.meta-sep {
		color: var(--color-border);
	}

	.project-hero {
		width: 100%;
		aspect-ratio: 16 / 9;
		margin-bottom: var(--space-xl);
		overflow: hidden;
	}

	.project-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-letter {
		font-family: var(--font-heading);
		font-size: 8rem;
		font-weight: 200;
		color: rgba(255, 255, 255, 0.08);
	}

	.project-description {
		max-width: 720px;
		font-size: var(--text-lg);
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: var(--space-3xl);
	}

	.project-description :global(p) {
		margin-bottom: var(--space-md);
	}

	.project-nav {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--color-border);
		padding-top: var(--space-xl);
	}

	.nav-prev,
	.nav-next {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		transition: color var(--transition-fast);
	}

	.nav-next {
		text-align: right;
	}

	.nav-label {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-dim);
	}

	.nav-title {
		font-family: var(--font-heading);
		font-size: var(--text-base);
		color: var(--color-text);
	}

	.nav-prev:hover .nav-title,
	.nav-next:hover .nav-title {
		color: var(--color-accent);
	}
</style>

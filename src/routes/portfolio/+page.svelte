<script>
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import { projects, categories } from '$lib/data/portfolio.js';

	let activeCategory = $state('todo');

	const filtered = $derived(
		activeCategory === 'todo'
			? projects
			: projects.filter(p => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Portfolio — Paz Tobar</title>
</svelte:head>

<section class="portfolio-page">
	<div class="container">
		<h1 class="page-title">Portfolio</h1>

		<div class="filter-bar">
			{#each categories as cat}
				<button
					class="filter-btn"
					class:active={activeCategory === cat.id}
					onclick={() => activeCategory = cat.id}
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<div class="gallery-grid">
			{#each filtered as project (project.slug)}
				<GalleryItem {project} />
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="empty-state">No hay proyectos en esta categoría aún.</p>
		{/if}
	</div>
</section>

<style>
	.portfolio-page {
		padding-top: calc(var(--header-height) + var(--space-2xl));
		padding-bottom: var(--space-2xl);
		min-height: 100vh;
	}

	.page-title {
		font-family: var(--font-heading);
		font-size: var(--text-3xl);
		font-weight: 300;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-xl);
	}

	.filter-bar {
		display: flex;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
		flex-wrap: wrap;
	}

	.filter-btn {
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		padding: var(--space-xs) 0;
		position: relative;
		transition: color var(--transition-fast);
	}

	.filter-btn::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background-color: var(--color-accent);
		transition: width var(--transition-base);
	}

	.filter-btn:hover,
	.filter-btn.active {
		color: var(--color-text);
	}

	.filter-btn.active::after {
		width: 100%;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-sm);
	}

	.empty-state {
		text-align: center;
		color: var(--color-text-dim);
		padding: var(--space-3xl) 0;
		font-size: var(--text-lg);
	}

	@media (max-width: 640px) {
		.gallery-grid {
			grid-template-columns: 1fr;
		}

		.filter-bar {
			gap: var(--space-sm);
		}
	}
</style>

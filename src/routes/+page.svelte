<script>
	import Hero from '$lib/components/Hero.svelte';
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import { projects } from '$lib/data/portfolio.js';

	const featured = projects.filter(p => p.featured).slice(0, 6);
</script>

<svelte:head>
	<title>Paz Tobar — Artista Visual & Diseñadora Escénica</title>
</svelte:head>

<Hero />

<section class="featured">
	<div class="container">
		<h2 class="section-title">Trabajos Seleccionados</h2>
		<div class="featured-grid">
			{#each featured as project}
				<GalleryItem {project} />
			{/each}
		</div>
		<div class="featured-cta">
			<a href="/portfolio" class="cta-link">Ver todo el portfolio &rarr;</a>
		</div>
	</div>
</section>

<style>
	.featured {
		padding: var(--space-2xl) 0;
	}

	.section-title {
		font-family: var(--font-heading);
		font-size: var(--text-2xl);
		font-weight: 300;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-xl);
		color: var(--color-text);
	}

	.featured-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-sm);
	}

	.featured-cta {
		text-align: center;
		margin-top: var(--space-xl);
	}

	.cta-link {
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
		transition: color var(--transition-fast);
		border-bottom: 1px solid transparent;
		padding-bottom: 2px;
	}

	.cta-link:hover {
		color: var(--color-accent-hover);
		border-bottom-color: var(--color-accent-hover);
	}

	@media (max-width: 640px) {
		.featured-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

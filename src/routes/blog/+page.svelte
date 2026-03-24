<script>
	import { posts } from '$lib/data/blog.js';
	import { formatDate } from '$lib/utils/index.js';
</script>

<svelte:head>
	<title>Blog — Paz Tobar</title>
</svelte:head>

<section class="blog-page">
	<div class="container">
		<h1 class="page-title">Blog</h1>

		<div class="blog-list">
			{#each posts as post}
				<a href="/blog/{post.slug}" class="blog-card">
					<div class="blog-card-image">
						<div class="blog-placeholder">
							<span class="placeholder-icon">&#9998;</span>
						</div>
					</div>
					<div class="blog-card-content">
						<time class="blog-date">{formatDate(post.date)}</time>
						<h2 class="blog-title">{post.title}</h2>
						<p class="blog-excerpt">{post.excerpt}</p>
						<span class="blog-read-more">Leer más &rarr;</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.blog-page {
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

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.blog-card {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: var(--space-lg);
		padding-bottom: var(--space-xl);
		border-bottom: 1px solid var(--color-border);
		transition: transform var(--transition-fast);
	}

	.blog-card:hover {
		transform: translateX(4px);
	}

	.blog-card-image {
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background-color: var(--color-surface);
	}

	.blog-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-bg-alt);
	}

	.placeholder-icon {
		font-size: 2rem;
		color: var(--color-text-dim);
		opacity: 0.3;
	}

	.blog-card-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.blog-date {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		margin-bottom: var(--space-xs);
	}

	.blog-title {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 400;
		line-height: 1.3;
		margin-bottom: var(--space-sm);
		transition: color var(--transition-fast);
	}

	.blog-card:hover .blog-title {
		color: var(--color-accent);
	}

	.blog-excerpt {
		font-size: var(--text-sm);
		color: var(--color-text-dim);
		line-height: 1.6;
		margin-bottom: var(--space-sm);
	}

	.blog-read-more {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	@media (max-width: 768px) {
		.blog-card {
			grid-template-columns: 1fr;
		}

		.blog-card-image {
			aspect-ratio: 16 / 9;
		}
	}
</style>

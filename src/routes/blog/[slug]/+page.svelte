<script>
	import { formatDate } from '$lib/utils/index.js';

	let { data } = $props();
	let post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} — Blog — Paz Tobar</title>
</svelte:head>

<article class="post-page">
	<div class="container">
		<a href="/blog" class="back-link">&larr; Blog</a>

		<header class="post-header">
			<time class="post-date">{formatDate(post.date)}</time>
			<h1 class="post-title">{post.title}</h1>
		</header>

		<div class="post-content">
			{@html post.content}
		</div>

		<div class="post-footer">
			<a href="/blog" class="back-link">&larr; Volver al blog</a>
		</div>
	</div>
</article>

<style>
	.post-page {
		padding-top: calc(var(--header-height) + var(--space-2xl));
		padding-bottom: var(--space-2xl);
		min-height: 100vh;
	}

	.back-link {
		display: inline-block;
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		transition: color var(--transition-fast);
		margin-bottom: var(--space-xl);
	}

	.back-link:hover {
		color: var(--color-accent);
	}

	.post-header {
		margin-bottom: var(--space-2xl);
		max-width: 720px;
	}

	.post-date {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-text-dim);
	}

	.post-title {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 300;
		letter-spacing: 0.03em;
		line-height: 1.15;
		margin-top: var(--space-sm);
	}

	.post-content {
		max-width: 720px;
		font-size: var(--text-lg);
		line-height: 1.8;
		color: var(--color-text);
	}

	.post-content :global(p) {
		margin-bottom: var(--space-md);
	}

	.post-content :global(h2) {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 400;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-sm);
	}

	.post-content :global(strong) {
		font-weight: 500;
		color: var(--color-white);
	}

	.post-footer {
		margin-top: var(--space-3xl);
		padding-top: var(--space-xl);
		border-top: 1px solid var(--color-border);
	}
</style>

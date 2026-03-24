<script>
	import { social } from '$lib/data/social.js';
</script>

<footer class="footer">
	<div class="footer-inner container">
		<div class="footer-left">
			<span class="footer-name">Paz Tobar</span>
			<span class="footer-sep">&mdash;</span>
			<span class="footer-title">Artista Visual & Diseñadora Escénica</span>
		</div>

		<div class="footer-social">
			{#each social as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} class="social-link">
					{#if link.icon === 'instagram'}
						<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5" />
							<circle cx="12" cy="12" r="5" />
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
						</svg>
					{:else if link.icon === 'linkedin'}
						<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="3" />
							<line x1="8" y1="11" x2="8" y2="16" />
							<line x1="8" y1="8" x2="8" y2="8.01" stroke-width="2" />
							<path d="M12 16v-5c0-1 1-2 2-2s2 1 2 2v5" />
						</svg>
					{:else if link.icon === 'whatsapp'}
						<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
							<path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
						</svg>
					{/if}
				</a>
			{/each}
		</div>

		<div class="footer-copy">
			&copy; {new Date().getFullYear()} Paz Tobar. Todos los derechos reservados.
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--color-border);
		padding: var(--space-xl) 0;
		margin-top: var(--space-3xl);
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		text-align: center;
	}

	.footer-left {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer-name {
		font-family: var(--font-heading);
		font-weight: 400;
		font-size: var(--text-sm);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.footer-sep {
		color: var(--color-text-dim);
	}

	.footer-title {
		color: var(--color-text-dim);
		font-size: var(--text-sm);
	}

	.footer-social {
		display: flex;
		gap: var(--space-md);
	}

	.social-link {
		color: var(--color-text-dim);
		transition: color var(--transition-fast);
	}

	.social-link:hover {
		color: var(--color-accent);
	}

	.footer-copy {
		font-size: var(--text-xs);
		color: var(--color-text-dim);
	}
</style>

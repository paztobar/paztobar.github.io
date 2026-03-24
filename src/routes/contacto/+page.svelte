<script>
	import { social } from '$lib/data/social.js';
</script>

<svelte:head>
	<title>Contacto — Paz Tobar</title>
</svelte:head>

<section class="contacto-page">
	<div class="container">
		<h1 class="page-title">Contacto</h1>

		<p class="contacto-intro">
			¿Interesado en colaborar o conocer más sobre mi trabajo?<br />
			No dudes en escribirme.
		</p>

		<div class="social-grid">
			{#each social as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-card">
					<div class="social-icon">
						{#if link.icon === 'instagram'}
							<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="2" width="20" height="20" rx="5" />
								<circle cx="12" cy="12" r="5" />
								<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
							</svg>
						{:else if link.icon === 'linkedin'}
							<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="2" width="20" height="20" rx="3" />
								<line x1="8" y1="11" x2="8" y2="16" />
								<line x1="8" y1="8" x2="8" y2="8.01" stroke-width="2" />
								<path d="M12 16v-5c0-1 1-2 2-2s2 1 2 2v5" />
							</svg>
						{:else if link.icon === 'whatsapp'}
							<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
								<path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
							</svg>
						{/if}
					</div>
					<div class="social-info">
						<span class="social-name">{link.name}</span>
						<span class="social-action">
							{#if link.icon === 'whatsapp'}
								Enviar mensaje
							{:else if link.icon === 'instagram'}
								@paztobar
							{:else}
								Ver perfil
							{/if}
						</span>
					</div>
				</a>
			{/each}
		</div>

		<div class="contacto-email">
			<p class="email-label">Email</p>
			<a href="mailto:contacto@paztobar.cl" class="email-link">contacto@paztobar.cl</a>
		</div>
	</div>
</section>

<style>
	.contacto-page {
		padding-top: calc(var(--header-height) + var(--space-2xl));
		padding-bottom: var(--space-2xl);
		min-height: 100vh;
		display: flex;
		align-items: center;
	}

	.container {
		width: 100%;
	}

	.page-title {
		font-family: var(--font-heading);
		font-size: var(--text-3xl);
		font-weight: 300;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-lg);
	}

	.contacto-intro {
		font-size: var(--text-lg);
		color: var(--color-text-dim);
		line-height: 1.7;
		margin-bottom: var(--space-2xl);
		max-width: 500px;
	}

	.social-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-md);
		margin-bottom: var(--space-2xl);
		max-width: 900px;
	}

	.social-card {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		transition: border-color var(--transition-fast), transform var(--transition-fast);
	}

	.social-card:hover {
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}

	.social-icon {
		color: var(--color-text-dim);
		transition: color var(--transition-fast);
		flex-shrink: 0;
	}

	.social-card:hover .social-icon {
		color: var(--color-accent);
	}

	.social-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.social-name {
		font-family: var(--font-heading);
		font-size: var(--text-base);
		font-weight: 500;
		letter-spacing: 0.05em;
	}

	.social-action {
		font-size: var(--text-sm);
		color: var(--color-text-dim);
	}

	.contacto-email {
		padding-top: var(--space-xl);
		border-top: 1px solid var(--color-border);
		max-width: 900px;
	}

	.email-label {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		margin-bottom: var(--space-xs);
	}

	.email-link {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 300;
		color: var(--color-text);
		transition: color var(--transition-fast);
	}

	.email-link:hover {
		color: var(--color-accent);
	}
</style>

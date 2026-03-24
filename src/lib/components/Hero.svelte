<script>
	let visible = $state(false);

	$effect(() => {
		// Trigger entrance animation after mount
		const timer = setTimeout(() => { visible = true; }, 100);
		return () => clearTimeout(timer);
	});
</script>

<section class="hero" class:visible>
	<div class="hero-bg">
		<div class="hero-gradient"></div>
	</div>

	<div class="hero-content">
		<h1 class="hero-name">PAZ TOBAR</h1>
		<p class="hero-subtitle">Artista Visual & Diseñadora Escénica</p>
	</div>

	<div class="scroll-indicator">
		<span class="scroll-text">Scroll</span>
		<div class="scroll-line"></div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse at 20% 50%, rgba(200, 255, 0, 0.03) 0%, transparent 50%),
			radial-gradient(ellipse at 80% 20%, rgba(200, 255, 0, 0.02) 0%, transparent 50%),
			var(--color-bg);
	}

	.hero-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			transparent 0%,
			transparent 70%,
			var(--color-bg) 100%
		);
	}

	.hero-content {
		position: relative;
		text-align: center;
		z-index: 1;
	}

	.hero-name {
		font-family: var(--font-heading);
		font-size: var(--text-hero);
		font-weight: 300;
		letter-spacing: 0.2em;
		line-height: 1;
		color: var(--color-text);
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 1s ease, transform 1s ease;
	}

	.visible .hero-name {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-subtitle {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		font-weight: 300;
		letter-spacing: 0.15em;
		color: var(--color-text-dim);
		margin-top: var(--space-md);
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
	}

	.visible .hero-subtitle {
		opacity: 1;
		transform: translateY(0);
	}

	.scroll-indicator {
		position: absolute;
		bottom: var(--space-xl);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-xs);
		opacity: 0;
		transition: opacity 1s ease 0.8s;
	}

	.visible .scroll-indicator {
		opacity: 1;
	}

	.scroll-text {
		font-family: var(--font-heading);
		font-size: var(--text-xs);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-dim);
	}

	.scroll-line {
		width: 1px;
		height: 40px;
		background: linear-gradient(to bottom, var(--color-accent), transparent);
		animation: scrollPulse 2s ease-in-out infinite;
	}

	@keyframes scrollPulse {
		0%, 100% {
			opacity: 0.3;
			transform: scaleY(0.6);
			transform-origin: top;
		}
		50% {
			opacity: 1;
			transform: scaleY(1);
		}
	}

	@media (max-width: 640px) {
		.hero-subtitle {
			font-size: var(--text-base);
			letter-spacing: 0.1em;
		}
	}
</style>

<script>
	import { onMount } from 'svelte';

	let canvas;
	let animationId;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let width, height;
		let particles = [];

		function resize() {
			width = canvas.width = canvas.offsetWidth;
			height = canvas.height = canvas.offsetHeight;
		}

		function createParticle() {
			return {
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				size: Math.random() * 2 + 0.5,
				opacity: Math.random() * 0.5 + 0.1
			};
		}

		function init() {
			resize();
			particles = Array.from({ length: 60 }, createParticle);
		}

		function draw() {
			ctx.clearRect(0, 0, width, height);

			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0 || p.x > width) p.vx *= -1;
				if (p.y < 0 || p.y > height) p.vy *= -1;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(200, 255, 0, ${p.opacity})`;
				ctx.fill();
			}

			// Draw connections
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < 120) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = `rgba(200, 255, 0, ${0.08 * (1 - dist / 120)})`;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}
			}

			animationId = requestAnimationFrame(draw);
		}

		init();
		draw();

		window.addEventListener('resize', resize);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<svelte:head>
	<title>Lab — Paz Tobar</title>
</svelte:head>

<section class="lab-page">
	<canvas bind:this={canvas} class="lab-canvas"></canvas>

	<div class="lab-content">
		<div class="lab-badge">Próximamente</div>
		<h1 class="lab-title">
			<span class="lab-title-line">Lab</span>
		</h1>
		<p class="lab-subtitle">Espacio de experimentación digital</p>
		<p class="lab-description">
			Un laboratorio web artístico donde la tecnología y el arte visual convergen.
			Exploraciones interactivas, generativas y experimentales.
		</p>
		<div class="lab-decoration">
			<span class="lab-code">&lt;art.experiment()&gt;</span>
		</div>
	</div>
</section>

<style>
	.lab-page {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.lab-canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.lab-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: var(--space-lg);
	}

	.lab-badge {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent);
		border: 1px solid var(--color-accent);
		padding: var(--space-xs) var(--space-md);
		margin-bottom: var(--space-xl);
		opacity: 0.8;
	}

	.lab-title {
		font-family: var(--font-mono);
		font-size: clamp(4rem, 12vw, 10rem);
		font-weight: 700;
		letter-spacing: 0.1em;
		line-height: 1;
		color: var(--color-text);
		margin-bottom: var(--space-md);
		text-shadow: 0 0 60px rgba(200, 255, 0, 0.15);
	}

	.lab-title-line {
		display: inline-block;
		animation: glitch 4s ease-in-out infinite;
	}

	@keyframes glitch {
		0%, 90%, 100% {
			transform: translate(0);
			text-shadow: 0 0 60px rgba(200, 255, 0, 0.15);
		}
		92% {
			transform: translate(-2px, 1px);
			text-shadow: 2px 0 rgba(200, 255, 0, 0.4), -2px 0 rgba(255, 0, 100, 0.2);
		}
		94% {
			transform: translate(2px, -1px);
			text-shadow: -2px 0 rgba(200, 255, 0, 0.4), 2px 0 rgba(0, 100, 255, 0.2);
		}
		96% {
			transform: translate(0);
			text-shadow: 0 0 60px rgba(200, 255, 0, 0.15);
		}
	}

	.lab-subtitle {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 300;
		letter-spacing: 0.15em;
		color: var(--color-text-dim);
		margin-bottom: var(--space-lg);
	}

	.lab-description {
		font-size: var(--text-base);
		color: var(--color-text-dim);
		max-width: 480px;
		margin: 0 auto var(--space-xl);
		line-height: 1.7;
	}

	.lab-decoration {
		margin-top: var(--space-xl);
	}

	.lab-code {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-accent);
		opacity: 0.4;
		letter-spacing: 0.05em;
	}
</style>

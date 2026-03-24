<script>
	import { page } from '$app/stores';
	import { navigation } from '$lib/data/navigation.js';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = '';
	}

	$effect(() => {
		function handleScroll() {
			scrolled = window.scrollY > 50;
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="header" class:scrolled class:menu-open={menuOpen}>
	<div class="header-inner container">
		<a href="/" class="logo" onclick={closeMenu}>
			PAZ TOBAR
		</a>

		<button
			class="menu-toggle"
			onclick={toggleMenu}
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={menuOpen}
		>
			<span class="menu-line"></span>
			<span class="menu-line"></span>
		</button>

		<nav class="nav" class:open={menuOpen}>
			{#each navigation as item}
				<a
					href={item.href}
					class="nav-link"
					class:active={$page.url.pathname === item.href}
					onclick={closeMenu}
				>
					{item.title}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		transition: background-color var(--transition-base), backdrop-filter var(--transition-base);
	}

	.header.scrolled {
		background-color: rgba(10, 10, 10, 0.95);
		backdrop-filter: blur(10px);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
	}

	.logo {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 300;
		letter-spacing: 0.15em;
		color: var(--color-text);
		transition: color var(--transition-fast);
		z-index: 101;
	}

	.logo:hover {
		color: var(--color-accent);
	}

	.nav {
		display: flex;
		gap: var(--space-lg);
	}

	.nav-link {
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-dim);
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 1px;
		background-color: var(--color-accent);
		transition: width var(--transition-base);
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--color-text);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		width: 100%;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 6px;
		width: 32px;
		height: 32px;
		z-index: 101;
	}

	.menu-line {
		display: block;
		width: 24px;
		height: 1px;
		background-color: var(--color-text);
		transition: transform var(--transition-base), opacity var(--transition-base);
	}

	.menu-open .menu-line:first-child {
		transform: translateY(3.5px) rotate(45deg);
	}

	.menu-open .menu-line:last-child {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	@media (max-width: 768px) {
		.menu-toggle {
			display: flex;
		}

		.nav {
			position: fixed;
			inset: 0;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: var(--space-xl);
			background-color: var(--color-bg);
			opacity: 0;
			visibility: hidden;
			transition: opacity var(--transition-base), visibility var(--transition-base);
		}

		.nav.open {
			opacity: 1;
			visibility: visible;
		}

		.nav-link {
			font-size: var(--text-xl);
		}
	}
</style>

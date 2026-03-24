<script>
	import { page } from '$app/stores';
	import { navigation } from '$lib/data/navigation.js';
	import { theme, toggleTheme } from '$lib/stores/theme.svelte.js';

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

		<div class="header-actions">
			<button
				class="theme-toggle"
				onclick={toggleTheme}
				aria-label={theme.current === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
			>
				{#if theme.current === 'dark'}
					<!-- Sun icon: switch to light -->
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
						<circle cx="12" cy="12" r="4"/>
						<line x1="12" y1="2" x2="12" y2="4"/>
						<line x1="12" y1="20" x2="12" y2="22"/>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
						<line x1="2" y1="12" x2="4" y2="12"/>
						<line x1="20" y1="12" x2="22" y2="12"/>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
					</svg>
				{:else}
					<!-- Moon icon: switch to dark -->
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
					</svg>
				{/if}
			</button>

			<button
				class="menu-toggle"
				onclick={toggleMenu}
				aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={menuOpen}
			>
				<span class="menu-line"></span>
				<span class="menu-line"></span>
			</button>
		</div>

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
		background-color: var(--color-header-scrolled);
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

	.header-actions {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		z-index: 101;
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		color: var(--color-text-dim);
		opacity: 0.6;
		transition: opacity var(--transition-fast), color var(--transition-fast);
	}

	.theme-toggle:hover {
		opacity: 1;
		color: var(--color-text);
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 6px;
		width: 32px;
		height: 32px;
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

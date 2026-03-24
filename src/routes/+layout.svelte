<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme.svelte.js';

	let { children } = $props();

	$effect(() => {
		const saved = localStorage.getItem('theme');
		const prefersDark = !window.matchMedia('(prefers-color-scheme: light)').matches;
		theme.current = saved ?? (prefersDark ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', theme.current);
	});
</script>

<svelte:head>
	<title>Paz Tobar — Artista Visual & Diseñadora Escénica</title>
	<meta name="description" content="Portfolio de Paz Tobar, artista visual y diseñadora escénica chilena." />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

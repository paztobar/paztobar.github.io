<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
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

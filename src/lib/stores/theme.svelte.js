export const theme = $state({ current: 'dark' });

export function toggleTheme() {
	theme.current = theme.current === 'dark' ? 'light' : 'dark';
	localStorage.setItem('theme', theme.current);
	document.documentElement.setAttribute('data-theme', theme.current);
}

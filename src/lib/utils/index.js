/**
 * Format a date string to Spanish locale
 * @param {string} dateStr - ISO date string
 * @returns {string}
 */
export function formatDate(dateStr) {
	const date = new Date(dateStr + 'T00:00:00');
	return date.toLocaleDateString('es-CL', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

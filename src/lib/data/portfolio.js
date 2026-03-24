// Reads all .md files from src/content/portfolio/ at build time.
// To add a project, create a new .md file in that folder.

function parseFrontMatter(raw) {
	const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!fence) return { meta: {}, body: raw };

	const meta = {};
	const lines = fence[1].split('\n');
	let arrayKey = null;

	for (const line of lines) {
		if (!line.trim()) continue;
		if (/^[a-zA-Z_-]+:/.test(line)) {
			arrayKey = null;
			const idx = line.indexOf(':');
			const key = line.slice(0, idx).trim();
			const val = line.slice(idx + 1).trim();
			if (!val) {
				arrayKey = key;
				meta[key] = [];
			} else if (val === 'true') meta[key] = true;
			else if (val === 'false') meta[key] = false;
			else if (val !== '' && !isNaN(val)) meta[key] = Number(val);
			else meta[key] = val;
		} else if (line.trim().startsWith('- ') && arrayKey) {
			meta[arrayKey].push(line.trim().slice(2));
		}
	}

	return { meta, body: fence[2].trim() };
}

const rawFiles = import.meta.glob('/src/content/portfolio/*.md', { eager: true, query: '?raw', import: 'default' });

export const projects = Object.entries(rawFiles)
	.map(([path, raw]) => {
		const slug = path.split('/').pop().replace('.md', '');
		const { meta, body } = parseFrontMatter(raw);
		return {
			slug,
			title: meta.title ?? slug,
			category: meta.category ?? 'otro',
			year: meta.year ?? 0,
			thumbnail: meta.thumbnail ?? '',
			images: Array.isArray(meta.images) ? meta.images : meta.thumbnail ? [meta.thumbnail] : [],
			location: meta.location ?? '',
			collaborators: meta.collaborators ?? '',
			description: body,
			featured: meta.featured ?? false
		};
	})
	.sort((a, b) => b.year - a.year);

export const categories = [
	{ id: 'todo', label: 'Todo' },
	{ id: 'escenografia', label: 'Escenografía' },
	{ id: 'instalacion', label: 'Instalación' },
	{ id: 'pintura', label: 'Pintura' },
	{ id: 'otro', label: 'Otro' }
];

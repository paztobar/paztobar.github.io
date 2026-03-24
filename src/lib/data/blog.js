// Reads all .md files from src/content/blog/ at build time.
// To add a post, create a new .md file in that folder.

function parseFrontMatter(raw) {
	const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!fence) return { meta: {}, body: raw };

	const meta = {};
	const lines = fence[1].split('\n');

	for (const line of lines) {
		if (!line.trim()) continue;
		if (/^[a-zA-Z_-]+:/.test(line)) {
			const idx = line.indexOf(':');
			const key = line.slice(0, idx).trim();
			const val = line.slice(idx + 1).trim();
			meta[key] = val;
		}
	}

	return { meta, body: fence[2].trim() };
}

function markdownToHtml(md) {
	return md
		.split(/\n{2,}/)
		.map((para) => para.trim())
		.filter(Boolean)
		.map((para) => {
			if (para.startsWith('## ')) return `<h2>${para.slice(3)}</h2>`;
			if (para.startsWith('# ')) return `<h2>${para.slice(2)}</h2>`;
			const html = para
				.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
				.replace(/\*(.+?)\*/g, '<em>$1</em>');
			return `<p>${html}</p>`;
		})
		.join('\n');
}

const rawFiles = import.meta.glob('/src/content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

export const posts = Object.entries(rawFiles)
	.map(([path, raw]) => {
		const slug = path.split('/').pop().replace('.md', '');
		const { meta, body } = parseFrontMatter(raw);
		return {
			slug,
			title: meta.title ?? slug,
			date: meta.date ?? '',
			excerpt: meta.excerpt ?? '',
			image: meta.image ?? '',
			content: markdownToHtml(body)
		};
	})
	.sort((a, b) => (a.date < b.date ? 1 : -1));

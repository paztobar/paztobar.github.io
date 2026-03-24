import { projects } from '$lib/data/portfolio.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = projects.find(p => p.slug === params.slug);

	if (!project) {
		error(404, 'Proyecto no encontrado');
	}

	const index = projects.indexOf(project);
	const prev = index > 0 ? projects[index - 1] : null;
	const next = index < projects.length - 1 ? projects[index + 1] : null;

	return { project, prev, next };
}

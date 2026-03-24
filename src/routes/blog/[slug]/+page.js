import { posts } from '$lib/data/blog.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = posts.find(p => p.slug === params.slug);

	if (!post) {
		error(404, 'Post no encontrado');
	}

	return { post };
}

export const categories = [
	{ id: 'todo', label: 'Todo' },
	{ id: 'escenografia', label: 'Escenografía' },
	{ id: 'instalacion', label: 'Instalación' },
	{ id: 'pintura', label: 'Pintura' },
	{ id: 'otro', label: 'Otro' }
];

export const projects = [
	{
		slug: 'fragmentos-del-habitar',
		title: 'Fragmentos del Habitar',
		category: 'escenografia',
		year: 2025,
		thumbnail: '/images/portfolio/placeholder-1.jpg',
		images: ['/images/portfolio/placeholder-1.jpg'],
		location: 'Teatro Municipal, Santiago',
		collaborators: '',
		description: 'Diseño escénico que explora la relación entre el espacio doméstico y la memoria colectiva. Una propuesta visual que fragmenta y reconstruye los elementos del habitar cotidiano.',
		featured: true
	},
	{
		slug: 'territorios-invisibles',
		title: 'Territorios Invisibles',
		category: 'instalacion',
		year: 2024,
		thumbnail: '/images/portfolio/placeholder-2.jpg',
		images: ['/images/portfolio/placeholder-2.jpg'],
		location: 'Galería Patricia Ready, Santiago',
		collaborators: '',
		description: 'Instalación site-specific que cartografía las fronteras invisibles de la ciudad a través de materiales textiles y luz. Un diálogo entre lo visible y lo oculto del paisaje urbano.',
		featured: true
	},
	{
		slug: 'cuerpo-paisaje',
		title: 'Cuerpo Paisaje',
		category: 'pintura',
		year: 2024,
		thumbnail: '/images/portfolio/placeholder-3.jpg',
		images: ['/images/portfolio/placeholder-3.jpg'],
		location: 'Centro Cultural Gabriela Mistral (GAM)',
		collaborators: '',
		description: 'Serie pictórica que investiga la intersección entre el cuerpo humano y el paisaje natural chileno. Técnica mixta sobre tela de gran formato.',
		featured: true
	},
	{
		slug: 'la-casa-de-bernarda-alba',
		title: 'La Casa de Bernarda Alba',
		category: 'escenografia',
		year: 2023,
		thumbnail: '/images/portfolio/placeholder-4.jpg',
		images: ['/images/portfolio/placeholder-4.jpg'],
		location: 'Teatro Nacional Chileno',
		collaborators: 'Director: María González',
		description: 'Escenografía para la obra de Federico García Lorca. Un espacio cerrado y opresivo construido con muros blancos que gradualmente se tiñen, reflejando la tensión dramática de la obra.',
		featured: true
	},
	{
		slug: 'ecos-materiales',
		title: 'Ecos Materiales',
		category: 'instalacion',
		year: 2023,
		thumbnail: '/images/portfolio/placeholder-5.jpg',
		images: ['/images/portfolio/placeholder-5.jpg'],
		location: 'Museo de Arte Contemporáneo, Santiago',
		collaborators: '',
		description: 'Instalación sonora y visual que transforma desechos industriales en instrumentos resonantes. Una reflexión sobre la materialidad y el ciclo de vida de los objetos.',
		featured: true
	},
	{
		slug: 'ritual-cotidiano',
		title: 'Ritual Cotidiano',
		category: 'otro',
		year: 2023,
		thumbnail: '/images/portfolio/placeholder-6.jpg',
		images: ['/images/portfolio/placeholder-6.jpg'],
		location: 'Festival de Artes Escénicas, Valparaíso',
		collaborators: '',
		description: 'Performance y video-arte que documenta y reinterpreta los gestos repetitivos de la vida doméstica como actos ceremoniales.',
		featured: false
	}
];

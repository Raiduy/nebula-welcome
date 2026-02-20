// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || "http://localhost:4321",
	base: process.env.SITE_BASE || "/welcome",
	trailingSlash: 'ignore',
	integrations: [
		starlight({
			title: 'Welcome to Nebula',
			social: [
				{
					icon: 'puzzle',
					label: 'Nebula',
					href: 'https://nebula.cs.vu.nl',
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/withastro/starlight'
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Nebula Basic Use', slug: `guides/example` },
						{ label: 'Nebula Advanced Use', slug: `nebulaAdvancedUse` },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

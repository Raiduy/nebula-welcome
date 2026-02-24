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
					label: 'Nebula Basic Use',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting to Know the Platform', slug: `guides/example` },
						{ label: 'Changing Password', slug: `changingPassword` },
						{ label: 'Saving Chats', slug: `savingChats` },
						{ label: 'Setting a default System Prompt', slug: `settingDefaultPrompts` },
						{ label: 'Knowledge Bases', slug: `knowledgeBases` },
						{ label: 'Models', slug: `models` },
						{ label: 'Prompts', slug: `prompts` },
						
					],
				},
				{
					label: 'Nebula Advanced Use',
					items:[
						{ label: 'Advanced Parameters', slug: `advancedParams` },
						{ label: 'Modifying Advanced Parameters', slug: `modifyingAdvancedParams` },
					]
				},
				{
					label: 'Nebula API Use',
					items:[
						{ label: 'Generating an API Key', slug: `generatingApiKey` },
						{ label: 'Using Nebula via API', slug: `usingNebulaViaApi` },
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

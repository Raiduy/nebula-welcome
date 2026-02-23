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
			logo: {
				src: './src/assets/nebula-logo.png',
				replacesTitle: true
			},
			social: [
				{
					icon: 'puzzle',
					label: 'Nebula',
					href: 'https://nebula.cs.vu.nl',
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/networkinstitutevu/nebula-welcome'
				}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: `guides/example` },
					],
				},
				{
					label: 'Privacy',
					items: [
						{ label: 'How does Nebula run?', slug: `privacy/running` },
						{ label: 'Encryption', slug: `privacy/encryption` },
						{ label: 'Conversations', slug: `privacy/conversations` },
						{ label: 'Knowledge Bases, Folders, and System Prompts', slug: `privacy/kb-f-sp` },
					]
				},
				{
					label: 'Security and Backup',
					items: [
						{ label: 'Security', slug: `security-and-backup/security` },
						{ label: 'Backup', slug: `security-and-backup/backup` }
					]
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'FAQs', slug: `faqs/faq` }
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

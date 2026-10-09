// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightUiTweaks from 'starlight-ui-tweaks';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL || "http://localhost:4321",
    base: process.env.SITE_BASE || "/welcome",
    trailingSlash: 'ignore',
    integrations: [
        starlight({
            title: 'Nebula User Docs',
            logo: {
                light: './src/assets/identity/Nebula_Logo_colors.svg',
                dark: './src/assets/identity/Nebula_Logo_white.svg',
                replacesTitle: true
            },
            favicon: '/nebula.svg',
            social: [
                {
                    icon: 'link',
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
                    label: 'Basic Use',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Getting to Know the Platform', slug: `getting-to-know-platform` },
                        { label: 'Changing Password', slug: `changing-password` },
                        { label: 'Saving Chats', slug: `saving-chats` },
                        { label: 'Setting a default System Prompt', slug: `setting-default-prompts` },
                        { label: 'Knowledge Bases', slug: `knowledge-bases` },
                        { label: 'Models', slug: `models` },
                        { label: 'Prompts', slug: `prompts` },
                    ],
                },
                {
                    label: 'Advanced Use',
                    items: [
                        { label: 'Advanced Parameters', slug: `advanced-params` },
                        { label: 'Modifying Advanced Parameters', slug: `modifying-advanced-params` },
                    ]
                },
                {
                    label: 'API Use',
                    items: [
                        { label: 'Generating an API Key', slug: `generating-api-key` },
                        { label: 'Using Nebula via API', slug: `using-nebula-via-api` },
                        { label: 'Coding Agents on Nebula', slug: `coding-agents-on-nebula` },
                        { label: 'Integrations with Nebula', slug: `integrations-with-nebula` },
                    ]
                },
                {
                    label: 'Privacy',
                    items: [
                        { label: 'Encryption', slug: `encryption` },
                        { label: 'Conversations', slug: `conversations` },
                        { label: 'Knowledge Bases, Folders and System Prompts', slug: `knowledge-folders-prompts` },
                        { label: 'Who can access the Nebula system logs?', slug: `who-can-access` },
                    ]
                },
                {
                    label: 'Security and Backup',
                    items: [
                        { label: 'Security', slug: `security` },
                        { label: 'Backups', slug: `backups` }
                    ]
                },
                {
                    label: 'FAQ',
                    items: [
                        { label: 'FAQ', slug: `faq` },
                    ]
                },
                {
                    label: 'Getting Access to Nebula',
                    items: [
                        { label: 'Getting Access', slug: `getting-access` },
                    ]
                },
                {
                    label: 'Legal',
                    items: [
                        { label: 'Legal documents', slug: `legalDocs` },
                    ]
                },
                // {
                //     label: 'Reference',
                //     autogenerate: { directory: 'reference' },
                // },
            ],
            customCss: [
                './src/styles/global.css',
            ],
            plugins: [
                starlightThemeGalaxy(),
                starlightUiTweaks({
                    navbarLinks: [
                        // { label: "API Reference", href: "/welcome/customPage" },
                    ],
                }),
            ]
        }),
    ],

    adapter: node({
        mode: 'standalone',
    }),
});

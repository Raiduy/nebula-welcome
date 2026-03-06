// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightUiTweaks from 'starlight-ui-tweaks';
import starlightChangelogs from 'starlight-changelogs';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL || "http://localhost:4321",
    base: process.env.SITE_BASE || "/welcome",
    trailingSlash: 'ignore',
    integrations: [
        starlight({
            title: 'Nebula User Docs',
            // logo: {
            //     src: './src/assets/nebula-logo.png',
            //     replacesTitle: true
            // },
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
                    label: 'Basic Use',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Getting to Know the Platform', slug: `gettingToKnowPlatform` },
                        { label: 'Changing Password', slug: `changingPassword` },
                        { label: 'Saving Chats', slug: `savingChats` },
                        { label: 'Setting a default System Prompt', slug: `settingDefaultPrompts` },
                        { label: 'Knowledge Bases', slug: `knowledgeBases` },
                        { label: 'Models', slug: `models` },
                        { label: 'Prompts', slug: `prompts` },
                    ],
                },
                {
                    label: 'Advanced Use',
                    items: [
                        { label: 'Advanced Parameters', slug: `advancedParams` },
                        { label: 'Modifying Advanced Parameters', slug: `modifyingAdvancedParams` },
                    ]
                },
                {
                    label: 'API Use',
                    items: [
                        { label: 'Generating an API Key', slug: `generatingApiKey` },
                        { label: 'Using Nebula via API', slug: `usingNebulaViaApi` },
                    ]
                },
                {
                    label: 'Privacy',
                    items: [
                        { label: 'Encryption', slug: `encryption` },
                        { label: 'Conversations', slug: `conversations` },
                        { label: 'Knowledge Bases, Folders and System Prompts', slug: `knowledgeFoldersPrompts` },
                        { label: 'Who can access the Nebula system logs?', slug: `whoCanAccess` },
                    ]
                },
                {
                    label: 'Security',
                    items: [
                        { label: 'Security', slug: `security` },
                    ]
                },
                {
                    label: 'Backup',
                    items: [
                        { label: 'Backup', slug: `backup` },
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
                        { label: 'Getting Access', slug: `gettingAccess` },
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
                        { label: "ChangeLog", href: "/welcome/changelog" },
                        { label: "API Reference", href: "/welcome/customPage" },
                    ],
                }),
                starlightChangelogs(),
            ]
        }),
    ],

    adapter: node({
        mode: 'standalone',
    }),
});

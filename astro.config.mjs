// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[
				rehypeKatex,
				{
					strict: false,
				},
			],
		],
	},
	integrations: [
		starlight({
			title: 'Lycée Futur',
			description: 'Plateforme gratuite de cours, exercices corrigés et sujets du Bac.',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
					},
				},
			],
			sidebar: [
				{
					label: '📚 Seconde',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'seconde', collapsed: true } }
					],
				},
				{
					label: '🚀 Première',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'premiere', collapsed: true } }
					],
				},
				{
					label: '🎓 Terminale',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'terminale', collapsed: true } }
					],
				},
			],
		}),
	],
});
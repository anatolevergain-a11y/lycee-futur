// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://lyceefutur.com',
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
				// Link pour le style des formules mathématiques KaTeX
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
					},
				},
				// 📢 EXTRAIT GOOGLE ADSENSE (Injecté sur 100% des pages)
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9036203782966082',
						crossorigin: 'anonymous',
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
		sitemap(),
	],
});
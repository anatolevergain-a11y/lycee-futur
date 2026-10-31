// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Nom de domaine officiel (nécessaire pour générer le sitemap)
  site: 'https://lyceefutur.com',

  // 2. Prise en charge des formules mathématiques (LaTeX)
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
        // Style pour l'affichage des formules mathématiques KaTeX
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
          },
        },

        // 📢 Google AdSense (Remplacez ca-pub-XXXXXXXXXXXXXXXX par votre vrai ID)
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9036203782966082',
            crossorigin: 'anonymous',
          },
        },

        // 📊 Google Analytics GA4 (Remplacez G-XXXXXXXXXX par votre ID de mesure)
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-NE4ZY1WE8C',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NE4ZY1WE8C');
          `,
        },
      ],

    }),

    // 4. Plugin de génération automatique du Sitemap
    sitemap(),
  ],
});
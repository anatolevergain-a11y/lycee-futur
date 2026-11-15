import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://lyceefutur.com';
const TODAY = new Date().toISOString().split('T')[0];

function getAllTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllTsFiles(fullPath));
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractChapterIds(dataDir) {
  const files = getAllTsFiles(dataDir);
  const chapterIds = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const gradeRegex = /gradeLevel\s*:\s*['"](terminale|1ere|2nde)['"]/g;
    let match;

    while ((match = gradeRegex.exec(content)) !== null) {
      const pos = match.index;
      let before = content.slice(Math.max(0, pos - 600), pos);

      // Éviter de remonter dans les exercices du chapitre précédent
      const lastNestedIndex = Math.max(
        before.lastIndexOf('exercises:'),
        before.lastIndexOf('quiz:')
      );
      if (lastNestedIndex !== -1) {
        before = before.slice(lastNestedIndex);
      }

      const idMatches = [...before.matchAll(/\bid\s*:\s*['"]([^'"]+)['"]/g)];
      if (idMatches.length > 0) {
        chapterIds.add(idMatches[idMatches.length - 1][1]);
      } else {
        const after = content.slice(pos, Math.min(content.length, pos + 400));
        const afterMatch = after.match(/\bid\s*:\s*['"]([^'"]+)['"]/);
        if (afterMatch) {
          chapterIds.add(afterMatch[1]);
        }
      }
    }
  }

  return Array.from(chapterIds);
}

function generateSitemap() {
  const dataDir = path.resolve('src', 'data');
  const chapterIds = extractChapterIds(dataDir);

  const urls = [
    { loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${SITE_URL}/simulateurs`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${SITE_URL}/exercices`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${SITE_URL}/outils-bac`, changefreq: 'weekly', priority: '0.9' },
    ...chapterIds.map((id) => ({
      loc: `${SITE_URL}/chapitre/${encodeURIComponent(id)}`,
      changefreq: 'weekly',
      priority: '0.8',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const outPath = path.resolve('public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf-8');
  console.log(`✅ sitemap.xml généré avec ${urls.length} URLs (${chapterIds.length} chapitres).`);
}

generateSitemap();
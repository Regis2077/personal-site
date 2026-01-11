/**
 * Dynamic sitemap generation for all pages in both languages
 */

import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gabrielregis.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'about', 'work', 'projects', 'articles', 'bookmarks'];
  const languages = ['pt', 'en'];

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each page in each language
  pages.forEach((page) => {
    languages.forEach((lang) => {
      const url = lang === 'pt'
        ? `${SITE_URL}/${page}`
        : `${SITE_URL}/en/${page}`;
      
      // Verifica se é a página Home
      const isHomePage = page === '';

      routes.push({
        url: url.replace(/\/$/, ''), // Remove trailing slash
        lastModified: new Date(),
        changeFrequency: isHomePage ? 'weekly' : 'monthly',
        priority: isHomePage ? 1.0 : 0.8,
        
        // --- ATUALIZADO AQUI ---
        // Agora apontando para a og-image.png
        ...(isHomePage && {
          images: [`${SITE_URL}/og-image.png`],
        }),
        // -----------------------

        alternates: {
          languages: {
            pt: `${SITE_URL}/${page}`,
            en: `${SITE_URL}/en/${page}`,
          },
        },
      });
    });
  });

  return routes;
}
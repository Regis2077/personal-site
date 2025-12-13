/**
 * SEO utility functions for generating structured data (JSON-LD)
 */

import type { PersonStructuredData, WebSiteStructuredData } from '@/types/metadata';
import type { Language } from '@/i18n/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gabrielregis.com';

/**
 * Generate Person structured data for the website owner
 */
export function generatePersonStructuredData(language: Language): PersonStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Regis',
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    sameAs: [
      'https://github.com/regis2077',
      'https://www.linkedin.com/in/gabrielregisdev/',
      'https://twitter.com/regis2077',
    ],
    jobTitle: language === 'pt' ? 'Desenvolvedor Frontend & Fullstack' : 'Frontend & Fullstack Developer',
    description:
      language === 'pt'
        ? 'Desenvolvedor frontend e fullstack especializado em React, Next.js e TypeScript.'
        : 'Frontend and fullstack developer specialized in React, Next.js and TypeScript.',
  };
}

/**
 * Generate WebSite structured data
 */
export function generateWebSiteStructuredData(language: Language): WebSiteStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gabriel Regis | Digital Garden',
    url: SITE_URL,
    description:
      language === 'pt'
        ? 'Portfólio e blog de Gabriel Regis, desenvolvedor frontend e fullstack.'
        : 'Portfolio and blog of Gabriel Regis, frontend and fullstack developer.',
    author: {
      '@type': 'Person',
      name: 'Gabriel Regis',
    },
    inLanguage: ['pt-BR', 'en-US'],
  };
}

/**
 * Generate JSON-LD script tag content
 */
export function generateStructuredDataScript(data: object): string {
  return JSON.stringify(data);
}

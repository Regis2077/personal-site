/**
 * Utility functions for generating dynamic metadata based on language and page
 */

import { Metadata } from 'next';
import type { Language } from '@/i18n/types';
import type { PageMetadata } from '@/types/metadata';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gabrielregis.com';
const SITE_NAME = 'Gabriel Regis | Digital Garden';

interface MetadataConfig {
  pt: PageMetadata;
  en: PageMetadata;
}

const pageMetadata: Record<string, MetadataConfig> = {
  home: {
    pt: {
      title: 'Gabriel Regis | Desenvolvedor Frontend & Fullstack',
      description: 'Desenvolvedor frontend e fullstack especializado em React, Next.js e TypeScript. Confira meu portfólio e projetos.',
      keywords: ['desenvolvedor frontend', 'desenvolvedor fullstack', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'portfolio'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'Gabriel Regis | Frontend & Fullstack Developer',
      description: 'Frontend and fullstack developer specialized in React, Next.js and TypeScript. Check out my portfolio and projects.',
      keywords: ['frontend developer', 'fullstack developer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'portfolio'],
      ogImage: '/og-image.png',
    },
  },
  about: {
    pt: {
      title: 'Sobre | Gabriel Regis',
      description: 'Conheça mais sobre Gabriel Regis, desenvolvedor frontend e fullstack, suas experiências e hobbies.',
      keywords: ['sobre', 'biografia', 'desenvolvedor', 'Gabriel Regis'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'About | Gabriel Regis',
      description: 'Learn more about Gabriel Regis, frontend and fullstack developer, his experiences and hobbies.',
      keywords: ['about', 'biography', 'developer', 'Gabriel Regis'],
      ogImage: '/og-image.png',
    },
  },
  work: {
    pt: {
      title: 'Experiência | Gabriel Regis',
      description: 'Experiência profissional de Gabriel Regis como desenvolvedor frontend e fullstack.',
      keywords: ['experiência', 'trabalho', 'carreira', 'desenvolvedor'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'Experience | Gabriel Regis',
      description: 'Professional experience of Gabriel Regis as a frontend and fullstack developer.',
      keywords: ['experience', 'work', 'career', 'developer'],
      ogImage: '/og-image.png',
    },
  },
  projects: {
    pt: {
      title: 'Projetos | Gabriel Regis',
      description: 'Projetos e trabalhos desenvolvidos por Gabriel Regis. Confira meu portfólio no GitHub.',
      keywords: ['projetos', 'portfolio', 'GitHub', 'código aberto'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'Projects | Gabriel Regis',
      description: 'Projects and works developed by Gabriel Regis. Check out my portfolio on GitHub.',
      keywords: ['projects', 'portfolio', 'GitHub', 'open source'],
      ogImage: '/og-image.png',
    },
  },
  articles: {
    pt: {
      title: 'Artigos | Gabriel Regis',
      description: 'Artigos e publicações sobre desenvolvimento web, React, TypeScript e mais.',
      keywords: ['artigos', 'blog', 'desenvolvimento web', 'React', 'TypeScript'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'Articles | Gabriel Regis',
      description: 'Articles and publications about web development, React, TypeScript and more.',
      keywords: ['articles', 'blog', 'web development', 'React', 'TypeScript'],
      ogImage: '/og-image.png',
    },
  },
  bookmarks: {
    pt: {
      title: 'Bookmarks | Gabriel Regis',
      description: 'Coleção de links e recursos úteis sobre desenvolvimento web e tecnologia.',
      keywords: ['bookmarks', 'links', 'recursos', 'desenvolvimento web'],
      ogImage: '/og-image.png',
    },
    en: {
      title: 'Bookmarks | Gabriel Regis',
      description: 'Collection of useful links and resources about web development and technology.',
      keywords: ['bookmarks', 'links', 'resources', 'web development'],
      ogImage: '/og-image.png',
    },
  },
};

/**
 * Generate metadata for a specific page and language
 */
export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  language: Language
): Metadata {
  const metadata = pageMetadata[page][language];
  const canonical = `${SITE_URL}${language === 'en' ? '/en' : ''}/${page === 'home' ? '' : page}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Gabriel Regis', url: SITE_URL }],
    creator: 'Gabriel Regis',
    publisher: 'Gabriel Regis',
    alternates: {
      canonical,
      languages: {
        'pt-BR': `${SITE_URL}/${page === 'home' ? '' : page}`,
        'en-US': `${SITE_URL}/en/${page === 'home' ? '' : page}`,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${metadata.ogImage}`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: language === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      creator: '@regis2077',
      images: [`${SITE_URL}${metadata.ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

/**
 * Generate base metadata for the root layout
 */
export function generateRootMetadata(language: Language): Metadata {
  return generatePageMetadata('home', language);
}

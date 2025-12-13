/**
 * Type definitions for SEO metadata and structured data
 */

import { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface OpenGraphMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  locale: string;
  type: 'website' | 'article' | 'profile';
}

export interface TwitterCardMetadata {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title: string;
  description: string;
  images?: string[];
}

export interface PersonStructuredData {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  image?: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: {
    '@type': 'Organization';
    name: string;
  };
  description: string;
}

export interface WebSiteStructuredData {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  inLanguage: string[];
}

export type StructuredData = PersonStructuredData | WebSiteStructuredData;

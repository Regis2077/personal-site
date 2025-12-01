import * as pt from './pt';
import * as en from './en';
import { Translations, Language } from './types';

// Main translations object with type-safety
export const translations: Record<Language, Translations> = {
  pt: {
    home: pt.home,
    about: pt.about,
    work: pt.work,
    projects: pt.projects,
    articles: pt.articles,
  },
  en: {
    home: en.home,
    about: en.about,
    work: en.work,
    projects: en.projects,
    articles: en.articles,
  },
};

// Helper function to get nested translation value by path
// Example: getNestedTranslation(translations.pt, 'home.hero.typewriter')
export function getNestedTranslation(
  obj: Translations | Record<string, unknown>,
  path: string
): string {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === 'object' && result !== null && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      // Return the path itself if not found (fallback)
      return path;
    }
  }

  // If result is not a string, return the path as fallback
  return typeof result === 'string' ? result : path;
}

// Export all types for external use
export type {
  Translations,
  Language,
  TranslationKey,
  HomeTranslations,
  AboutTranslations,
  WorkTranslations,
  ProjectsTranslations,
  ArticlesTranslations,
  WorkExperience,
  WorkCompany,
  Project,
  Article
} from './types';

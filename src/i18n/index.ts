import * as pt from './pt';
import * as en from './en';
import { Translations, Language } from './types';

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
      return path;
    }
  }

  return typeof result === 'string' ? result : path;
}

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

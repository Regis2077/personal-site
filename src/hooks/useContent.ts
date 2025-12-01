import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/i18n';
import type {
  HomeTranslations,
  AboutTranslations,
  WorkTranslations,
  ProjectsTranslations,
  ArticlesTranslations
} from '@/i18n';

/**
 * Hook para acessar conteúdo traduzido baseado no idioma atual
 * Agora usa o novo sistema de i18n TypeScript
 * 
 * @param page - Nome da página
 * @returns Conteúdo traduzido tipado
 * 
 * @example
 * const homeContent = useContent('home');
 * console.log(homeContent.hero.typewriter);
 */
export function useContent<T extends PageType>(page: T): PageContentMap[T] {
  const { language } = useLanguage();
  return translations[language][page];
}

// Type mapping for better type inference
type PageType = 'home' | 'about' | 'work' | 'projects' | 'articles';

interface PageContentMap {
  home: HomeTranslations;
  about: AboutTranslations;
  work: WorkTranslations;
  projects: ProjectsTranslations;
  articles: ArticlesTranslations;
}

// Export individual hooks for convenience
export const useHomeContent = () => useContent('home');
export const useAboutContent = () => useContent('about');
export const useWorkContent = () => useContent('work');
export const useProjectsContent = () => useContent('projects');
export const useArticlesContent = () => useContent('articles');

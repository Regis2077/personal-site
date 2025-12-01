// Central type definitions for i18n translations
// This ensures type-safety across all languages

export interface HomeTranslations {
  seoTitle: string;
  hero: {
    typewriter: string;
  };
  intro: {
    text: string;
    imageLabel: string;
    ufba: string;
  };
  summary: {
    text: string;
  };
}

export interface Hobby {
  title: string;
  description: string;
}

export interface AboutTranslations {
  page: {
    title: string;
  };
  content: {
    intro: string;
    image: {
      alt: string;
      label: string;
    };
    bio: string;
  };
  hobbies: {
    title: string;
    items: Hobby[];
  };
}

export interface WorkExperience {
  title: string;
  time: string;
  describe: string;
}

export interface WorkCompany {
  company: string;
  companyLink: string;
  experience: WorkExperience[];
}

export interface WorkTranslations {
  page: {
    title: string;
    description: string;
  };
  companies: WorkCompany[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  deployUrl: string | null;
  githubUrl: string;
  stars: number;
  updatedAt: string;
}

export interface ProjectsTranslations {
  page: {
    title: string;
    description: string;
  };
  list: Project[];
}

export interface Article {
  id: number;
  title: string;
  date: string;
  readTime: string;
  url: string;
}

export interface ArticlesTranslations {
  page: {
    title: string;
    description: string;
  };
  articles: Article[];
}

// Main translations interface
export interface Translations {
  home: HomeTranslations;
  about: AboutTranslations;
  work: WorkTranslations;
  projects: ProjectsTranslations;
  articles: ArticlesTranslations;
}

// Language type
export type Language = 'pt' | 'en';

// Helper type for nested keys
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
  ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
  : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<Translations>;

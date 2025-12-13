/**
 * Shared type definitions used across the application
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LinkData {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink extends LinkData {
  icon: React.ReactNode;
  ariaLabel: string;
}

export type ThemeMode = 'light' | 'dark';
export type LanguageCode = 'pt' | 'en';

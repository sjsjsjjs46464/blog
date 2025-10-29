'use client'

import { createContext, useContext } from 'react';

type Language = 'en' | 'zh';

type LanguageContextType = {
  language: Language;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage(): Language {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context.language;
}

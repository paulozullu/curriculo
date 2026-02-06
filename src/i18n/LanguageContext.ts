export type Language = 'pt' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

import { createContext, useContext } from 'react';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageKey } from '../../translations';

// Define os tipos para o contexto
interface LanguageContextProps {
  language: LanguageKey;
  toggleLanguage: (lng: LanguageKey) => void;
}

// Criação do contexto com valores padrão
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  toggleLanguage: () => {},
});

// Provider para gerenciar o idioma
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageKey>('en'); // Idioma inicial

  const toggleLanguage = (lng: LanguageKey) => {
    console.log('language changed to:', lng);
    
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para consumir o contexto
export const useLanguage = (): LanguageContextProps => {
  return useContext(LanguageContext);
};

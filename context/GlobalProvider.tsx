"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/utils/Language";

interface GlobalContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  language: Language.English,
  setLanguage: () => {},
});

const countryLanguageMap: { [key: string]: Language } = {
  US: Language.English,
  GB: Language.English,
  CA: Language.English,
  AU: Language.English,
  NZ: Language.English,
  IE: Language.English,
  ES: Language.Spanish,
  MX: Language.Spanish,
  AR: Language.Spanish,
  CO: Language.Spanish,
  CL: Language.Spanish,
  PE: Language.Spanish,
  VE: Language.Spanish,
  DE: Language.German,
  AT: Language.German,
  CH: Language.German,
  LI: Language.German,
};

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(Language.English);

  useEffect(() => {
    const userLanguage = navigator.language || navigator.languages[0];
    const countryCode = userLanguage.split("-")[1]?.toUpperCase();

    if (countryCode && countryLanguageMap[countryCode]) {
      setLanguage(countryLanguageMap[countryCode]);
    } else {
      setLanguage(Language.English);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

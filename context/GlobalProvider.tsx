"use client";

import React, { createContext, useContext, useState } from "react";
import { Language } from "@/utils/Language";

interface GlobalContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  language: Language.English,
  setLanguage: () => {},
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(Language.English);

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

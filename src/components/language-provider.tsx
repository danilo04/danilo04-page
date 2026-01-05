import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage or default to en
  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    const initialLanguage = stored || "en";
    setLanguageState(initialLanguage);
    setMounted(true);
  }, []);

  // Update language in localStorage when it changes
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("language", language);
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, mounted]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}


import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";

export type Language = "sv" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  localizePath: (path: string, languageOverride?: Language) => string;
};

const STORAGE_KEY = "nordic-language";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function stripLanguagePrefix(path: string) {
  const normalized = ensureLeadingSlash(path);

  if (normalized === "/en") {
    return "/";
  }

  if (normalized.startsWith("/en/")) {
    return normalized.slice(3);
  }

  return normalized;
}

function detectLanguage(path: string): Language {
  const normalized = ensureLeadingSlash(path);
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "sv";
}

export function buildLocalizedPath(path: string, language: Language) {
  const stripped = stripLanguagePrefix(path);

  if (language === "en") {
    return stripped === "/" ? "/en" : `/en${stripped}`;
  }

  return stripped;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [location, navigate] = useLocation();
  const language = detectLanguage(location);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    }
    navigate(buildLocalizedPath(location, nextLanguage));
  };

  const localizePath = (path: string, languageOverride?: Language) =>
    buildLocalizedPath(path, languageOverride ?? language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, localizePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ne";
export type T = { en: string; ne: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: T) => string };
const LangContext = createContext<Ctx | null>(null);
const KEY = "jebs-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "ne" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "ne" ? "ne" : "en";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(KEY, l);
  };
  return (
    <LangContext.Provider value={{ lang, setLang, t: (v) => v[lang] }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang must be used inside LanguageProvider");
  return c;
}

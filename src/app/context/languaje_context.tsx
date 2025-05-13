'use client';
import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

const translations = {
  es: { title: "Portafolio", name: "Alfredo Espinosa", role: "Desarrollador Front-End" },
  en: { title: "Portfolio", name: "Alfredo Espinosa", role: "Front-End Developer" },
};

const LanguageContext = createContext({
  lang: "es" as Language,
  toggleLang: () => {},
  t: translations["es"],
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang as Language);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "pl"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[lang];

    for (let k of keys) {
      value = value?.[k];
    }

    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
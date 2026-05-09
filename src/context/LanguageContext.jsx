import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { translations } from "../i18n/translations";

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

    for (const key of keys) {
      value = value?.[key];
    }

    return value || path;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext);
}
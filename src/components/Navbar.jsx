import { Link } from "react-router-dom";
import FlagPL from "./FlagPL";
import FlagEN from "./FlagEN";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function Navbar() {

  const { lang, setLang } = useLang();
  const t = useTranslations();
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-4 md:px-8 py-5 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-cyan-400">Daniel Kupracz </span> Dev Portfolio
      </h1>

       <div className="flex items-center gap-3 ml-6">

        <button
          aria-label="Zmień język na polski"
          onClick={() => setLang("pl")}
          className={`p-1 rounded-md transition transform hover:scale-110 ${
            lang === "pl" ? "ring-2 ring-cyan-400" : "opacity-70"
          }`}
        >
          <FlagPL />
        </button>

        <button
          aria-label="Change language to English"
          onClick={() => setLang("en")}
          className={`p-1 rounded-md transition transform hover:scale-110 ${
            lang === "en" ? "ring-2 ring-cyan-400" : "opacity-70"
          }`}
        >
          <FlagEN />
        </button>

      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg font-medium">
        <Link
          to="/"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/o-mnie"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/projekty"
          className="relative text-zinc-300 hover:text-cyan-400 transition
          after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
          after:bg-cyan-400 after:transition-all after:duration-300
          hover:after:w-full"
        >
          {t("nav.projects")}
        </Link>
      </div>
    </nav>
  );
}
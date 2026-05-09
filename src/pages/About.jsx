import { motion } from "framer-motion";
import progImg from "../assets/gfx/prog1.jpg";
import cybImg from "../assets/gfx/cyb1.jpg";
import { useTranslations } from "../utils/translations";

export default function About() {
  const t = useTranslations();

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-6"
      >
        {t("about.title")}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 space-y-4 text-lg leading-relaxed"
      >
        <p>{t("about.intro1")}</p>
        <p>{t("about.intro2")}</p>
        <p>
          {t("about.intro3Prefix")} {" "}
          <span className="text-cyan-400">{t("about.intro3Highlight")}</span>{" "}
          {t("about.intro3Suffix")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid md:grid-cols-2 gap-8 items-center"
      >
        <img
          src={progImg}
          alt={t("about.programmingAlt")}
          className="rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500 brightness-90 hover:brightness-110"
        />

        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t("about.whyProgrammingTitle")}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {t("about.whyProgrammingText")}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t("about.cybersecurityTitle")}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {t("about.cybersecurityText")}
          </p>
        </div>

        <img
          src={cybImg}
          alt={t("about.cybersecurityAlt")}
          className="rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500 brightness-90 hover:brightness-110"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          {t("about.currentlyTitle")}
        </h2>

        <ul className="text-zinc-400 space-y-2">
          {t("about.currentlyItems").map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          {t("about.softSkillsTitle")}
        </h2>

        <div className="flex flex-wrap gap-3">
          {t("about.softSkills").map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300 hover:border-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          {t("about.contactTitle")}
        </h2>

        <div id="kontakt" className="space-y-2 text-zinc-400">
          <p>📧 dkupracz@dkupracz.cba.pl</p>
          <p>
            💻 {" "}
            <a
              href="https://github.com/ColJops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400"
            >
              GitHub
            </a>
          </p>
          <p>
            🔗 {" "}
            <a
              href="https://www.linkedin.com/in/daniel-kupracz-73961827b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

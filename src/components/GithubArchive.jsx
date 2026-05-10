import { githubArchive } from "../data/githubArchive";
import { useTranslations } from "../utils/translations";

export default function GithubArchive() {
  const t = useTranslations();

  return (
    <section className="mt-24">
      <div>
        <h2 className="text-3xl font-bold mb-3">
          {t("githubArchive.title")}
        </h2>

        <p className="text-zinc-400 mb-10">
          {t("githubArchive.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubArchive.map((repo) => (
            <a
              key={repo}
              href={`https://github.com/ColJops/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("githubArchive.openRepository")}: ${repo}`}
              className="
                group
                p-4
                rounded-xl
                border
                border-zinc-800
                bg-white/5
                hover:border-cyan-400/40
                hover:bg-white/10
                transition
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium break-all">
                  {repo}
                </span>

                <span
                  aria-hidden="true"
                  className="text-zinc-500 group-hover:text-cyan-400 transition"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
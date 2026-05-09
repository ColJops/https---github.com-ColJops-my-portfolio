import { useEffect, useState } from "react";
import { useTranslations } from "../utils/translations";

export default function CommitList({ owner, repo, onLatestCommit }) {
  const t = useTranslations();
  const [commits, setCommits] = useState([]);
  const [commitsWithTime, setCommitsWithTime] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setError(null);
          const latest = data.slice(0, 5);
          setCommits(latest);

          if (latest.length > 0 && onLatestCommit) {
            onLatestCommit(latest[0].commit.author.date);
          }
        } else {
          setCommits([]);
          setError(t("commits.loadError"));
        }
      })
      .catch(() => {
        setCommits([]);
        setError(t("commits.loadError"));
      });
  }, [owner, repo, onLatestCommit, t]);

  useEffect(() => {
    const now = Date.now();
    const withTime = commits.map((commit) => {
      const date = new Date(commit.commit.author.date);
      const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      let timeText = `${diff} ${t("commits.daysAgo")}`;

      if (diff === 0) timeText = t("commits.today");
      else if (diff === 1) timeText = t("commits.yesterday");

      return { ...commit, timeText };
    });

    setCommitsWithTime(withTime); // eslint-disable-line react-hooks/set-state-in-effect
  }, [commits, t]);

  return (
    <div className="relative border-l border-zinc-800 pl-6 space-y-8">
      {error && <p className="text-red-500">{error}</p>}

      {commitsWithTime.map((commit) => (
        <div key={commit.sha} className="relative">
          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-zinc-900"></div>

          <a
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-900 border border-zinc-800 p-4 rounded-lg hover:border-cyan-400 transition hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <p className="text-zinc-200">{commit.commit.message}</p>

            <p className="text-zinc-500 text-sm mt-2">
              {commit.commit.author.name} • {commit.timeText}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

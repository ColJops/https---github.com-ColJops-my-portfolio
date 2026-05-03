import { useParams } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import CommitList from "../components/CommitList";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [lastCommitDate, setLastCommitDate] = useState(null);

  if (!project) return <div>Nie znaleziono projektu</div>;

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      
      <h1 className="text-4xl font-bold text-white">
        {project.name}
      </h1>

      <p className="text-zinc-400 mt-4">
        {project.desc}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-cyan-400"
      >
        Zobacz repo →
      </a>
        {lastCommitDate && (() => {
  const days =
    (Date.now() - new Date(lastCommitDate)) / (1000 * 60 * 60 * 24);

  let label = "Aktywny projekt";
  let color = "green";

  if (days > 30) {
    label = "Nieaktywny projekt";
    color = "red";
  } else if (days > 7) {
    label = "Umiarkowana aktywność";
    color = "yellow";
  }

  const styles = {
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className={`mt-4 inline-block px-3 py-1 text-sm rounded-full border ${styles[color]}`}>
      ● {label}
    </div>
  );
})()}
      {/*  DYNAMICZNE COMMITY */}
      {project.github && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Ostatnie commity
          </h2>

          <CommitList
            owner={project.github.owner}
            repo={project.github.repo}
            onLatestCommit={setLastCommitDate}
          />
        </div>
      )}
    </section>
  );
}
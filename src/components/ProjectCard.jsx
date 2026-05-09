import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "../utils/translations";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const t = useTranslations();
  const projectName =
    project.translationKey && t(`projects.${project.translationKey}.name`) ||
    project.name;
  const projectDescription =
    project.translationKey && t(`projects.${project.translationKey}.desc`) ||
    project.desc;

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/projekty/${project.id}`);
      }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/projekty/${project.id}`)}
      className="cursor-pointer group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition">
        {projectName}
        {project.category === "course" && (
          <span className="inline-block mt-2 text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded">
            {t("projectCard.courseBadge")}
          </span>
        )}
      </h3>

      <p className="text-zinc-400 mt-2">{projectDescription}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition"
      >
        <FaGithub />
        {t("projectCard.repository")}
      </a>
    </motion.div>
  );
}

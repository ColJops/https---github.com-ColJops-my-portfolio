import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-cyan-400 transition">
        {project.name}
      </h3>

      <p className="text-zinc-400 mt-2">
        {project.desc}
      </p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-cyan-400 hover:underline"
      >
        GitHub →
      </a>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function AnimatedProjectGrid({
  projects,
  delayMultiplier = 0.12,
  className = "",
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * delayMultiplier,
            ease: "easeOut",
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import cyb3 from "../assets/gfx/cyb3.jpg";
import { useTranslations } from "../utils/translations";

export default function Projects() {
  const t = useTranslations();
  const mainProjects = projects.filter((p) => p.category !== "course");
  const courseProjects = projects.filter((p) => p.category === "course");

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <img
            src={cyb3}
            alt={t("projectsPage.imageAlt")}
            className="w-full max-w-md rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500"
          />

          <h2 className="text-3xl font-semibold text-center md:text-left">
            {t("projectsPage.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="my-16 border-t border-zinc-800"></div>

      <h2 className="text-2xl font-semibold mb-6 text-zinc-400">
        {t("projectsPage.courseTitle")}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 opacity-80">
        {courseProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

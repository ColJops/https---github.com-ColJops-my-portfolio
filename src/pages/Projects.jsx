import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import cyb3 from "../assets/gfx/cyb3.jpg";

export default function Projects() {
  const mainProjects = projects.filter(p => p.category !== "course");
  const courseProjects = projects.filter(p => p.category === "course");

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* MOJE PROJEKTY */}
      <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">

        {/* IMAGE */}
        <img
          src={cyb3}
          alt="cyber"
          className="w-full max-w-md rounded-xl border border-zinc-800 shadow-lg 
          hover:scale-105 transition duration-500"
        />

        {/* TEXT */}
        <h2 className="text-3xl font-semibold text-center md:text-left">
          Moje projekty
        </h2>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {mainProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

    </div>

      {/* SEPARATOR */}
      <div className="my-16 border-t border-zinc-800"></div>

      {/* KURS */}
      <h2 className="text-2xl font-semibold mb-6 text-zinc-400">
        Projekty z kursu Full Stack Web Developer
      </h2>

      <div className="grid md:grid-cols-2 gap-6 opacity-80">
        {courseProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
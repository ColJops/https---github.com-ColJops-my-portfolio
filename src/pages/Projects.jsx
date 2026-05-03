import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Dungeon Crawl",
      desc: "Gra RPG w Javie z AI, zapisem i systemem walki",
      link: "#",
    },
    {
      name: "Portfolio",
      desc: "Nowoczesna strona React + Tailwind",
      link: "#",
    },
  ];

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projekty</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>

            <h3 className="text-xl font-semibold relative z-10">
              {p.name}
            </h3>

            <p className="text-zinc-400 mt-2 relative z-10">
              {p.desc}
            </p>

            <a
              href={p.link}
              className="inline-block mt-4 text-cyan-400 hover:underline relative z-10"
            >
              GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
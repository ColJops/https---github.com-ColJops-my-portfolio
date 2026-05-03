import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const navigate = useNavigate();
  const featured = projects.find(p => p.featured);

  return (
    <>
      <section className="flex flex-col justify-center items-center text-center h-[80vh] px-6">
        
        <motion.h1 {...fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
          Tworzę{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            nowoczesne aplikacje
          </span>
        </motion.h1>

        <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-zinc-400 max-w-xl text-lg"
        >
          React • Java • Game Dev  
          Buduję projekty, które działają i wyglądają.
        </motion.p>

        <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <button
            onClick={() => navigate("/projekty")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-medium hover:scale-105 transition"
          >
            Zobacz projekty
          </button>

          <button className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-cyan-400 transition">
            Kontakt
          </button>
        </motion.div>
      </section>

      {/* FEATURED PROJECT */}
      {featured && (
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-8 py-20 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Aktualny projekt
          </h2>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-cyan-500/30 rounded-xl p-10 hover:border-cyan-400 transition">
            
            <h3 className="text-3xl font-semibold text-white">
              {featured.name}
            </h3>

            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              {featured.desc}
            </p>

            <button
              onClick={() => navigate("/projekty")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg"
            >
              Zobacz projekt
            </button>
          </div>
        </motion.section>
      )}
    </>
  );
}
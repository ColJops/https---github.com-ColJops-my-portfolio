import { motion } from "framer-motion";
import { useTranslations } from "../utils/translations";

export default function TerminalSection() {
  const t = useTranslations();

  const commands = [
    {
      command: "whoami",
      output: t("terminal.whoami"),
    },
    {
      command: "stack --main",
      output: "Java • Spring Boot • React • MySQL",
    },
    {
      command: "status",
      output: t("terminal.status"),
    },
    {
      command: "focus",
      output: t("terminal.focus"),
    },
  ];

  return (
    <section className="px-5 sm:px-8 py-14 md:py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          overflow-hidden
          rounded-2xl
          border
          border-cyan-400/20
          bg-black/60
          shadow-2xl
          shadow-cyan-500/10
          backdrop-blur-md
        "
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-4 text-sm text-zinc-400">
            daniel@portfolio:~
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-8 font-mono text-sm sm:text-base">
          {commands.map((item, index) => (
            <motion.div
              key={item.command}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
              }}
            >
              <p>
                <span className="text-cyan-400">➜</span>{" "}
                <span className="text-purple-400">~</span>{" "}
                <span className="text-zinc-200">
                  {item.command}
                </span>
              </p>

              <p className="mt-1 pl-6 text-zinc-400">
                {item.output}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="flex items-center gap-2 pt-2 text-cyan-400"
          >
            <span>_</span>
            <span className="h-5 w-2 animate-pulse bg-cyan-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
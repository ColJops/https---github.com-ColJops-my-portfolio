import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function LanguageWrapper({ children }) {
  const { lang } = useLang();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
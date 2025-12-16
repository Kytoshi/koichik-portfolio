import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white">
      <ThreeBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Koichi Kodama</h1>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-emerald-500 w-16"></div>
          <p className="text-2xl text-gray-400">UX/UI Designer</p>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
          Crafting intuitive digital experiences through research-driven design.
        </p>
      </motion.div>
    </section>
  );
}

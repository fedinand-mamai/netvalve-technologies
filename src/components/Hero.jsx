"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent"
      >
        NetValve Technologies
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-300 mt-4 text-lg md:text-xl"
      >
        Innovate, Integrate, Elevate.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition px-6 py-3 rounded-xl">
          Get Started
        </button>

        <button className="border border-white/30 hover:border-white active:scale-95 transition px-6 py-3 rounded-xl">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
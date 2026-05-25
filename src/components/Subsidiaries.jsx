"use client";

import { motion } from "framer-motion";

const subsidiaries = [
  {
    name: "NetValve Cloud",
    desc: "Cloud infrastructure and hosting solutions for scalable systems.",
  },
  {
    name: "NetValve Security",
    desc: "Cybersecurity division focused on threat detection and protection.",
  },
  {
    name: "NetValve Labs",
    desc: "R&D hub for innovation, AI, and emerging technologies.",
  },
  {
    name: "NetValve Systems",
    desc: "Enterprise software and large-scale system development.",
  },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-28 px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Our Subsidiaries
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {subsidiaries.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 shadow-md hover:shadow-blue-500/20"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              {item.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
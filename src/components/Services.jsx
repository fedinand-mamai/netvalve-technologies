"use client";

import { motion } from "framer-motion";
import { FaNetworkWired, FaCloud, FaShieldAlt, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaNetworkWired />,
    title: "Network Infrastructure",
    desc: "Enterprise-grade connectivity and system architecture solutions.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Scalable cloud deployment, storage, and integration services.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    desc: "Advanced protection systems for modern digital threats.",
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    desc: "Custom applications and enterprise system development.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 shadow-md hover:shadow-blue-500/20"
          >
            <div className="text-3xl text-blue-400 mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
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
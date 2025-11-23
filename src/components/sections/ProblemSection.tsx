"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { TrendingUp, Heart } from "lucide-react";

export default function ProblemSection() {
  const { t } = useTranslation();
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="problem" className="py-24 px-4 bg-marine-beige relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-marine-pink uppercase leading-tight mb-4">
            {t.problem.title}
          </h2>
          <div className="w-20 h-1.5 bg-marine-blue/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Column 1: Organisations */}
          <div className="flex flex-col gap-8">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-4xl p-10 shadow-lg border-t-8 border-marine-yellow relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <TrendingUp size={120} className="text-marine-yellow" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-marine-yellow rounded-xl flex items-center justify-center text-white shadow-sm">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-marine-text">
                  {t.problem.cards[0].title}
                </h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {t.problem.cards[0].items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-lg text-marine-text/80"
                  >
                    <span className="w-2 h-2 bg-marine-yellow rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stat Organisations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center md:text-left border border-marine-yellow/20"
            >
              <p className="text-3xl md:text-4xl font-black text-marine-blue mb-4 leading-none tracking-tighter">
                {t.problem.stats[0].value}
              </p>
              <p className="text-base text-marine-text/80 italic mb-2 leading-relaxed">
                &quot;{t.problem.stats[0].text}&quot;
              </p>
              <p className="text-xs uppercase font-bold text-marine-yellow tracking-widest mt-4 pt-2 border-t border-gray-100">
                {t.problem.stats[0].source}
              </p>
            </motion.div>
          </div>

          {/* Column 2: Collaborateurs */}
          <div className="flex flex-col gap-8">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-4xl p-10 shadow-lg border-t-8 border-marine-text relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Heart size={120} className="text-marine-text" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-marine-text rounded-xl flex items-center justify-center text-white shadow-sm">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-marine-text">
                  {t.problem.cards[1].title}
                </h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {t.problem.cards[1].items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-lg text-marine-text/80"
                  >
                    <span className="w-2 h-2 bg-marine-text rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stat Collaborateurs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center md:text-left border border-marine-text/20"
            >
              <p className="text-3xl md:text-4xl font-black text-marine-blue mb-4 leading-none tracking-tighter">
                {t.problem.stats[1].value}
              </p>
              <p className="text-base text-marine-text/80 italic mb-2 leading-relaxed">
                &quot;{t.problem.stats[1].text}&quot;
              </p>
              <p className="text-xs uppercase font-bold text-marine-pink tracking-widest mt-4 pt-2 border-t border-gray-100">
                {t.problem.stats[1].source}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const clients = [
  { name: "Chanel", logo: "CHANEL" },
  { name: "Ticket for Change", logo: "TICKET FOR CHANGE" },
  { name: "PwC", logo: "pwc" },
  { name: "Kujten", logo: "KUJTEN" },
  { name: "Safran", logo: "SAFRAN" },
  { name: "Bluelink", logo: "BLUELINK" },
  { name: "Hopscotch Event", logo: "HOPSCOTCH EVENT" },
  { name: "EDF", logo: "EDF" },
  { name: "Rte", logo: "Rte" },
];

export default function ClientMarquee() {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-marine-beige overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-12 px-4 text-center">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-marine-blue mb-6">
          {t.clientsTitle || "Ils m'ont fait confiance"}
        </h3>
        <div className="w-24 h-1 bg-marine-yellow mx-auto"></div>
      </div>

      <div className="flex gap-10 items-center">
        <motion.div
          className="flex gap-16 items-center flex-nowrap min-w-full"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-brand-dark/30 uppercase whitespace-nowrap font-serif italic"
            >
              {client.logo}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-marine-beige to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-marine-beige to-transparent pointer-events-none"></div>
    </div>
  );
}

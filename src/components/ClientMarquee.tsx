"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Kujten", logo: "Kujten" },
  { name: "Client 2", logo: "Partenaire" },
  { name: "Client 3", logo: "Entreprise" },
  { name: "Client 4", logo: "Organisation" },
  { name: "Client 5", logo: "Association" },
  { name: "Client 6", logo: "Collectivité" },
];

export default function ClientMarquee() {
  return (
    <div className="py-10 bg-marine-beige overflow-hidden relative">
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

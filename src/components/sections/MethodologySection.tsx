"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import ProcessStep from "@/components/ProcessStep";
import {
  Ear,
  ScanSearch,
  PencilRuler,
  Presentation,
  Users,
  Sprout,
  Lightbulb,
} from "lucide-react";

export default function MethodologySection() {
  const { t } = useTranslation();
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const methodologyIcons = [
    Ear,
    ScanSearch,
    PencilRuler,
    Presentation,
    Users,
    Sprout,
  ];

  // Couleurs spécifiques pour chaque étape (Style Image 3 + Palette Marine)
  const methodologyColors = [
    "bg-marine-yellow", // Ecoute (Jaune)
    "bg-marine-blue", // Clarification (Bleu)
    "bg-marine-pink", // Design (Rose)
    "bg-marine-blue", // Présentation (Bleu)
    "bg-purple-400", // Animation (Violet - nouvelle couleur ajoutée au thème implicitement)
    "bg-marine-blue", // Partage (Bleu)
  ];

  return (
    <section
      id="methodology"
      className="py-32 px-4 bg-marine-beige relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-marine-blue mb-6 uppercase"
          >
            {t.methodology.title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto opacity-70"
          >
            {t.methodology.subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t.methodology.subtitle.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </motion.p>
        </div>

        {/* SNAKE LAYOUT */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:h-[400px]">
          <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="opacity-30"
            >
              {/* Adjusted Sine Wave to pass exactly through card centers:
                  Top row center: y=50 (approx) -> Bottom row center: y=350 (approx)
                  We use a smoother curve with control points optimized for the centers.
              */}
              <path
                d="M 100 50 C 200 50, 200 350, 300 350 S 400 50, 500 50 S 600 350, 700 350 S 800 50, 900 50 S 1000 350, 1100 350"
                fill="none"
                stroke="#7EA2CC"
                strokeWidth="4"
                strokeDasharray="12 12"
              />
            </svg>
          </div>

          {/* MOBILE VERTICAL LINE */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-marine-blue/20 rounded-full"></div>

          {t.methodology.steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              isLast={index === t.methodology.steps.length - 1}
              icon={methodologyIcons[index] || Lightbulb}
              colorClass={methodologyColors[index]}
              position={index % 2 === 0 ? "top" : "bottom"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  isLast: boolean;
  icon: LucideIcon;
  colorClass: string; // e.g. "bg-marine-yellow"
  position: "top" | "bottom"; // Pour le layout Zig-Zag
}

export default function ProcessStep({
  number,
  title,
  icon: Icon,
  colorClass,
  position,
}: ProcessStepProps) {
  // "top" means the Curve is at the Top (y=50/400 = 12.5%).
  // So the card should be at the Bottom to avoid overlap.
  const isCurveTop = position === "top";

  return (
    <div className="relative w-full md:w-1/6 px-2 h-full pointer-events-none flex flex-col items-center md:block">
      {/* DESKTOP DOT & LINE - Absolute positioning relative to the column width/height */}

      {/* Connector Line */}
      <div
        className={`
            hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-marine-blue/30 -z-10
            ${
              isCurveTop
                ? "top-[12.5%] h-[40%]" // From top dot down towards card
                : "bottom-[12.5%] h-[40%]" // From bottom dot up towards card
            }
        `}
      />

      {/* Dot on the Curve (Aligned with SVG y=50 (12.5%) or y=350 (87.5%)) */}
      <div
        className={`
            hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-marine-blue z-20
            ${isCurveTop ? "top-[12.5%]" : "top-[87.5%]"}
        `}
      />

      {/* CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: number * 0.1 }}
        className={`
            pointer-events-auto
            relative flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100
            w-full max-w-[180px] text-center group hover:-translate-y-2 transition-transform duration-300
            
            /* Mobile Layout: Linear vertical stack */
            max-md:flex-row max-md:text-left max-md:max-w-full max-md:mb-8 max-md:gap-4
            
            /* Desktop Positioning: Absolute placements */
            md:absolute md:left-1/2 md:-translate-x-1/2
            ${
              isCurveTop
                ? "md:bottom-[5%]" // Card sits at the bottom of the section
                : "md:top-[5%]" // Card sits at the top of the section
            }
        `}
      >
        {/* ICON BUBBLE */}
        <div
          className={`
            w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md mb-4
            ${colorClass}
            max-md:mb-0 max-md:w-12 max-md:h-12 max-md:shrink-0
        `}
        >
          <Icon size={28} strokeWidth={2} className="max-md:w-5 max-md:h-5" />
        </div>

        {/* NUMBER BADGE (Absolute) */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-marine-text text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm max-md:hidden">
          {number}
        </div>

        {/* TEXT */}
        <h4 className="font-bold text-marine-text text-sm md:text-base leading-tight">
          {title}
        </h4>
      </motion.div>
    </div>
  );
}

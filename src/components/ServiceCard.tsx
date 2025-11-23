"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string[];
  color: string;
  index: number;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  color,
  index,
  icon: Icon,
}: ServiceCardProps) {
  const getColorClass = (colorName: string) => {
    switch (colorName) {
      case "yellow":
        return "bg-brand-yellow text-brand-dark";
      case "blue":
        return "bg-brand-blue text-white";
      case "pink":
        return "bg-brand-pink text-brand-dark";
      case "cream":
        return "bg-brand-cream text-brand-dark";
      default:
        return "bg-white text-brand-dark";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full w-full"
    >
      <motion.div
        className={`${getColorClass(
          color
        )} p-8 rounded-3xl shadow-lg flex flex-col lg:flex-row h-full cursor-pointer relative overflow-hidden group`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon Background Decoration */}
        <div className="absolute -right-10 -top-10 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-500">
          <Icon size={180} strokeWidth={1} />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="mb-6 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Icon size={32} strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-bold mb-6 uppercase leading-tight">
              {title}
            </h3>
          </div>

          <div className="lg:w-2/3">
            <ul className="space-y-3 grow">
              {description.map((item, i) => {
                if (item.startsWith("###")) {
                  return (
                    <li key={i} className="block mt-6 mb-2 first:mt-0">
                      <h4 className="font-bold text-lg">
                        {item.replace("###", "").trim()}
                      </h4>
                    </li>
                  );
                }
                return (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-sm md:text-base opacity-90 font-medium">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

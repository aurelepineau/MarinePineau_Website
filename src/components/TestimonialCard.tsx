"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialCard({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/40 relative hover:bg-white/50 hover:shadow-xl hover:border-white/60 transition-all shadow-sm cursor-default"
    >
      <Quote className="text-marine-blue w-8 h-8 mb-4 opacity-80" />
      <p className="text-marine-text font-medium italic text-base md:text-lg leading-relaxed tracking-wide">
        &quot;{text}&quot;
      </p>
    </motion.div>
  );
}

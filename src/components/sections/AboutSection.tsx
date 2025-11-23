"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left: Typographic Title & Photo */}
        <div className="md:w-1/3 flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[10rem] font-black text-marine-blue leading-[0.8] tracking-tighter uppercase"
          >
            {content.about.title.split("\n")[0]}
            <br />
            {content.about.title.split("\n")[1].replace(".", "")}
            <span className="text-marine-yellow">.</span>
          </motion.h2>

          {/* Photo Placeholder with Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-square bg-marine-beige rounded-4xl overflow-hidden shadow-inner group"
          >
            {/* Animated Decoration */}
            <div className="absolute inset-0 bg-linear-to-tr from-marine-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-marine-yellow rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700 z-10"></div>

            <Image
              src="/photo-marine.jpg"
              alt="Marine Pineau"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="md:w-2/3 pt-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-marine-text mb-8 leading-snug"
          >
            {content.about.subtitle}
          </motion.h3>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
            {content.about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Citation Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-marine-beige rounded-tr-[3rem] rounded-bl-[3rem] p-10 border-l-4 border-marine-blue relative"
          >
            <Quote className="absolute top-6 left-6 text-marine-blue/20 w-12 h-12" />
            <p className="text-xl md:text-2xl font-display font-medium text-marine-blue italic relative z-10 pl-8">
              &quot;{content.about.quoteBox}&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


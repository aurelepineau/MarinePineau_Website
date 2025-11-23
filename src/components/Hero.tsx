"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue text-white pt-20 pb-10">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="whitespace-nowrap opacity-10"
        >
          <span className="text-[15vw] md:text-[25vw] font-black uppercase tracking-tighter text-white">
            ENSEMBLE
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-8"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full border border-white/50 text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
            Facilitatrice de coopération
          </div>

          {/* Title */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-black leading-tight font-display">
              Mieux travailler
              <span className="block text-brand-yellow font-black tracking-tighter relative z-10">
                ENSEMBLE
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl font-light max-w-lg opacity-90 leading-relaxed">
            {content.hero.description}
          </p>

          {/* CTA */}
          <div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-cream hover:scale-105 transition-all duration-300 shadow-lg text-lg"
            >
              Prendre RDV
            </Link>
          </div>
        </motion.div>

        {/* Right Visuals (Floating Images) */}
        <div className="relative h-[400px] md:h-[600px] w-full hidden lg:block">
          {/* Card 1: Top Right (Color) - Scene de vie */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 right-0 w-64 h-48 md:w-80 md:h-60 bg-gray-300 rounded-3xl border-4 border-white shadow-2xl overflow-hidden transform rotate-6 z-10 hover:z-20 hover:rotate-0 transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src="/vie-equipe.jpg"
                alt="Vie d'équipe"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Card 2: Bottom Center (B&W) - Architecture/Pont */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 left-1/4 w-72 h-56 md:w-96 md:h-72 bg-gray-800 rounded-3xl border-4 border-white shadow-2xl overflow-hidden transform -rotate-3 z-20 hover:scale-105 transition-all duration-500"
          >
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/architecture.jpg"
                alt="Architecture & Structure"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

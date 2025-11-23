"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import Image from "next/image";
import { Mail, Linkedin, Calendar } from "lucide-react";

export default function ContactSection() {
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
    <section
      id="contact"
      className="py-24 px-4 bg-marine-blue text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -right-20 bottom-0 w-96 h-96 bg-marine-yellow rounded-full blur-[100px] opacity-30"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter mb-12 leading-none opacity-90">
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-12 rounded-[3rem] border border-white/20 shadow-2xl">
          {/* Left Column: Photo */}
          <div className="flex flex-col justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 hover:shadow-2xl hover:border-marine-yellow/50 transition-all cursor-default"
            >
              <Image
                src="/marine-contact.jpg"
                alt="Marine Contact"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="text-left flex flex-col justify-center">
            <p className="text-2xl font-bold mb-8 leading-relaxed">
              {t.contact.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.contact.text.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="text-xl mb-2 font-medium text-marine-yellow">
              {t.contact.name}
            </p>

            <div className="space-y-4 mt-8 mb-8">
              <a
                href="mailto:marine.pineau.f@gmail.com"
                className="flex items-center text-xl font-light hover:text-marine-yellow transition-colors"
              >
                <Mail className="mr-4 w-6 h-6" /> marine.pineau.f@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/marine-pineau-61986127/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 bg-white text-marine-blue font-bold rounded-2xl hover:bg-marine-beige transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <Linkedin className="mr-3" /> {t.contact.links.linkedin}
              </a>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-4 bg-marine-yellow text-marine-text font-bold rounded-2xl hover:bg-marine-yellow/90 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <Calendar className="mr-3" /> {t.contact.links.appointment}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

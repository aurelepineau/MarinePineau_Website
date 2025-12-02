"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 bg-[#D4BCA8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column: Quotes */}
          <div className="space-y-12">
            <TestimonialCard
              text={t.testimonials.items[0].text}
              index={0}
            />
            <TestimonialCard
              text={t.testimonials.items[1].text}
              index={1}
            />
          </div>

          {/* Center Column: Big Title */}
          <div className="text-center lg:col-span-1 py-12 lg:py-0">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter text-wrap drop-shadow-sm"
            >
              {t.testimonials.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.testimonials.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h2>
          </div>

          {/* Right Column: Quote */}
          <div className="space-y-12">
            <TestimonialCard
              text={t.testimonials.items[2].text}
              index={2}
            />
            <TestimonialCard
              text={t.testimonials.items[3].text}
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


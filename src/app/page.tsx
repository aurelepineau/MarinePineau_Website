"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MethodologySection from "@/components/sections/MethodologySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-marine-beige overflow-hidden font-sans text-marine-text">
      {/* SECTION: HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* SECTION: BONJOUR (About) */}
      <AboutSection />

      {/* SECTION: CONTEXTE */}
      <ProblemSection />

      {/* SECTION: METHODOLOGY (Sur-Mesure) */}
      <MethodologySection />

      {/* SECTION: SERVICES (Leviers d'Impact + Details) */}
      <ServicesSection />

      {/* SECTION: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION: CONTACT */}
      <ContactSection />
    </div>
  );
}

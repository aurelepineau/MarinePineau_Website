"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  Lightbulb,
  UsersRound,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const { t } = useTranslation();
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const serviceIcons = [Lightbulb, HeartHandshake, UsersRound, ShieldCheck];

  return (
    <section id="services">
      {/* LEVIERS D'IMPACT (Bento Grid) */}
      <div id="leviers" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-marine-yellow font-bold uppercase tracking-widest mb-2">
              {t.services.leviersSubtitle}
            </h3>
            <h2 className="text-6xl md:text-8xl font-black text-marine-blue leading-none uppercase">
              {t.services.leviersTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.services.leviersTitle.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            {/* Block 1: Comprendre (Yellow) */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("offer-dynamique")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-marine-yellow p-8 rounded-bl-[4rem] rounded-tr-lg rounded-br-lg rounded-tl-lg flex flex-col justify-between text-marine-text relative overflow-hidden group cursor-pointer h-full min-h-[300px]"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <h3 className="text-2xl font-black uppercase mb-4">
                  {t.services.bento[0].title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i <
                        t.services.bento[0].title.split("\n").length -
                          1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="font-medium leading-relaxed text-lg">
                  {t.services.bento[0].description}
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <Lightbulb size={150} />
              </div>
            </motion.div>

            {/* Block 2: Management (Cream/Beige) */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("offer-management")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="md:col-span-2 bg-marine-beige p-8 rounded-tr-[4rem] rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-col justify-center text-marine-text relative overflow-hidden group cursor-pointer border-l-8 border-marine-pink h-full min-h-[300px]"
            >
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-black uppercase mb-4">
                  {t.services.bento[1].title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i <
                        t.services.bento[1].title.split("\n").length -
                          1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-xl font-medium leading-relaxed">
                  {t.services.bento[1].description}
                </p>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10">
                <UsersRound size={200} className="text-marine-pink" />
              </div>
            </motion.div>

            {/* Block 3: Prevention (Pink) */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("offer-prevention")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="md:col-span-2 bg-marine-pink p-8 rounded-bl-[4rem] rounded-tr-lg rounded-tl-lg rounded-br-lg flex flex-col justify-center text-white relative overflow-hidden group cursor-pointer h-full min-h-[300px]"
            >
              <div className="relative z-10 max-w-lg ml-auto text-right">
                <h3 className="text-3xl font-black uppercase mb-4">
                  {t.services.bento[2].title}
                </h3>
                <p className="text-xl font-medium leading-relaxed">
                  {t.services.bento[2].description}
                </p>
              </div>
              <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={180} />
              </div>
            </motion.div>

            {/* Block 4: Cohésion (Blue) */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("offer-cohesion")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-marine-blue p-8 rounded-tr-[4rem] rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer h-full min-h-[300px]"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <h3 className="text-2xl font-black uppercase mb-4">
                  {t.services.bento[3].title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i <
                        t.services.bento[3].title.split("\n").length -
                          1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="font-medium leading-relaxed text-lg">
                  {t.services.bento[3].description}
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-500 z-10">
                <HeartHandshake size={150} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SERVICES DETAILS */}
      <div
        id="services-details"
        className="py-24 px-4 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-marine-blue uppercase mb-6 leading-none">
              {t.services.detailTitle}
            </h2>
            <div className="w-20 h-1 bg-marine-yellow"></div>
          </motion.div>

          <div className="flex flex-col gap-6 mb-24">
            {t.services.items.map((service, index) => (
              <div key={index} className="w-full" id={`offer-${service.id}`}>
                <ServiceCard
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  color={service.color}
                  index={index}
                  icon={serviceIcons[index] || Lightbulb}
                />
              </div>
            ))}
          </div>

          {/* Case Studies / Realisations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 mt-32"
          >
            <h2 className="text-4xl md:text-5xl font-black text-marine-blue uppercase mb-6 leading-none">
              {t.caseStudiesTitle || "RÉALISATIONS"}
            </h2>
            <div className="w-20 h-1 bg-marine-yellow"></div>
          </motion.div>

          <div className="space-y-24">
            {t.caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-marine-beige rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row"
              >
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-marine-blue text-white relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-marine-yellow rounded-full opacity-20 blur-3xl"></div>

                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                    {study.title}
                  </h3>
                  <h4 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
                    {study.subtitle}
                  </h4>

                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm mb-8">
                    <h5 className="font-bold mb-4 uppercase text-xs tracking-widest border-b border-white/20 pb-2">
                      {study.resultsLabel || "Résultats"}
                    </h5>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-marine-yellow text-xl">
                            •
                          </span>
                          <span className="text-sm md:text-base font-light">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="inline-block bg-marine-yellow text-marine-text px-6 py-2 rounded-full font-bold self-start shadow-lg transform -rotate-1">
                    {study.clientLabel || "CLIENT"} : {study.client}
                  </div>
                </div>

                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-marine-text/20 text-marine-text/60 px-4 py-1 rounded-full text-xs font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold mb-6 text-marine-text italic">
                    &quot;{study.description}&quot;
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {study.details}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-flex items-center text-marine-pink font-bold hover:text-marine-blue transition-colors group"
                  >
                    {study.cta || "Discuter d'un projet similaire"}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


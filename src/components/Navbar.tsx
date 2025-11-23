"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" }, // Moved to 2nd position
  { name: "Problématique", href: "#problem" },
  { name: "Services", href: "#services" }, // Parent for Offers
  { name: "Contact", href: "#contact" },
];

// Sub-links for Services (for scroll handling logic if needed, or just semantic grouping)
const serviceSubLinks = [
  { name: "Leviers d'Impact", href: "#leviers" },
  { name: "Détail des Offres", href: "#services-details" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Combine main links and service sub-links for scroll tracking
      const allLinks = [...navLinks, ...serviceSubLinks];
      const sections = allLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          // Map sub-sections back to parent "services" active state if needed
          if (section === "leviers" || section === "services-details") {
            setActiveSection("services");
          } else {
            setActiveSection(section);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Small delay to ensure mobile menu closing doesn't interfere with scroll
      setTimeout(() => {
        const offsetTop =
          element.getBoundingClientRect().top + window.scrollY - 80; // 80px is navbar height (h-20)
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-marine-beige/90 backdrop-blur-md border-b border-marine-text/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="text-xl font-black tracking-wider text-marine-text hover:text-marine-blue transition-colors uppercase font-display"
            >
              Marine Pineau
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative
                      ${
                        isActive
                          ? "text-marine-blue"
                          : "text-marine-text hover:text-marine-blue/70"
                      }
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-1 left-0 right-0 h-0.5 bg-marine-blue mx-4 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-marine-text hover:text-marine-blue focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-marine-beige border-b border-marine-text/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-lg font-bold transition-colors
                    ${
                      activeSection === link.href.substring(1)
                        ? "bg-marine-blue text-white"
                        : "text-marine-text hover:bg-marine-blue/10"
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`group flex items-center gap-2 text-primary font-mono text-xl font-bold hover:text-primary/80 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="relative">
            ABR
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`transition-all duration-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <Link
                href={item.href}
                className={`relative px-3 py-2 rounded-md font-mono text-sm transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="text-primary text-xs">0{index + 1}.</span>{" "}
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-primary relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu with slide-in */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`transition-all duration-500 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">0{index + 1}.</span> {item.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </header>
  );
}

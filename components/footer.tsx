"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Code-style credit */}
          <p className="text-muted-foreground/20 font-mono text-xs">
            {"/* "}built with Next.js, Tailwind CSS, and too much caffeine{" */"}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-8">
            {[
              { href: "https://github.com/anasbinrashid", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/anasbinrashid", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:anasbinrashid5@gmail.com", icon: Mail, label: "Email" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Attribution */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-mono hover:text-primary transition-colors duration-300 cursor-default">
              Designed & Built by Anas Bin Rashid
            </p>
            <p className="text-muted-foreground/20 font-mono text-xs mt-1">
              {"return 0; // exit(SUCCESS)"}
            </p>
          </div>

          {/* Animated line */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import Link from "next/link";
import { useTypingEffect, useMagnetic } from "@/hooks/use-animations";
import { useEffect, useState } from "react";

export function Hero() {
  const typedText = useTypingEffect(
    [
      "Generative AI & NLP",
      "Parallel Computing",
      "Full-Stack Development",
      "Machine Learning",
      "Data Engineering",
      "Compiler Design",
    ],
    70,
    40,
    1800
  );

  const magnetic = useMagnetic(0.4);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-3xl">
        {/* Terminal block */}
        <div
          className={`mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-card/80 border border-border rounded-t-lg px-4 py-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-muted-foreground font-mono text-xs ml-2">anas@portfolio:~</span>
          </div>
          <div className="bg-card/60 border border-t-0 border-border rounded-b-lg px-4 py-3 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary">$</span>
              <span>whoami</span>
            </div>
            <div className="text-foreground mt-1 pl-4">Anas Bin Rashid</div>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <span className="text-primary">$</span>
              <span>cat /etc/specialization</span>
            </div>
            <div className="text-foreground mt-1 pl-4">AI/ML Engineer | Software Engineer</div>
          </div>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 text-balance transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block hover:text-primary transition-colors duration-300">
            Anas
          </span>{" "}
          <span className="inline-block hover:text-primary transition-colors duration-300">
            Bin
          </span>{" "}
          <span className="inline-block hover:text-primary transition-colors duration-300">
            Rashid
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I build{" "}
          <span className="text-primary relative">
            intelligent systems
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse" />
          </span>
          .
        </h2>

        {/* Typing effect */}
        <div
          className={`font-mono text-sm text-muted-foreground mb-4 h-8 flex items-center transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-primary mr-2">{">>>"}</span>
          <span className="text-yellow-400/80 mr-1">model</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-green-400/80">specialize</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-orange-400/80">{`"${typedText}"`}</span>
          <span className="text-muted-foreground">)</span>
          <span className="w-2 h-5 bg-primary ml-0.5 animate-blink inline-block" />
        </div>

        {/* Code comment description */}
        <div
          className={`mb-10 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground/50 font-mono text-xs mb-1">{"/**"}</p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed pl-3 border-l-2 border-primary/20">
            <span className="text-muted-foreground/50 font-mono text-xs">{"* "}</span>
            A Computer Science student at{" "}
            <span className="text-primary font-semibold">FAST NUCES</span>{" "}
            specializing in software development, data engineering, and network
            systems, with hands-on experience in designing scalable
            applications, optimizing performance, and building impactful,
            future-ready solutions.
          </p>
          <p className="text-muted-foreground/50 font-mono text-xs mt-1">{" */"}</p>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center gap-8 mb-12 transition-all duration-700 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { href: "https://github.com/anasbinrashid", icon: Github, label: "GitHub", cmd: "git remote -v" },
            { href: "https://linkedin.com/in/anasbinrashid", icon: Linkedin, label: "LinkedIn", cmd: "curl linkedin" },
            { href: "mailto:anasbinrashid5@gmail.com", icon: Mail, label: "Email", cmd: "sendmail" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="hidden md:inline font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{link.cmd}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={magnetic.ref}
          className={`inline-block transition-all duration-700 delay-[1100ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transform: `translate(${magnetic.position.x}px, ${magnetic.position.y}px)`,
          }}
        >
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 text-primary border border-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-all font-mono text-sm relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">./explore --work</span>
            <ChevronDown className="w-4 h-4 relative animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground/30 font-mono text-xs">scroll()</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}

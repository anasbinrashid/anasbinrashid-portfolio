"use client";

import { Mail, MapPin, Phone, Send, Terminal } from "lucide-react";
import Link from "next/link";
import { useScrollReveal, useMagnetic } from "@/hooks/use-animations";

export function Contact() {
  const heading = useScrollReveal();
  const content = useScrollReveal(0.2);
  const magnetic = useMagnetic(0.3);

  return (
    <section id="contact" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: contact"}
          </p>
          <p
            className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            06. {"What's"} Next?
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
              heading.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Get In Touch
          </h2>
        </div>

        <div ref={content.ref}>
          {/* Terminal-style message */}
          <div className={`inline-block bg-card/60 border border-border rounded-lg px-6 py-4 mb-8 text-left font-mono text-sm transition-all duration-700 ${
            content.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-center gap-2 text-muted-foreground/50 mb-2">
              <Terminal className="w-3.5 h-3.5 text-primary/50" />
              <span className="text-xs">contact.sh</span>
            </div>
            <p className="text-muted-foreground/50 mt-2">
              <span className="text-primary">$</span> echo <span className="text-yellow-400/70">$INBOX_STATUS</span>
            </p>
            <p className="text-green-400/70 mt-1 pl-4">ALWAYS_OPEN</p>
          </div>

          <p
            className={`text-muted-foreground text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
              content.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Whether you have a question, want to collaborate on a project, or
            just want to say hi, {"I'll"} do my best to get back to you!
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-300 ${
              content.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default">
              <MapPin className="w-5 h-5 text-primary group-hover:animate-bounce" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default">
              <Phone className="w-5 h-5 text-primary group-hover:animate-bounce" />
              <span>+92 335 5555195</span>
            </div>
          </div>

          <div
            ref={magnetic.ref}
            className={`inline-block transition-all duration-700 delay-400 ${
              content.isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
            style={{
              transform: `translate(${magnetic.position.x}px, ${magnetic.position.y}px)`,
            }}
          >
            <Link
              href="mailto:anasbinrashid5@gmail.com"
              className="group inline-flex items-center gap-3 text-primary border-2 border-primary px-10 py-5 rounded-lg font-mono text-lg relative overflow-hidden bg-transparent"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Mail className="w-5 h-5 relative z-10 group-hover:text-primary-foreground transition-colors duration-500" />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                ./send --hello
              </span>
              <Send className="w-4 h-4 relative z-10 group-hover:text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </Link>
          </div>

          <p className={`font-mono text-xs text-muted-foreground/20 mt-8 transition-all duration-700 delay-500 ${
            content.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// response_time: O(1) | availability: true"}
          </p>
        </div>
      </div>
    </section>
  );
}

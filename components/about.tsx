"use client";

import { Award, GraduationCap, Code2, Braces } from "lucide-react";
import { useScrollReveal, useCountUp, useStaggerReveal } from "@/hooks/use-animations";

const specializations = [
  "Generative AI & NLP",
  "Parallel Computing",
  "Android Development",
  "Machine Learning",
  "Data Engineering",
  "Compiler Design",
];

export function About() {
  const heading = useScrollReveal();
  const content = useScrollReveal(0.1);
  const cards = useStaggerReveal(3, 0.1, 150);
  const projectCount = useCountUp(13, 1500);
  const cgpa = useCountUp(372, 1500);

  return (
    <section id="about" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Code-style comment before heading */}
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: about"}
          </p>
          <h2
            className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span
              className={`h-px bg-border flex-1 ml-4 transition-all duration-1000 delay-300 ${
                heading.isVisible ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div ref={content.ref} className="md:col-span-2">
            <div
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 ${
                content.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* JSON-like intro */}
              <div className="bg-card/50 border border-border rounded-lg p-4 font-mono text-sm">
                <p className="text-muted-foreground/50">{"{"}</p>
                <p className="pl-4"><span className="text-primary">{'"name"'}</span>: <span className="text-green-400/80">{'"Anas Bin Rashid"'}</span>,</p>
                <p className="pl-4"><span className="text-primary">{'"role"'}</span>: <span className="text-green-400/80">{'"CS Student @ FAST NUCES"'}</span>,</p>
                <p className="pl-4"><span className="text-primary">{'"focus"'}</span>: <span className="text-green-400/80">{'"Software Dev | Data Eng | AI"'}</span>,</p>
                <p className="pl-4"><span className="text-primary">{'"available"'}</span>: <span className="text-yellow-400/80">true</span></p>
                <p className="text-muted-foreground/50">{"}"}</p>
              </div>

              <p>
                I am a dedicated Computer Science student at{" "}
                <span className="text-primary font-semibold hover:underline decoration-primary/50 underline-offset-4 transition-all cursor-default">
                  FAST NUCES, Islamabad
                </span>
                , with hands-on experience across software development, AI & data
                engineering, and network systems. My passion lies in designing
                scalable applications, optimizing performance, and applying
                advanced problem-solving to real-world challenges.
              </p>
              <p>
                Currently, I serve as an{" "}
                <span className="text-primary font-semibold">
                  Artificial Intelligence Teaching Assistant
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  Database Systems Lab Assistant
                </span>
                . Previously, I worked as an{" "}
                <span className="text-primary font-semibold">
                  Applied AI & Data Engineering Intern
                </span>{" "}
                at PTCL Group, where I designed a RAG-based GitHub Repository
                Code Assistant.
              </p>

              {/* import-style specialization list */}
              <div className="bg-card/50 border border-border rounded-lg p-4 font-mono text-xs mt-6">
                <p className="text-muted-foreground/50 mb-1">{"// core competencies"}</p>
                <p className="text-muted-foreground/40">{"import { "}</p>
                {specializations.map((skill, i) => (
                  <p
                    key={skill}
                    className={`pl-4 transition-all duration-500 hover:text-primary cursor-default ${
                      content.isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${600 + i * 100}ms` }}
                  >
                    <span className="text-yellow-400/70">{skill}</span>{i < specializations.length - 1 ? "," : ""}
                  </p>
                ))}
                <p className="text-muted-foreground/40">{"} from "}<span className="text-green-400/70">{'"@anas/skills"'}</span>{";"}</p>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div ref={cards.ref} className="space-y-6">
            <div
              className={`group bg-card border border-border rounded-lg p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                cards.visibleItems[0]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Award className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-xs text-muted-foreground/40">achievement[0]</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                Gold Medalist
              </h3>
              <p className="text-muted-foreground text-sm">
                {"Rector's List of Honors"}
                <br />
                Fall 2024, Spring 2025, Fall 2025
              </p>
            </div>

            <div
              ref={cgpa.ref}
              className={`group bg-card border border-border rounded-lg p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                cards.visibleItems[1]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <GraduationCap className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-xs text-muted-foreground/40">stats.cgpa</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1 font-mono">
                CGPA{" "}
                <span className="text-primary text-xl">
                  {(cgpa.count / 100).toFixed(2)}
                </span>
              </h3>
              <p className="text-muted-foreground text-sm">
                BS Computer Science
                <br />
                FAST NUCES
              </p>
            </div>

            <div
              ref={projectCount.ref}
              className={`group bg-card border border-border rounded-lg p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                cards.visibleItems[2]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Code2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-xs text-muted-foreground/40">repos.length</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                <span className="text-primary text-xl font-mono">
                  {projectCount.count}+
                </span>{" "}
                Projects
              </h3>
              <p className="text-muted-foreground text-sm">
                From Generative AI
                <br />
                to Software Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

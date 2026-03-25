"use client";

import { useState } from "react";
import { MapPin, Calendar, GitBranch, GitCommit } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-animations";

function deterministicCommitId(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).padStart(7, "0").slice(0, 7);
}

const experiences = [
  {
    company: "FAST NUCES",
    role: "Artificial Intelligence Teaching Assistant",
    duration: "Jan 2026 - Jun 2026",
    location: "Islamabad (Onsite)",
    description: [
      "Assisted in teaching and managing the course through assignment design, demos, grading, and student support",
      "Guided students in AI/ML concepts and algorithms",
    ],
    tabLabel: "AI TA",
    branch: "feat/ai-teaching",
  },
  {
    company: "FAST NUCES",
    role: "Database Systems Lab Assistant",
    duration: "Jan 2026 - Jun 2026",
    location: "Islamabad (Onsite)",
    description: [
      "Provided guidance to 50+ students, resolved queries and evaluated assignments",
      "Focused on SQL, MongoDB, ERD, MS Access and database concepts",
    ],
    tabLabel: "DB Lab",
    branch: "feat/db-systems",
  },
  {
    company: "FAST NUCES",
    role: "Software for Mobile Devices Teaching Assistant",
    duration: "Aug 2025 - Jan 2026",
    location: "Islamabad (Onsite)",
    description: [
      "Assisted in teaching and managing the course through assignment design, demos, grading, and student support",
      "Guided students in Android app development",
    ],
    tabLabel: "Mobile TA",
    branch: "feat/android-dev",
  },
  {
    company: "PTCL Group",
    role: "Applied AI & Data Engineering Intern",
    duration: "Jul 2025 - Aug 2025",
    location: "Islamabad (Onsite)",
    description: [
      "Designed a RAG-based GitHub Repository Code Assistant using Python, ChromaDB, GitPython, Groq API, Llama Models and Streamlit",
      "Implemented semantic search and context-aware response generation",
    ],
    tabLabel: "PTCL Group",
    branch: "feat/rag-pipeline",
  },
  {
    company: "FAST NUCES",
    role: "Computer Networks Lab Assistant",
    duration: "Jan 2025 - Jun 2025",
    location: "Islamabad (Onsite)",
    description: [
      "Provided technical support and guidance to 60+ students",
      "Resolved student queries and evaluated lab assignments",
      "Focused on key concepts in Cisco Packet Tracer and Socket Programming",
    ],
    tabLabel: "Networks Lab",
    branch: "feat/networking",
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const heading = useScrollReveal();
  const tabs = useStaggerReveal(experiences.length, 0.1, 100);

  return (
    <section id="experience" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: experience"}
          </p>
          <h2
            className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-mono text-xl">02.</span>
            {"Where I've Worked"}
            <span
              className={`h-px bg-border flex-1 ml-4 transition-all duration-1000 delay-300 ${
                heading.isVisible ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            />
          </h2>
        </div>

        {/* Git branch indicator */}
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted-foreground/40">
          <GitBranch className="w-3.5 h-3.5 text-primary/50" />
          <span className="text-primary/70">{experiences[activeTab].branch}</span>
          <span className="text-muted-foreground/30">|</span>
          <span>{experiences[activeTab].description.length} commits</span>
        </div>

        <div ref={tabs.ref} className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:border-l border-border relative">
            <div
              className="hidden md:block absolute left-0 w-0.5 h-12 bg-primary transition-all duration-300"
              style={{ top: `${activeTab * 48}px` }}
            />
            {experiences.map((exp, index) => (
              <button
                key={exp.tabLabel}
                onClick={() => setActiveTab(index)}
                type="button"
                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 ${
                  tabs.visibleItems[index]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                } ${
                  activeTab === index
                    ? "text-primary bg-primary/10 border-b-2 md:border-b-0 border-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {exp.tabLabel}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            <div key={activeTab} className="animate-slide-in">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <p className="text-muted-foreground font-mono text-sm flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {experiences[activeTab].duration}
                </p>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {experiences[activeTab].location}
                </p>
              </div>

              {/* Git log style entries */}
              <ul className="space-y-4">
                {experiences[activeTab].description.map((item, i) => (
                  <li
                    key={item}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <GitCommit className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <div>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {item}
                        </span>
                        <p className="font-mono text-xs text-muted-foreground/30 mt-0.5">
                          commit{" "}
                          {deterministicCommitId(
                            `${experiences[activeTab].company}|${experiences[activeTab].role}|${item}|${i}`
                          )}{" "}
                          - {experiences[activeTab].duration.split(" - ")[0]}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pseudo-code summary */}
              <div className="mt-6 bg-card/50 border border-border rounded-lg p-3 font-mono text-xs">
                <span className="text-muted-foreground/40">{"// "}</span>
                <span className="text-primary/60">@role</span>
                <span className="text-muted-foreground/40">{" => "}</span>
                <span className="text-green-400/60">{`"${experiences[activeTab].role}"`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

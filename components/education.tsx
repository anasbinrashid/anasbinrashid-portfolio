"use client";

import { GraduationCap, Award, Medal, Trophy, Database } from "lucide-react";
import { useScrollReveal, useStaggerReveal, useCountUp } from "@/hooks/use-animations";

const education = [
  {
    institution: "FAST NUCES, Islamabad",
    degree: "Bachelor of Science | Computer Science",
    duration: "Aug 2022 - Jun 2026",
    detail: "Current CGPA 3.72",
    highlight: true,
    query: "SELECT cgpa FROM results WHERE major = 'cs';",
  },
  {
    institution: "APSACS, Rawalpindi",
    degree: "Intermediate | Pre-Engineering",
    duration: "Jul 2020 - Jul 2022",
    detail: "Marks 1058/1100",
    highlight: false,
    query: "SELECT score FROM results WHERE exam = 'HSSC';",
  },
  {
    institution: "APSACS, Rawalpindi",
    degree: "Matriculation | Science",
    duration: "Apr 2018 - Mar 2020",
    detail: "Marks 1073/1100",
    highlight: false,
    query: "SELECT score FROM results WHERE exam = 'SSC';",
  },
];

const honors = [
  {
    text: "Gold Medalist & Rector's List of Honors, FAST NUCES - Fall 2024, Spring 2025, Fall 2025",
    icon: Trophy,
    tag: "RECTOR",
  },
  {
    text: "Dean's List of Honors, FAST NUCES - Spring 2024, Fall 2023",
    icon: Award,
    tag: "DEAN",
  },
  {
    text: "National Skills Competency Test, 99.6 Percentile - HEC",
    icon: Trophy,
    tag: "NSCT",
  },
  {
    text: "Honorary Award for Intermediate result, ICAP - Mar 2023",
    icon: Medal,
    tag: "HONOR",
  },
  {
    text: "Merit-Based Scholarship for HSSC result, FBISE - Jan 2023",
    icon: Medal,
    tag: "MERIT",
  },
  {
    text: "Full Merit Scholarship for Matriculation achievement, APSACS - Jun 2020",
    icon: Medal,
    tag: "SCHOLARSHIP",
  },
  {
    text: "Bronze Medalist for IKMC, KSF - Nov 2013",
    icon: Medal,
    tag: "MATHS",
  },
];

export function Education() {
  const heading = useScrollReveal();
  const eduCards = useStaggerReveal(education.length, 0.1, 150);
  const honorItems = useStaggerReveal<HTMLUListElement>(honors.length, 0.1, 100);
  const score1 = useCountUp(1058, 1500);
  const score2 = useCountUp(1073, 1500);

  return (
    <section id="education" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: education"}
          </p>
          <h2
            className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-mono text-xl">05.</span>
            Education & Honors
            <span
              className={`h-px bg-border flex-1 ml-4 transition-all duration-1000 delay-300 ${
                heading.isVisible ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            />
          </h2>
          <p className={`font-mono text-xs text-muted-foreground/30 mb-12 transition-all duration-700 delay-400 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"SELECT * FROM academic_records ORDER BY year DESC;"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              Education
            </h3>
            <p className="font-mono text-xs text-muted-foreground/30 mb-6">
              <Database className="w-3 h-3 inline mr-1" />
              {"3 rows returned"}
            </p>
            <div ref={eduCards.ref} className="space-y-6 border-l-2 border-border pl-6 relative">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative group transition-all duration-500 ${
                    eduCards.visibleItems[index]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      edu.highlight
                        ? "bg-primary border-primary shadow-[0_0_12px_rgba(94,234,212,0.5)]"
                        : "bg-background border-primary group-hover:bg-primary"
                    }`}
                  />
                  <div className="bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    {/* SQL query header */}
                    <div className="px-3 py-1.5 bg-secondary/30 border-b border-border font-mono text-xs text-muted-foreground/25">
                      {edu.query}
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-muted-foreground text-sm">{edu.degree}</p>
                      {edu.duration && (
                        <p className="text-muted-foreground font-mono text-xs mt-1">
                          {edu.duration}
                        </p>
                      )}
                      <p className="text-primary font-mono text-sm font-semibold mt-2" ref={index === 1 ? score1.ref : index === 2 ? score2.ref : undefined}>
                        {index === 0
                          ? edu.detail
                          : index === 1
                          ? `Marks ${score1.count}/1100`
                          : `Marks ${score2.count}/1100`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <Award className="w-5 h-5 text-primary" />
              </div>
              Honors & Awards
            </h3>
            <p className="font-mono text-xs text-muted-foreground/30 mb-6">
              {"assert len(awards) == "}{honors.length}{" # verified"}
            </p>
            <ul ref={honorItems.ref} className="space-y-3">
              {honors.map((honor, index) => {
                const Icon = honor.icon;
                return (
                  <li
                    key={honor.text}
                    className={`group flex items-start gap-3 bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 ${
                      honorItems.visibleItems[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex items-start gap-3 p-4 flex-1">
                      <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {honor.text}
                      </span>
                    </div>
                    <div className="px-2 py-1 bg-primary/10 text-primary font-mono text-xs self-start mt-3 mr-3 rounded">
                      {honor.tag}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
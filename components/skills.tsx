"use client";

import {
  Code2,
  Database,
  Layout,
  Brain,
  FlaskConical,
  Cpu,
  Settings,
  Wrench,
  Cloud,
  Server,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-animations";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    importPath: "@core/languages",
    skills: [
      "Python", "C", "C++", "Java", "C#", "Kotlin", "TypeScript", "JavaScript",
      "PHP", "R", "x86 Assembly", "HTML/CSS", "MATLAB", "YAML",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    importPath: "@data/stores",
    skills: [
      "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis",
      "Firebase", "ChromaDB", "FAISS", "SQLAlchemy",
    ],
  },
  {
    title: "Frameworks & Platforms",
    icon: Layout,
    importPath: "@tools/frameworks",
    skills: [
      "React", "Node.js", "Express.js", "FastAPI", "Flask", ".NET",
      "Jetpack Compose", "Android SDK", "WinForms", "JavaFX",
      "Streamlit", "Gradio", "Bootstrap", "TailwindCSS",
      "Tesseract", "EasyOCR", "SFML",
    ],
  },
  {
    title: "Generative AI & NLP",
    icon: Brain,
    importPath: "@ai/generative",
    skills: [
      "LLMs", "RAG", "Prompt Engineering", "LangChain", "Embeddings",
      "Semantic Search", "Multimodal Analysis", "Transformers", "BERT", "CLIP",
      "DiT", "GANs", "Word2Vec", "Tokenization", "POS Tagging", "NER",
      "Text Classification", "Sequence Modeling", "Fine-Tuning (LoRA, PEFT)",
      "HuggingFace", "Ollama",
    ],
  },
  {
    title: "ML & Data Science",
    icon: FlaskConical,
    importPath: "@ai/ml",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-Learn", "NumPy", "Pandas",
      "SciPy", "Matplotlib", "Plotly", "Seaborn", "OpenCV",
      "Feature Engineering", "Model Evaluation", "MLFlow", "Kaggle",
    ],
  },
  {
    title: "Parallel & HPC",
    icon: Cpu,
    importPath: "@systems/hpc",
    skills: [
      "OpenCL", "OpenMP", "SIMD", "CuPy", "pthreads",
      "Concurrency Control", "Thread Management", "Performance Optimization",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    importPath: "@cloud/devops",
    skills: [
      "Docker", "Docker Compose", "Kubernetes", "AWS", "GitHub Actions",
      "Jenkins", "Nginx", "Bash", "DVC", "Vercel",
    ],
  },
  {
    title: "Software Engineering",
    icon: Settings,
    importPath: "@eng/methods",
    skills: [
      "SDLC", "Agile/SCRUM", "UML Design", "Unit Testing",
      "REST API", "JWT", "OAuth", "Jira", "Trello",
    ],
  },
  {
    title: "Tools & Environments",
    icon: Wrench,
    importPath: "@dev/tools",
    skills: [
      "Git & GitHub", "Ubuntu", "Visual Studio", "Eclipse", "Android Studio",
      "Jupyter Notebook", "Postman", "Figma", "Flex/Yacc",
      "Cisco Packet Tracer", "Proteus", "Wireshark", "LaTeX",
    ],
  },
];

export function Skills() {
  const heading = useScrollReveal();
  const grid = useStaggerReveal(skillCategories.length, 0.05, 100);

  return (
    <section id="skills" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: skills"}
          </p>
          <h2
            className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-mono text-xl">04.</span>
            Skills & Technologies
            <span
              className={`h-px bg-border flex-1 ml-4 transition-all duration-1000 delay-300 ${
                heading.isVisible ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            />
          </h2>
          {/* pip install style */}
          <p className={`font-mono text-xs text-muted-foreground/30 mb-12 transition-all duration-700 delay-400 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"$ pip install -r requirements.txt"}
            <span className="text-green-400/40 ml-2">Successfully installed {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} packages</span>
          </p>
        </div>

        <div ref={grid.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                  grid.visibleItems[index]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                {/* Import header */}
                <div className="px-4 py-2 bg-secondary/30 border-b border-border font-mono text-xs text-muted-foreground/30">
                  <span className="text-muted-foreground/40">import</span>{" "}
                  <span className="text-primary/50">{`{ ... }`}</span>{" "}
                  <span className="text-muted-foreground/40">from</span>{" "}
                  <span className="text-green-400/50">{`"${category.importPath}"`}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-foreground font-semibold text-sm">
                      {category.title}
                    </h3>
                    <span className="ml-auto font-mono text-xs text-muted-foreground/30">[{category.skills.length}]</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono transition-all duration-300 hover:bg-primary/20 hover:text-primary cursor-default hover:scale-105"
                        style={{
                          transitionDelay: grid.visibleItems[index]
                            ? `${i * 30}ms`
                            : "0ms",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
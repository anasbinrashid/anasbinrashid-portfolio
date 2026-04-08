"use client";

import { Github, ExternalLink, Folder, Sparkles, FileCode, Terminal } from "lucide-react";
import Link from "next/link";
import { useScrollReveal, useStaggerReveal, useTilt } from "@/hooks/use-animations";

const featuredProjects = [
  {
    title: "FinAI – AI-Powered Financial Platform",
    description:
      "Final Year Project. Full-stack financial intelligence system for Pakistani banking products. React + Vite + TypeScript frontend; Node.js + Express API; MongoDB. Python FastAPI microservices for RAG, document simplification, and ML-based eligibility. Hybrid retrieval using FAISS + CLIP; Groq LLaMA 3.3 for advisory. Features: AI chatbot, document simplification, loan-eligibility scoring, bank matching, PDF export, dashboard. Secure architecture: JWT + rotating refresh tokens, rate limiting, field-level encryption, audit logs. Docker Compose deployment with CI/CD via GitHub Actions.",
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "MongoDB", "FAISS", "CLIP", "Docker"],
    github: "https://github.com/anasbinrashid",
    pseudoCode: "pipeline = FinAIPipeline(rag=HybridRAG(FAISS, CLIP))\nresult = pipeline.advise(user_query, bank_docs)",
  },
  {
    title: "Multi-Document Multimodal Financial Analysis",
    description:
      "Production-grade RAG pipeline for complex document understanding (PDF, Excel, CSV) with multimodal support using CLIP and Vision LLMs. Implemented hybrid image-text search, OCR fallback for scanned documents, and automatic citation generation with sub-millisecond query latency. Built evaluation framework for ROUGE, BLEU, and BERTScore metrics with a real-time Streamlit dashboard, deployed via Docker.",
    tech: ["Python", "LangChain", "FAISS", "CLIP", "EasyOCR", "Docker"],
    github: "https://github.com/anasbinrashid",
    pseudoCode: "rag = RAGPipeline(docs, embeddings=FAISS)\nresponse = rag.query(user_input, top_k=5)",
  },
  {
    title: "Neural Machine Translation & Semantic Search",
    description:
      "Built an English-to-Urdu NMT system featuring a custom Transformer with learnable positional encoding and fine-tuned mBART-50. Designed a Semantic Product Search system using dual-encoder BERT embeddings and a neural relevance model for e-commerce reranking. Applied label smoothing, cosine annealing with warmup, and nucleus (top-p) sampling.",
    tech: ["Transformers", "mBART-50", "BERT", "PyTorch", "Flask"],
    github: "https://github.com/anasbinrashid",
    pseudoCode: "encoder_out = transformer.encode(src_tokens)\ntranslation = beam_search(decoder, encoder_out, k=5)",
  },
  {
    title: "Generative AI & Autoregressive Image Modeling",
    description:
      "Implemented Diffusion Transformers (DiT) with Representation Alignment (REPA/REG) for training stability and image generation. Built CycleGAN for unpaired photo-to-sketch translation using PatchGAN discriminators and mixed-precision (FP16) training. Developed autoregressive models (PixelCNN, RowLSTM, DiagonalBiLSTM) for pixel-by-pixel image synthesis on CIFAR-10.",
    tech: ["PyTorch", "TensorFlow", "DiT", "CycleGAN", "GANs"],
    github: "https://github.com/anasbinrashid",
    pseudoCode: "model = DiffusionTransformer(dim=512, depth=12)\nloss = model.train(x_noisy, timesteps, noise)",
  },
];

const otherProjects = [
  {
    title: "NLP Pipeline & Advanced Sequence Modeling",
    description:
      "GPU-accelerated Legal Document NLP Pipeline using CBOW embeddings and extractive/abstractive summarization. Built Shakespearean Next-Word Predictor with LSTM/GRU architectures, ablation study across 9 hyperparameter configs, and Adaptive CNN for CIFAR-10.",
    tech: ["SpaCy", "CuPy", "Word2Vec", "LSTM", "GRU", "PyTorch"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "RAG-Based GitHub Code Assistant",
    description:
      "RAG-based codebase analysis system with multi-language support and semantic search. Implemented intent analysis, query expansion, context-aware response generation, confidence scoring, and session management with conversation history.",
    tech: ["Python", "ChromaDB", "Groq API", "Llama 3", "Streamlit", "GitPython"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "Cryptanalysis & Secure Communication",
    description:
      "Security-focused system combining Al-Kindi cryptanalysis of affine cipher with Wireshark packet analysis, and an end-to-end encrypted chat app implementing AES, Diffie-Hellman, RSA, SHA, and PKI with full traffic analysis.",
    tech: ["Python", "AES", "RSA", "Diffie-Hellman", "PKI", "Wireshark"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "StudySync Mobile Application",
    description:
      "Android app for student academic lifecycle management. Offline-first MVVM architecture with automatic Firebase cloud sync, course management, task tracking, resource organization, notification systems, and data visualization.",
    tech: ["Kotlin", "Firebase", "SQLite", "Material Design", "MVVM"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "Parallel Computing Optimization Suite",
    description:
      "Achieved 4x speedup using AVX intrinsics for matrix transposition and multiplication. Parallelized trigonometric computations with custom Taylor series using OpenMP. Built 8-thread system with CPU affinity optimization using pthreads and OpenCL.",
    tech: ["C/C++", "OpenMP", "OpenCL", "SIMD", "pthreads"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "Enterprise Network in Cisco Packet Tracer",
    description:
      "Multi-layer enterprise network with NAT, DHCP, ACL, routing protocols (RIP, OSPF, EIGRP), and VPN for secure branch office and data center communication.",
    tech: ["Cisco Packet Tracer", "Networking", "VPN", "OSPF", "EIGRP"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "PetroPulse Management System",
    description:
      "Full-fledged JavaFX application with SQL backend for petrol station operations including customer management, billing, employee schedules, maintenance logs, and loyalty programs with OOP design patterns.",
    tech: ["JavaFX", "MySQL", "OOP Patterns", "SceneBuilder"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "Gym Desktop Application",
    description:
      "Comprehensive gym management system with member management, workout scheduling, and inventory tracking using Windows Forms and MSSQL Server.",
    tech: ["C#", "WinForms", "MSSQL Server", ".NET"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "Multi-Threaded PACMAN",
    description:
      "Multi-threaded version of classic Pac-Man using C/C++ and GLUT graphics library with synchronization mechanisms between Pac-Man and multiple computer-controlled ghosts.",
    tech: ["C/C++", "GLUT", "Multithreading", "Game Dev"],
    github: "https://github.com/anasbinrashid",
  },
  {
    title: "PACMAN in Assembly",
    description:
      "Implementation of Pac-Man in x86 assembly language using Irvine Library. Features three levels with different layouts, portals, and challenges, demonstrating low-level programming and hardware-software interaction.",
    tech: ["x86 Assembly", "Irvine Library", "Low-Level"],
    github: "https://github.com/anasbinrashid",
  },
];

function FeaturedProjectCard({ project, index }: { project: (typeof featuredProjects)[0]; index: number }) {
  const tilt = useTilt(8);
  const reveal = useScrollReveal(0.1);

  return (
    <div
      ref={reveal.ref}
      className={`transition-all duration-700 ${
        reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        ref={tilt.ref}
        className="relative grid md:grid-cols-12 gap-4 items-center transition-transform duration-200 ease-out"
        style={{ transform: tilt.transform }}
      >
        {/* Project pseudo-code panel */}
        <div
          className={`md:col-span-7 bg-card border border-border rounded-lg overflow-hidden relative group ${
            index % 2 === 1 ? "md:col-start-6" : ""
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-muted-foreground/40 font-mono text-xs ml-2">
              <FileCode className="w-3 h-3 inline mr-1" />
              main.py
            </span>
          </div>
          <div className="p-6 font-mono text-sm min-h-[140px] flex flex-col justify-center">
            <div className="text-muted-foreground/30 text-xs mb-3">{"# " + project.title.split(" ")[0].toLowerCase() + "_pipeline.py"}</div>
            {project.pseudoCode.split("\n").map((line, i) => (
              <div key={line} className="flex gap-3 group-hover:text-foreground/70 transition-colors">
                <span className="text-muted-foreground/20 select-none w-4 text-right text-xs">{i + 1}</span>
                <span className="text-muted-foreground/60 group-hover:text-foreground/80 transition-colors">
                  {line.split("=")[0] && <span className="text-yellow-400/60">{line.split("=")[0]}</span>}
                  {line.includes("=") && <span className="text-muted-foreground/40">{" = "}</span>}
                  {line.split("=").slice(1).join("=") && <span className="text-primary/70">{line.split("=").slice(1).join("=").trim()}</span>}
                </span>
              </div>
            ))}
            <div className="flex gap-3 mt-1">
              <span className="text-muted-foreground/20 select-none w-4 text-right text-xs">{project.pseudoCode.split("\n").length + 1}</span>
              <span className="w-2 h-4 bg-primary/50 animate-blink" />
            </div>
          </div>
          {/* Floating tech tags */}
          <div className="absolute bottom-3 right-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-mono rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`md:col-span-6 md:absolute ${
            index % 2 === 1
              ? "md:left-0 md:text-left"
              : "md:right-0 md:text-right"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2 flex items-center gap-2">
            {index % 2 === 1 ? null : <span className="flex-1" />}
            <Sparkles className="w-3.5 h-3.5" />
            {index === 0 ? "Final Year Project" : "Featured Project"}
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 mb-4 shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/30">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <ul
            className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
              index % 2 === 1 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {project.tech.map((t) => (
              <li key={t} className="hover:text-primary transition-colors cursor-default">
                {t}
              </li>
            ))}
          </ul>
          <div
            className={`flex gap-4 ${
              index % 2 === 1 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const heading = useScrollReveal();
  const otherHeading = useScrollReveal();
  const grid = useStaggerReveal(otherProjects.length, 0.05, 80);

  return (
    <section id="projects" className="py-24 px-6 lg:px-0 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div ref={heading.ref}>
          <p className={`text-muted-foreground/30 font-mono text-xs mb-2 transition-all duration-500 ${
            heading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"// section: projects"}
          </p>
          <h2
            className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12 transition-all duration-700 ${
              heading.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-mono text-xl">03.</span>
            Things {"I've"} Built
            <span
              className={`h-px bg-border flex-1 ml-4 transition-all duration-1000 delay-300 ${
                heading.isVisible ? "scale-x-100" : "scale-x-0"
              } origin-left`}
            />
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div ref={otherHeading.ref}>
          <h3
            className={`text-center text-xl font-semibold text-foreground mb-2 transition-all duration-700 ${
              otherHeading.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Other Noteworthy Projects
          </h3>
          <p className={`text-center font-mono text-xs text-muted-foreground/30 mb-8 transition-all duration-700 delay-200 ${
            otherHeading.isVisible ? "opacity-100" : "opacity-0"
          }`}>
            {"$ ls ~/projects/ | wc -l"}
            <span className="text-primary/50 ml-2">{otherProjects.length}</span>
          </p>
        </div>
        <div ref={grid.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card border border-border rounded-lg p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 ${
                grid.visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2 py-0.5 bg-secondary rounded group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { NeuralBackground } from "@/components/neural-background";
import { CodeRain } from "@/components/code-rain";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <CodeRain />
      <Navigation />
      <main className="max-w-6xl mx-auto relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

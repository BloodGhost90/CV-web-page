import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="h-px bg-white/10 w-4xl" />
      <About />
      <div className="h-px bg-white/10 w-4xl" />
      <Skills />
      <div className="h-px bg-white/10 w-4xl" />
      <Projects />
      <div className="h-px bg-white/10 w-4xl" />
      <Contact />
    </main>
  );
}

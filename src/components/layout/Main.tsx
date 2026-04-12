import About from "../sections/About";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

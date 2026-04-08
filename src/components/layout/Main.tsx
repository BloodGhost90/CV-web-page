import About from "../sections/About";
import Hero from "../sections/Hero";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
    </main>
  );
}

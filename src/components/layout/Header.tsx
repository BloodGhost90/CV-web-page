export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark w-full">
      <div className="flex justify-between items-center max-w-4xl mx-auto py-4 px-2">
        <span className="text-accent text-sm md:text-lg tracking-tighter font-syne font-bold whitespace-nowrap">
          Damian Nolberczyk
        </span>
        <nav>
          <ul className="flex gap-2 list-none">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-between items-center mx-auto">
        <span className="text-accent text-lg tracking-tighter font-syne font-bold items-center">
          Damian Nolberczyk
        </span>
        <nav>
          <ul className="flex gap-2">
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

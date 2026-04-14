import NavLink from "../ui/NavLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(8,12,20,0.85)] backdrop-blur-md w-full border-b-[0.5px] border-white/10 ">
      <div className="flex justify-between items-center mx-auto py-4 px-4 md:px-10">
        <span className="text-accent text-sm md:text-lg tracking-tighter font-syne font-bold whitespace-nowrap">
          Damian Nolberczyk
        </span>
        <nav>
          <ul className="flex gap-2 md:gap-4 list-none">
            <li>
              <NavLink href="#about" label="About" />
            </li>
            <li>
              <NavLink href="#skills" label="Skills" />
            </li>
            <li>
              <NavLink href="#projects" label="Projects" />
            </li>
            <li>
              <NavLink href="#contact" label="Contact" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full sticky top-0 z-20 bg-dark border-b border-white/10 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-syne font-bold text-accent text-lg tracking-tight">
          Damian Nolberczyk
        </span>

        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
          >
            {t("nav.home")}
          </a>
          <a
            href="#projects"
            className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
          >
            {t("nav.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}

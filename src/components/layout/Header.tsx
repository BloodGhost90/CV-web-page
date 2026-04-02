import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full sticky top-0 z-20 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="">DN</span>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="#about">{t("nav.home")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

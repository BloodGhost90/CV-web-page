interface NavLinkProps {
  href: string;
  textToShow: string;
}

export default function NavLink({ href, textToShow }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white/50 hover:text-accent text-sm md:text-lg tracking-tighter transition-colors"
    >
      {textToShow}
    </a>
  );
}

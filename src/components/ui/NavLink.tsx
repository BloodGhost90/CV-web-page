interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white/50 hover:text-accent active:text-accent text-sm md:text-lg tracking-tighter transition-colors"
    >
      {label}
    </a>
  );
}

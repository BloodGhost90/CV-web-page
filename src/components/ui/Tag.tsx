interface TagProps {
  label: string;
  main?: boolean;
}

export default function Tag({ label, main }: TagProps) {
  return (
    <span
      className={`border rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
        main ? "border-accent text-accent" : "border-white/10 text-white/50"
      }`}
    >
      {label}
    </span>
  );
}

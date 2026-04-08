interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2">
      <p className="text-accent font-syne font-bold text-xl">{value}</p>
      <p className="text-white/40 text-xs tracking-wide">{label}</p>
    </div>
  );
}

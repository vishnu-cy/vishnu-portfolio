export default function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-panel rounded-[1.7rem] p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/50 to-transparent" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300 hover:border-cyber-cyan/50 hover:text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

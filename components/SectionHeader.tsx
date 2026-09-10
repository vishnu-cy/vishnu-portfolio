export default function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-cyber-cyan">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
      {description && <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>}
    </div>
  );
}

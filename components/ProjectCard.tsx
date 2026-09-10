import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyber-cyan/50">
      <div className="absolute right-5 top-5 font-mono text-5xl font-black text-white/[0.04]">0{index + 1}</div>
      <div className="mb-7 flex items-center gap-3">
        <span className="node-dot h-3 w-3 rounded-full bg-cyber-cyan" />
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyber-green">{project.category}</p>
      </div>
      <h2 className="max-w-sm text-2xl font-bold leading-tight text-white group-hover:text-cyber-cyan">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-300">
            {skill}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyber-cyan hover:text-white">
        Open case file <span>→</span>
      </Link>
    </article>
  );
}

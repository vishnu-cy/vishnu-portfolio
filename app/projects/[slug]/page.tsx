import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const sections = [
    ["Problem", project.problem],
    ["Approach", project.approach],
    ["Outcome", project.outcome],
  ];

  return (
    <div>
      <Link href="/projects" className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyber-cyan hover:text-white">← Back to case files</Link>
      <div className="mt-8">
        <SectionHeader eyebrow={project.category} title={project.title} description={project.summary} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyber-cyan">Skills used</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => <span key={skill} className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300">{skill}</span>)}
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyber-green">Role relevance</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {project.roleFit.map((role) => <li key={role}>▹ {role}</li>)}
            </ul>
          </div>
        </aside>

        <section className="space-y-6">
          {sections.map(([title, body], index) => (
            <div key={title} className="glass-panel rounded-[2rem] p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center border border-cyber-cyan/30 bg-cyber-cyan/10 font-mono text-sm text-cyber-cyan">0{index + 1}</span>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
              </div>
              <p className="mt-5 leading-8 text-slate-300">{body}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

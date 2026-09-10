import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";

export default function CVPage() {
  return (
    <div>
      <SectionHeader eyebrow="CV" title="Recruiter-friendly profile summary." description="Use this as a web version of your CV, and replace the placeholder PDF in /public/cv.pdf with your real CV when ready." />
      <div className="card-border rounded-2xl bg-cyber-panel/80 p-6">
        <h2 className="text-2xl font-semibold text-white">{profile.name}</h2>
        <p className="mt-2 text-cyber-cyan">{profile.role}</p>
        <p className="mt-1 text-slate-300">{profile.university} · {profile.graduation}</p>
        <p className="mt-4 leading-8 text-slate-300">{profile.headline}</p>
        <Link href={profile.cv} className="mt-6 inline-flex rounded-full bg-cyber-cyan px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white">
          Download CV
        </Link>
      </div>

      <section className="mt-8 card-border rounded-2xl bg-cyber-panel/80 p-6">
        <h2 className="text-xl font-semibold text-white">Selected projects</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          {projects.slice(0, 4).map((project) => <li key={project.slug}>▹ {project.title} — {project.category}</li>)}
        </ul>
      </section>

      <section className="mt-8 card-border rounded-2xl bg-cyber-panel/80 p-6">
        <h2 className="text-xl font-semibold text-white">Skills summary</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-cyber-green">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

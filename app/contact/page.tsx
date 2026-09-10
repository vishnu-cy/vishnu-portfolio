import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div>
      <SectionHeader eyebrow="Contact" title="Let’s connect." description="Use this page for recruiter, collaborator, or academic contact details. Replace the placeholder links in data/profile.ts with your real email, GitHub, and LinkedIn." />
      <div className="grid gap-6 md:grid-cols-3">
        <a href={`mailto:${profile.email}`} className="card-border rounded-2xl bg-cyber-panel/80 p-6 transition hover:border-cyber-cyan">
          <h2 className="text-xl font-semibold text-white">Email</h2>
          <p className="mt-3 text-slate-300">{profile.email}</p>
        </a>
        <a href={profile.github} className="card-border rounded-2xl bg-cyber-panel/80 p-6 transition hover:border-cyber-cyan">
          <h2 className="text-xl font-semibold text-white">GitHub</h2>
          <p className="mt-3 text-slate-300">Project repositories and code.</p>
        </a>
        <a href={profile.linkedin} className="card-border rounded-2xl bg-cyber-panel/80 p-6 transition hover:border-cyber-cyan">
          <h2 className="text-xl font-semibold text-white">LinkedIn</h2>
          <p className="mt-3 text-slate-300">Professional profile and updates.</p>
        </a>
      </div>
    </div>
  );
}

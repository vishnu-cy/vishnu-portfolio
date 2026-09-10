import SectionHeader from "@/components/SectionHeader";
import { writeups } from "@/data/writeups";

export default function WriteupsPage() {
  return (
    <div>
      <SectionHeader eyebrow="Write-ups" title="Technical notes and security explanations." description="Short posts that explain concepts clearly, document practical work, and show written communication skill." />
      <div className="grid gap-6 md:grid-cols-3">
        {writeups.map((post) => (
          <article key={post.title} className="card-border rounded-2xl bg-cyber-panel/80 p-6">
            <p className="text-sm font-semibold text-cyber-green">{post.status}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

import SectionHeader from "@/components/SectionHeader";
import { experienceHighlights, profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <SectionHeader eyebrow="About" title="Cybersecurity and AI student focused on practical, research-led security." description={profile.summary} />
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
        <section className="card-border rounded-2xl bg-cyber-panel/80 p-6 leading-8 text-slate-300">
          <p>
            My portfolio is designed to show hands-on technical ability, clear written communication, and a research-focused understanding of how cybersecurity risks affect modern intelligent systems.
          </p>
          <p className="mt-4">
            I am especially interested in AI-enabled systems where attacks can move across software, sensors, embedded computation, perception, communication, control, and physical actuation layers.
          </p>
        </section>
        <section className="card-border rounded-2xl bg-cyber-panel/80 p-6">
          <h2 className="text-xl font-semibold text-white">Currently learning</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.currentlyLearning.map((item) => (
              <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{item}</span>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-8 card-border rounded-2xl bg-cyber-panel/80 p-6">
        <h2 className="text-xl font-semibold text-white">Highlights</h2>
        <ul className="mt-4 grid gap-3 text-slate-300 md:grid-cols-2">
          {experienceHighlights.map((item) => <li key={item}>▹ {item}</li>)}
        </ul>
      </section>
    </div>
  );
}

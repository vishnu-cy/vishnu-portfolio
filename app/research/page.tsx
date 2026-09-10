import SectionHeader from "@/components/SectionHeader";
import ThreatMap from "@/components/ThreatMap";

const researchBlocks = [
  ["Threat-led analysis", "Understanding attacks by what they can disrupt across sensing, embedded computation, perception, communication, control, and physical actuation."],
  ["AI-enabled systems", "Focusing on systems where ML models interact with real sensors, infrastructure, and autonomous decisions."],
  ["Defence design", "Exploring runtime validation, anomaly scoring, fallback behaviour, and clearer security reporting."],
];

export default function ResearchPage() {
  return (
    <div>
      <SectionHeader eyebrow="Research profile" title="Cybersecurity and AI with a cyber-physical systems angle." description="This page positions your academic work as a focused research identity rather than a list of coursework files." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <ThreatMap />
        <div className="space-y-5">
          {researchBlocks.map(([title, text], index) => (
            <div key={title} className="glass-panel rounded-[1.6rem] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyber-cyan">Research vector 0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-bold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

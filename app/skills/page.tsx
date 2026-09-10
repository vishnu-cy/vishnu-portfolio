import SectionHeader from "@/components/SectionHeader";
import SkillGroup from "@/components/SkillGroup";
import { skills } from "@/data/profile";

export default function SkillsPage() {
  return (
    <div>
      <SectionHeader eyebrow="Skills" title="Technical skills organised by role relevance." description="The skills page is grouped to help recruiters quickly understand cybersecurity, AI, programming, and tooling strengths." />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => <SkillGroup key={group.title} title={group.title} items={group.items} />)}
      </div>
    </div>
  );
}

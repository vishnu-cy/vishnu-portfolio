import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeader eyebrow="Case files" title="Security work organised like an analyst archive." description="Each project is framed as a case file with the problem, method, outcome, skills, and role relevance clearly visible." />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </div>
  );
}

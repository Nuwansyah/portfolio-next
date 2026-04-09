import { projects } from "@/data/project";
import WorkItem from "@/component/WorkItem";

export default function WorksSection() {
  return (
    <section id="works">
      {projects.map((project, index) => (
        <WorkItem key={project.slug} project={project} />
      ))}
    </section>
  );
}
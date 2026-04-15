import { projects } from "@/data/project";
import { CardImage }  from "@/component/page/CardItem"
import FadeIn from "@/animation/FadeIn";

export default function WorksSection() {
  return (
    <section id="works" className="min-h-screen px-6 md:px-20 py-30 border-b border-zinc-800">
      {/* TITLE */}
        <div>
      <FadeIn>
        <h2 className="text-3xl font-bold mb-4">My Works</h2>
        <p className="text-zinc-400 mb-15">
          Saya adalah developer yang fokus pada pengembangan sistem dalam game,
          seperti inventory, save system, dan gameplay architecture.
        </p>
        <div className="max-w-6xl mx-auto"></div>
      </FadeIn>
      
      
      {/* GRID */}
      <FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <CardImage key={project.slug} project={project} />
          ))}
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
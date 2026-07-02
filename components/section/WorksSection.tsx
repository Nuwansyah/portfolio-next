"use client"
import { projects } from "@/data/project";
import { CardImage }  from "@/components/page/CardItem"
import FadeIn from "@/animation/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { worksSection} from "@/data/translation";

export default function WorksSection() {
  const { lang } = useLanguage();
  return (
    <section id="works" className="min-h-screen py-24 md:py-30 px-6">
      {/* TITLE */}
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">
            {worksSection.title[lang]}
          </h2>
          <p className="text-texttitle mb-15">
            {worksSection.description[lang]}
          </p>
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
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/project";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProjectDialog from "@/components/ProjectDialog";

type Props = {
  project: Project;
};

export function CardImage({ project }: Props) {
  const { lang } = useLanguage();
  return (
    <ProjectDialog project={project}>
      <Card className="group cursor-pointer overflow-hidden outline-5 outline-card shadow-black-500/50 ">
      
      {/* IMAGE */}
      <div className="relative aspect-video border-xl">
        <img
          src={project.thumnail}
          alt={project.title[lang]}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition pointer-events-none border-xl" />
      </div>

      {/* CONTENT */}
      <CardHeader>
        <CardTitle>{project.title[lang]}</CardTitle>

        <CardDescription>
          {project.description[lang].slice(0, 80)}...
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </CardFooter>

      </Card>
    </ProjectDialog>
    
  );
}

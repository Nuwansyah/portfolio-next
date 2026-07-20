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
      <Card className="group h-full min-h-105 cursor-pointer overflow-hidden outline-5 outline-card shadow-black-500/50 flex flex-col">
      
      {/* IMAGE */}
      <div className="relative aspect-video shrink-0 overflow-hidden">
        <img
          src={project.thumnail}
          alt={project.title[lang]}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition pointer-events-none border-xl" />
      </div>

      {/* CONTENT */}
      <CardHeader className="flex-1">
        <CardTitle className="line-clamp-2">
          {project.title[lang]}
        </CardTitle>

        <CardDescription className="overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {project.description[lang][0]}...
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

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project } from "@/types/project";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  project: Project;
};

export function CardImage({ project }: Props) {
  return (
    <Card className="group cursor-pointer overflow-hidden">
      
      {/* IMAGE */}
      <div className="relative aspect-video">
        <img
          src={project.thumnail}
          alt={project.title}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* CONTENT */}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>

        <CardDescription>
          {project.description.slice(0, 80)}...
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </CardFooter>

    </Card>
  );
}

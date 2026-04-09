import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative rounded-xl overflow-hidden border bg-zinc-900 hover:shadow-xl transition duration-300 cursor-pointer">
        
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white text-sm font-medium border px-3 py-1 rounded-md">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
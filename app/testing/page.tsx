"use client";

import ProjectDiagram from "@/components/projects/ProjectDiagram";
import { testDiagram } from "@/data/projectDiagram";

export default function TestingPage() {
  return (
    <main className="p-8">
      <ProjectDiagram diagram={testDiagram} />
    </main>
  );
}
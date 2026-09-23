import type { ProjectDiagram } from "@/types/project";
export const webCompanyProfile: ProjectDiagram = {
  nodes: [
    {
      id: "user",
      label: "User",
      type: "user",
      description:["Browser User",] 
    },

    {
      id: "frontend",
      label: "Next.js",
      type: "application",
      description: ["Home", "About us", "Product", "Our services", "Contact", "Request demo"]
    },

    {
      id: "backend",
      label: "ASP.NET Core",
      type: "service",
      description:["REST API",] 
    },

    {
      id: "database",
      label: "PostgreSQL",
      type: "database",
      description:["Application Database",] 
    },

    {
      id: "email",
      label: "SMTP",
      type: "service",
      description:["Email Service",] 
    },

    {
      id: "demo",
      label: "Next.js",
      type: "application",
      description:["Demo Application",] 
    },
  ],

  edges: [
    {
      source: "user",
      target: "frontend",
      label: "HTTPS",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "frontend",
      target: "backend",
      label: "REST API",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "backend",
      target: "database",
      label: "SQL",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
  ],
};

export const projectDiagrams: Record<string, ProjectDiagram> = {
  "company-profile": webCompanyProfile,
};
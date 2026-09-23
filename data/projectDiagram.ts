import type { ProjectDiagram } from "@/types/project";
export const webCompanyProfile: ProjectDiagram = {
  nodes: [
    {
      id: "user",
      label: "User",
      type: "user",
      description:["Fills and sumbits demo request"] 
    },
    {
      id: "next.js",
      label: "Next.js",
      type: "application",
      description:["Front End", "Company website"] 
    },
    {
      id: "aspnet",
      label: "ASP.NET CORE",
      type: "service",
      description:["Backend API"] 
    },
    {
      id: "postgre",
      label: "PostgreSQL",
      type: "service",
      description:["Store data"] 
    },
    {
      id: "tokenservice",
      label: "Token Service",
      type: "service",
      description:["Generate Link"] 
    },
    {
      id: "emailservice",
      label: "Email Service",
      type: "service",
      description:["Send Email"] 
    },
    {
      id: "user2",
      label: "User",
      type: "user",
      description:["Recives email"] 
    },
    {
      id: "next.js2",
      label: "Next.js",
      type: "application",
      description:["Demo Access Page"] 
    },
    {
      id: "aspcore2",
      label: "ASP.NET CORE",
      type: "service",
      description:["Token Validation"] 
    },
    {
      id: "demo",
      label: "Demo Page",
      type: "application",
    },
    {
      id: "denied",
      label: "Denied",
      type: "application",
    },
  ],

  edges: [
    {
      source: "user",
      target: "next.js",
      label: "HTTP POST",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "next.js",
      target: "aspnet",
      label: "REST API",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "aspnet",
      target: "emailservice",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "aspnet",
      target: "tokenservice",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    
    {
      source: "aspnet",
      target: "postgre",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "tokenservice",
      target: "user2",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "emailservice",
      target: "user2",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    
    {
      source: "user2",
      target: "next.js2",
      label: "Open Demo URL",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "next.js2",
      target: "aspcore2",
      label: "Validate Token",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "aspcore2",
      target: "denied",
      label: "Invalid",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
    {
      source: "aspcore2",
      target: "demo",
      label: "Valid",
      sourceHandle: "bottom-source",
      targetHandle: "top",
    },
  ],
};

export const projectDiagrams: Record<string, ProjectDiagram> = {
  "company-profile": webCompanyProfile,
};
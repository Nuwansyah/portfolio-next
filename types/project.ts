export type Project = {
  slug: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string[];
    en: string[];
  };
  keyContribution?: {
    id: string[];
    en: string[];
  };
  tech: string[];
  media: string[];
  attachments?: ProjectAttachment[];
  thumnail: string;
};

export type DiagramNodeType =
  | "user"
  | "application"
  | "service"
  | "database"
  | "storage";

export type DiagramNode = {
  id: string;
  label: string;
  type: DiagramNodeType;
  description?: string[];
};

export type DiagramEdge = {
  source: string;
  target: string;
  label?: string;

  sourceHandle?: string;
  targetHandle?: string;
};

export type ProjectDiagram = {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
};

export type ProjectAttachmentType =
  | "github"
  | "google-drive"
  | "demo"
  | "external";

export type ProjectAttachment = {
  type: ProjectAttachmentType;
  url: string;
  label?: string;
};
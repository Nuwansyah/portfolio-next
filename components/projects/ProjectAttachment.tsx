"use client";

import {
  ExternalLink,
  HardDrive,
  type LucideIcon,
} from "lucide-react";

import {
  GithubLogoIcon,
} from "@/components/icons";

import type { ProjectAttachment as ProjectAttachmentType } from "@/types/project";

type Props = {
  attachment: ProjectAttachmentType;
};

type AttachmentConfig = {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
};

const attachmentConfig: Record<
  ProjectAttachmentType["type"],
  AttachmentConfig
> = {
  github: {
    icon: GithubLogoIcon,
    label: "GitHub",
  },

  "google-drive": {
    icon: HardDrive,
    label: "Google Drive",
  },

  demo: {
    icon: ExternalLink,
    label: "Live Demo",
  },

  external: {
    icon: ExternalLink,
    label: "External Link",
  },
};

export default function ProjectAttachment({
  attachment,
}: Props) {
  const config = attachmentConfig[attachment.type];
  const Icon = config.icon;

  const label = attachment.label ?? config.label;

  return (
    <a
      href={attachment.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        flex size-9 items-center justify-center
        rounded-lg
        border border-zinc-700
        bg-zinc-900
        text-zinc-300
        transition-colors
        hover:bg-zinc-800
        hover:text-white
      "
    >
      <Icon className="size-4" />
    </a>
  );
}
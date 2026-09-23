"use client";

import {
  Database,
  Monitor,
  HardDrive,
  Server,
  User,
} from "lucide-react";

import {
  Handle,
  Position,
  type Node,
  type NodeProps,
} from "@xyflow/react";

const hasHandle = (
  handles: string[],
  handle: string,
) => handles.includes(handle);

export type ProjectDiagramNodeData = {
  label: string;
  description?: string[];
  type:
    | "user"
    | "application"
    | "service"
    | "database"
    | "storage";

    incomingHandles: string[];
    outgoingHandles: string[];
};

export type ProjectDiagramNodeType = Node<
  ProjectDiagramNodeData,
  "project"
>;

const nodeConfig = {
  user: {
    icon: User,
  },

  application: {
    icon: Monitor,
  },

  service: {
    icon: Server,
  },

  database: {
    icon: Database,
  },

  storage: {
    icon: HardDrive,
  },
};

export default function ProjectDiagramNode({
  data,
}: NodeProps<ProjectDiagramNodeType>) {
  const config = nodeConfig[data.type];
  const Icon = config.icon;

  return (
    <div className="w-[220px] rounded-xl border bg-background px-4 py-3 shadow-sm">
      {hasHandle(data.incomingHandles, "top") && (
  <Handle
    type="target"
    position={Position.Top}
    id="top"
    className="!size-2 !border-2 !border-background"
  />
)}

    {hasHandle(data.incomingHandles, "left") && (
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!size-2 !border-2 !border-background"
      />
    )}

    {hasHandle(data.incomingHandles, "right") && (
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="!size-2 !border-2 !border-background"
      />
    )}

    {hasHandle(data.incomingHandles, "bottom") && (
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="!size-2 !border-2 !border-background"
      />
    )}
  
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
          <Icon className="size-4" />
        </div>
  
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">
            {data.label}
          </div>
  
          {data.description && (
            <div className="mt-1 space-y-0.5 text-xs text-muted-foreground">
              {data.description.map((item, index) => (
                <div key={`${item}-${index}`}>{item}</div>
              ))}
            </div>
          )}
        </div>
      </div>
  
      {hasHandle(data.outgoingHandles, "top-source") && (
        <Handle
          type="source"
          position={Position.Top}
          id="top-source"
          className="!size-2 !border-2 !border-background"
        />
      )}

      {hasHandle(data.outgoingHandles, "left-source") && (
        <Handle
          type="source"
          position={Position.Left}
          id="left-source"
          className="!size-2 !border-2 !border-background"
        />
      )}

      {hasHandle(data.outgoingHandles, "right-source") && (
        <Handle
          type="source"
          position={Position.Right}
          id="right-source"
          className="!size-2 !border-2 !border-background"
        />
      )}

      {hasHandle(data.outgoingHandles, "bottom-source") && (
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom-source"
          className="!size-2 !border-2 !border-background"
        />
      )}
    </div>
  );
}
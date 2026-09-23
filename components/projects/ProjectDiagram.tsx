"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
} from "@xyflow/react";

import type { ProjectDiagram } from "@/types/project";

import ProjectDiagramNode from "./ProjectDiagramNode";
import { getLayoutedElements } from "./projectDiagramLayout";
import {
  createDiagramEdges,
  createDiagramNodes,
} from "./projectDiagramMapper";
import ProjectDiagramEdge from "./projectDiagramEdge";


type ProjectDiagramProps = {
  diagram: ProjectDiagram;
};

const nodeTypes = {
  project: ProjectDiagramNode,
};

const edgeTypes = {
  project: ProjectDiagramEdge,
};

export default function ProjectDiagram({
  diagram,
}: ProjectDiagramProps) {
  const rawNodes = createDiagramNodes(diagram);
  const rawEdges = createDiagramEdges(diagram);

  const {
    nodes,
    edges,
  } = getLayoutedElements(
    rawNodes,
    rawEdges,
  );
  

  return (
    <div className="h-full w-full overflow-hidden rounded-xl border bg-muted/20">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        minZoom={0.5}
        maxZoom={1.5}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background
        variant={BackgroundVariant.Dots}
        gap={20}
        size={1} />
        <Controls
          className="
            !border-border
            !bg-background
            [&>button]:!border-border
            [&>button]:!bg-background
            [&>button]:!text-foreground
            [&>button>svg]:!text-foreground
            [&>button:hover]:!bg-muted
            [&>button:hover]:!text-foreground
            [&>button:hover>svg]:!text-black
          "
        />
      </ReactFlow>
    </div>
  );
}
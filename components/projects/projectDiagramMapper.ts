import {
    MarkerType,
    type Edge,
    type Node,
  } from "@xyflow/react";
  
  import type { ProjectDiagram } from "@/types/project";
  import type { ProjectDiagramNodeType } from "./ProjectDiagramNode";
  
  export function createDiagramNodes(
    diagram: ProjectDiagram,
  ): ProjectDiagramNodeType[] {
    return diagram.nodes.map((node) => {
      const incomingHandles = diagram.edges
        .filter((edge) => edge.target === node.id)
        .map((edge) => edge.targetHandle)
        .filter((handle): handle is string => Boolean(handle));

      const outgoingHandles = diagram.edges
        .filter((edge) => edge.source === node.id)
        .map((edge) => edge.sourceHandle)
        .filter((handle): handle is string => Boolean(handle));
  
      return {
        id: node.id,
  
        type: "project",
  
        position: {
          x: 0,
          y: 0,
        },
  
        data: {
          label: node.label,
          description: node.description,
          type: node.type,
  
          incomingHandles,
          outgoingHandles,
        },
      };
    });
  }
  
  export function createDiagramEdges(
    diagram: ProjectDiagram,
  ): Edge[] {
    return diagram.edges.map((edge, index) => ({
      id: `${edge.source}-${edge.target}-${index}`,
  
      source: edge.source,
      target: edge.target,

      sourceHandle: edge.sourceHandle,
      targetHandle: edge.targetHandle,
  
      type: "project",
  
      label: edge.label,
  
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
  
      style: {
        strokeWidth: 1.5,
      },
  
      labelStyle: {
        fontSize: 11,
        fontWeight: 500,
        fill: "var(--foreground)",
      },
  
      labelBgStyle: {
        fill: "var(--background)",
        fillOpacity: 0.9,
      },
  
      labelBgPadding: [6, 3],
      labelBgBorderRadius: 4,
    }));
  }
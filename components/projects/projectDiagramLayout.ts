import dagre from "@dagrejs/dagre";
import type { Edge, Node } from "@xyflow/react";
import type { ProjectDiagramNodeType } from "./ProjectDiagramNode";

export const PROJECT_DIAGRAM_NODE_SIZE = {
  width: 220,
  baseHeight: 80,
  descriptionLineHeight: 18,
};

export function getNodeHeight(description?: string[]) {
  const descriptionHeight =
    (description?.length ?? 0) *
    PROJECT_DIAGRAM_NODE_SIZE.descriptionLineHeight;

  return (
    PROJECT_DIAGRAM_NODE_SIZE.baseHeight +
    descriptionHeight
  );
}

export function getLayoutedElements(
  nodes: ProjectDiagramNodeType[],
  edges: Edge[],
) {
  const graph = new dagre.graphlib.Graph();

  graph.setDefaultEdgeLabel(() => ({}));

  graph.setGraph({
    rankdir: "TB",
    nodesep: 50,
    ranksep: 80,
  });

  nodes.forEach((node) => {
    graph.setNode(node.id, {
      width: PROJECT_DIAGRAM_NODE_SIZE.width,
      height: getNodeHeight(node.data.description),
    });
  });

  edges.forEach((edge) => {
    graph.setEdge(edge.source, edge.target);
  });

  dagre.layout(graph);

  const layoutedNodes = nodes.map((node) => {
    const position = graph.node(node.id);
    const height = getNodeHeight(node.data.description);

    return {
      ...node,
      position: {
        x:
          position.x -
          PROJECT_DIAGRAM_NODE_SIZE.width / 2,
        y:
          position.y - height / 2,
      },
    };
  });

  return {
    nodes: layoutedNodes,
    edges,
  };
}
import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

// need to import the vis network css in order to show tooltip

export default function Graphs() {
  const graph = {
    nodes: [
      { id: 1, label: "Geração de documentos", title: "node 1 tootip text" },
      { id: 2, label: "Repasse de documentos", title: "node 2 tootip text" },
      { id: 3, label: "Coleta de assinaturas", title: "node 3 tootip text" },
      { id: 4, label: "Conclusão", title: "node 4 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 1 },
      { from: 3, to: 1 },
      { from: 3, to: 1 },
      { from: 3, to: 4 },
    ]
  };

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
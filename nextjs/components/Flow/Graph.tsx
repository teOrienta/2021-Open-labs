import { Graph } from "react-d3-graph";

export default function Graphs() {
    const data = {
        nodes: [
            { id: "Chrome", svg: '/graph/chrome.svg'}, 
            { id: "Facebook", svg: '/graph/facebook.svg' }, 
            { id: "Whatsapp", svg: '/graph/whatsapp.svg'},
            { id: "Tiktok", svg: '/graph/tiktok.svg'},
            { id: "Ifood", svg: '/graph/ifood.svg'},
            { id: "Youtube", svg: '/graph/youtube.svg'},
        ], links: [
            { source: "Chrome", target: "Facebook" },
            { source: "Facebook", target: "Whatsapp" },
            { source: "Chrome", target: "Youtube" },
            { source: "Whatsapp", target: "Youtube" },
            { source: "Youtube", target: "Tiktok" },
            { source: "Tiktok", target: "Ifood" },
        ],
    };

    const myConfig = {
        "automaticRearrangeAfterDropNode": false,
        "collapsible": false,
        "directed": true,
        "focusAnimationDuration": 0.75,
        "focusZoom": 1,
        "freezeAllDragEvents": false,
        "height": 400,
        "highlightDegree": 1,
        "highlightOpacity": 1,
        "linkHighlightBehavior": true,
        "maxZoom": 8,
        "minZoom": 0.1,
        "nodeHighlightBehavior": true,
        "panAndZoom": false,
        "staticGraph": false,
        "staticGraphWithDragAndDrop": false,
        "width": 800,
        "d3": {
          "alphaTarget": 0.05,
          "gravity": -100,
          "linkLength": 10,
          "linkStrength": 1,
          "disableLinkForce": false
        },
        "node": {
          "color": "#6163ff",
          "fontColor": "#9ca9b3",
          "fontSize": 8,
          "fontWeight": "normal",
          "highlightColor": "#e04d25",
          "highlightFontSize": 8,
          "highlightFontWeight": "normal",
          "highlightStrokeColor": "SAME",
          "highlightStrokeWidth": "SAME",
          "labelProperty": "id",
          "mouseCursor": "pointer",
          "opacity": 1,
          "renderLabel": true,
          "size": 200,
          "strokeColor": "none",
          "strokeWidth": 1.5,
          "svg": "",
          "symbolType": "circle"
        },
        "link": {
          "color": "#d3d3d3",
          "fontColor": "black",
          "fontSize": 8,
          "fontWeight": "normal",
          "highlightColor": "SAME",
          "highlightFontSize": 8,
          "highlightFontWeight": "normal",
          "labelProperty": "label",
          "mouseCursor": "pointer",
          "opacity": 1,
          "renderLabel": false,
          "semanticStrokeWidth": false,
          "strokeWidth": 1.5,
          "markerHeight": 6,
          "markerWidth": 6,
          "strokeDasharray": 0,
          "strokeDashoffset": 0,
          "strokeLinecap": "butt"
        }
    };

    const onClickNode = function(nodeId) {
        console.log(`Clicked node ${nodeId}`);
    };

    const onClickLink = function(source, target) {
        console.log(`Clicked link between ${source} and ${target}`);
    };

    return (
        <Graph
            id="graph-id" // id is mandatory
            data={data}
            config={myConfig}
            onClickNode={onClickNode}
            onClickLink={onClickLink}
        />
    )
}
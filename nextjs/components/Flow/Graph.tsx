import { Graph } from "react-d3-graph";

export default function Graphs() {
    const data = {
        nodes: [
            { id: "Chrome", svg: '/graph/chrome.svg'}, 
            { id: "Facebook", svg: '/graph/facebook.svg' }, 
            { id: "Whatsapp", svg: '/graph/whatsapp.svg'},
            { id: "Youtube", svg: '/graph/youtube.svg'},
            { id: "Excel", svg: '/graph/excel-2019.svg'},
            { id: "Word", svg: '/graph/word-2019.svg'},
            { id: "Discord", svg: '/graph/discord.svg'},
            { id: "Mongo", svg: '/graph/mongodb.svg'},
            { id: "SQLServer", svg: '/graph/sql-server.svg'},
            { id: "Figma", svg: '/graph/figma.svg'},
            { id: "Slack", svg: '/graph/slack.svg'},
        ], links: [
            { source: "Chrome", target: "Facebook", strokeWidth: "0.8" },
            { source: "Facebook", target: "Whatsapp", strokeWidth: "0.8" },
            { source: "Facebook", target: "Slack", strokeWidth: "4" },
            { source: "Chrome", target: "Youtube", strokeWidth: "1" },
            { source: "Whatsapp", target: "Youtube", strokeWidth: "3" },
            { source: "Youtube", target: "Slack", strokeWidth: "4" },
            { source: "Youtube", target: "Word", strokeWidth: "2" },
            { source: "Word", target: "Excel", strokeWidth: "1" },
            { source: "Discord", target: "Excel", strokeWidth: "1" },
            { source: "Excel", target: "SQLServer", strokeWidth: "2" },
            { source: "SQLServer", target: "Excel", strokeWidth: "3" },
            { source: "Excel", target: "Word", strokeWidth: "3" },
            { source: "Word", target: "Slack", strokeWidth: "2" },
            { source: "Slack", target: "Figma", strokeWidth: "2" },
            { source: "Figma", target: "SQLServer", strokeWidth: "1" },
            { source: "SQLServer", target: "Discord", strokeWidth: "1" },
            { source: "Discord", target: "Slack", strokeWidth: "0.8" },
            { source: "Slack", target: "Mongo", strokeWidth: "3" },
            { source: "Mongo", target: "Word", strokeWidth: "3" },
            { source: "Word", target: "Excel", strokeWidth: "0.8" },
            { source: "Excel", target: "Chrome", strokeWidth: "2" },
            { source: "Chrome", target: "Whatsapp", strokeWidth: "1" },
            { source: "Whatsapp", target: "Youtube", strokeWidth: "1" },
        ],
    };

    const myConfig = {
        "automaticRearrangeAfterDropNode": true,
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
        "d3": {
          "alphaTarget": 0.05,
          "gravity": -250,
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
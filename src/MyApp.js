import React, { Component } from "react";
import MxGraphEditor from "./MxGraphGridEditor";
import Demo from "./Demo";
import "antd/dist/antd.css";
import "./styles.css";
import ThreatList from "./component/ThreatList.js";

class MyApp extends Component {
  state = { jsonGraph: {} }

  callbackFunction = (childData) => {
      this.setState({ jsonGraph: childData })
      // console.log(childData);
  }

  deleteNodeFromModel = (nodeId) => {
    for (var i in this.state.jsonGraph.graph) {
      if (this.state.jsonGraph.graph[i]["mxObjectId"] === nodeId)
      {
        this.state.jsonGraph.graph.splice(i, 1);
      }
    }
  }

  render() {
        return (
            <div className="MyApp">
                  <div>
                    <MxGraphEditor parentCallback={this.callbackFunction} deleteNode={this.deleteNodeFromModel}/>
                    <ThreatList graph={this.state.jsonGraph}/>
                  </div>
            </div>
        );
  }
}

export default MyApp;
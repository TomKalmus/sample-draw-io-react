import React, { Component } from "react";
import Draggable from "react-draggable";
import "../threatlist.css";
import { exportToJsonNodeNames } from "../common/Common.js";

class ThreatList extends Component {
  state = { nodes: [] };

  constructor(props) {
    super(props);
  }

  exportToJsonNodeNames = (graph) => {
    var nodesList = [];

    for (var id in graph)
    {
      if (graph[id]["value"].attributes) {
        nodesList.push(graph[id]["value"].attributes.getNamedItem("label").value);
      }
    }

    this.setState({ nodes: nodesList});
    console.log(this.state.nodes);
  }

  generateThreats = () => {
    this.exportToJsonNodeNames(this.props.graph.graph);
  }

  renderThreats = (threats) => {
    if (threats.length > 0) {      
        return threats.map((threat) => (
            <li>{ threat + " threat" }</li>
        ));
    }
    else return [];
}
T
  render() {
    const threats = this.renderThreats(this.state.nodes);

    return (<Draggable>
              <div className="threat-list-container">
                <button type="button" onClick={this.generateThreats}>Generate threats</button>
                <section>
                    <ul>
                      { threats }
                    </ul>
                </section>
      
              </div>
            </Draggable>
            );
  }
}

export default ThreatList;
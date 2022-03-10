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
  }

  render() {
        return (
            <div className="MyApp">
                  <div>
                    <MxGraphEditor parentCallback={this.callbackFunction}/>
                    <ThreatList graph={this.state.jsonGraph}/>
                  </div>
            </div>
        );
  }
}

export default MyApp;
import React, { Component } from "react";
import Draggable from "react-draggable";
import "../threatlist.css";
import { Test } from "../common/Common.js";

class ThreatList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // custom event listener
    window.addEventListener("custom-event", this.handleEvent);
  }

  componentWillUnmount() {
    // remove event listener
    window.removeEventListener("custom-event", this.handleEvent);
  }

  // Event handler
  handleEvent = (event) => {
    console.log("Custom event", event);
  }

  testEventHandler = () => {
    const event = new Event('custom-event');
    dispatchEvent(event);
  }

  generateThreats = () => {
    alert("Great Shot!");
  }

  render() {

    return (<Draggable>
              <div className="threat-list-container">
                <button type="button" onClick={this.generateThreats}>Generate threats</button>
                <button type="button" onClick={this.testEventHandler}>Test</button>
              </div>
            </Draggable>
            );
  }
}

export default ThreatList;
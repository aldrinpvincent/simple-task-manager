import React, { Component } from "react";

class Droppable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("data");
    e.target.insertBefore(document.getElementById(data), e.target.lastChild);
  }

  handleOnDragOver(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div
        className={this.props.className}
        id={this.props.id}
        onDrop={this.handleDrop}
        onDragOver={this.handleOnDragOver}
      >
        <h4 className="list-head"> {this.props.heading}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Droppable;

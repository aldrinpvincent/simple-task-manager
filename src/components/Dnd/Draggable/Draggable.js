import React, { Component } from "react";

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = { className: "" };
    this.handleOnDragStart = this.handleOnDragStart.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  handleOnDragStart(e) {
    e.dataTransfer.setData("data", e.target.id);
    setTimeout(() => {
      this.setState({
        className: "hide"
      });
    }, 0);
  }

  handleOnDragEnd() {
    this.setState({
      className: ""
    });
  }
  handleOnDragOver(e) {
    // console.log("over :", e.target);
    e.stopPropagation();
  }

  render() {
    return (
      <div
        className={this.state.className}
        id={this.props.id}
        draggable
        onDragStart={this.handleOnDragStart}
        onDragOver={this.handleOnDragOver}
        onDragEnd={this.handleOnDragEnd}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;

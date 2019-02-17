import React, { Component } from "react";
class EditableInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      editing: false,
      hover: false
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      editing: this.props.editing || false,
      text: this.props.text
    });
  }
  toggleEditMode() {
    this.setState({
      editing: !this.state.editing
    });
  }

  deleteItem(e) {
    var elem = e.target.parentNode;
    elem.parentNode.removeChild(elem);
    e.stopPropagation();
  }

  handleSubmit(event) {
    this.setState({
      editing: false,
      text: this.refs.inputText.value
    });
    event.preventDefault();
  }

  hoverOn() {
    this.setState({ hover: true });
  }
  hoverOff() {
    this.setState({ hover: false });
  }

  editView() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          defaultValue={this.state.text}
          className="form-control"
          ref="inputText"
          autoFocus
          required
        />

        <input type="submit" value="Update" className="btn btn-success" />
        <input
          type="reset"
          value="X"
          className="btn btn-danger"
          onClick={this.toggleEditMode}
        />
      </form>
    );
  }

  nonEditView() {
    return <div onClick={this.toggleEditMode}>{this.state.text}</div>;
  }

  render() {
    return (
      <div
        className={this.state.hover ? "list-item hover" : "list-item"}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        {this.state.editing ? this.editView() : this.nonEditView()}
        {this.state.hover && !this.state.editing ? (
          <>
            <button
              type="button"
              className="edit-button btn btn-primary "
              onClick={this.toggleEditMode}
            >
              Edit
            </button>
            <button
              type="button"
              className="edit-button btn btn-danger "
              onClick={this.deleteItem}
            >
              Delete
            </button>
          </>
        ) : null}
      </div>
    );
  }
}

export default EditableInput;

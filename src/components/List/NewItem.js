import React, { Component } from "react";
class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      editing: false
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    this.setState(
      {
        editing: false
      },
      () => {
        this.props.handleSave(this.state.text);
      }
    );
    event.preventDefault();
  }

  toggleEditMode() {
    this.setState({
      editing: !this.state.editing
    });
  }

  editView() {
    return (
      <div className="list-item">
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            className="form-control"
            autoFocus
            required
          />

          <input type="submit" value="Add item" className="btn btn-success" />
          <input
            type="reset"
            value="X"
            className="btn btn-danger"
            onClick={this.toggleEditMode}
          />
        </form>
      </div>
    );
  }

  nonEditView() {
    return (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={this.toggleEditMode}
      >
        + {this.props.label}
      </button>
    );
  }

  render() {
    return (
      <div className={this.props.class}>
        {this.state.editing ? this.editView() : this.nonEditView()}
      </div>
    );
  }
}

export default AddNewItem;

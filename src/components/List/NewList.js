import React, { Component } from "react";
class AddNewList extends Component {
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
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder={this.props.placeholder}
              className="add-list-input form-control"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Add list"
            className="btn btn-success"
            style={{ marginLeft: "10px" }}
          />
          <input
            type="reset"
            value="X"
            className="btn btn-danger"
            onClick={this.toggleEditMode}
          />
        </form>
      </>
    );
  }

  nonEditView() {
    return (
      <button
        type="button"
        className="btn btn-primary btn-md"
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

export default AddNewList;

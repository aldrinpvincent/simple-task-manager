import React, { Component } from "react";

import Droppable from "../components/Dnd/Droppable/Droppable";
import Draggable from "../components/Dnd/Draggable/Draggable";
import EditableInput from "../components/List/EditableInput";
import AddNewList from "../components/List/NewList";
import AddNewItem from "../components/List/NewItem";
import "../components/Dnd/Dnd.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addNewList = this.addNewList.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(content, list) {
    let newItems = this.state[list].slice();
    newItems.push(content);
    this.setState({
      [list]: newItems
    });
  }

  addNewList(heading) {
    this.setState({ [heading]: this.state[heading] || [] });
  }

  render() {
    let currentView = this.state;
    let view = [];
    for (const list in currentView) {
      if (currentView.hasOwnProperty(list)) {
        const currentList = currentView[list];

        var listView = currentList.map((item, count) => {
          return (
            <Draggable
              key={count}
              id={item + count + list}
              style={{ margin: "8px" }}
            >
              <EditableInput editing={false} text={item} />
            </Draggable>
          );
        });
        view.push(
          <>
            <Droppable
              id={list}
              key={list}
              heading={list}
              className="droppable col-sm-4 col-md-3 col-lg-2"
            >
              {listView}
              <AddNewItem
                handleSave={content => this.addNewItem(content, list)}
                label="Add new item"
                class="add-new-item"
              />
            </Droppable>
          </>
        );
      }
    }

    return (
      <>
        <AddNewList
          handleSave={this.addNewList}
          class="add-new-list"
          label="Add new list"
          placeholder="Please enter list name..."
        />
        <div className="row">{view}</div>
      </>
    );
  }
}

export default Board;

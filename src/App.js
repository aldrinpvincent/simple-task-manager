import React, { Component } from "react";
import Heading from "./components/Heading";
import Board from "./components/Dnd/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container-fluid">
        <Heading />
        <Board />
      </main>
    );
  }
}

export default App;

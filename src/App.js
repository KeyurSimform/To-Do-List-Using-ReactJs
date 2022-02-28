import React, { Component } from "react";
import "./App.css";
import { NodeList } from "./components/node-list/node-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {
          noteName: "Today's Set-Up",
          noteId: "n1",
          isActive: "",
        },
        {
          noteName: "Today's agenda",
          noteId: "n2",
          isActive: "",
        },
        {
          noteName: "yesterday's work review",
          noteId: "n3",
          isActive: "",
        },
        {
          noteName: "Learning Topics",
          noteId: "n4",
          isActive: "",
        },
        {
          noteName: "Implementations",
          noteId: "n5",
          isActive: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <NodeList>
          {this.state.notes.map((note) => (
            <h1 key={note.noteId}>
              {note.noteName}
              {note.isActive}
            </h1>
          ))}
        </NodeList>
      </div>
    );
  }
}
export default App;

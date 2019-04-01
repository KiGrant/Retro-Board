import React, { Component } from "react";
import "./App.css";
import Textblock from "./components/Textblock";

class App extends Component {
  state = {
    // //inputs for each group
    // Winput: "",
    // Tinput: "",
    // Ainput: "",
    // //Empty Arrays for state

    Wentwell: [{ catogory: 1, messages: "", thumbsup: 0, thumbsdown: 0 }],
    ActionItems: [{ catogory: 2, messages: "", thumbsup: 0, thumbsdown: 0 }],
    TooImprove: [{ catogry: 3, messages: "", thumbsup: 0, thumbsdown: 0 }]
  };

  set = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = e => {
    e.preventDefault();

    if ("Wbutton" === e.target.name) {
      return this.setState({
        Wentwell: [
          ...this.state.Wentwell,
          { catogory: 1, messages: "", thumbsup: 0, thumbsdown: 0 }
        ]
      });
    }

    if ("Tbutton" === e.target.name) {
      return this.setState({
        TooImprove: [
          ...this.state.TooImprove,
          { catogory: 2, messages: "", thumbsup: 0, thumbsdown: 0 }
        ]
      });
    }

    if ("Abutton" === e.target.name) {
      return this.setState({
        ActionItems: [
          ...this.state.ActionItems,
          { catogory: 3, messages: "", thumbsup: 0, thumbsdown: 0 }
        ]
      });
    }
  };
  delete = (deleteIndex, catogories) => {
    const updatedMessages = this.state[catogories].filter(
      (retroMessage, index) => {
        return index !== deleteIndex;
      }
    );
    this.setState({
      [catogories]: updatedMessages
    });
  };
  // move = e => {
  //   if ("LeftWentwell" === e.target.name) {
  //     return this.setState({
  //       Wentwell: [...this.state.Wentwell, this.state.ActionItems]
  //     });
  //   }
  // };

  render() {
    const { Wentwell, ActionItems, TooImprove } = this.state;
    return (
      <div id="root">
        <main className="content">
          <h1>Retro Board</h1>
          <div className="RetroBoad">
            <div className="RetroBoardCategory RetroBoardCategory-1">
              <h2>Went Well</h2>
              <button
                type="button"
                className="button button-new"
                onClick={this.add}
                name="Wbutton"
              >
                <span className="sr-only">Add to "Went Well"</span>+
              </button>
              {this.state.Wentwell.map((Wentwell, index) => {
                return (
                  <Textblock
                    addCard={this.addCard}
                    delete={this.delete}
                    index={index}
                    catogories={"Wentwell"}
                    move={this.move}
                  />
                );
              })}

              <div className="Retro">
                <label className="sr-only" for="retro-label-6">
                  Enter retro text
                </label>
                <textarea
                  id="retro-label-6"
                  className="textbox"
                  placeholder="Enter text here"
                  rows="1"
                  name="Winput"
                  value={this.state.Winput}
                  onChange={this.set}
                />
                <div className="ButtonGroup">
                  <button
                    type="button"
                    className="button button-left"
                    name="LeftWentwell"
                    onclick={this.move}
                  >
                    <span className="sr-only">Move Left</span>&lt;
                  </button>
                  
                  <button
                    type="button"
                    className="button button-delete"
                    onclick={this.delete}
                  >
                    <span className="sr-only">Delete</span>×
                  </button>
                  <button type="button" className="button button-right">
                    <span className="sr-only">Move Right</span>&gt;
                  </button>
                </div>
              </div>
            </div>

            <div className="RetroBoardCategory RetroBoardCategory-2">
              <h2>To Improve</h2>
              <button
                type="button"
                className="button button-new"
                onClick={this.add}
                name="Tbutton"
              >
                <span className="sr-only">Add to "To Improve"</span>+
              </button>
              {this.state.TooImprove.map((TooImprove, index) => {
                return (
                  <Textblock
                    addCard={this.addCard}
                    delete={this.delete}
                    index={index}
                    catogories={"TooImprove"}
                  />
                );
              })}
              <div className="Retro">
                <label className="sr-only" for="retro-label-2">
                  Enter retro text
                </label>
                <div className="TooImprove" />
                <textarea
                  id="retro-label-2"
                  className="textbox"
                  placeholder="Enter text here"
                  rows="1"
                  name="Tinput"
                  value={this.state.Tinput}
                  onChange={this.set}
                >
                  Life
                </textarea>
                <div className="ButtonGroup">
                  <button type="button" className="button button-left">
                    <span className="sr-only">Move Left</span>&lt;
                  </button>

                  <button type="button" className="button button-delete">
                    <span className="sr-only">Delete</span>×
                  </button>
                  <button type="button" className="button button-right">
                    <span className="sr-only">Move Right</span>&gt;
                  </button>
                </div>
              </div>
            </div>

            <div className="RetroBoardCategory RetroBoardCategory-3">
              <h2>Action Items</h2>
              <button
                type="button"
                className="button button-new"
                onClick={this.add}
                name="Abutton"
              >
                <span className="sr-only">Add to "Action Items"</span>+
              </button>
              {this.state.ActionItems.map((ActionItems, index) => {
                return (
                  <Textblock
                    addCard={this.addCard}
                    delete={this.delete}
                    index={index}
                    catogories={"ActionItems"}
                  />
                );
              })}
              <div className="Retro">
                <label className="sr-only" for="retro-label-4">
                  Enter retro text
                </label>
                <textarea
                  id="retro-label-4"
                  className="textbox"
                  placeholder="Enter text here"
                  rows="1"
                  name="Ainput"
                  value={this.state.Ainput}
                  onChange={this.set}
                >
                  Completing this
                </textarea>
                <div className="ButtonGroup">
                  <button type="button" className="button button-left">
                    <span className="sr-only">Move Left</span>&lt;
                  </button>
                  <button type="button" className="button button-delete">
                    <span className="sr-only">Delete</span>×
                  </button>
                  <button type="button" className="button button-right">
                    <span className="sr-only">Move Right</span>&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;

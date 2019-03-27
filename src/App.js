import React, { Component } from "react";
import "./App.css";
import Textblock from "./components/Textblock";

class App extends Component {
  state = {
    input: "",
    retroMessage: [],
    Wentwell: [],
    ActionItems: [],
    TooImprove: []
    // showInput: true
  };
  setinput = input => this.setState({ input });
  // set = e => {
  //   this.setState({ [e.target.name]: e.target.value });

  // toggle = () => {
  //   this.setState({ showInput: !this.state.showInput });
  // };

  add = e => {
    e.preventDefault();
    this.setState({
      Wentwell: [...this.state.Wentwell, this.state.input],
      ActionItems: [...this.state.ActionItems, this.state.input],
      TooImprove: [...this.state.TooImprove, this.state.input],
      input: ""
    });
    // this.setState({ showInput: !this.state.showInput });
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
  render() {
    const { Wentwell, ActionItems, TooImprove } = this.state;
    return (
      <div className="App">
        <header>
          <h2>Went Well</h2>
          <form className="Retro-form" onSubmit={this.add}>
            <div className="input-added">
              <input
                name="cat1"
                value={this.state.input}
                onChange={e => this.setinput(e.target.value)}
              />
              <button type="submit" className="plus-button" onClick={this.add}>
                +
              </button>
            </div>
            <div className="Wentwell">
              {Wentwell.map((comment, index) => {
                return (
                  <Textblock
                    catogories={"Wentwell"}
                    displayMessage={comment}
                    delete={this.delete}
                    index={index}
                    showInput={this.state.showInput}
                  />
                );
              })}
            </div>
            <div>
              <h2>Action Items</h2>
              <div className="ActionItems">
                <button type="submit" className="plus-button">
                  +
                </button>
                <input
                  name="cat2"
                  value={this.state.input}
                  onChange={e => this.setinput(e.target.value)}
                />
              </div>
              <div className="ActionItems">
                {ActionItems.map((comment, index) => {
                  return (
                    <Textblock
                      catogories={"ActionItems"}
                      displayMessage={comment}
                      delete={this.delete}
                      index={index}
                      showInput={this.state.showInput}
                    />
                  );
                })}
              </div>
              <div className="TooImprove" />
              <h2>Too Improve</h2>
              <input
                name="cat3"
                value={this.state.input}
                onChange={e => this.setinput(e.target.value)}
              />
              <button type="submit" className="plus-button">
                +
              </button>
            </div>
            <div className="TooImprove">
              {TooImprove.map((comment, index) => {
                return (
                  <Textblock
                    catogories={"TooImprove"}
                    displayMessage={comment}
                    delete={this.delete}
                    index={index}
                    showInput={this.state.showInput}
                  />
                );
              })}
            </div>
          </form>
        </header>
        <ul className="Retro">
          {this.state.Wentwell.map((Wentwell, index) => {
            return (
              <Textblock
                key={`wentwell-${index}`}
                index={index}
                delete={this.delete}
              >
                {Wentwell}
              </Textblock>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

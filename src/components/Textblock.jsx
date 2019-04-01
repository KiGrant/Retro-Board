import React from "react";

import Moving from "react";
import Likes from "./Like";
import Dislike from "./Dislike";

function Textblock(props) {
  return (
    <div>
      <div className="Retro">
        {props.addCard}
        <textarea
          id="retro-label-1"
          className="textbox"
          placeholder="Enter text here"
          rows="1"
        />
      </div>
      <div className="ButtonGroup">
        <button
          type="button"
          className="button button-left"
          // onClick={() => props.move(props.index, props.catogory)}
        >
          <span className="sr-only">Move Left</span>&lt;
        </button>
        <Likes />
        <button
          type="button"
          className="button button-delete"
          onClick={() => props.delete(props.index, props.catogories)}
        >
          <span className="sr-only">Delete</span>×
        </button>
        
        <Dislike/>
        <button type="button" className="button button-right">
          <span className="sr-only">Move Right</span>&gt;
        </button>
        
      </div>
    </div>
  );
}

export default Textblock;

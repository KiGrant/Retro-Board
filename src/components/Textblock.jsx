import React from "react";

function Textblock(props) {
  return (
    <li className="Retro-items">
      {props.displayMessage}
      <button
        type="button"
        className="Delete-button"
        aria-label="Delete"
        onClick={() => props.delete(props.index, props.catogories)}
      >
        x
      </button>
      {/* {props.showInput && <input />} */}
    </li>
  );
}

export default Textblock;

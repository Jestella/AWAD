import React from "react";
import { FaTimes } from "react-icons/fa";

function Word(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="word">
      <button onClick={handleClick}>
        <FaTimes />
      </button>
      <h1>{props.word}</h1>
      <p>"{props.sentence}"</p>
      <p>EN: {props.meaning_en}</p>
      <p>ES: {props.meaning_es}</p>
      <p>JP: {props.meaning_jp}</p>
    </div>
  );
}

export default Word;

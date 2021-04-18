import React from "react";

function Word(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="word">
      <h1>{props.word}</h1>
      <p>{props.sentence}</p>
      <p>{props.meaning_en}</p>
      <p>{props.meaning_es}</p>
      <p>{props.meaning_jp}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Word;

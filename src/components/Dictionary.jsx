import React from "react";

function Dictionary(props) {
  return (
    <div>
      <dt>
        <p>{props.id}</p>
        <dt>{props.word}</dt>
        <h5>{props.sentence}</h5>
        <p>{props.meaning_en}</p>
        <p>{props.meaning_es}</p>
        <p>{props.meaning_jp}</p>
      </dt>
    </div>
  );
}

export default Dictionary;

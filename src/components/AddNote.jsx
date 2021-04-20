import React, { useState } from "react";

function AddNote(props) {
  const [word, setWord] = useState({
    word: "",
    sentence: "",
    meaning_en: "",
    meaning_es: "",
    meaning_jp: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setWord((prevWord) => {
      return {
        ...prevWord,
        [name]: value,
      };
    });
  }

  function submitWord(event) {
    props.onAdd(word);
    setWord({
      word: "",
      sentence: "",
      meaning_en: "",
      meaning_es: "",
      meaning_jp: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="word"
          onChange={handleChange}
          value={word.word}
          placeholder="Today's word"
        />
        <textarea
          name="sentence"
          onChange={handleChange}
          value={word.sentence}
          placeholder="in sentence"
          rows="3"
        />
        <textarea
          name="meaning_en"
          onChange={handleChange}
          value={word.meaning_en}
          placeholder="in English"
        />
        <textarea
          name="meaning_es"
          onChange={handleChange}
          value={word.meaning_es}
          placeholder="in Español"
        />
        <textarea
          name="meaning_jp"
          onChange={handleChange}
          value={word.meaning_jp}
          placeholder="in 日本語"
        />
        <button onClick={submitWord}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;

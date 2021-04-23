import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

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
      <form autoComplete="off">
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
          rows="2"
        />
        <textarea
          name="meaning_en"
          onChange={handleChange}
          value={word.meaning_en}
          placeholder="English"
        />
        <textarea
          name="meaning_es"
          onChange={handleChange}
          value={word.meaning_es}
          placeholder="Español"
        />
        <textarea
          name="meaning_jp"
          onChange={handleChange}
          value={word.meaning_jp}
          placeholder="日本語"
        />
        <button onClick={submitWord}>
          <FaPencilAlt class="FaPencilAlt" />
        </button>
      </form>
    </div>
  );
}

export default AddNote;

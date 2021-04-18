import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Word from "./Word";
import AddNew from "./AddNew";

function App() {
  const [words, setWords] = useState([]);

  function addWord(newWord) {
    setWords((prevWords) => {
      return [...prevWords, newWord];
    });
  }

  function deleteWord(id) {
    setWords((prevWords) => {
      return prevWords.filter((wordItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNew onAdd={addWord} />
      {words.map((wordItem, index) => {
        return (
          <Word
            key={index}
            id={index}
            word={wordItem.word}
            sentence={wordItem.sentence}
            meaning_en={wordItem.meaning_en}
            meaning_es={wordItem.meaning_es}
            meaning_jp={wordItem.meaning_jp}
            onDelete={deleteWord}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

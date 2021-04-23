import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import About from "./About";
import Login from "./Login";

function App() {
  const [word, setWord] = useState([]);

  function addWord(newWord) {
    setWord((prevWord) => {
      return [...prevWord, newWord];
    });
  }

  function deleteWord(id) {
    setWord((prevWord) => {
      return prevWord.filter((wordItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <AddNote onAdd={addWord} />
              {word.map((wordItem, index) => (
                <Note
                  key={index}
                  id={index}
                  word={wordItem.word}
                  sentence={wordItem.sentence}
                  meaning_en={wordItem.meaning_en}
                  meaning_es={wordItem.meaning_es}
                  meaning_jp={wordItem.meaning_jp}
                  onDelete={deleteWord}
                />
              ))}
            </>
          )}
        />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

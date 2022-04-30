import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Note from '../src/components/Note';
import AddNote from '../src/components/AddNote';
import About from '../src/components/About';
import Login from '../src/components/Login';

import './App.css';

const App = () => {
  const [word, setWord] = useState([]);

  function addWord(newWord) {
    setWord((prevWord) => {
      return [...prevWord, newWord];
    });
  }

  function editWord(id) {
    setWord((prevWord) => {});
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
          path='/'
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
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

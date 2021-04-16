import Header from "./Header";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import Words from "./Words";
import Login from "./Login";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <h1>A word a day!</h1>
      {Words.map((wordItem) => (
        <Dictionary
          key={wordItem.key}
          word={wordItem.word}
          sentence={wordItem.sentence}
          meaning_en={wordItem.meaning_en}
          meaning_es={wordItem.meaning_es}
          meaning_jp={wordItem.meaning_jp}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

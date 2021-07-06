import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, []);

  return (
    <div className="App">
      <Characters charactersList={characterList} />
    </div>
  );
}

export default App;

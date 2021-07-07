import "./App.css";
import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import { Button } from "./components/Button";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, [page]);

  const Previous = () => {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  const Next = () => {
    if (page === 34) {
      setPage(34);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="App" id="App">
      <header className="Header"></header>
      <Characters charactersList={characterList} />
      <div className="BtnSection">
        <a href="#App">
          <Button Func={Previous}>Previous</Button>
        </a>
        <span className="PageNumber">{page}</span>
        <a href="#App">
          <Button Func={Next}>Next</Button>
        </a>
      </div>
      <footer className="Footer"></footer>
    </div>
  );
}

export default App;

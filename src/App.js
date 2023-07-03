import { useState, useEffect } from "react";
import axios, { all } from "axios";
import PokemonThumbnail from "./components/PokemonThumbnail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const pokemonAry = [];

  // 從PokeAPI抓取數筆寶可夢名稱和url(獲取特定寶可夢更多資訊)
  const getAllPokemons = async () => {
    let data = await axios.get(loadMore);
    setLoadMore(data.data.next);

    createPokemonObject(data.data.results);
  };

  // 撈出寶可夢完整資料並放入allPokemons狀態裡面
  const createPokemonObject = (result) => {
    // 抓到陣列中每筆特定的寶可夢完整資訊，並塞入allPokemons的狀態裡面
    result.forEach(async (pokemon) => {
      let data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      pokemonAry.push(data);
      setAllPokemons([...pokemonAry]);
    });
  };

  console.log(allPokemons);

  const handleLoad = () => {};

  // 畫面一渲染時就執行
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>PokeDex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon) => {
            return <PokemonThumbnail pokemon={pokemon} />;
          })}
        </div>
        <button className="load-more" onClick={handleLoad}>
          加載更多
        </button>
      </div>
    </div>
  );
}

export default App;

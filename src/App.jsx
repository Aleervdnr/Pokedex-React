import React,{useState, useEffect} from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Pokedex from './Componentes/Pokedex/Pokedex';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)

  const fetchPokemons = async () => {
    try{
      const data = await getPokemons(24,24 * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    }catch(err){}
  }

  useEffect(() => {
    fetchPokemons()
  },[page])
  

  return (
    <div className="App">
      <Buscador/>
      <button onClick={() => setPage(page + 1)}>+</button>
      <button onClick={() => setPage(page - 1)}>-</button>

      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;

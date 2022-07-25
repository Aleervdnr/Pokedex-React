import React,{useState, useEffect} from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Paginador from './Componentes/Paginador/Paginador';
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

  const nextPage = () => setPage(page + 1)
  const prevPage = () => setPage(page - 1)
  

  return (
    <div className="App">
      <header className="header">
        <h1>Pokedex</h1>
        <nav className="nav">
          <Buscador/>
          <Paginador nextPage={nextPage} prevPage={prevPage} />
        </nav>
      </header>


      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;

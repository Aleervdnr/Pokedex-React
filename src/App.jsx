import React,{useState, useEffect} from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Paginador from './Componentes/Paginador/Paginador';
import Pokedex from './Componentes/Pokedex/Pokedex';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons(24,24 * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotalPages(Math.ceil(data.count / 24))
      setLoading(false)
    }catch(err){}
  }

  useEffect(() => {
    fetchPokemons()
  },[page])

  const nextPage = () => {
    if(page < totalPages - 1){
      setPage(page + 1)
    }
  }
  const prevPage = () => {
    if(page >= 1){
      setPage(page - 1)
    }
  }

  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons()
    }

    const result = await searchPokemon(pokemon)
    if(!result){
      alert("No se encuentra el Pokemon indicado")
      return
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }

  }
  

  return (
    <div className="App">
      <header className="header">
        <h1>Pokedex</h1>
        <nav className="nav">
          <Buscador onSearch={onSearch}/>
          <div className="btns-container">
            <button>Favoritos</button>
            <button onClick={() => fetchPokemons()}>Mostrar todos</button>
            <Paginador 
              nextPage={nextPage} 
              prevPage={prevPage} 
              page={page + 1} 
              totalPages={totalPages} 
            />
          </div>
        </nav>
      </header>
      {
        loading ? 
        "Cargando..." 
        : 
        <Pokedex pokemons={pokemons}/>
      }
      <Paginador nextPage={nextPage} prevPage={prevPage} page={page + 1} totalPages={totalPages} />
    </div>
  );
}

export default App;

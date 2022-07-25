import React from 'react'
import "./Pokedex.css"
import Pokemon from '../Pokemon/Pokemon'

export default function Pokedex({pokemons}) {
  return (
      <div className="pokedex-container">
        {pokemons.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />
        })}
      </div>
  )
}
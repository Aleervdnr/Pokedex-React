import React from 'react'
import "./Pokemon.css"

export default function Pokemon({pokemon}) {
  const type = pokemon.types[0].type.name
  return (
    <div className={`pokemon box-${type}`}>
      <div className="poke-text">
        <span className='poke-id'>#{pokemon.id}</span>      
        <h2>{pokemon.name}</h2>
        <div className="types">
          {pokemon.types.map((types) => {
            return <div className={`type type-${types.type.name}`} key={pokemon.name}>{types.type.name}</div>
          })}
        </div>
      </div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-img"/>
    </div>
  )
}

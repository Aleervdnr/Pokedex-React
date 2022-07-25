import React from 'react'
import "./Pokemon.css"

export default function Pokemon({pokemon}) {
  return (
    <div className="pokemon">
      <div className="poke-text">
        <span className='poke-id'>#{pokemon.id}</span>      
        <h2>{pokemon.name}</h2>
        <div className="types">
          <div className="type">asd</div>
          <div className="type">asd</div>
        </div>
      </div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-img"/>
    </div>
  )
}

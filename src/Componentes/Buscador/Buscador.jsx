import React from 'react'
import "./Buscador.css"
import {AiOutlineSearch} from "react-icons/ai"

export default function Buscador() {
  return (
    <div className="buscador">
      <div className="buscador-input">
        <input type="text" placeholder='Buscar Pokemon...' />
      </div>
      <div className="buscador-btn">
        <button>
          <AiOutlineSearch className='buscador-icon'/>
        </button>
      </div>
    </div>
  )
}

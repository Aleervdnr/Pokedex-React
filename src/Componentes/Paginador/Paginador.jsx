import React from 'react'
import "./Paginador.css"
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"

export default function Paginador({nextPage,prevPage}) {
  return (
    <div className="paginador">
      <button onClick={prevPage}>
        <IoIosArrowBack/>
      </button>
      <button onClick={nextPage }>
        <IoIosArrowForward/>
      </button>
    </div>
  )
}

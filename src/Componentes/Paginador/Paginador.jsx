import React from 'react'
import "./Paginador.css"
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"


export default function Paginador({nextPage, prevPage, page, totalPages,   setPage}) {

  return (
    <div className="paginador">
      <button onClick={prevPage}>
        <IoIosArrowBack/>
      </button>
      <span>{page} de {totalPages} </span>
      <button onClick={nextPage}>
        <IoIosArrowForward/>
      </button>


    </div>
  )
}

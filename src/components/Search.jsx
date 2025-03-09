import { useState,useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

function Search() {

    const { SetQuery, HandleSubmit} = useGlobalContext()

    return (
      <>
        <form onSubmit={e => HandleSubmit(e)}>
            <input type="text" onChange={e => SetQuery(e.target.value)} />
            <button type="submit">cerca</button>
        </form>
      </>
    )
  }
  
  export default Search
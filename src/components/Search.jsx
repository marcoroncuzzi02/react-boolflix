import { useState,useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

function Search() {

    const { setQuery, HandleSubmit} = useGlobalContext()

    return (
      <>
        <form onSubmit={e => HandleSubmit(e)}>
            <input type="text" onChange={e => setQuery(e.target.value)} />
            <button type="submit">cerca</button>
        </form>
      </>
    )
  }
  
  export default Search
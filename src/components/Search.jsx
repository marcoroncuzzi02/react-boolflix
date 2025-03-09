import { useState,useEffect } from "react"

function Search() {

    const [query,setQuery] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }

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
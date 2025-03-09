import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()

const GlobalProvider = ( {children} ) => {

    const apikey = import.meta.VITE_API_KEY
    const endpoint = import.meta.VITE_ENDPOINT

    const [query,setQuery] = useState('')
    const[movies, setMovies] = useState([])

    const HandleSubmit = (e) => {
        e.preventDefault()
        fetch(`${endpoint}movie?api_key=${apikey}&query=${query}`)
        .then(res => setMovies(data.results))
        .catch( err => console.log (err))
    }

    useEffect( () => {
        console.log( "dati dei film:" + movies)
        console.log( "apikey:" + apikey)
        console.log( "endpoint:" + endpoint)
    })


    // https://api.themoviedb.org/3/search/movie?api_key=77a001877999b239027a152204c7d249&query=ritorno+al+futuro


    const value = {
        query,
        setQuery,
        HandleSubmit
    }


    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext( GlobalContext )

export {
    GlobalProvider,
    useGlobalContext
}
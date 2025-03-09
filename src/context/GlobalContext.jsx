import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ( {children} ) => {

    const apikey = import.meta.env.VITE_API_KEY
    const endpoint = import.meta.env.VITE_ENDPOINT

    const [query,setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [tvs, setTvs] = useState([])

    const HandleSubmit = (e) => {
        e.preventDefault()

        axios.get(`${endpoint}movie?api_key=${apikey}&query=${query}`)
        .then(res => setMovies(res.data.results))
        .catch( err => console.log (err))

        axios.get(`${endpoint}tv?api_key=${apikey}&query=${query}`)
        .then(res => setTvs(res.data.results))
        .catch( err => console.log (err))
    }

    useEffect( () => {
        console.log( "dati dei film:" + movies)
        console.log( "dati delle serie:" + movies)
        console.log( "apikey:" + apikey)
        console.log( "endpoint:" + endpoint)
    }, [movies])


    // https://api.themoviedb.org/3/search/movie?api_key=77a001877999b239027a152204c7d249&query=ritorno+al+futuro


    const value = {
        query,
        setQuery,
        HandleSubmit,
        movies,
        tvs
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
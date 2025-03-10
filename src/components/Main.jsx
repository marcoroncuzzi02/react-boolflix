import { useGlobalContext } from "../context/GlobalContext"
import ResultsList from "./ResultsList"

function Main() {

    const {movies, tvs} = useGlobalContext()

    const HandleStars = (vote) => Math.ceil(vote / 2)

    return (
      <>
        <main>
            <h2>Films</h2>

            <ResultsList type="movies" items={movies}/>

            <ul>
                {movies.map( (element) => {
                    return(
                        <li key={element.id}>
                            {element.title} <br />
                            {element.original_language} <br />
                            {element.original_title} <br />
                            {HandleStars( parseInt (element.vote_average))}
                        </li>
                    )
                })
            }
            </ul>

            <h2>Serie Tv</h2>

            <ResultsList type="tvs" items={tvs}/>

            <ul>
                {tvs.map( (element) => {
                    return(
                        <li key={element.id}>
                            {element.name}
                        </li>
                    )
                })
            }
            </ul>
        </main>
      </>
    )
  }
  
  export default Main
  
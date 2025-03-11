import Card from "./Card"
function ResultsList({type, items}) {

    return(
        <section>
            <p className="results-found">
                Risultati trovati: {items.length}
            </p>

            <ul className="card-list">
                {
                    items && items.length > 0 ?(
                        items.map( item => <Card key= {item.id} data={item} type={type} />)
                    ) : (
                        <p>Nessun risultato trovato</p>
                    )
                }
            </ul>
        </section>
    )

}
export default ResultsList
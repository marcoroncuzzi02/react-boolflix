import Card from "./Card"
function ResultsList({type, items}) {

    return(
        <section>
            <p>
                Risultati trovati: {items.lenght}
            </p>

            <ul>
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
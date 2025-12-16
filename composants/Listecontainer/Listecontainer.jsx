import './Style.css'
import logements from '../../assets/logement.json'
import Liste from '../Liste/Liste'
import arrow_up from '../../assets/Up-arrow.svg'
import arrow_down from '../../assets/Down-arrow.svg'
/*
function ListeContainer ({element}) {
    return(
        <section className='liste-container'>
            <details>
                <summary>
                    {`${element}`}
                    <img className='up' src={arrow_up}></img>
                    <img className='down' src={arrow_down}></img>
                </summary>
                <div>
                    {logements.map(({id, equipments}) =>(
                        <Liste
                            key={id}
                            id={id}
                            element={equipments}
                        />
                    ))}
                </div>
            </details>
        </section>
    )
}

export default ListeContainer
*/

function ListeContainer ({title,content}) {
    return(
        <section className='liste-container'>
            <details>
                <summary>
                    {`${title}`}
                    <img className='up' src={arrow_up}></img>
                    <img className='down' src={arrow_down}></img>
                </summary>
                <div className='liste'>
                    <Liste
                    element={content}
                    />
                </div>
            </details>
        </section>
    )
}

export default ListeContainer


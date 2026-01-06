import './Style.css'
import Liste from '../Liste/Liste'
import arrow_up from '../../assets/Up-arrow.svg'
import arrow_down from '../../assets/Down-arrow.svg'


function ListeContainer ({title,content}) {
    return(
        <section className="liste-container" name={title}>
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


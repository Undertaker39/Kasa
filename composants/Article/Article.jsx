import handleClick from '../Function'
import './Style.css'


function Article ({id, title, cover}) {
    return (
        <article id={id} className='logements' onClick={(handleClick)}>
            <img className='logements-img' src={cover} alt={`${title}`}></img>
            <p className='logements-title'>{title}</p>
        </article>
    )
}

export default Article
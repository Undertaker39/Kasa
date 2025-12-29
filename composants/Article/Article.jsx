import { Link } from 'react-router-dom'
import './Style.css'


function Article ({id, title, cover}) {
    return (
        <Link to={'/'+id}>
            <article id={id} className='logements'>
                <img className='logements-img' src={cover} alt={`${title}`}></img>
                <p className='logements-title'>{title}</p>
            </article>
        </Link>
    )
}

export default Article
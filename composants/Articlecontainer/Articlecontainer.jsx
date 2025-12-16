import './Style.css'
import logements from '../../assets/logement.json'
import Article from '../Article/Article'

function Articlecontainer () {
    return(
        <section className='article-container'>
            {logements.map(({id, title, cover}) =>(
                <Article
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                 />
            ))}
        </section>
    )
}

export default Articlecontainer

import about from '../../assets/about.json'
import ListeContainer from '../Listecontainer/Listecontainer';
import './Style.css'

function About () {
    return(
        <section className='about'>
            {about.map(({title,content}) =>(
                <ListeContainer
                    key={title}
                    title={title}
                    content={content}
                />
            ))}
        </section>
    )
}

export default About
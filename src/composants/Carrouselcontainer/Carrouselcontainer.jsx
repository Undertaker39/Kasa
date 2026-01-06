import Carrousel from '../Carrousel/Carrousel'
import './Style.css'

function Carrouselcontainer({content}){
    return(
        <section className='carrouselcontainer'>
            <Carrousel
            images={content}
            />
        </section>
    )
}

export default Carrouselcontainer
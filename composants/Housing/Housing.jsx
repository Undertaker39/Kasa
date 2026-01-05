import Carrouselcontainer from '../Carrouselcontainer/Carrouselcontainer'
import Titrecontainer from '../Titrecontainer/Titrecontainer'
import Locationcontainer from '../Locationcontainer/Locationcontainer'
import Tagcontainer from '../Tagscontainer/Tagscontainer'
import Ratingcontainer from '../Ratingcontainer/Ratingcontainer'
import ListeContainer from '../Listecontainer/Listecontainer'
import HostContainer from '../Hostcontainer/Hostcontainer'
import Error from '../Error/Error'
import './Style.css'
import logement from '../../assets/logement.json'
import { useParams } from 'react-router-dom'


function Housing () {
    const params = useParams()
    const logementFinded = logement.find(({id}) => id === params.id)
    if (logementFinded === undefined){
        return(
            <Error />
        )
    }else{
        return(
            <div className="housing-main">
                <Carrouselcontainer
                    content={logementFinded.pictures}
                />
                <section className='info'>
                    <div className='title-tags'>
                        <Titrecontainer
                            content={logementFinded.title}
                        />
                        <Locationcontainer
                            content={logementFinded.location}
                        />
                        <Tagcontainer
                            content={logementFinded.tags}
                            />
                    </div>
                    <div className='host-rating'>
                        <HostContainer
                            content={logementFinded.host}
                        />
                        <Ratingcontainer
                            content={logementFinded.rating}
                        />
                    </div>
                </section>
                <div className='listes'>
                    <ListeContainer
                        title='descritpion'
                        content={logementFinded.description}
                    />
                    <ListeContainer
                        title='equipement' 
                        content={logementFinded.equipments}
                    />
                </div>
            </div> 
        )
    }
}
export default Housing




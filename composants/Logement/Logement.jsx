import Carrouselcontainer from '../Carrouselcontainer/Carrouselcontainer'
import Titrecontainer from '../Titrecontainer/Titrecontainer'
import Tagcontainer from '../Tagscontainer/Tagscontainer'
import Ratingcontainer from '../Ratingcontainer/Ratingcontainer'
import ListeContainer from '../Listecontainer/Listecontainer'
import HostContainer from '../Hostcontainer/Hostcontainer'
import './Style.css'
import logement from '../../assets/logement.json'
let Identifiant = "c67ab8a7"

function Logement () {
/*    
console.log(Identifiant)
    const ID = logement.map(logements =>
        logements.id === Identifiant
    )
    console.log(ID)
    return(
        ID.map(({title, pictures,description,host,rating,location,equipments,tags})=> (
            <section className='logement' key={Identifiant}>
                <p>{title}</p>
                <p>{pictures}</p>
                <p>{description}</p>
                <p>{host}</p>
                <p>{rating}</p>
                <p>{location}</p>
                <p>{equipments}</p>
                <p>{tags}</p>
            </section>
        ))
    )
*/
return(
    <div>
        <Carrouselcontainer/>
        <div>
        <Titrecontainer />
        <HostContainer />
        </div>
        <div>
            <Tagcontainer />
            <Ratingcontainer />
        </div>
        <div className='listes'>
            <ListeContainer
                key='descritpion'
                title='descritpion'
                content="0"
            />
            <ListeContainer
                key='equipement' 
                title='equipement' 
                content="1"
             />
        </div>
    
    
    
    
    
    </div>



)


}

export default Logement
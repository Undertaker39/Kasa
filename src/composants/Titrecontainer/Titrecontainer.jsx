import Titre from '../Titre/Titre'
import './Style.css'

function Titrecontainer ({content}) {
    return(
        <Titre
        titre={content}
        />
    )
}

export default Titrecontainer
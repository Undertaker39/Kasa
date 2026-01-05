import './Style.css'
import Tags from '../Tags/Tags'

function Tagcontainer ({content}) {
    return(
        <Tags
        tags={content}
        />
    )
}

export default Tagcontainer
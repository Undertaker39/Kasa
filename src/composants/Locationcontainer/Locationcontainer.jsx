import Location from '../Location/Location'
import './Style.css'

function Locationcontainer ({content}) {
    return(
        <Location
        location={content}
        />
    )
}

export default Locationcontainer
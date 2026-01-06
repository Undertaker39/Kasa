import Rating from '../Rating/Rating'
import './Style.css'

function Ratingcontainer ({content}) {
    return(
        <Rating
        rate={content} />
    )
}

export default Ratingcontainer
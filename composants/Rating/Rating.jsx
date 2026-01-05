import './Style.css'
import star from '../../assets/star.svg'
import redstar from '../../assets/red-star.svg'

function Rating ({rate}) {
    return(
    <div className='stars'>
        {stars(rate)}
    </div>
    )
}

function stars (e){
    for (let i=1 ; i<5 ; i++){
        console.log(e) 
        if (i<=e) {
            return(
                <img className='star' src={redstar}></img>
            )
        }else{
            return(
                <img className='star' src={star}></img>
            ) 
        }
    }
}


export default Rating
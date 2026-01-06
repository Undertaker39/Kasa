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
    let test = [];
    for (let i=1 ; i<=5 ; i++){
        if (i<=e) {
            (
                test.push(<img key={i} className='star' src={redstar}></img>)
            )
        }else{
            (
                test.push(<img key={i}  className='star' src={star}></img>)
            ) 
        }
    }
    return test;
}


export default Rating

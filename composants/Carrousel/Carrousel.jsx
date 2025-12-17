import './Style.css'
import left_arrow from '../../assets/Left-arrow.svg'
import right_arrow from '../../assets/Right-arrow.svg'

const img = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg"


function Carrousel(){
    console.log(img.length)
    if (img.length === 109) {
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img}></img>
            </div>
        )
    }else{
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img}></img>
                <img className='left' src={left_arrow}></img>
                <img className='right' src={right_arrow}></img>
                <p className='compte'>image/totale image</p>
            </div>

        )
    }   
}

export default Carrousel
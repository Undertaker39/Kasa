import './Style.css'
import left_arrow from '../../assets/Left-arrow.svg'
import right_arrow from '../../assets/Right-arrow.svg'

function Carrousel(images){
    const img = images.images
    let position = 0
    function Add(e,a){
        e += 1
        console.log(e)
        if(e <= a){
            e
            console.log(e)
        }else{
            e = 0
            console.log(e)
        }
    }
    
    function Back(e,a){
        e -= 1
        console.log(e)
        if(e >= 0){
            e 
            console.log(e)
        }else{
            e = a
            console.log(e)
        }
    }

    if (img.length >1) {
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img[position]}></img>
                <img className='left' src={left_arrow} onClick={()=>Back(position,img.length)}></img>
                <img className='right' src={right_arrow} onClick={()=>Add(position,img.length)}></img>
                <p className='compte'>{position+1}/{img.length+1}</p>
            </div>
        )
    }else{
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img}></img>
            </div>
        )
    }   
}

export default Carrousel

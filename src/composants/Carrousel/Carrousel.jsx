import './Style.css'
import left_arrow from '../../assets/Left-arrow.svg'
import right_arrow from '../../assets/Right-arrow.svg'
import { useState } from 'react'

function Carrousel(images){
    const img = images.images
    let [position,setPosition] = useState(1)
    if (img.length >1) {
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img[position-1]}></img>
                <img className='left' src={left_arrow} onClick={()=>{position === 1 ? setPosition(position=img.length) : setPosition(position-1)}}></img>
                <img className='right' src={right_arrow} onClick={()=>{position === img.length ? setPosition(position=1) : setPosition(position+1)}}></img>
                <p className='compte'>{position}/{img.length}</p>
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

export default Carrousel/*


import './Style.css'
import left_arrow from '../../assets/Left-arrow.svg'
import right_arrow from '../../assets/Right-arrow.svg'
import { useState } from 'react'

function Carrousel(images){
    const img = images.images
    let [position, setPosition] = useState(0)
    function Add(e,a){
        if(e == a-1){
            console.log(position)
            return setPosition(0)
        }
        setPosition(e+1)
        console.log(position)
    }
    
    function Back(e,a){
        if(e == 0){
            console.log(position)
            return setPosition(e+a-1)
        }
        setPosition(e-1)
        console.log(position)
    }

    if (img.length >1) {
        return(
            <div className='carrousel'>
                <img className='carrousel-img' src={img[position]}></img>
                <img className='left' src={left_arrow} onClick={()=>Back(position,img.length)}></img>
                <img className='right' src={right_arrow} onClick={()=>Add(position,img.length)}></img>
                <p className='compte'>{position+1}/{img.length}</p>
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

export default Carrousel*/
import './Style.css'
import banner from '../../assets/Banner-main.jpg'
import about from '../../assets/Banner-about.jpg'

function Banner({e}) {
    if (e==="about"){
        return(
            <section className='banner-about'>
                <img className='banner-about-img' src={about}></img>
            </section>
        )
    }else{
        return(
            <section className='banner'>
                <img className='banner-img' src={banner}></img>
                <div className='banner-msg-container'>
                    <p className='banner-msg'>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    }
}

export default Banner
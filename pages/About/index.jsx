import Banner from '../../composants/Banner/Banner'
import About from '../../composants/About/About'

function Apropos(){
    return(
        <div className='about-main'>
            <Banner
            e="about"
            />
            <About />
        </div>

    )
}

export default Apropos

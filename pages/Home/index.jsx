import Banner from '../../composants/Banner/Banner'
import Articlecontainer from '../../composants/Articlecontainer/Articlecontainer'

function Home (){
    return(
        <div className='home-main'>
            <Banner />
            <Articlecontainer />
        </div>
    )
}

export default Home
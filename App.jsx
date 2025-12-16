import './App.css'
import Header from './composants/Header/Header'
import Banner from './composants/Banner/Banner'
import Articlecontainer from './composants/Articlecontainer/Articlecontainer'
import Footer from './composants/Footer/Footer'
import About from './composants/About/About'
import Error from './composants/Error/Error'
import Logement from './composants/Logement/Logement'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Articlecontainer />
      <Footer />

      <Header />
      <Banner
        e="about"
      />
      <About />
      <Footer />

      <Header />
      <Error/>
      <Footer />

      <Header />
      <Logement />
      <Footer />
    </div>
  )
}

export default App

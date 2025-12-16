import './Style.css'
import logo from '../../assets/Logo.svg'

function Footer() {
    return(
        <footer>
            <img className='footer-img' src={logo}></img>
            <p className='footer-txt'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
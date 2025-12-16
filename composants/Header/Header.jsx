import './Style.css'
import logo from '../../assets/Logo.svg'

function Header() {
    return (
        <header>
            <img className='header-img' src={logo}></img>
            <nav className='header-nav'>
                <a href='*'>Acceuil</a>
                <a href='*'>A Propos</a>
            </nav>
        </header>
    );
}

export default Header;
import './Style.css'
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img className='header-img' src={logo}></img>
            <nav className='header-nav'>
                <NavLink
                    to=""
                    style={({ isActive })=> isActive
                        ? {
                            textDecoration: 'underline solid',
                        }
                        :{ textDecoration: 'none'}
                    }
                >
                    Accueil
                </NavLink>    
                <NavLink
                    to="About"
                    style={({ isActive })=> isActive
                        ? {
                            textDecoration: 'underline solid',
                        }
                        :{ textDecoration: 'none'}
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
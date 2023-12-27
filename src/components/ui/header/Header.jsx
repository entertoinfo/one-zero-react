import './header.css'
import logoImg from '../../../image/icons/logo.svg'

function Header() {
    return(
        <header className='header'>
        <div className='container'>
            <div className='header__row'>
                <div className='header__logo'>
                <a href='index.html'>
                <img src={logoImg} alt='Logo'></img>
                </a>
                </div>
                <div className='header__name-game'>Zero-One</div>
            </div>
        </div>
        </header>
    )
}

export default Header
import './Navbar.css'
import logo from '../../assets/logo.png'
import { DICT, languages } from '../../utils/dict.js'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import Language from '../Language/Language'


const Navbar = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <figure>
                    <img src={logo} alt='logo' width='25rem' className='navbar__logo' />
                </figure>
                <h1 className='navbar__title'>Alexa-Web</h1>
            </div>
            <div className='navbar__right'>
                <div className='navbar__nav_elements_cntr'>
                    <div className='navbar__el' style={{ color: 'var(--blue)' }}>{DICT[lang].navbarAbout}</div>
                    <div className='navbar__el' style={{ color: 'var(--aqua)' }}>{DICT[lang].navbarSkills}</div>
                    <div className='navbar__el' style={{ color: 'var(--pink)' }}>{DICT[lang].navbarProjects}</div>
                    <div className='navbar__el' style={{ color: 'var(--white)' }}>{DICT[lang].navbarContact}</div>
                    <div className='navbar__empty'></div>
                </div>
                <div className='navbar__languages'>
                    {languages.map(language =>
                        <Language key={language} language={language} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default Navbar
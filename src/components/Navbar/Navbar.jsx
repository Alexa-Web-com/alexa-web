import './Navbar.css'
import logo from '../../assets/logo.png'
import { DICT, languages } from '../../utils/dict.js'
import { useContext, useState, useEffect } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import Language from '../Language/Language'
import { scroll } from '../../utils/scroll'
import NavEl from './NavEl/NavEl'

const Navbar = () => {
    const [lang,] = useContext(ContextLanguage)
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            e.target.innerWidth > 1024 && setIsHamburgerActive(false)
        })

        return () => window.removeEventListener('resize', (e) => {
            e.target.innerWidth > 1024 && setIsHamburgerActive(false)
        })
    }, [])

    return (
        <div className='navbar'>
            <div className='navbar__left'
                onClick={() => scroll('intro')}>
                <figure>
                    <img src={logo} alt='logo' width='25rem' className='navbar__logo' />
                </figure>
                <h1 className='navbar__title'>Alexa-Web</h1>
            </div>


            <div className='hamburger_cntr'>
                <div className={isHamburgerActive
                    ? 'hamburger_active'
                    : 'hamburger'}
                    onClick={() => setIsHamburgerActive(prevState => !prevState)}>

                    <span className='bar' style={{ backgroundColor: "var(--blue)" }}></span>
                    <span className='bar' style={{ backgroundColor: "var(--white)" }}></span>
                    <span className='bar' style={{ backgroundColor: "var(--aqua)" }}></span>
                </div>

                <NavEl isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
            </div>


            <div className='navbar__right'>

                <NavEl isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />

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
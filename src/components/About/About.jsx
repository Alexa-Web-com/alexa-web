import './About.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const About = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='about'>
            <p className='about__hello'>{DICT[lang].aboutHello}</p>
            <p className='about__name'>{DICT[lang].aboutName}</p>
            <p className='about__desc_top'>{DICT[lang].aboutDescTopOne} <span style={{ color: 'var(--pink)' }}>{DICT[lang].aboutDescTopTwo}</span>{DICT[lang].aboutDescTopTree}</p>
            <p className='about__desc_add'>{DICT[lang].aboutDescAdd}</p>
            <button className='about__btn'>{DICT[lang].aboutBtn}</button>
        </div>

    )
}

export default About


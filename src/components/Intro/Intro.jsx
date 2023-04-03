import './Intro.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Intro = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='intro component' id='intro'>
            <p className='intro__hello'>{DICT[lang].introHello}</p>
            <p className='intro__name'>{DICT[lang].introName}</p>
            <p className='intro__desc_top'>{DICT[lang].introDescTopOne} <span style={{ color: 'var(--pink)' }}>{DICT[lang].introDescTopTwo}</span>{DICT[lang].aboutDescTopTree}</p>
            <p className='intro__desc_add content'>{DICT[lang].introDescAdd}</p>
            <button className='intro__btn'>{DICT[lang].introBtn}</button>
        </div>

    )
}

export default Intro


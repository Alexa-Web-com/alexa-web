import './Contact.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Contact = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='contact component' id='contact'>
            <div className='contact__title_cntr'>
                <div className='horizontal_line horizontal_line_before contact__line'></div>
                <p className='contact__title title'>{DICT[lang].navbarContact}</p>
                <div className='horizontal_line horizontal_line_after contact__line'></div>
            </div>
        </div>
    )
}

export default Contact
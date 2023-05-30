import './Greetings.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import { getWeekDay } from '../../utils/getWeekDay'
import { ReactComponent as Hand } from '../../assets/hand/hand.svg'

const Greetings = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='greetings'>
            <div className='greetings_text'>{DICT[lang].greetingsStart}{DICT[lang].greetingsDay[getWeekDay()]}{DICT[lang].greetingsEnd}</div>
            <div className='greetings__hand'><Hand /></div>
        </div>
    )
}

export default Greetings
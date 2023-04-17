import './Greetings.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import { getWeekDay } from '../../utils/getWeekDay'

const Greetings = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='greetings'>
            {DICT[lang].greetingsStart}{DICT[lang].greetingsDay[getWeekDay()]}{DICT[lang].greetingsEnd}
        </div>
    )
}

export default Greetings
import './Skills.css'
import { DICT } from '../../utils/dict'
import { useContext, useState } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Skills = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='skills component' id='skills'>
            <div className='skills__title_cntr'>
                <div className='horizontal_line horizontal_line_before skills__line'></div>
                <p className='skills__title title'>{DICT[lang].navbarSkills}</p>
                <div className='horizontal_line horizontal_line_after skills__line'></div>
            </div>
            <div className='skills__content_cntr content'>

            </div>
        </div>
    )
}

export default Skills
import './Projects.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Projects = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='projects component' id='projects'>
            <div className='projects__title_cntr'>
                <div className='horizontal_line horizontal_line_before projects__line'></div>
                <p className='projects__title title'>{DICT[lang].navbarProjects}</p>
                <div className='horizontal_line horizontal_line_after projects__line'></div>
            </div>
        </div>
    )
}

export default Projects
import React, { useContext } from 'react'
import './Experience.css'
import { DICT } from '../../utils/dict'
import { ContextLanguage } from '../../context/ContextLanguage'
import Position from './Position/Position'
import Publicis from '../../assets/companies_logo/publicis.jpg'
import StudioWww from '../../assets/companies_logo/studio-www.jpg'
import Hs from '../../assets/companies_logo/hs.jpg'
// import Sea from '../../assets/companies_logo/Sea.jpg'
// import { IPosition } from '../../utils/interfaces'


const Experience = () => {
    const [lang,] = useContext(ContextLanguage)

    const projectDetails = [
        {
            logo: Publicis,
            company: "Publicis Groupe",
            jobTitle: DICT[lang].experiencePositionPublicis,
            desc: DICT[lang].experienceDutiesPublicis,
            technologies: ["React", "JavaScript", "TypeScript", "Astro", "Git", "Tailwind"],
            dates: DICT[lang].experienceDatesPublicis,
        },
        {
            logo: StudioWww,
            company: "Studio-www",
            jobTitle: DICT[lang].experiencePositionStudioWww,
            desc: DICT[lang].experienceDutiesStudioWww,
            technologies: ["React", "JavaScript", "TypeScript", "Tanstack", "Git", "HTML", "CSS"],
            dates: DICT[lang].experienceDatesStudioWww,
        },
        {
            logo: Hs,
            company: DICT[lang].experienceCompanySea,
            jobTitle: DICT[lang].experiencePositionSea,
            desc: DICT[lang].experienceDutiesSea,
            technologies: ["English", "Customer Service", "MS Office"],
            dates: DICT[lang].experienceDatesSea,
        },

    ]

    return (
        <div
            className='projects component' id='experience'
        >
            <div className='experience__title_cntr'>
                <div className='horizontal_line horizontal_line_before experience__line'></div>
                <p className='experience__title title'>{DICT[lang].navbarExperience}</p>
                <div className='horizontal_line horizontal_line_after experience__line'></div>
            </div>
            {projectDetails.map((position, index) =>
                <Position key={index} position={position} />
            )}
        </div >
    )
}

export default Experience
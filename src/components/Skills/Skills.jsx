import './Skills.css'
import { DICT } from '../../utils/dict'
import { useContext, useState } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import reactImg from '../../assets/skills/react.png'
import vsc from '../../assets/skills/vsc.png'

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
                <p>{DICT[lang].skillsDesc}</p>


                <section className='skills__tools'>

                    <div className='skills_tools__container'>
                        <figure data-aos="zoom-in" className='skills_tools__figure'>
                            <img className='skills_img' src={html} alt='html5' />
                        </figure>
                        <figure data-aos="zoom-in" className='skills_tools__figure'>
                            <img className='skills_img' src={css} alt='css3' />
                        </figure>
                        <figure data-aos="zoom-in" className='skills_tools__figure'>
                            <img className='skills_img' src={js} alt='java script' />
                        </figure>
                        <figure data-aos="zoom-in" className='skills_tools__figure'>
                            <img className='skills_img' src={reactImg} alt='react' />
                        </figure>
                        <figure data-aos="zoom-in" className='skills_tools__figure'>
                            <img className='skills_img' src={vsc} alt='type script' />
                        </figure>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Skills
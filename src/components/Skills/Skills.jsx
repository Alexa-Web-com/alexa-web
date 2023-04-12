import './Skills.css'
import { DICT } from '../../utils/dict'
import { useContext, useState } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import reactImg from '../../assets/skills/react.png'
import ts from '../../assets/skills/ts.png'
import git from '../../assets/skills/git.jpg'

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

                <section className='skills__tools'>

                    <div className='skills__tools__cntr'>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={html} alt='html5' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsHTML}</p>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={css} alt='css3' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsCSS}</p>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={js} alt='java script' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsJS}</p>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={reactImg} alt='react' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsReact}</p>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={git} alt='git' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsVSC}</p>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" className='skills__tools__figure'>
                                <img className='skills__img' src={ts} alt='type script' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skillsTS}</p>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Skills
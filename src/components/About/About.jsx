import './About.css'
import alexa_pict from '../../assets/pict/alexa.jpg'
import { DICT } from '../../utils/dict'
import { useContext, useEffect } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const About = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='about component' id='about'>
            <div className='about__title_cntr'>
                <div className='horizontal_line horizontal_line_before about__line'></div>
                <p className='about__title title'>{DICT[lang].navbarAbout}</p>
                <div className='horizontal_line horizontal_line_after about__line'></div>
            </div>
            <div className='about__content_cntr'>
                <div className='about__desc content'>
                    <p className='about__desc_el'>
                        <span>{DICT[lang].aboutDescElOne}</span>
                        <span style={{ color: 'var(--blue)' }}>{DICT[lang].aboutDescElColorTwo}</span>
                        <span>{DICT[lang].aboutDescElTree}</span>
                        <span style={{ color: 'var(--blue)' }}>{DICT[lang].aboutDescElColorFour}</span>
                        <span>{DICT[lang].aboutDescElFive}</span>
                        <span style={{ color: 'var(--blue)' }}>{DICT[lang].aboutDescElColorSix}</span>
                        <span>{DICT[lang].aboutDescElSeven}</span>
                        <span style={{ color: 'var(--blue)' }}>{DICT[lang].aboutDescElColorEight}</span>
                        <span>{DICT[lang].aboutDescElNine}</span>
                    </p>
                    <p className='about__technologies_title'>{DICT[lang].aboutDescElSix}</p>
                    <div className='about__technologies_cntr'>
                        <ul className='about__attribute_ul about__attribute_left_col'>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeOne}</li>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeTwo}</li>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeThree}</li>
                        </ul>
                        <ul className='about__attribute_ul about__attribute_right_col'>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeFour}</li>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeFive}</li>
                            <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeSix}</li>
                        </ul>
                    </div>
                </div>
                <div className='about__img_wrapper'>
                    <figure className='about__img_cntr'>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                        >
                            <img src={alexa_pict} alt='headshot' className='about__img' />
                            <div className='about__img_background'></div>
                        </div>
                        <div className='about__img_frame'></div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default About
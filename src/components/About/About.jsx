import './About.css'
import alexa_pict from '../../assets/pict/alexa.jpg'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
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
                    <p className='about__desc_el'>{DICT[lang].aboutDescElOne}</p>
                    <p className='about__desc_el'>{DICT[lang].aboutDescElTwo}<span style={{ color: 'var(--blue)' }}>{DICT[lang].aboutDescElColorOne}</span>{DICT[lang].aboutDescElTree}</p>
                    <p className='about__desc_el'>{DICT[lang].aboutDescElFour}</p>
                    <div className='about__technologies_cntr'>
                        <ul className='about__desc_el about__desc_ul about__desc_left_col'>
                            <li className='about__desc_el_li'>HTML</li>
                            <li className='about__desc_el_li'>CSS</li>
                            <li className='about__desc_el_li'>JavaScript</li>
                        </ul>
                        <ul className='about__desc_el about__desc_ul about__desc_right_col'>
                            <li className='about__desc_el_li'>React</li>
                            <li className='about__desc_el_li'>Node.js</li>
                            <li className='about__desc_el_li'>GitHub</li>
                        </ul>
                    </div>
                </div>
                <div className='about__right'>
                    <figure className='about__img_cntr'>
                        <img src={alexa_pict} alt='headshot' className='about__img' />
                        <div className='about__img_background'></div>
                        <div className='about__img_frame'></div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default About
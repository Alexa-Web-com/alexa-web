import './Project.css'
import { DICT } from '../../../utils/dict'
import { useContext, useEffect, useState } from 'react'
import { ContextLanguage } from '../../../context/ContextLanguage'

const Project = (props) => {
    const [lang,] = useContext(ContextLanguage)
    const [animationTypeLeft, setAnimationTypeLeft] = useState("");
    const [animationTypeRight, setAnimationTypeRight] = useState("");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setAnimationTypeLeft("fade-right");
                setAnimationTypeRight("fade-left")
            } else {
                setAnimationTypeLeft("fade-up");
                setAnimationTypeRight("fade-up")
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='project'>
            {props.isPictOnLeft &&
                <div
                    data-aos={animationTypeLeft} data-aos-duration="1000"
                    className='project__background'>
                    <figure className='project__background_figure'>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                        <div className='project__img_background'></div>
                    </figure>
                </div>}

            <div className={props.isPictOnLeft ? 'project__cntr_odd' : 'project__cntr_even'}>
                <div className='project__featured_project'>{DICT[lang].projectsFeaturedProject}</div>
                <div className='project__title'>
                    <a href={props.project.directLink}
                        className='project__title_link'
                        target='_blank'
                        rel='noreferrer'
                    >{props.project.title}</a></div>

                <div className='project__background_mobile'>
                    <figure className='project__background_mobile_figure'>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_mobile_img' />
                    </figure>
                </div>

                <div className='project__details'>
                    <div className={props.isPictOnLeft ? 'project__desc project__desc_odd' : 'project__desc project__desc_even'}>{props.project.desc}</div>
                    <div className='project__technologies'>
                        {props.project.technologies.map((technology, index) =>
                            <div key={index} className='project__technology'>{technology}</div>
                        )}
                    </div>
                    <ul className={props.isPictOnLeft ? 'projects__linkIcons projects__linkIcons_odd' : 'projects__linkIcons projects__linkIcons_even'}>
                        <li className='projects__icon_wrapper'>
                            {props.project.gitHubIconLink &&
                                <a href={props.project.gitHubIconLink}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='project__icon project__icon_github'></div>
                                </a>}
                        </li>
                        <li className='projects__icon_wrapper'>
                            <a href={props.project.directLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='project__icon project__icon_external_link'></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {!props.isPictOnLeft &&
                <div
                    data-aos={animationTypeRight} data-aos-duration="2000"
                    className='project__background'>
                    <figure className='project__background_figure'>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                        <div className='project__img_background'></div>
                    </figure>
                </div>}
        </div >
    )
}

export default Project
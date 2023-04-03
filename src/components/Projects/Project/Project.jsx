import './Project.css'
import { DICT } from '../../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../../context/ContextLanguage'
import github from '../../../assets/app_logo/github.svg'
import externalLink from '../../../assets/app_logo/external-link.svg'
import github_colored from '../../../assets/app_logo/github-colored.svg'
import externalLink_colored from '../../../assets/app_logo/external-link-colored.svg'

const Project = (props) => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='project'>
            {/* {props.index % 2 === 0 && */}
            {props.isPictOnLeft &&
                <div>
                    <figure>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                    </figure>
                </div>}
            <div className={props.index % 2 === 1 ? 'project__cntr_even' : 'project__cntr_odd'}>
                <div className='project__featured_project'>{DICT[lang].projectsFeaturedProject}</div>
                <div className='project__title'>
                    <a href={props.project.directLink} className='project__title_link'>{props.project.title}</a></div>
                <div className='project__desc'>{props.project.desc}</div>
                <div className='project__technologies'>
                    {props.project.technologies.map((technology, index) =>
                        <div key={index} className='project__technology'>{technology}</div>
                    )}
                </div>
                <div >
                    <ul className='projects__linkIcons'>
                        <li className='project__icon'>
                            <a href=''>
                                <img src={github} alt='github logo' />
                            </a>
                        </li>
                        <li className='project__icon'>
                            <a href=''>
                                <img src={externalLink} alt='external link' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {!props.isPictOnLeft &&
                <div className='project__background_img'>
                    <figure>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                    </figure>
                </div>}
        </div >
    )
}

export default Project
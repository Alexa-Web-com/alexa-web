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
            {props.isPictOnLeft &&
                <div className='project__background'>
                    <figure className='project__background_figure'>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                    </figure>
                </div>}

            <div className={props.isPictOnLeft ? 'project__cntr_odd' : 'project__cntr_even'}>
                <div className='project__featured_project'>{DICT[lang].projectsFeaturedProject}</div>
                <div className='project__title'>
                    <a href={props.project.directLink} className='project__title_link'>{props.project.title}</a></div>

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
                    <div className={props.isPictOnLeft ? 'projects__linkIcons projects__linkIcons_odd' : 'projects__linkIcons projects__linkIcons_even'}>
                        <a href=''>
                            <div className='project__icon project__icon_github'></div>
                        </a>
                        <a href=''>
                            <div className='project__icon project__icon_external_link'></div>
                        </a>
                    </div>
                </div>
            </div>
            {!props.isPictOnLeft &&
                <div className='project__background'>
                    <figure className='project__background_figure'>
                        <img src={props.project.pict} alt='app screencapture' className='project__background_img' />
                    </figure>
                </div>}
        </div >
    )
}

export default Project
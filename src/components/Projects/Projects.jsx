import './Projects.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import Project from './Project/Project'
import StarWarsFansScreenshot from '../../assets/my_app_screenshots/StarWarsFans.jpg'
import YourWeatherScreenshot from '../../assets/my_app_screenshots/YourWeather.jpg'
import StudioWWWScreenshot from '../../assets/my_app_screenshots/StudioWWW.jpg'
import BeautyStudioScreenshot from '../../assets/my_app_screenshots/BeautyStudio.jpg'
import TatarczukScreenshot from '../../assets/my_app_screenshots/Tatarczuk.jpg'
import KetoZochaScreenshot from '../../assets/my_app_screenshots/KetoZocha.jpg'

const Projects = () => {
    const [lang,] = useContext(ContextLanguage)

    const projectDetails = [
        {
            pict: TatarczukScreenshot,
            title: DICT[lang].projectsProjectTitleTatarczuk,
            desc: DICT[lang].projectsProjectDescTatarczuk,
            technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub",],
            gitHubIconLink: 'https://github.com/Alexa-Web-com/tatarczuk',
            directLink: 'https://www.tatarczuk.com.pl/',
        },
        {
            pict: KetoZochaScreenshot,
            title: DICT[lang].projectsProjectTitleKetoZocha,
            desc: DICT[lang].projectsProjectDescKetoZocha,
            technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub",],
            gitHubIconLink: null,
            directLink: 'https://ketozocha.site/home',
        },
        {
            pict: StarWarsFansScreenshot,
            title: DICT[lang].projectsProjectTitleSW,
            desc: DICT[lang].projectsProjectDescSW,
            technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub",],
            gitHubIconLink: 'https://github.com/Alexa-Web-com/star-wars-fans',
            directLink: 'https://alexa-web-com.github.io/star-wars-fans/',
        },
        {
            pict: BeautyStudioScreenshot,
            title: DICT[lang].projectsProjectTitleBeautyS,
            desc: DICT[lang].projectsProjectDescBeautyS,
            technologies: ["HTML", "CSS", "empty", "empty", "empty"],
            gitHubIconLink: null,
            directLink: 'https://www.beautystudio.com.pl/',
        },
        {
            pict: StudioWWWScreenshot,
            title: DICT[lang].projectsProjectTitleStudioWWW,
            desc: DICT[lang].projectsProjectDescStudioWWW,
            technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub",],
            gitHubIconLink: null,
            directLink: 'https://studio-www.com/home',
        },
        {
            pict: YourWeatherScreenshot,
            title: DICT[lang].projectsProjectTitleMW,
            desc: DICT[lang].projectsProjectDescMW,
            technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub", "Cypress", "Redux"],
            gitHubIconLink: 'https://github.com/Alexa-Web-com/weather-forecast',
            directLink: 'https://alexa-web-com.github.io/weather-forecast/',
        },
    ]

    return (
        <div className='projects component' id='projects'>
            <div className='projects__title_cntr'>
                <div className='horizontal_line horizontal_line_before projects__line'></div>
                <p className='projects__title title'>{DICT[lang].navbarProjects}</p>
                <div className='horizontal_line horizontal_line_after projects__line'></div>
            </div>
            {projectDetails.map((project, index) =>
                <Project key={index} project={project} index={index} isPictOnLeft={index % 2 === 0} />
            )}
        </div>
    )
}

export default Projects
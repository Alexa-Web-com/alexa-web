import './Skills.css'
import { DICT } from '../../utils/dict'
import { useContext, useState } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Skills = () => {
    const [lang,] = useContext(ContextLanguage)

    const [activity, setActivity] = useState({
        position: "",
        place: "",
        time: "",
        responsibilites: [],
    })

    return (
        <div className='skills component' id='skills'>
            <div className='skills__title_cntr'>
                <div className='horizontal_line horizontal_line_before skills__line'></div>
                <p className='skills__title title'>{DICT[lang].navbarSkills} ? Where I've Worked</p>
                <div className='horizontal_line horizontal_line_after skills__line'></div>
            </div>
            <div className='skills__content_cntr content'>
                <div className='skills__content_left'>
                    <button className={activity.place === "Alexa-Web" ? 'skills__button_active' : 'skills__button'}
                        onClick={() => setActivity(
                            {
                                position: "Front-end Developer @ ",
                                place: "Alexa-Web",
                                time: "Sep 2022 - Present",
                                responsibilites: ["Coś1", "Coś2", "Coś3", "Cos10"]
                            }
                        )}
                    ><p className={activity.place === "Alexa-Web" ? 'skills__button_name_active' : 'skills__button_name'}>Alexa-Web</p></button>
                    <button className={activity.place === "Safe Shipping" ? 'skills__button_active' : 'skills__button'}
                        onClick={() => setActivity(
                            {
                                position: "Import Manager @ ",
                                place: "Safe Shipping",
                                time: "Sep 2010 - Sep 2012",
                                responsibilites: ["Coś4", "Coś5", "Coś6",]
                            }
                        )}
                    ><p className={activity.place === "Safe Shipping" ? 'skills__button_name_active' : 'skills__button_name'}>Safe Shipping</p></button>
                    <button className={activity.place === "MAG Gdynia" ? 'skills__button_active' : 'skills__button'}
                        onClick={() => setActivity(
                            {
                                position: "Oprerations @ ",
                                place: "MAG Gdynia",
                                time: "Jan 2005 - Sep 2010",
                                responsibilites: ["Coś7", "Coś8", "Coś9"],
                            }
                        )}
                    ><p className={activity.place === "MAG Gdynia" ? 'skills__button_name_active' : 'skills__button_name'}>MAG Gdynia</p></button>
                </div>
                <div className='skills__content_right' style={{ paddingTop: "1rem" }}>
                    <p>{activity.position}<span style={{ color: "var(--aqua)" }}>{activity.place}</span></p>
                    <p style={{ paddingBottom: "1rem" }}>{activity.time}</p>
                    <ul>
                        {activity.responsibilites.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
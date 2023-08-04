import './SideBarLeft.css'
import { useEffect, useState } from 'react'

const SideBarLeft = () => {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setAnimation("zoom-in-up");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className='sideBarLeft'>
            <ul className='sideBarLeft__icons_cntr'>
                <li data-aos={animation} data-aos-duration="2000" className='sideBarLeft__icon_wrapper'>
                    <a href='https://github.com/Alexa-Web-com'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_github'></div>
                    </a>
                </li>
                <li data-aos={animation} data-aos-duration="1800" className='sideBarLeft__icon_wrapper'>
                    <a href='https://www.linkedin.com/in/aleksandra-wilczynska'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_linkedin'></div>
                    </a>
                </li>
                <li data-aos={animation} data-aos-duration="1600" className='sideBarLeft__icon_wrapper'>
                    <a href='https://goo.gl/maps/aKT5avg7X4XXGBuA6'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_location'></div>
                    </a>
                </li>
                <li data-aos={animation} data-aos-duration="1400" className='sideBarLeft__icon_wrapper'>
                    <a href='tel:+48887638906'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_phone'></div>
                    </a>
                </li>
                <li data-aos={animation} data-aos-duration="1200" className='sideBarLeft__icon_wrapper'>
                    <a href='https://wa.me/48887638906'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_whatsapp'></div>
                    </a>
                </li>
                <li data-aos={animation} data-aos-duration="1000" className='sideBarLeft__icon_wrapper'>
                    <a href='https://t.me/+48887638906'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_telegram'></div>
                    </a>
                </li>
            </ul>
            <ul className='sideBarLeft__icons_cntr_vertical'>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='https://github.com/Alexa-Web-com'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_github'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='https://www.linkedin.com/in/aleksandra-wilczynska'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_linkedin'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='https://goo.gl/maps/aKT5avg7X4XXGBuA6'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_location'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='tel:+48887638906'>
                        <div className='sideBarLeft__icon sideBarLeft__icon_phone'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='https://wa.me/48887638906'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_whatsapp'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href='https://t.me/+48887638906'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='sideBarLeft__icon sideBarLeft__icon_telegram'></div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBarLeft
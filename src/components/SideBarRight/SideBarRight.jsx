import './SideBarRight.css'
import { useEffect, useState } from 'react'
const SideBarRight = () => {
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
        <div className='sideBarRight'>
            <div data-aos={animation} data-aos-duration="2200" className='sideBarRight__email_wrapper'>
                <a href='mailto:info@alexa-web.com?subject=Customer Request'
                    className="sideBarRight__email"
                    target='_blank'
                    rel='noreferrer'
                >info@alexa-web.com</a>
            </div >
            <div className="sideBarRight__line vertical_line"></div>
        </div >
    )
}

export default SideBarRight
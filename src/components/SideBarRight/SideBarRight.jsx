import './SideBarRight.css'
import { useEffect, useState } from 'react'
const SideBarRight = () => {
    const [animation, setAnimation] = useState("");
    const [duration, setDuration] = useState("")

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setAnimation("zoom-in-up")
                setDuration("2200");
            } else {
                setAnimation("")
                setDuration("");
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
            <div data-aos={animation} data-aos-duration={duration} className='sideBarRight__email_wrapper'>
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
import './SideBarLeft.css'
import github from '../../assets/app_logo/github.svg'
import linkedin from '../../assets/app_logo/linkedin.svg'
import facebook from '../../assets/app_logo/facebook.svg'
import whatsapp from '../../assets/app_logo/whatsapp.svg'
import telegram from '../../assets/app_logo/telegram.svg'

const SideBarLeft = () => {
    return (
        <div className='sideBarLeft'>
            <ul className='sideBarLeft__icons_cntr'>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href=''>
                        <div className='sideBarLeft__icon sideBarLeft__icon_github'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href=''>
                        <div className='sideBarLeft__icon sideBarLeft__icon_linkedin'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href=''>
                        <div className='sideBarLeft__icon sideBarLeft__icon_facebook'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href=''>
                        <div className='sideBarLeft__icon sideBarLeft__icon_whatsapp'></div>
                    </a>
                </li>
                <li className='sideBarLeft__icon_wrapper'>
                    <a href=''>
                        <div className='sideBarLeft__icon sideBarLeft__icon_telegram'></div>
                    </a>
                </li>
            </ul>
            <div className="sideBarLeft__line vertical_line"></div>
        </div>
    )
}

export default SideBarLeft
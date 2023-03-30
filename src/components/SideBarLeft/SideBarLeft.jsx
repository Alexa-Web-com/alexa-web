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
                <li className='sideBarLeft__icon'>
                    <a href=''>
                        <img src={github} alt='github logo' />
                    </a>
                </li>
                <li className='sideBarLeft__icon'>
                    <a href=''>
                        <img src={linkedin} alt='linkedin logo' />
                    </a>
                </li>
                <li className='sideBarLeft__icon'>
                    <a href=''>
                        <img src={facebook} alt='facebook logo' />
                    </a>
                </li>
                <li className='sideBarLeft__icon'>
                    <a href=''>
                        <img src={whatsapp} alt='whatsapp logo' />
                    </a>
                </li>
                <li className='sideBarLeft__icon'>
                    <a href=''>
                        <img src={telegram} alt='telegram logo' />
                    </a>
                </li>
            </ul>
            <div className="sideBarLeft__line"></div>
        </div>
    )
}

export default SideBarLeft
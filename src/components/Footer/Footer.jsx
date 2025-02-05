import './Footer.css'
import logoAlexaWeb from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://alexa-web.com'
                target='_blank'
                rel='noreferrer'
                className='footer_link'
            >
                <img src={logoAlexaWeb} alt='owner logo' className='footer_logo' width='15px' />
            </a>
            <p>Copyright © 2023 </p>
        </div>
    )
}

export default Footer
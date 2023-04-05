import './SideBarRight.css'

const SideBarRight = () => {
    return (
        <div className='sideBarRight'>
            <div className='sideBarRight__email_wrapper'>
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
import './Position.css'

const Position = ({ position }) => {

    return (
        <div className='position'
            data-aos='fade-right'
            data-aos-duration="1000"
        >
            <div className="position__cntr">
                <img src={position.logo} alt='app screencapture' className='position__logo' />
                <div className='position__company'>
                    <div className='position__company_name'>{position.company}</div>
                    <div className='position__job_title'>{position.jobTitle}</div>
                    <div className="position__dates">{position.dates}
                    </div>
                </div>
            </div>
            <div className="position__tasks">
                <ul className='position__desc'>{position.desc.map(task =>
                    <li>{task}</li>)}</ul>
                <div className="position__techonologies">{position.technologies.map(technology => <p className="position__techonology">
                    {technology}
                </p>)}</div>
            </div>
        </div >
    )
}

export default Position
import './BackgroundMovie.css'
import backgroundMovie from '../../assets/backgroundApp/background.mp4'
import { useEffect, useRef } from 'react'

const BackgroundMovie = () => {

    const videoRef = useRef()
    const setPlayBack = () => { videoRef.current.playbackRate = 0.4 }

    // useEffect(() => {
    //     var vid = document.getElementById("backgroundVideo");
    //     vid.playbackRate = 0.5;
    // }, [])

    return (
        <div className='backgroundMovie'>
            <video
                className='backgroundMovie__movie'
                src={backgroundMovie}
                autoPlay loop muted playsInline
                alt='background'
                id='backgroundVideo'
                ref={videoRef}
                onCanPlay={() => setPlayBack()}
            />
        </div>
    )
}

export default BackgroundMovie
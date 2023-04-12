import './Home.css'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Loader from '../../components/Loader/Loader'

const Home = () => {
    return (
        <div className='home'>
            <Intro />
            <About />
            {/* <Loader /> */}
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
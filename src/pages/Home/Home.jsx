import './Home.css'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
import './Home.css'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
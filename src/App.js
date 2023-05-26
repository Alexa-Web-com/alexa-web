import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Home from './pages/Home/Home'
// import BackgroundMovie from './components/BackgroundMovie/BackgroundMovie'
import Footer from './components/Footer/Footer';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div
    // style={{ position: 'relative', marginBottom: '100vh' }} className='App backgroundPage'
    >
      {/* <BackgroundMovie /> */}
      <Navbar />
      <Home />
      <SideBarLeft />
      <SideBarRight />
      <Footer />
    </div>
  );
}

export default App;

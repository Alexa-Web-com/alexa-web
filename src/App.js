import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Home from './pages/Home/Home'
import BackgroundMovie from './components/BackgroundMovie/BackgroundMovie'
import backgroundMovie from './assets/backgroundApp/background.mp4'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ position: 'relative', marginBottom: '100vh' }} className='App backgroundPage'>
      <BackgroundMovie />
      <Navbar />
      <Home />
      <SideBarLeft />
      <SideBarRight />
      <Footer />
      {/* <div style={{ height: '100vh', background: 'transparent' }}>TEST blblb</div> */}

      {/* <div style={{ height: '100vh', zIndex: '-1', position: 'fixed', top: '0', left: '0' }}>
        <video style={{}} src={backgroundMovie} autoPlay loop muted playsInline alt="intro" height='100%' />
      </div> */}
    </div>
  );
}

export default App;

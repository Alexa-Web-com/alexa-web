import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import Cookies from './components/Cookies/Cookies';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <SideBarLeft />
      <SideBarRight />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;

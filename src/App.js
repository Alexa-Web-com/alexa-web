import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <SideBarLeft />
      <SideBarRight />
    </div>
  );
}

export default App;

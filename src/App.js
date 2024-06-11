//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigator/navbar';
import Mainpage from './components/mainpage/mainpage';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <div id='home' className='firstpage'>
        <Navbar />
        <Mainpage />
      </div>
      <div className='secondpage'>
        <Portfolio />
      </div>
      <div className='thirdpage'>
        <Services />
      </div>
      <div className='fourthpage'>
        <About />
      </div>
    </div>
  );
}

export default App;

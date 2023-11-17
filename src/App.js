import './App.css';
import Home from "./Containers/Home/Home"
import About from './Containers/About/About';
import Resume from "./Containers/Resume/Resume";
import Skills from "./Containers/Skills/Skills";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Contact from './Containers/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Particles from 'react-tsparticles';
import particles from './Utlis/particles';
import { loadFull } from 'tsparticles';

function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Main Page Content */}
      <div className='app-main-page-content container'>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
      {/* Main Page Content */}

            {/* Particles JS */}
              <Particles id='particles' options={particles} init={handleInit} />
            {/* Particles JS */}
    </div>
  );
}

export default App;

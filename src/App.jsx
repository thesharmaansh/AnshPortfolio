import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Works from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#050816" }} className='relative z-0'>
        <div style={{ backgroundImage: "url('/src/assets/herobg.png')" }} className='bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Home />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

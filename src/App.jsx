import './App.css';
import Hero from './components/hero/hero'
import Projects from './components/projects/projects';
import About from './components/about/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Route för startsidan (Hero) */}
        <Route path="/" element={<Hero />} />

        {/* Route för projekt-sidan (Projects) */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

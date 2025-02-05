import './App.css'; // Global styling som gäller alla komponenter
import Hero from './components/hero/hero'
import Projects from './components/projects/projects';
import About from './components/about/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/themeContext"; // Importera vår ThemeProvider



function App() {
  
  return (
    <>
    {/* ThemeProvider wrappar vi runt vår BrowserRouter för att kunna använda vår ThemeContext i hela applikationen. */}
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        {/* Route för startsidan (Hero) */}
        <Route path="/" element={<Hero />} />

        {/* Route för projekt-sidan (Projects) */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
    
  )
}

export default App

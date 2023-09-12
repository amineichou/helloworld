import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import SwitchToggle from './addons/switch';
import Home from './components/home/home';
import Links from './components/links/links';
import Projects from './components/projects/projects';
import Cursor from './addons/cursor';
import Skills from './components/skills/skills';


function App() {
  if (!(localStorage.getItem("theme"))) {
    localStorage.setItem("theme", true);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/helloworld" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/res" element={<Skills />} />
        </Routes>
        <Links />
        <Footer />
        <SwitchToggle />
        <Cursor />
      </BrowserRouter>
    </div>
  );
}

export default App;

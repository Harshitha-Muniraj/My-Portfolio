import Home from "./components/HeroSection/Home";
import Navbar from "./components/HeroSection/NavBar/NavBar";
import Project from './components/Project/Project'

import Contact from './components/Contact/Contact'

import './App.css';
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";


function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
 
    </div>
  );
}

export default App;

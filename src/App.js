import './App.css';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import SkillBar from './components/SkillBar.js'
import Skills from './components/Skills.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <SkillBar/>
      <Skills/>
    </div>
  );
}

export default App;

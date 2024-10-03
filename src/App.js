import './App.css';
import ContactUs from './components/ContactUs.js';
import Experience from './components/Experience.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';

function nav(name){
  return <section className="bg-About-Head">
  <div>
    <h1 className="text-xl text-white font-mono font-semibold px-5 py-8">{name}</h1>
  </div>
</section>
}
function App() {
  return (
      <div className="App">
      <Header/>
      <Home/>
      {nav("About Me #")}
      <Experience/>
      {nav("Skill-$")}
      <Skills/>
      {nav("Projects-!")}
      <Projects/>
      {nav("Contact Me @")}
      <ContactUs/>
      <Footer/>
    </div>
  );
}



export default App;

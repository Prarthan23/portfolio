import Certificates from "./components/Certificates";
import HeroContent from "./components/HeroContent";
import InternShips from "./components/InternShips";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ConnectMe from "./components/ConnectMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-amber-50">
      <NavBar />
      <hr className='to-blue-100' />
      <section id="home">
        <HeroContent />
      </section>
      <hr className='to-blue-100' />
      <section id="skills">
        <Skills />
      </section>
      <hr className='to-blue-100' />
      <section id="internships">
        <InternShips />
      </section>
      <hr className='to-blue-100' />
      <section id="certificates">
        <Certificates />
      </section>
      <hr className='to-blue-100' />
      <section id="projects">
        <Projects />
      </section>
      <hr className='to-blue-100' />
      <section id="connect">
        <ConnectMe />
      </section>
      <hr className='to-blue-100' />
      <Footer />
    </div>
  );
};

export default App;

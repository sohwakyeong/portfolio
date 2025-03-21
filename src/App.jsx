import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Masthead from "./components/Masthead";

export default function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

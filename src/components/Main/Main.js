import './Main.css';
import Greeting from './Greeting';
import About from './About.js';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Main() {
  return (
    <div className='main'>
      <Greeting />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
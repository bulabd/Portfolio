import './Main.css';
import Greeting from './Greeting';
import About from './About.js';
import Experience from './Experience';

export default function Main() {
  return (
    <div className='main'>
      <Greeting />
      <About />
      <Experience />
    </div>
  );
}
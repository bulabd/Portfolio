import './Main.css';
import Greeting from './Greeting';
import About from './About.js';

export default function Main() {
  return (
    <div className='main'>
      <Greeting />
      <About />
    </div>
  );
}
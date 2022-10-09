import './Greeting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Greeting() {
  return (
    <div className='greeting'>
      <div className='firstGreeting'>
        <p className='hello'>Hello there!</p>
        <p className='myname'>My name is Bulat Abdullin.</p>
      </div>
      <div className='summary'>
        <p>I am a Full-Stack Developer based in Montreal with a creative and ready to be challenged mind. I went into development due to the attractive possibility to create something of my own that many people can use. I am constantly learning and I am not afraid of new challenges/problems that need to be solved.</p>
      </div>
      <a className='connect' href="https://www.linkedin.com/in/bulat-abdullin-29a470240/" target="blank">Connect with me! <FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  );
}
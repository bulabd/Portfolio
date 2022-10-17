import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div id='contact' className='contact'>
      <p className='contactMe'>Contact</p>
      <p className='contactLinks'>If you have any questions, you can contact me via email or linkedIn</p>
      <p className='contactLinks'><FontAwesomeIcon icon={faEnvelope} /> : <a className='links' href='mailto:bulabd@outlook.com'>bulabd@outlook.com</a></p>
      <p className='contactLinks'><FontAwesomeIcon icon={faLinkedin} /> : <a className='links' href='https://www.linkedin.com/in/bulat-abdullin-29a470240/' target='blank'>Bulat Abdullin</a></p>
    </div>
  );
};
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className='about' id="about">
      <p className='aboutMe'>About me</p>
      <div className='imageAndAbout'>
        <div className='profileContainer'><img className='profile' src={require('../../docs/linkedinPic.jpg')} alt="Bulat profile pic"></img></div>
        <p className='myStory'>Before I got into web development, I was a Health Science student that had just finished CEGEP. But with the arrival of COVID and the mandatory quarantine, I got bored and decided to try something new. Web development caught my eye and after a few months, I enrolled into a coding bootcamp. I finished the <a className='lighthouse' href="https://www.lighthouselabs.ca/" target="blank">LIGHTHOUSE LABS</a> Coding Bootcamp where I learned in a 3 month intensive schedule, full-stack web development.</p>
      </div>
      
      <p className='skillsIntro'>Here are the main skills that I aquired during my time at the bootcamp:</p>
      <div className='skills'>
        <p><strong className='strong'><FontAwesomeIcon icon={faJs} /> Languages: </strong>Javascript, HTML, CSS, SQL, Ruby, Python</p>
        <p><strong className='strong'><FontAwesomeIcon icon={faReact} /> Frameworks and libraries: </strong>NodeJS, React, Express, EJS, jQuery, Axios, Rails, SASS, Bootstrap</p>
        <p><strong className='strong'><FontAwesomeIcon icon={faDatabase} /> Systems and Databases: </strong>PostgreSQL, Git</p>
        <p><strong className='strong'><FontAwesomeIcon icon={faCheck} /> Testing: </strong>Mocha and Chai, Jest, Cypress, Storybook</p>
      </div>
    </div>
  );
}
import './App.css';
import Navbar from './components/Navbar.js';
import Main from './components/Main/Main.js';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true);
    } else if (scrolled <= 70) {
      setVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className='scrollToTop'>
        <FontAwesomeIcon onClick={scrollToTop} icon={faCircleArrowUp} style={{display: visible ? 'inline' : 'none'}} />
      </div>
    </div>
  );
}

export default App;

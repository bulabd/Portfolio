import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='movingName'>
        <a className='letter' href="#greeting"><h1>B</h1><h1 className='name'>ulat</h1><h1>A</h1><h1 className='name'>bdullin</h1></a>
      </div>
      <div className='pageLinks'>
        <a className='anchorLink' href="#about">About</a>
        <a className='anchorLink' href="#experience">Experience</a>
        <a className='anchorLink' href="#projects">Projects</a>
        <a className='anchorLink' href="#contact">Contact</a>
      </div>
    </div>
  );
}
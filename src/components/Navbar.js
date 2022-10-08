import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='movingName'>
        <h1 className='letterB'>B</h1><h1 className='letters'>ulat</h1><h1 className='letterA'>A</h1><h1 className='letters'>bdullin</h1>
      </div>
      <div className='pageLinks'>
        <a className='anchorLink' href="#">About</a>
        <a className='anchorLink' href="#">Experience</a>
        <a className='anchorLink' href="#">Projects</a>
        <a className='anchorLink' href="#">Contact</a>
      </div>
    </div>
  );
}
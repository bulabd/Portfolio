import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='movingName'>
        <a className='letter' href="#"><h1>B</h1><h1 className='name'>ulat</h1><h1>A</h1><h1 className='name'>bdullin</h1></a>
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
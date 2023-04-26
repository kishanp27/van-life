import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/' className='title'>#VANLIFE</Link>
        <div>
            <Link to='/about' className='about'>About</Link>
            <Link to='/' className='vans'>Vans</Link>
        </div>
    </div>
  )
}

export default Navbar
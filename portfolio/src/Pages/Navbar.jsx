import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {


 return (
    <div>
      <nav className="Mainnav">
        <div className="Navchild">
        <NavLink to={`/`} activeClassName='active' className='navLinks'>Home</NavLink>    
                <NavLink to={`/about`} className='navLinks'>About</NavLink>  
                <NavLink to={`/projects`} className='navLinks'>Projects</NavLink>
        </div>
      </nav>
    </div>
 );
}

export default Navbar;

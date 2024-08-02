import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">ALL </Link></li>
        <li><Link to="/fullStack"> FULL STACK DEVELOPMENT</Link></li>
        <li><Link to="/DataScience">DATA SCIENCE</Link></li>
        <li><Link to="/Cyber">CYBER SECURITY</Link></li>
        <li><Link to="/Carrer">CARRER</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
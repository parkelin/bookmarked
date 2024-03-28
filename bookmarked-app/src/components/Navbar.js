// sidebar on the main page

import React from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isOpen, toggleNavbar }) => {

    return (
        <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
            <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <span>&lt;</span> : <span>&gt;</span>}
            </div>
            {isOpen && (
                <div>
                    <div><Link to="/writingdoc" className="text">Writing Document</Link></div>
                    <div><Link to="/glossary" className="text">Glossary</Link></div>
                    {/* <div><Link to="/loading" className="text">Map Maker</Link></div>
                    <div><Link to="/loading" className="text">Plot Planner</Link></div> */}
                </div>
            )}
        </div>
    );
  };

export default Navbar;
// sidebar on the main page

import React from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';
import { useEditor } from "../context/EditorContext"; 

const Navbar = ({ isOpen, toggleNavbar, editorContent}) => {

    const { saveEditorContent } = useEditor();

    const handleNavigateToGlossary = () => {
        saveEditorContent(editorContent); // Save the editor content before navigating to the glossary
      };

    return (
        <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
            {/* <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <span>&lt;</span> : <span>&gt;</span>}
            </div> */}
            {isOpen && (
                <div>
                    <div><Link to="/writingdoc" className="navbar-text-regular">Writing Document</Link></div>
                    <div><Link to="/glossary" className="navbar-text-regular" onClick={handleNavigateToGlossary}>Glossary</Link></div>
                    {/* <div><Link to="/loading" className="text">Map Maker</Link></div>
                    <div><Link to="/loading" className="text">Plot Planner</Link></div> */}
                </div>
            )}
        </div>
    );
  };

export default Navbar;
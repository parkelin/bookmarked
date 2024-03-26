// Writing Doc + Sidebar

import React, { useState } from 'react';
import '../../App.css';
import TextEditor from './TextEditor'
import Navbar from '../../components/Navbar';
import RoundedRectangle from '../../components/RoundedRectangle';

const  WritingDoc = ({ navbarIsOpen, toggleNavbar }) => {
  const [isEditorMoved, setIsEditorMoved] = useState(false); 
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);

  const moveEditor = () => {
    if (isEditorMoved)
      setIsEditorMoved(false)
    else
      setIsEditorMoved(true)
  }

  const toggleShortcut = () => {
    if (isShortcutOpened)
      setIsShortcutOpened(false)
    else
      setIsShortcutOpened(true)
  }

  const handleOpenShortcut = () => {
    toggleNavbar()
    moveEditor()
    toggleShortcut()
  }

  return (
     <>
     <button className='temporary-trigger' onClick={handleOpenShortcut}>Open Shortcut</button>
      <div className="welcome">
        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar} />
        <div className="main-content">
          <TextEditor isEditorMoved={isEditorMoved}/>
        </div>
        {isShortcutOpened && (
          <div className='shortcut-rounded-rectangle'>
            
          </div>
        )}
      </div>
    </>
  );
}

export default WritingDoc
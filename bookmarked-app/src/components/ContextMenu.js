import React from 'react';
import './ContextMenu.css';

function ContextMenu({ x, y, onClose }) {
    console.log("hello")
    const handleClick = (option) => {
      // Handle click action for the selected option
      console.log('Clicked', option);
      onClose();
    };
  
    return (
      <div className="context-menu" style={{ left: x, top: y }}>
        
          <button onClick={() => handleClick('Find Character Page')}>Find Character Page</button>
          <button onClick={() => handleClick('Create Character Page')}>Create Character Page</button>
        
      </div>
    );
  }
  
  export default ContextMenu;
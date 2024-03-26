import React from 'react';
import './ContextMenu.css';

function ContextMenu({ x, y, onClose }) {
    const handleClick = (option) => {
      // Handle click action for the selected option
      console.log('Clicked:', option);
      onClose(); // Close the context menu
    };
  
    return (
      <div className="context-menu" style={{ left: x, top: y }}>
        <ul>
          <li onClick={() => handleClick('Find Character Page')}>Find Character Page</li>
          <li onClick={() => handleClick('Create Character Page')}>Create Character Page</li>
        </ul>
      </div>
    );
  }
  
  export default ContextMenu;
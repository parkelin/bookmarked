import React from 'react';
import "../pages/Tutorial/Tutorial.css";


const WelcomeMessage = ({ onClose, onContinue }) => {
    return (
        <div className="p-welcome">
            <p className='text-welcome-tutorial-1'>Welcome to Bookmarked!</p>
            <p className='text-welcome-tutorial-2'>Let’s have a look around.</p>
            <div className="popup-options">
                <button className='continue-button'onClick={onContinue}>Continue to tutorial</button>
                <button className='exit-button-welcome-popup' onClick={onClose}>Leave</button>
            </div>
        </div>
    )
}
export default WelcomeMessage;
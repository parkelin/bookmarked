import React from 'react';

const WelcomeMessage = ({ onClose, onContinue}) => {
    return (
        <div className="p-welcome">
            <h2>Welcome</h2>
            <p>would you like to continue?</p>
            <div className="popup-options">
                <button onClick={onContinue}>Continue</button>
                <button onClick={onClose}>Exit</button>
            </div>
        </div>
    )
}
export default WelcomeMessage;
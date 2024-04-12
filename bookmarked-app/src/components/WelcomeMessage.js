import React from 'react';
import "../pages/Tutorial/Tutorial.css";


const WelcomeMessage = ({ onClose, onContinue}) => {
    return (
        <div className="p-welcome">
            <h2>Welcome to Bookmarked!</h2>
            <p>Let's have a look around</p>
            <div className="popup-options">
                <button className="b-continue" onClick={onContinue}>Continue to tutorial</button>
                <button className="b-leave" onClick={onClose}>Leave</button>
            </div>
        </div>
    )
}
export default WelcomeMessage;
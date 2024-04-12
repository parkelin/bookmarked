import React from 'react';
import "../pages/Tutorial/Tutorial.css";

const TutorialPopup = ({ content, onClose, marginTop , marginLeft }) => {
    return (
        <div className="p-tutorial" 
        style={{
            top: marginTop,
            left: marginLeft
        }}>
            <div className="content">
                <p>{content}</p>
                <button className="b-x" onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default TutorialPopup;
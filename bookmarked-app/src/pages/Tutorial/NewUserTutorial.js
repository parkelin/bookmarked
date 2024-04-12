import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import WelcomeMessage from '../../components/WelcomeMessage';
import TutorialOverview from '../../components/TutorialOverview';
import './Tutorial.css';

const NewUserTutorial = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showQuit, setShowQuit] = useState(false);
    const history = useHistory();

    const handleContinue = () => {
        setShowWelcome(false);
        setShowPopup(true);
        setShowQuit(true);
    };

    const handleExit = () => {
        history.push('/writingdoc');
    };

    return (
        <div className="page-wrapper">
            {showWelcome && (
                <WelcomeMessage
                    onClose={handleExit}
                    onContinue={handleContinue}
                />
            )}
            {showPopup && (
                <TutorialOverview/>
            )}
            {showQuit && (
                <button className="b-exit" onClick={handleExit}>
                    Exit tutorial
                </button>
            )}
            <div className="page-overlay"></div> 
        </div>    
    )
}

export default NewUserTutorial
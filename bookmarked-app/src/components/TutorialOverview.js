import React, {useState} from 'react';
import TutorialPopup from './TutorialPopup';
import "../pages/Tutorial/Tutorial.css";

const TutorialOverview = () => {
    const [showNavbarPopup, setShowNavbarPopup] = useState(false);
    const [showDocPopup, setShowDocPopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [showSavePopup, setShowSavePopup] = useState(false);

    const openNavbarPopup = () => {
        setShowNavbarPopup(true);
    }
    const closeNavbarPopup = () => {
        setShowNavbarPopup(false);
    }

    const openDocPopup = () => {
        setShowDocPopup(true);
    }
    const closeDocPopup = () => {
        setShowDocPopup(false);
    }

    const openInfoPopup = () => {
        setShowInfoPopup(true);
    }
    const closeInfoPopup = () => {
        setShowInfoPopup(false);
    }

    const openSavePopup = () => {
        setShowSavePopup(true);
    }
    const closeSavePopup = () => {
        setShowSavePopup(false);
    }
    return (
        <div>
        <button className="b-navbar but" onClick={openNavbarPopup}>i</button>
        <button className="b-doc but" onClick={openDocPopup}>i</button>
        <button className="b-info but" onClick={openInfoPopup}>i</button>
        <button className="b-save but" onClick={openSavePopup}>i</button>
        {showNavbarPopup && (
            <TutorialPopup
                title="navbar"
                content="hellp"
                onClose={closeNavbarPopup}
            />
        )}
        {showDocPopup && (
            <TutorialPopup
                title="navbar"
                content="hellp"
                onClose={closeDocPopup}
            />
        )}
        {showInfoPopup && (
            <TutorialPopup
                title="navbar"
                content="hellp"
                onClose={closeInfoPopup}
            />
        )}
        {showSavePopup && (
            <TutorialPopup
                title="navbar"
                content="hellp"
                onClose={closeSavePopup}
            />
        )}
        </div>
    )

}

export default TutorialOverview;
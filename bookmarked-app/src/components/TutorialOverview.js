import React, {useState} from 'react';
import TutorialPopup from './TutorialPopup';
import WritingDocTutorial from './WritingDocTutorial';
import RightClickTutorial from './RightClickTutorial';
import "../pages/Tutorial/Tutorial.css";

const TutorialOverview = () => {
    const [popups, setPopups] = useState({
        navbar: false,
        doc: false,
        info: false, 
        save: false,
    });

    const openPopup = (popup) => {
        setPopups({...popups, [popup]: true});
    }

    const closePopups = (popup) => {
        setPopups({...popups, [popup]: false});
    }

    return (
        <div>
        <button className="b-navbar but" onClick={() => openPopup('navbar')}>i</button>
        <button className="b-doc but" onClick={() => openPopup('doc')}>i</button>
        <button className="b-info but" onClick={() => openPopup('info')}>i</button>
        <button className="b-save but" onClick={() => openPopup('save')}>i</button>
        {popups.navbar && (
            <TutorialPopup
                content="This is your navigation bar. The writing Document is where you write, check for writing inconsistencies,
                and access character previews. The Glossary is a list of all character profiles that you have created. Create, edit, or delete
                new characters in full screen."
                onClose={() => closePopups('navbar')}
            />
        )}
        {popups.doc && (
            <WritingDocTutorial
                onClose={() => closePopups('doc')}
            />
        )}
        {popups.info && (
            <TutorialPopup
                content="Don't worry if you can't remember everything! There will be an info button on the Writing Document page that is
                accessible at all times. This popup will summarize all of the features with pictures for your reference."
                onClose={() => closePopups('info')}
            />
        )}
        {popups.save && (
            <TutorialPopup
                content="Click this button to save your work at anytime."
                onClose={() => closePopups('save')}
            />
        )}
        </div>
    )

}

export default TutorialOverview;
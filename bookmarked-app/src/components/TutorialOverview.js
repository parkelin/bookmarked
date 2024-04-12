import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import TutorialPopup from "./TutorialPopup";
import WritingDocTutorial from './WritingDocTutorial';
import RightClickTutorial from './RightClickTutorial';
import "../pages/Tutorial/Tutorial.css";


const TutorialOverview = () => {
  const [showNavbarPopup, setShowNavbarPopup] = useState(false);
  const [navbarInfoColor, setNavbarInfoColor] = useState('#ffffff')
  const [showDocPopup, setShowDocPopup] = useState(false);
  const [docInfoColor, setDocInfoColor] = useState('#ffffff')
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [infoColor, setInfoColor] = useState('#ffffff')
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [saveInfoColor, setSaveInfoColor] = useState('#ffffff')

  const openNavbarPopup = () => {
    setShowNavbarPopup(true);
    setNavbarInfoColor("#DD8CBD")
  };
  const closeNavbarPopup = () => {
    setShowNavbarPopup(false);
    setNavbarInfoColor("#ffffff")
  };

  const openDocPopup = () => {
    setShowDocPopup(true);
    setDocInfoColor("#DD8CBD")
  };
  const closeDocPopup = () => {
    setShowDocPopup(false);
    setDocInfoColor("#ffffff")
  };

  const openInfoPopup = () => {
    setShowInfoPopup(true);
    setInfoColor("#DD8CBD")
  };
  const closeInfoPopup = () => {
    setShowInfoPopup(false);
    setInfoColor("#ffffff")
  };

  const openSavePopup = () => {
    setShowSavePopup(true);
    setSaveInfoColor("#DD8CBD")
  };
  const closeSavePopup = () => {
    setShowSavePopup(false);
    setSaveInfoColor("#ffffff")
  };
  return (
    <div>
      <button
        className="b-navbar but"
        onClick={openNavbarPopup}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={navbarInfoColor} />
      </button>
      <button
        className="b-doc but"
        onClick={openDocPopup}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={docInfoColor} />
      </button>
      <button
        className="b-info but"
        onClick={openInfoPopup}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={infoColor} />
      </button>
      <button
        className="b-save but"
        onClick={openSavePopup}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={saveInfoColor} />
      </button>
      {showNavbarPopup && (
        <TutorialPopup
          title="navbar"
          content="hellp"
          onClose={closeNavbarPopup}
          marginLeft={"360px"}
          marginTop={"200px"}
        />
      )}
      {showDocPopup && (
        <TutorialPopup
          title="navbar"
          content="hellp"
          onClose={closeDocPopup}
          marginLeft={"1060px"}
          marginTop={"245px"}
        />
      )}
      {showInfoPopup && (
        <TutorialPopup
          title="navbar"
          content="hellp"
          onClose={closeInfoPopup}
          marginLeft={"1210px"}
          marginTop={"175px"}
        />
      )}
      {showSavePopup && (
        <TutorialPopup
          title="navbar"
          content="hellp"
          onClose={closeSavePopup}
          marginLeft={"1240px"}
          marginTop={"175px"}
        />
      )}
    </div>
  );
};
    // const [popups, setPopups] = useState({
    //     navbar: false,
    //     doc: false,
    //     info: false, 
    //     save: false,
    // });

    // const openPopup = (popup) => {
    //     setPopups({...popups, [popup]: true});
    // }

    // const closePopups = (popup) => {
    //     setPopups({...popups, [popup]: false});
    // }

    // return (
    //     <div>
    //     <button className="b-navbar but" onClick={() => openPopup('navbar')}>i</button>
    //     <button className="b-doc but" onClick={() => openPopup('doc')}>i</button>
    //     <button className="b-info but" onClick={() => openPopup('info')}>i</button>
    //     <button className="b-save but" onClick={() => openPopup('save')}>i</button>
    //     {popups.navbar && (
    //         <TutorialPopup
    //             content="This is your navigation bar. The writing Document is where you write, check for writing inconsistencies,
    //             and access character previews. The Glossary is a list of all character profiles that you have created. Create, edit, or delete
    //             new characters in full screen."
    //             onClose={() => closePopups('navbar')}
    //         />
    //     )}
    //     {popups.doc && (
    //         <WritingDocTutorial
    //             onClose={() => closePopups('doc')}
    //         />
    //     )}
    //     {popups.info && (
    //         <TutorialPopup
    //             content="Don't worry if you can't remember everything! There will be an info button on the Writing Document page that is
    //             accessible at all times. This popup will summarize all of the features with pictures for your reference."
    //             onClose={() => closePopups('info')}
    //         />
    //     )}
    //     {popups.save && (
    //         <TutorialPopup
    //             content="Click this button to save your work at anytime."
    //             onClose={() => closePopups('save')}
    //         />
    //     )}
    //     </div>
    // )

export default TutorialOverview;

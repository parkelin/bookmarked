import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import TutorialPopup from "./TutorialPopup";
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

export default TutorialOverview;

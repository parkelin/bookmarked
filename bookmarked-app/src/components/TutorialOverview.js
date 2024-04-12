import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import TutorialPopup from "./TutorialPopup";
import WritingDocTutorial from "./WritingDocTutorial";
import RightClickTutorial from "./RightClickTutorial";
import "../pages/Tutorial/Tutorial.css";

const TutorialOverview = () => {
  const [popups, setPopups] = useState({
    navbar: false,
    doc: false,
    info: false,
    save: false,
  });
  const [infoColor, setInfoColor] = useState({
    navbar: "#ffffff",
    doc: "#ffffff",
    info: "#ffffff",
    save: "#ffffff",
  });

  const openPopup = (popup) => {
    setInfoColor({ ...infoColor, [popup]: "#DD8CBD" });
    setPopups({ ...popups, [popup]: true });
  };

  const closePopups = (popup) => {
    setInfoColor({ ...infoColor, [popup]: "#ffffff" });
    setPopups({ ...popups, [popup]: false });
  };

  return (
    <div>
      <button
        className="b-navbar but"
        onClick={() => openPopup("navbar")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={infoColor.navbar} />
      </button>
      <button
        className="b-doc but"
        onClick={() => openPopup("doc")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={infoColor.doc} />
      </button>
      <button
        className="b-info but"
        onClick={() => openPopup("info")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={infoColor.info} />
      </button>
      <button
        className="b-save but"
        onClick={() => openPopup("save")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosInformationCircle size={"25px"} color={infoColor.save} />
      </button>
      {popups.navbar && (
        <TutorialPopup
          content={[
            "This is your navigation bar.",
            "The Writing Document is where you write, check for writing inconsistencies, and access character previews.",
            "The Glossary is a list of all character profiles that you have created. Create, edit, or delete new characters in full screen.",
          ]}
          onClose={() => closePopups("navbar")}
          marginLeft={"420px"}
          marginTop={"240px"}
        />
      )}
      {popups.doc && (
        <WritingDocTutorial onClose={() => closePopups("doc")}/>
      )}
      {popups.info && (
        <TutorialPopup
          content={[
            "Don't worry if you can't remember everything!",
            "There will be an info button on the Writing Document page that is accessible at all times. This popup will summarize all of the features with pictures for your reference.",
          ]}
          onClose={() => closePopups("info")}
          marginLeft={"1148px"}
          marginTop={"192px"}
          height={"200px"}
        />
      )}
      {popups.save && (
        <TutorialPopup
          content={["Save your work at anytime.", "We cannot guarantee your work will be accurately saved if you don't properly log out."]}
          onClose={() => closePopups("save")}
          marginLeft={"1180px"}
          marginTop={"167px"}
          height={"150px"}
        />
      )}
    </div>
  );
};

export default TutorialOverview;

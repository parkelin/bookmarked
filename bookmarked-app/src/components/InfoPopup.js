import React, { useState } from "react";
import "../pages/WritingDoc/WritingDoc.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const InfoPopup = () => {
  const [displayInfoPopup, setDisplayInfoPopup] = useState(false);

  return (
    <div>
      <button
        className="info-button"
        style={{ border: "none", background: "none", cursor: "pointer" }}
        onClick={() => setDisplayInfoPopup(!displayInfoPopup)}
      >
        {displayInfoPopup ? (
          <AiFillInfoCircle size={"22px"} />
        ) : (
          <AiOutlineInfoCircle size={"22px"} />
        )}
      </button>
      {displayInfoPopup && (
        <div className="popup-rounded-rectangle">
          <button
            onClick={() => setDisplayInfoPopup(false)}
            className="close-popup"
            style={{
              border: "none",
              color: "#000",
              background: "none",
              cursor: "pointer",
            }}
          >
            <CgClose size={"18px"} />
          </button>
          <div className="popup-rectangle-content">
            <h1 className="info-title">Bookmarked Overview</h1>
          </div>
          <p className="info-caption">
            Access writing tools with a simple highlight and right-click.
          </p>
          <img
            className="demo-image"
            src={require("../images/DropdownMenuExample.png")}
            alt="Demo example"
          />
          <p className="info-caption2">
            We'll match your characters precisely to their profile name.
            Don't worry <br /> about capitalizations!
          </p>
          <img
          className="demo-image2"
          src={require("../images/CharacterShortcutExample.png")}
          alt={"Character shortcut example"}
          />
        </div>
      )}
    </div>
  );
};
export default InfoPopup;

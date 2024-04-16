import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import "../pages/Tutorial/Tutorial.css";
import TextEditorTutorial from "./TextEditorTutorial";
import TutorialPopup from "./TutorialPopup";

const RightClickTutorial = () => {
  const history = useHistory();
  const [infoColor, setInfoColor] = useState("#DD8CBD");
  const [openInfoPopup, setOpenInfoPopup] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleOpenPopup = () => {
    setOpenInfoPopup(true);
    setInfoColor("#DD8CBD");
  };
  const handleClosePopup = () => {
    setOpenInfoPopup(false);
    setInfoColor("#ffffff");
  };
  return (
    <div>
      <button
        onClick={() => history.push("/tutorial")}
        className="b-exit-session-pink"
        style={{
          cursor: "pointer",
        }}
      >
        Exit session
      </button>
      <button onClick={handleOpenPopup} className="b-info-right-click-tutorial">
        <IoIosInformationCircle size={"30px"} color={infoColor} />
      </button>

      <TextEditorTutorial />
      {openInfoPopup && (
        <TutorialPopup
          content={[
            "Type and highlight any text. Then right click* to access the drop down menu.", "Make sure the text remains highlighted before the right click.",
          ]}
          onClose={handleClosePopup}
          marginLeft={"965px"}
          marginTop={"184px"}
          height={"190px"}
          smallText={"*secondary-click for Mac users."}
        />
      )}
      <div className="page-overlay" />
    </div>
  );
};

export default RightClickTutorial;

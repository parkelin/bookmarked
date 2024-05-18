import React, { useEffect, useState } from "react";
import "../../App.css";
import "../Welcome/Welcome.css";
import TextEditor from "./TextEditor";
import Navbar from "../../components/Navbar";
import { useCharacters } from "../../context/CharacterContext";
import CharacterShortcut from "./CharacterShortcut";
import EditCharacter from "./EditCharacterShortcut";
import InconsistencyPopup from "./InconsistencyPopup";
import LogOutButton from "../../components/LogoutButton";
import { CgClose } from "react-icons/cg";
import { AiOutlineSave } from "react-icons/ai";
import InfoPopup from "../../components/InfoPopup";

import { useEditor } from "../../context/EditorContext";
import InconsistencyBetaPopup from "./InconsistencyBetaPopup";

function WritingDoc({ navbarIsOpen, toggleNavbar }) {
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const { editorContent, saveEditorContent } = useEditor();

  const [isEditorMoved, setIsEditorMoved] = useState(false);
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);
  const [isEmptyShortcutOpened, setIsEmptyShortcutOpened] = useState(false);
  const [isCreateShortcutOpened, setIsCreateShortcutOpened] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [currentCharacterData, setCurrentCharacterData] = useState(undefined);
  const [showInconsistencyPopup, setShowInconsistencyPopup] = useState(false); // Added state for inconsistency popup
  const [showInconsistencyBetaPopup, setShowInconsistencyBetaPopup] = useState(false); // Added state for inconsistency popup
  const [gptResponse, setGPTResponse] = useState("");


//   const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
//   const [editorContent, setEditorContent] = useState("");
//   const { saveEditorContent } = useEditor();

  const [isLoading, setIsLoading] = useState(false);

  const { getCharacter } = useCharacters();

  const [popupTopPosition, setPopupTopPosition] = useState(0); // New state for the popup position

  const moveEditor = () => {
    setIsEditorMoved(!isEditorMoved);
  };

  const handleOpenShortcut = () => {
    toggleNavbar();
    moveEditor();
    const currentCharacter = getCharacter(highlightedText);
    setCurrentCharacterData(currentCharacter);
    if (currentCharacter !== undefined) {
      setIsShortcutOpened(true);
      setIsEmptyShortcutOpened(false);
      setIsCreateShortcutOpened(false);
    } else {
      setIsEmptyShortcutOpened(true);
    }
  };

  const handleCloseShortcut = () => {
    toggleNavbar();
    moveEditor();
    setIsShortcutOpened(false);
    setIsEmptyShortcutOpened(false);
    setIsCreateShortcutOpened(false);
  };

  const handleCreateShortcut = () => {
    toggleNavbar();
    moveEditor();
    setIsCreateShortcutOpened(true);
  };

  const handleChangeToShortcut = () => {
    const currentCharacter = getCharacter(highlightedText);
    setCurrentCharacterData(currentCharacter);
    handleCloseShortcut();
  };

  

  const handleCheckInconsistencies = (responseMessage) => {
      // toggleNavbar();
      // moveEditor();
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          setPopupTopPosition(rect.top + window.scrollY - 10); // Adjust '-10' as needed for exact alignment
      }
      if (responseMessage.length === 0) {
        // disabled AI
        setShowInconsistencyBetaPopup(true);
      } else {
      setGPTResponse(responseMessage);
      setShowInconsistencyPopup(true);
      }
  };
  
  const handleSave = async() => {
      await saveEditorContent(editorContent);
      setShowSaveConfirmation(true);
      setTimeout(() => setShowSaveConfirmation(false), 3000); // Hide confirmation after 3 seconds
      console.log("save button 1:", editorContent);
    };
  
  // Function to close inconsistency popup
  const handleCloseInconsistencyPopup = () => {
    // toggleNavbar();
    // moveEditor();
    setShowInconsistencyPopup(false);
    setShowInconsistencyBetaPopup(false);
  };

  // load in the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="welcome">
        <LogOutButton/>
        <InfoPopup />

        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar}/>

        <div className="main-content">
          {/* <div className="inconsistency-button-container">
            <button className="inconsistency-button" onClick = {handleCheckInconsistencies}>
              Inconsistency Check
            </button>
          </div> */}
          
          {showInconsistencyPopup && (
            <InconsistencyPopup
              handleCloseInconsistencyPopup={handleCloseInconsistencyPopup}
              editorContent={editorContent}
              gptResponse={gptResponse}
              topPosition={popupTopPosition}
            />
          )}

          {showInconsistencyBetaPopup && (
            <InconsistencyBetaPopup
            handleCloseInconsistencyPopup={handleCloseInconsistencyPopup}
            topPosition={popupTopPosition} 
            />
          )}

          <div className="navbar-text-regular">
            <button
              className="save-button"
              onClick={handleSave}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <AiOutlineSave size={"24px"} />
            </button>
            {showSaveConfirmation && (
              <div className="save-confirmation">Changes saved successfully!</div>
            )}
          </div>

          <TextEditor
            isEditorMoved={isEditorMoved}
            onClickFindShortcut={handleOpenShortcut}
            highlightedText={highlightedText}
            setHighlightedText={setHighlightedText}
            onClickCreateShortcut={handleCreateShortcut}
            // setEditorContent={setEditorContent}
            handleCheckInconsistencies={handleCheckInconsistencies}
          />
        </div>

        {isLoading && (
          <div className="shortcut-rounded-rectangle">
            <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        )}

        {isShortcutOpened && (
          <CharacterShortcut
            characterData={currentCharacterData}
            handleCloseShortcut={handleCloseShortcut}
          />
        )}

        {isEmptyShortcutOpened && (
          <div className="shortcut-rounded-rectangle">
            <button
              className="close"
              onClick={handleCloseShortcut}
              style={{
                border: "none",
                color: "#000",
                background: "none",
                cursor: "pointer",
                marginTop: "5px",
                left: "94%",
              }}
            >
              <CgClose size={"20px"} />
            </button>
            <h1
              className="no-character-found-text"
              style={{ marginTop: "20px" }}
            >
              No character found.
            </h1>
          </div>
        )}

        {isCreateShortcutOpened && (
          <EditCharacter
            handleCancel={handleCloseShortcut}
            handleFinishChangesClick={handleChangeToShortcut}
            highlightedText={highlightedText}
          />
        )}
      </div>
    </>
  );
}

export default WritingDoc;

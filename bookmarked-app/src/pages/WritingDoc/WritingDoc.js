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

function WritingDoc({ navbarIsOpen, toggleNavbar }) {
  const [isEditorMoved, setIsEditorMoved] = useState(false);
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);
  const [isEmptyShortcutOpened, setIsEmptyShortcutOpened] = useState(false);
  const [isCreateShortcutOpened, setIsCreateShortcutOpened] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [currentCharacterData, setCurrentCharacterData] = useState(undefined);
  const [showInconsistencyPopup, setShowInconsistencyPopup] = useState(false); // Added state for inconsistency popup
  const [editorContent, setEditorContent] = useState(""); // State to store current editor content
  const [infoShowing, setInfoShowing] = useState(false);

  const { saveEditorContent } = useEditor();

  const [isLoading, setIsLoading] = useState(false);

  const { getCharacter } = useCharacters();

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

  

  const handleCheckInconsistencies = () => {
    // Implement logic to check inconsistencies here
    if (editorContent.trim() !== "") {
      toggleNavbar();
      moveEditor();
      setShowInconsistencyPopup(true);
    } else {
      // TODO no consistency/no text in editor

    }
  };

  // Function to close inconsistency popup
  const handleCloseInconsistencyPopup = () => {
    toggleNavbar();
    moveEditor();
    setShowInconsistencyPopup(false);
  };

  // load in the top of the page - elin
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="welcome">
        <LogOutButton />
        <InfoPopup />

        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar} />

        <div className="main-content">
          {/* <div className="inconsistency-button-container">
            <button className="inconsistency-button" onClick = {handleCheckInconsistencies}>
              Inconsistency Check
            </button>
          </div> */}
          <div className="navbar-text-regular">
            <button
              className="save-button"
              onClick={() => saveEditorContent(editorContent)}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <AiOutlineSave size={"24px"} />
            </button>
          </div>

          {showInconsistencyPopup && (
            <InconsistencyPopup
              handleCloseInconsistencyPopup={handleCloseInconsistencyPopup}
              editorContent={editorContent}
            />
          )}

          <TextEditor
            isEditorMoved={isEditorMoved}
            onClickFindShortcut={handleOpenShortcut}
            highlightedText={highlightedText}
            setHighlightedText={setHighlightedText}
            onClickCreateShortcut={handleCreateShortcut}
            setEditorContent={setEditorContent}
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

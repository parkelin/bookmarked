import React, { useEffect, useState } from 'react';
import "../../App.css";
import TextEditor from "./TextEditor";
import Navbar from "../../components/Navbar";
import { useCharacters } from "../Character/CharacterContext";
import CharacterShortcut from "./CharacterShortcut";
import EditCharacter from "./EditCharacterShortcut"; 
import InconsistencyPopup from './InconsistencyPopup';

function WritingDoc({ navbarIsOpen, toggleNavbar }) {
  const [isEditorMoved, setIsEditorMoved] = useState(false);
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);
  const [isEmptyShortcutOpened, setIsEmptyShortcutOpened] = useState(false);
  const [isCreateShortcutOpened, setIsCreateShortcutOpened] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [currentCharacterData, setCurrentCharacterData] = useState(undefined);
  const [showInconsistencyPopup, setShowInconsistencyPopup] = useState(false); // Added state for inconsistency popup
  const [editorContent, setEditorContent] = useState(""); // State to store current editor content


  const { getCharacter } = useCharacters();

  const moveEditor = () => {
    setIsEditorMoved(!isEditorMoved);
  };

  const handleOpenShortcut = () => {
    toggleNavbar();
    moveEditor();
    handleChangeToShortcut();
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
    if (currentCharacter !== undefined) {
      setIsShortcutOpened(true);
      setIsEmptyShortcutOpened(false);
      setIsCreateShortcutOpened(false);
    } else {
      setIsEmptyShortcutOpened(true);
    }
  };

  const handleCheckInconsistencies = () => {
    // Implement logic to check inconsistencies here
    if(editorContent.trim() !== "") {
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
        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar} />
        <div className="main-content">
        <div className="inconsistency-button-container">
            <button className="inconsistency-button" onClick = {handleCheckInconsistencies}>
              Inconsistency Check
            </button>
          </div>
          {showInconsistencyPopup && (
          <InconsistencyPopup
            handleCloseInconsistencyPopup = {handleCloseInconsistencyPopup}
            editorContent= {editorContent}
          />
        )}
          <TextEditor
            isEditorMoved={isEditorMoved}
            onClickFindShortcut={handleOpenShortcut}
            setHighlightedText={setHighlightedText}
            onClickCreateShortcut={handleCreateShortcut}
            setEditorContent={setEditorContent}
          />
        </div>
        {isShortcutOpened && (
          <CharacterShortcut
            characterData={currentCharacterData}
            handleCloseShortcut={handleCloseShortcut}
          />
        )}
        {isEmptyShortcutOpened && (
          <div className="shortcut-rounded-rectangle">
            <button className="close" onClick={handleCloseShortcut}>
              X
            </button>
            <h1 className="no-character-found-text">No character found.</h1>
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
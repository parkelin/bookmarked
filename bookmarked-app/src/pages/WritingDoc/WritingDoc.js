import React, { useEffect, useState } from 'react';
import "../../App.css";
import TextEditor from "./TextEditor";
import Navbar from "../../components/Navbar";
import { useCharacters } from "../Character/CharacterContext";
import CharacterShortcut from "./CharacterShortcut";
import EditCharacter from "./EditCharacterShortcut";

function WritingDoc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const WritingDoc = ({ navbarIsOpen, toggleNavbar }) => {
  const [isEditorMoved, setIsEditorMoved] = useState(false);
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);
  const [isEmptyShortcutOpened, setIsEmptyShortcutOpened] = useState(false);
  const [isCreateShortcutOpened, setIsCreateShortcutOpened] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [currentCharacterData, setCurrentCharacterData] = useState(undefined);

  const { getCharacter } = useCharacters();

  const moveEditor = () => {
    if (isEditorMoved) setIsEditorMoved(false);
    else setIsEditorMoved(true);
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
      setIsCreateShortcutOpened(false)
      setIsEmptyShortcutOpened(false)
      setIsShortcutOpened(true)
    } else {
      setIsEmptyShortcutOpened(true);
    }
  };

  return (
    <>
      <div className="welcome">
        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar} />
        <div className="main-content">
          <TextEditor
            isEditorMoved={isEditorMoved}
            onClickFindShortcut={handleOpenShortcut}
            setHighlightedText={setHighlightedText}
            onClickCreateShortcut={handleCreateShortcut}
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
};
}
export default WritingDoc;
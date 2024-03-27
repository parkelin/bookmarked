// Writing Doc + Sidebar

import React, { useState } from "react";
import "../../App.css";
import TextEditor from "./TextEditor";
import Navbar from "../../components/Navbar";
import { useCharacters } from "../Character/CharacterContext";
import CharacterShortcut from "./CharacterShortcut";

const WritingDoc = ({ navbarIsOpen, toggleNavbar }) => {
  const [isEditorMoved, setIsEditorMoved] = useState(false);
  const [isShortcutOpened, setIsShortcutOpened] = useState(false);
  const [isEmptyShortcutOpened, setIsEmptyShortcutOpened] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [currentCharacterData, setCurrentCharacterData] = useState(undefined);

  const { getCharacter } = useCharacters();

  const moveEditor = () => {
    if (isEditorMoved) setIsEditorMoved(false);
    else setIsEditorMoved(true);
  };

  const toggleShortcut = () => {
    if (isShortcutOpened) setIsShortcutOpened(false);
    else setIsShortcutOpened(true);
  };

  const handleOpenShortcut = () => {
    toggleNavbar();
    moveEditor();
    const currentCharacter = getCharacter(highlightedText);
    setCurrentCharacterData(currentCharacter);
    if (currentCharacter !== undefined) {
      toggleShortcut();
    } else {
      setIsEmptyShortcutOpened(true);
    }
  };

  const handleCloseShortcut = () => {
    toggleNavbar();
    moveEditor();
    setIsShortcutOpened(false);
    setIsEmptyShortcutOpened(false);
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
      </div>
    </>
  );
};

export default WritingDoc;

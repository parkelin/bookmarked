import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Character.css";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import RoundedRectangle from "../../components/RoundedRectangle";
import { useCharacters } from "./CharacterContext";

const Character = () => {
  let { characterId } = useParams();
  characterId = parseInt(decodeURIComponent(characterId));

  const { addCharacter, getCharacter, removeCharacter, updateCharacter } = useCharacters();

  const [isEditing, setIsEditing] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdateChanges = () => {
    const updatedCharacterData = {
        id: characterId,
        characterName: characterName,
        imageName: characterData.imageName,
        caption: caption,
        description: description,
    }
    setIsEditing(false)
    updateCharacter(updatedCharacterData)
    characterData = updatedCharacterData
  }

  const handleClickEditMode = () => {
    setIsEditing(true)
    setCharacterName(characterData.characterName)
    setCaption(characterData.caption)
    setDescription(characterData.description)
  }

  var characterData = getCharacter(characterId);

  useEffect(() => {
    const newCharacterTemplate = {
      id: characterId, // change to generateId
      characterName: "New Character",
      imageName: "EmptyImageIcon.png",
      caption: "Add caption here",
      description: "Add detailed descriptions here",
    };

    if (!characterData) {
        setIsEditing(true)
        addCharacter(newCharacterTemplate);
        characterData = newCharacterTemplate;
    }
  }, [characterData, characterId, addCharacter]);

  if (!characterData) {
    return <div></div>;
  }

  return (
    <div>
      <Navbar />
      <div className="big-rounded-rectangle">
        {isEditing ? (
          <>
            <div>
              <button
                className="edit-button"
                onClick={handleUpdateChanges}
              >
                Finish editing
              </button>
            </div>
            <RoundedRectangle>
              <img
                src={require(`../../images/${characterData.imageName}`)}
                className="character-image-big"
                alt={`${characterData.characterName} icon`}
              />
            </RoundedRectangle>
            <div className="character-main-info">
              <div className="character-heading-text">
                <input
                  type="text"
                  className="character-name-big"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                />
                <input 
                type="text"
                className="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/glossary" className="close">
                X
              </Link>
              <Link
                to="/glossary"
                className="delete-current-character"
                onClick={() => removeCharacter(characterData.id)}
              >
                delete
              </Link>
              <button
                className="edit-button"
                onClick={() => handleClickEditMode()}
              >
                Edit
              </button>
            </div>
            <div className="character-main-info">
              <RoundedRectangle>
                <img
                  src={require(`../../images/${characterData.imageName}`)}
                  className="character-image-big"
                  alt={`${characterData.characterName} icon`}
                />
              </RoundedRectangle>
              <div className="character-heading-text">
                <h1 className="character-name-big">
                  {characterData.characterName}
                </h1>
                <h3 className="caption">{characterData.caption}</h3>
              </div>
              {/* need to add location section here */}
            </div>
            <div className="character-description-section">
              <p className="character-description">
                {characterData.description}
              </p>
            </div>
            <div className="divider" />
            <h2 id="connections-title">Connections</h2>
            <div className="divider" />
          </>
        )}
      </div>
    </div>
  );
};
export default Character;

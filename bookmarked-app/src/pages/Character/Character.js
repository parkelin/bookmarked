import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Character.css";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import RoundedRectangle from "../../components/RoundedRectangle";
import { useCharacters } from "../../context/CharacterContext";
import EditCharacter from "./EditCharacter";

const Character = ({ navBarisOpen, toggleNavBar }) => {
  let { characterId } = useParams();
  characterId = parseInt(decodeURIComponent(characterId));

  const { addCharacter, getCharacterWithId, removeCharacter, updateCharacter } =
    useCharacters();

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
    };
    setIsEditing(false);
    updateCharacter(updatedCharacterData);
    characterData = updatedCharacterData;
  };

  const handleClickEditMode = () => {
    setIsEditing(true);
    setCharacterName(characterData.characterName);
    setCaption(characterData.caption);
    setDescription(characterData.description);
  };

  var characterData = getCharacterWithId(characterId);

  useEffect(() => {
    const newCharacterTemplate = {
      id: characterId, // change to generateId
      characterName: "New Character",
      imageName: "EmptyImageIcon.png",
      caption: "Add caption here",
      description: "Add detailed descriptions here",
    };

    if (!characterData) {
      setIsEditing(true);
      addCharacter(newCharacterTemplate);
      characterData = newCharacterTemplate;
    }
  }, [characterData, characterId, addCharacter]);

  if (!characterData) {
    return <div></div>;
  }

  return (
    <div>
      <Navbar isOpen={navBarisOpen} toggleNavbar={toggleNavBar} />
      <div className="big-rounded-rectangle">
        {isEditing ? (
          <EditCharacter
            characterData={characterData}
            characterName={characterName}
            setCharacterName={setCharacterName}
            caption={caption}
            setCaption={setCaption}
            description={description}
            setDescription={setDescription}
            handleUpdateChanges={handleUpdateChanges}
          />
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
          </>
        )}
        <div className="divider" />
        <h2 id="connections-title">Connections</h2>
        <div className="divider" />
      </div>
    </div>
  );
};
export default Character;

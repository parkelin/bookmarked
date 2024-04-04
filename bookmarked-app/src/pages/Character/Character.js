import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Character.css";
import "../Welcome/Welcome.css"
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import RoundedRectangle from "../../components/RoundedRectangle";
import { useCharacters } from "../../context/CharacterContext";
import EditCharacter from "./EditCharacter";
import { CgClose } from "react-icons/cg";
import { RiEditLine } from "react-icons/ri";
import { CgTrashEmpty } from "react-icons/cg";


const Character = ({ navBarisOpen, toggleNavBar }) => {
  let { characterId } = useParams();


  const { addCharacter, getCharacterWithId, removeCharacter, updateCharacter } =
    useCharacters();

  const [isEditing, setIsEditing] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [characterData, setCharacterData] = useState(getCharacterWithId(characterId))
  const [needsAdding, setNeedsAdding] = useState(false)

  const handleUpdateChanges = () => {
    const updatedCharacterData = {
      id: characterId,
      name: characterName,
      image: characterData.image,
      caption: caption,
      description: description,
    };
    setIsEditing(false);
    if (needsAdding) {
      addCharacter(updatedCharacterData)
    } else {
      updateCharacter(updatedCharacterData);
    }
    setCharacterData(updatedCharacterData)
  };

  const handleClickEditMode = () => {
    setIsEditing(true);
    setCharacterName(characterData.name);
    setCaption(characterData.caption);
    setDescription(characterData.description);
  };

  useEffect(() => {
    const newCharacterTemplate = {
      id: characterId, 
      name: "New Character",
      image: "EmptyImageIcon.png",
      caption: "Add caption here",
      description: "Add detailed descriptions here",
    };

    if (!characterData) {
      console.log("identified new character edit page")
      setIsEditing(true);
      // addCharacter(newCharacterTemplate);
      setCharacterData(newCharacterTemplate)
      setNeedsAdding(true)
    }
  }, [characterData, characterId, addCharacter]);

  if (!characterData) {
    return <div>
      <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
    </div>;
  }

  return (
    <div>
      <Navbar isOpen={true} toggleNavbar={toggleNavBar} />
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
          <div>
            <div>
              <Link to="/glossary" className="close" style={{ border: 'none', color: '#000', background: 'none', cursor: 'pointer'}}>
              <CgClose size={'30px'} />
              </Link> 
              <button
                className="edit-button"
                onClick={() => handleClickEditMode()}
                style={{ border: 'none', color: '#000', background: 'none', cursor: 'pointer'}}
              >
                <RiEditLine size={'30px'}/>
              </button>
              <Link
                to="/glossary"
                className="delete-current-character"
                onClick={() => removeCharacter(characterData.id)}
                style={{ border: 'none', color: '#000', background: 'none', cursor: 'pointer'}}
              >
                <CgTrashEmpty size={'30px'}/>
              </Link>
             
            </div>
            <div className="character-main-info">
              <RoundedRectangle>
                <img
                  src={require(`../../images/${characterData.image}`)}
                  className="character-image-big"
                  alt={`${characterData.name} icon`}
                />
              </RoundedRectangle>
              <div className="character-heading-text">
                <h1 className="character-name-big">
                  {characterData.name}
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
          </div>
        )}
        <div className="divider" />
        <h2 id="connections-title">Connections</h2>
        <div className="divider" />
      </div>
    </div>
  );
};
export default Character;

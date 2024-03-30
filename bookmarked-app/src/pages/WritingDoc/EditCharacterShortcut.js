import React, { useEffect, useState } from "react";
import { useCharacters } from "../../context/CharacterContext";
import "../Character/Character.css";

const EditCharacterShortcut = ({
  handleFinishChangesClick,
  handleCancel,
  highlightedText,
}) => {
  const { addCharacter, updateCharacter, getCharacter, generateCharacterId } = useCharacters();

  const [isUpdating, setIsUpdating] = useState(false)
  const [id, setId] = useState(generateCharacterId())
  const [image, setImage] = useState("EmptyImageIcon.png")
  const [name, setName] = useState(highlightedText)
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState(
    ""
  );
  // special case for already existing character with this name
  useEffect(() => {
    const character = getCharacter(highlightedText);
    if (character !== undefined) {
        setIsUpdating(true)
        setId(character.id)
        setImage(character.imageName)
        setCaption(character.caption);
        setDescription(character.description);
        setName(character.characterName)
    }
  }, [highlightedText, getCharacter])


  const handleAddCharacter = () => {
    const updatedCharacterData = {
      id: id,
      characterName: name,
      imageName: image,
      caption: caption,
      description: description,
    };
    if (isUpdating)
        updateCharacter(updatedCharacterData)
    else
        addCharacter(updatedCharacterData);
    handleFinishChangesClick();
  };

  return (
    <div className="shortcut-rounded-rectangle">
      <div>
        <button className="edit-button-small" onClick={handleAddCharacter}>
          Finish editing
        </button>
        <button className="small-close" onClick={handleCancel}>
          X
        </button>
      </div>
      <div className="small-character-main-info">
        <div className="small-rounded-rectangle">
          <img
            src={require(`../../images/${image}`)}
            className="character-image-big"
            alt={"empty icon"}
          />
        </div>
        <div className="character-heading-text">
        <h1
          className="character-name-small"
        >{name}</h1>
        <input
          type="text"
          placeholder="Enter caption"
          className="input-caption-small"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        </div>
        </div>
        <div className="character-description-section-small">
            <textarea
              className="character-description-small"
              placeholder="Add detailed descriptions here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

      </div>
    </div>
  );
};
export default EditCharacterShortcut;

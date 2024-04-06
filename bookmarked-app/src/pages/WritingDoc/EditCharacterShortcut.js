import React, { useEffect, useState } from "react";
import { useCharacters } from "../../context/CharacterContext";
import "../Character/Character.css";
import { CgClose } from "react-icons/cg";
import { CgCheck } from "react-icons/cg";

const EditCharacterShortcut = ({
  handleFinishChangesClick,
  handleCancel,
  highlightedText,
}) => {
  const { addCharacter, updateCharacter, getCharacter } = useCharacters();

  const [isUpdating, setIsUpdating] = useState(false);
  const [id, setId] = useState("NewCharacter");
  const [image, setImage] = useState("EmptyImageIcon.png");
  const [name, setName] = useState(highlightedText);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  // special case for already existing character with this name
  useEffect(() => {
    const character = getCharacter(highlightedText);
    if (character !== undefined) {
      setIsUpdating(true);
      setId(character.id);
      setImage(character.image);
      setCaption(character.caption);
      setDescription(character.description);
      setName(character.name);
    }
  }, [highlightedText, getCharacter]);

  const handleAddCharacter = async () => {
    const updatedCharacterData = {
      id: id,
      name: name,
      image: image,
      caption: caption,
      description: description,
    };
    if (isUpdating) await updateCharacter(updatedCharacterData);
    else await addCharacter(updatedCharacterData);
    handleFinishChangesClick();
  };

  return (
    <div className="shortcut-rounded-rectangle">
      <div>
        <button
          className="edit-button-small"
          onClick={handleAddCharacter}
          style={{
            border: "none",
            color: "#000",
            background: "none",
            cursor: "pointer",
          }}
        >
          <CgCheck size={"40px"} />
        </button>
        <button
          className="small-close"
          onClick={handleCancel}
          style={{
            border: "none",
            color: "#000",
            background: "none",
            cursor: "pointer",
          }}
        >
          <CgClose size={"23px"} />
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
          <h1 className="character-name-small">{name}</h1>
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

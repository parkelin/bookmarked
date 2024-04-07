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
  const { addCharacter, updateCharacter, getCharacter, getCharacterPhoto } = useCharacters();

  const [isUpdating, setIsUpdating] = useState(false);
  const [id, setId] = useState("NewCharacter");
  const [image, setImage] = useState("EmptyImageIcon.png");
  const [name, setName] = useState(highlightedText);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  // special case for already existing character with this name
  useEffect(() => {
    const character = getCharacter(highlightedText);
    if (character !== undefined) {
      setIsUpdating(true);
      setId(character.id);
      setCaption(character.caption);
      setDescription(character.description);
      setName(character.name);
    }

    if (character !== undefined && character.image !== 'EmptyImageIcon.png') {
      getCharacterPhoto(character).then(url => {
          setImagePreview(url)
      }).catch(error => {
          console.error("Error fetching character photo URL:", error);
      });
  }

  }, [highlightedText, getCharacter, getCharacterPhoto]);

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
        {imagePreview !== 'EmptyImageIcon.png' ? (
              <img
                src={imagePreview}
                className="character-image-big"
                alt={`${name} icon`}
              />
            ) : (
              <img
                src={require(`../../images/EmptyImageIcon.png`)}
                className="character-image-big"
                alt={`${name} icon`}
              />
            )}
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

import React from "react";
import RoundedRectangle from "../../components/RoundedRectangle";

const EditCharacter = ({
  characterData,
  characterName,
  setCharacterName,
  caption,
  setCaption,
  description,
  setDescription,
  handleUpdateChanges,
}) => {
  return (
    <>
      <div>
        <button className="edit-button" onClick={handleUpdateChanges}>
          Finish editing
        </button>
      </div>
      <div>
      <div className="character-main-info">
        <RoundedRectangle>
          <img
            src={require(`../../images/${characterData.imageName}`)}
            className="character-image-big"
            alt={`${characterData.characterName} icon`}
          />
        </RoundedRectangle>
          <div className="character-heading-text">
            <input
              type="text"
              className="character-name-big"
              placeholder="Character Name"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
            <input
              type="text"
              className="caption"
              placeholder="Enter caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          </div>
          <div className="character-description-section">
            <textarea
              className="character-description"
              value={description}
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
    </>
  );
};

export default EditCharacter;

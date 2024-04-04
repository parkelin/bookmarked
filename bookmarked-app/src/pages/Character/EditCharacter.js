import React from "react";
import RoundedRectangle from "../../components/RoundedRectangle";
import { CgCheck } from "react-icons/cg";
import { Link } from "react-router-dom";

const EditCharacter = ({
  characterData,
  characterName,
  setCharacterName,
  caption,
  setCaption,
  description,
  setDescription,
  handleUpdateChanges,
  isNew,
}) => {
  return (
    <>
      <div>
        {isNew ? (
          <Link
            to={"/glossary"}
            className="edit-button"
            onClick={handleUpdateChanges}
            style={{
              border: "none",
              color: "#000",
              background: "none",
              cursor: "pointer",
            }}
          >
            <CgCheck size={"59px"} />
          </Link>
        ) : (
          <button
            className="edit-button"
            onClick={handleUpdateChanges}
            style={{
              border: "none",
              color: "#000",
              background: "none",
              cursor: "pointer",
            }}
          >
            <CgCheck size={"59px"} />
          </button>
        )}
      </div>
      <div>
        <div className="character-main-info">
          <RoundedRectangle>
            <img
              src={require(`../../images/${characterData.image}`)}
              className="character-image-big"
              alt={`${characterData.name} icon`}
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

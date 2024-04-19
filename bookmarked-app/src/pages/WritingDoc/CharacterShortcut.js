import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import "../Character/Character.css";
import "./WritingDoc.css";
import { useCharacters } from "../../context/CharacterContext";

const CharacterShortcut = ({ handleCloseShortcut, characterData }) => {
  const { getCharacterPhoto } = useCharacters();

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (characterData.image !== 'EmptyImageIcon.png') {
        getCharacterPhoto(characterData).then(url => {
            setImagePreview(url)
        }).catch(error => {
            console.error("Error fetching character photo URL:", error);
        });
    }
}, [characterData, getCharacterPhoto]);


  return (
    <div className="shortcut-rounded-rectangle">
      <button
        className="small-close"
        onClick={handleCloseShortcut}
        style={{
          border: "none",
          color: "#000",
          background: "none",
          cursor: "pointer",
        }}
      >
        <CgClose size={"23px"} />
      </button>
      {/* <Link className="full-screen" to={`/glossary/${characterData.id}`}>
        <CiMaximize1
          size={"21px"}
          style={{
            border: "none",
            color: "#000",
            background: "none",
            cursor: "pointer",
          }}
        />
      </Link> */}
      <div className="small-character-main-info">
        <div className="small-rounded-rectangle">
          {characterData.image === "EmptyImageIcon.png" ? (
            <img
              src={require(`../../images/${characterData.image}`)}
              className="character-image-big"
              alt={`${characterData.name} icon`}
            />
          ) : (
            <img
              src={imagePreview}
              className="character-image-big"
              alt={`${characterData.name} icon`}
            />
          )}
        </div>
        <div className="character-heading-text">
          <h1 className="character-name-small">{characterData.name}</h1>
          <h3 className="caption-small">{characterData.caption}</h3>
        </div>
      </div>
      <div className="character-description-section-small">
        <p className="character-description-small">
          {characterData.description}
        </p>
      </div>
    </div>
  );
};
export default CharacterShortcut;

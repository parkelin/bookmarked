import React, { useState, useRef } from "react";
import RoundedRectangle from "../../components/RoundedRectangle";
import { CgCheck, CgAdd } from "react-icons/cg";

const EditCharacter = ({
  characterData,
  characterName,
  setCharacterName,
  caption,
  setCaption,
  description,
  setDescription,
  handleUpdateChanges,
  characterImage, // New prop for managing character image
  setCharacterImage, // New function to update character image
  imagePreview,
  setImagePreview,
}) => {
  // const [imagePreview, setImagePreview] = useState(""); // State to hold image preview
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setCharacterImage(file); // Update character image state
      const imageUrl = URL.createObjectURL(file); // Get image URL for preview
      setImagePreview(imageUrl); // Update image preview
    }
  };

  return (
    <>
      <div>
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
      </div>
      <div>
        <div className="character-main-info">
          <RoundedRectangle>
          {imagePreview ? (
              <img
                src={imagePreview}
                className="character-image-big"
                alt={`${characterName} icon`}
              />
            ) : (
              <img
                src={require(`../../images/${characterData.image}`)}
                className="character-image-big"
                alt={`${characterName} icon`}
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
             <div
              className="upload-icon"
              onClick={() => fileInputRef.current.click()} // Use ref to trigger file input click
            >
              <CgAdd size={24} />
            </div>
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

import React from "react";
import "./Glossary.css";
import CharacterIcon from "../../components/CharacterIcon";
import Navbar from "../../components/Navbar";
import NewCharacterRectangle from "../../components/NewCharacterRectangle";
import { useCharacters } from "../../context/CharacterContext";
import LogOutButton from "../../components/LogoutButton";

const Glossary = ({ navbarIsOpen, toggleNavbar }) => {
  const { characters } = useCharacters();

  return (
    <div className="glossary">
      <LogOutButton />
      <Navbar isOpen={true} toggleNavbar={toggleNavbar} />
      <div className="glossary-section">
        <h1 className="glossary-title">Glossary</h1>
        <div className="characters-container">
          {characters.map((character) => (
            <CharacterIcon key={character.id} character={character} />
          ))}
          <NewCharacterRectangle newId={"NewCharacter"} />
        </div>
      </div>
    </div>
  );
};

export default Glossary;

import React from 'react'
import './Glossary.css'
import '../../App.css';
import CharacterIcon from '../../components/CharacterIcon'
import Navbar from '../../components/Navbar';
import NewCharacterRectangle from '../../components/NewCharacterRectangle';
import { useCharacters } from '../Character/CharacterContext';

const Glossary = ({ navbarIsOpen, toggleNavbar }) => {
    const { characters, generateCharacterId } = useCharacters();

    return (
      <div className='welcome'> 
        <Navbar isOpen={navbarIsOpen} toggleNavbar={toggleNavbar} />
        <div className='glossary-section'>
            <h1 className='glossary-title'>Glossary</h1>
            <div className='characters-container'>
                {characters.map((character) => (
                    <CharacterIcon 
                        key={character.id} 
                        id={character.id}
                        name={character.characterName} 
                        iconImage={character.imageName}/>
                ))}
                <NewCharacterRectangle newId={generateCharacterId()} />
            </div>
        </div>
      </div>
    )
}

export default Glossary
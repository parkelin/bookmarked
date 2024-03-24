import React from 'react'
import './Glossary.css'
import '../../App.css';
import CharacterIcon from '../../components/CharacterIcon'
import PlusSign from '../../components/PlusSign'
import RoundedRectangle from '../../components/RoundedRectangle'
import Navbar from '../../components/Navbar';

const Glossary = ({ characterList }) => {

    return (
      <div>
        <Navbar />
        <div >
            <h1 className='glossary-title'>Glossary</h1>
            <div className='glossary-container'>
                {characterList.map((character) => (
                    <CharacterIcon 
                        key={character.id} 
                        id={character.id}
                        name={character.characterName} 
                        iconImage={character.imageName}/>
                ))}
                <RoundedRectangle>
                    <PlusSign />
                </RoundedRectangle>
            </div>
        </div>
      </div>
    )
}

export default Glossary
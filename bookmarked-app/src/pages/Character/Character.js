import React, { useEffect } from 'react'
import './Character.css'
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import RoundedRectangle from '../../components/RoundedRectangle';
import { useCharacters } from './CharacterContext';



const Character = () => {
    let { characterId} = useParams(); 
    characterId = parseInt(decodeURIComponent(characterId)); 

    const { addCharacter, getCharacter } = useCharacters();

    var characterData = getCharacter(characterId)

    useEffect(() => {
        const newCharacterTemplate = {
            id: characterId,
            characterName: "New Character",
            imageName: "EmptyImageIcon.png", 
            caption: "Add caption here",
        };

        if (!characterData) {
            addCharacter(newCharacterTemplate);
            characterData = newCharacterTemplate
        }
    }, [characterData, characterId, addCharacter]);

    if (!characterData) {
        return <div>Loading or create a new character...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='big-rounded-rectangle'>
                <div className='character-main-info'>
                    <RoundedRectangle>
                        <img src={require(`../../images/${characterData.imageName}`)} className="character-image-big" alt={`${characterData.characterName} icon`}/>
                    </RoundedRectangle>
                    <div className='character-heading-text'>
                        <h1 className='character-name-big'>{characterData.characterName}</h1>
                        <h3 className='caption'>{characterData.caption}</h3>
                    </div>
                    
                    
                </div>
                
            </div>
            
            
        </div>
    )
}
export default Character
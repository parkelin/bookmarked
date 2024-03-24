import React from 'react'
import './Character.css'
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import RoundedRectangle from '../../components/RoundedRectangle';

const Character = ({ characterList }) => {
    let { characterId} = useParams(); 
    characterId = parseInt(decodeURIComponent(characterId)); 

    const characterData = characterList[characterId - 1]

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
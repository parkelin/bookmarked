import React from 'react'
import './Glossary.css'
import CharacterIcon from '../../components/CharacterIcon'
import PlusSign from '../../components/PlusSign'
import RoundedRectangle from '../../components/RoundedRectangle'

const characterList = [
    {
        id: 1,
        characterName: 'Harry Potter',
        imageName: 'harryPotterIcon.png',
        caption: 'Main Protagonist, 11',
        location: 'Godric\'s Hollow',
        description: 'The only child and son of James and Lily Potter (née Evans), Harry\'s birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort, one of the most powerful and feared Dark wizards in the world. After half of the prophecy was reported to Voldemort, courtesy of Severus Snape, Harry was chosen as the target due to his many similarities with the Dark Lord.',
      },
      {
        id: 2,
        characterName: 'Hermione Granger',
        imageName: 'harryPotterIcon.png',
        caption: 'Side Protagonist, 12',
        location: 'Godric\'s Hollow',
        description: '',
      },
      {
        id: 3,
        characterName: 'Ron Weasley',
        imageName: 'harryPotterIcon.png',
        caption: 'Side Protagonist, 11',
        location: 'Godric\'s Hollow',
        description: '',
      }
]
const Glossary = () => {

    return (
        <div >
            <h1 className='glossary-title'>Glossary</h1>
            <div className='glossary-container'>
                {characterList.map((character) => (
                    <CharacterIcon 
                        key={character.id} 
                        name={character.characterName} 
                        iconImage={character.imageName}/>
                ))}
                <RoundedRectangle>
                    <PlusSign />
                </RoundedRectangle>
            </div>
        </div>
    )
}

export default Glossary

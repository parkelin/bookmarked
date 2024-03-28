import React, { createContext, useContext, useState } from 'react';
import ConfirmDelete from '../../components/ConfirmDelete';

const CharacterContext = createContext(); // Ensure this is not undefined

export const useCharacters = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([
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
        imageName: 'HermioneGrangerIcon.png',
        caption: 'Side Protagonist, 12',
        location: 'Godric\'s Hollow',
        description: `Minister Hermione Jean Granger (b. 19 September 1979) was an English Muggle-born witch born to Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and was accepted into Hogwarts School of Witchcraft and Wizardry. Hermione began attending Hogwarts in 1991 and was Sorted into Gryffindor House. She possessed a brilliant academic mind and proved to be a gifted student in almost every subject that she studied.
        Hermione first met her future best friends Harry Potter and Ron Weasley aboard the Hogwarts Express. Despite initial impressions, they quickly became friends. She later played a crucial role in protecting the Philosopher's Stone from Voldemort.
        In her second year, Hermione had a key role in the discovery of the Chamber of Secrets before falling victim to the Basilisk. However, she recovered from the petrification under the care of Madam Pomfrey. The next year, Hermione was granted permission to use a Time-Turner to study far more subjects than were possible without time travel.
        Throughout her years at Hogwarts, Hermione became known for her dedication to learning, her bravery, and her loyalty to her friends. She played a significant role in the fight against Voldemort, using her intelligence and quick thinking to aid in many battles.
        Following the Second Wizarding War, Hermione went back to Hogwarts to complete her education. She later found employment with the Ministry of Magic, advocating for the rights of magical creatures and reforming magical law. Hermione eventually married Ron Weasley, and they had two children. She continued to be a powerful force for change in the wizarding world.`,
      },
      {
        id: 3,
        characterName: 'Ron Weasley',
        imageName: 'harryPotterIcon.png',
        caption: 'Side Protagonist, 11',
        location: 'Godric\'s Hollow',
        description: '',
      }
  ]);

  const [showConfirmed, setShowConfirmed] = useState(false);
  const [charToRemove, setCharToRemove] = useState(null);
  
  const addCharacter = (character) => {
    setCharacters(prevCharacters => [...prevCharacters, character]);
  };

  const removeCharacter = (id) => {
    setShowConfirmed(true);
    setCharToRemove(id);
  };

  const confirmRemove = () => {
    setCharacters(prevCharacters => prevCharacters.filter(character => character.id !== charToRemove));
    setShowConfirmed(false);
  }

  const cancelRemove = () => {
    setShowConfirmed(false);
  }

  const generateCharacterId = () => {
    const existingIds = characters.map(character => character.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    return newId;
  };

  const updateCharacter = (updatedCharacter) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === updatedCharacter.id ? updatedCharacter : char
      )
    );
  };

  const getCharacter = (name) => characters.find(character => character.characterName.toLowerCase() === name.toLowerCase());

  const getCharacterWithId =  (id) => characters.find(character => character.id === id);

  return (
    <CharacterContext.Provider value={{ characters, addCharacter, getCharacter, getCharacterWithId, removeCharacter, generateCharacterId, updateCharacter }}>
      {children}
      {showConfirmed && (
        <ConfirmDelete
          onConfirm={confirmRemove}
          onCancel={cancelRemove}
          />
      )}
    </CharacterContext.Provider>
  );
}
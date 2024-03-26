import React, { createContext, useContext, useState } from 'react';

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
  ]);
  
  const addCharacter = (character) => {
    setCharacters(prevCharacters => [...prevCharacters, character]);
  };

  const getCharacter = (id) => characters.find(c => c.id === id);

  // Ensure the value provided to CharacterContext.Provider is correct
  return (
    <CharacterContext.Provider value={{ characters, addCharacter, getCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}
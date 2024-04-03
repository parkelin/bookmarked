import React, { createContext, useContext, useState, useEffect } from 'react';
import ConfirmDelete from '../components/ConfirmDelete';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { database } from '../firebase-config';
import { useAuth } from './AuthContext'

const CharacterContext = createContext(); 

export const useCharacters = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const { currentUser } = useAuth()

  // immediately fetches characters from database
  useEffect(() => {
    const fetchCharacters = async () => {
      if (currentUser) {
        const q = query(collection(database, 'characters'), where('uid', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const characters = querySnapshot.docs.map(doc => transformCharacterData(doc));
        setCharacters(characters);
      } else {
        console.error("No user logged in.");
        return [];
      }
    };
    fetchCharacters();
  }, [currentUser]);

  const [showConfirmed, setShowConfirmed] = useState(false);
  const [charToRemove, setCharToRemove] = useState(null);

  // this is gonna help keep data consistent when grabbing from database
  const transformCharacterData = (doc) => {
    const data = doc.data();
    console.log(data)
    return {
      id: doc.id,
      name: data.Name || '',
      image: data.image || "EmptyImageIcon.png",
      caption: data.Caption || '',
      description: data.Description || ''
    };
  };
  
  const addCharacter = async (characterData) => {
      if (currentUser) {
        const docId = await addDoc(collection(database, 'characters'), {
          Name: characterData.name,
          Caption: characterData.caption,
          Description: characterData.description,
          image: "EmptyImageIcon.png",
          uid: currentUser.uid,
        });
        console.log("Character added successfully.");
        setCharacters(prevCharacters => [...prevCharacters, {
          id: docId.id,
          name: characterData.name,
          image: characterData.image || "EmptyImageIcon.png",
          caption: characterData.caption || "",
          description: characterData.description || ""
        }]);
      } else {
        console.error("No user logged in.");
      }
  };


  const removeCharacter = (id) => {
    setShowConfirmed(true);
    setCharToRemove(id);
  };

  const confirmRemove = async () => {
    // delete in database
    if (currentUser) {
      const characterRef = doc(database, 'characters', charToRemove);
      await deleteDoc(characterRef);
      // delete locally
      setCharacters(prevCharacters => prevCharacters.filter(character => character.id !== charToRemove));
      setShowConfirmed(false);
    }
  }

  const cancelRemove = () => {
    setShowConfirmed(false);
  }

  const updateCharacter = async (updatedCharacter) => {
    // update in database
    const user = currentUser 
      if (user) {
        const characterRef = doc(database, 'characters', updatedCharacter.id);
        console.log(`updating character id ${updatedCharacter.id}`)
        await updateDoc(characterRef, {
          Name: updatedCharacter.name,
          Caption: updatedCharacter.caption,
          Description: updatedCharacter.description,
          image: updatedCharacter.image
        })

        // update in local state
        setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === updatedCharacter.id ? updatedCharacter : character
          ));
      }
  };

  const getCharacter = (name) => characters.find(character => character.name.toLowerCase() === name.toLowerCase());

  const getCharacterWithId =  (id) => characters.find(character => character.id === id);

  return (
    <CharacterContext.Provider value={{ characters, addCharacter, getCharacter, getCharacterWithId, removeCharacter, updateCharacter }}>
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
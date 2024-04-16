import React, { createContext, useContext, useState, useEffect } from "react";
import ConfirmDelete from "../components/ConfirmDelete";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { database, storage } from "../firebase-config";
import { useAuth } from "./AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CharacterContext = createContext();
export const useCharacters = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const { currentUser } = useAuth();

  // immediately fetches characters from database
  useEffect(() => {
    const fetchCharacters = async () => {
      if (currentUser) {
        const q = query(
          collection(database, "characters"),
          where("uid", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const characters = querySnapshot.docs.map((doc) =>
          transformCharacterData(doc)
        );
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
    console.log(data);
    return {
      id: doc.id,
      name: data.Name || "",
      image: data.image || "EmptyImageIcon.png",
      caption: data.Caption || "",
      description: data.Description || "",
    };
  };

  const getBlobFromUrl = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return blob;
  };

  const handleUploadPhotoToStorage = async (uid, character) => {
    // Create a storage reference
    const imageRef = ref(storage, `user_photos/${uid}/${character.id}`);
    console.log(`attempting to upload ${character.image} at ${imageRef}`);
    const blob = await getBlobFromUrl(character.image);
    uploadBytes(imageRef, blob)
      .then((snapshot) => {
        // Once the upload is complete, get the download URL
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        // Here, you can set the image URL to your character object or state
        character.image = url;
        // Perform any state updates or additional operations with the URL here
      })
      .catch((error) => {
        console.error("Error uploading file and getting the URL:", error);
      });
  };

  const getCharacterPhoto = (character) => {
    return new Promise((resolve, reject) => {
      if (!currentUser) {
        reject("No current user found.");
        return;
      }
      const uid = currentUser.uid;
      console.log(`user uid: ${currentUser.uid}`);
      const imageRef = ref(storage, `user_photos/${uid}/${character.id}`);
      getDownloadURL(imageRef)
        .then((url) => {
          console.log("Photo URL:", url);
          resolve(url); // Resolve the promise with the URL
        })
        .catch((error) => {
          console.error("Error fetching photo URL:", error);
          reject(error); // Reject the promise if there's an error
        });
    });
  };

  const addCharacter = async (characterData) => {
    if (currentUser) {
      const docId = await addDoc(collection(database, "characters"), {
        Name: characterData.name,
        Caption: characterData.caption,
        Description: characterData.description,
        image: characterData.image,
        uid: currentUser.uid,
      });
      const newCharacter = {
        id: docId.id,
        name: characterData.name,
        image: characterData.image || "EmptyImageIcon.png",
        caption: characterData.caption || "",
        description: characterData.description || "",
      };
      console.log("Character added successfully.");
      setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
      if (characterData.image !== "EmptyImageIcon.png")
        handleUploadPhotoToStorage(currentUser.uid, newCharacter);
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
      const characterRef = doc(database, "characters", charToRemove);
      await deleteDoc(characterRef);
      // delete locally
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.id !== charToRemove)
      );
      setShowConfirmed(false);
    }
  };

  const cancelRemove = () => {
    setShowConfirmed(false);
  };

  const updateCharacter = async (updatedCharacter, needsToUpdatePhoto) => {
    // update in database
    const user = currentUser;
    if (user) {
      const characterRef = doc(database, "characters", updatedCharacter.id);
      await updateDoc(characterRef, {
        Name: updatedCharacter.name,
        Caption: updatedCharacter.caption,
        Description: updatedCharacter.description,
        image: updatedCharacter.image,
      });
      console.log("update completed", updateCharacter.image);

      // update in local state
      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === updatedCharacter.id ? updatedCharacter : character
        )
      );
      console.log(`needs updating: ${needsToUpdatePhoto}`);
      if (needsToUpdatePhoto && updatedCharacter.image !== "EmptyImageIcon.png")
        handleUploadPhotoToStorage(user.uid, updatedCharacter);
    }
  };

  const getCharacter = (name) =>
    characters.find(
      (character) => character.name.toLowerCase() === name.toLowerCase()
    );

  const getCharacterWithId = (id) =>
    characters.find((character) => character.id === id);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        addCharacter,
        getCharacter,
        getCharacterWithId,
        removeCharacter,
        updateCharacter,
        getCharacterPhoto,
      }}
    >
      {children}
      {showConfirmed && (
        <ConfirmDelete onConfirm={confirmRemove} onCancel={cancelRemove} />
      )}
    </CharacterContext.Provider>
  );
};

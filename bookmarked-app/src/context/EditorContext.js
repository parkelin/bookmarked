import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, where, query } from 'firebase/firestore';
import { database } from '../firebase-config';
import { useAuth } from './AuthContext'

const EditorContext = createContext();

export const useEditor = () => useContext(EditorContext);

export const EditorProvider = ({ children }) => {
  const [editorContent, setEditorContent] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchEditorContent = async () => {
      if (currentUser) {
        // Fetch editor content from Firestore
        const querySnapshot = await getDocs(query(collection(database, 'writingdoc'), where('uid', '==', currentUser.uid)));
        if (!querySnapshot.empty) {
            console.log("here1");
            console.log(querySnapshot);
            
          querySnapshot.forEach(doc => {
            console.log(doc.data().text);
            setEditorContent(doc.data().text);
          });
        }
      } else {
        console.error("No user logged in.");
      }
    };
    fetchEditorContent();
  }, [currentUser]);

  useEffect(() => {
    // Cleanup function to clear editor content when the user logs out
    return () => {
      clearEditorContent(); // Clear editor content
    };
  }, [currentUser]);

  const saveEditorContent = async (content) => {
    if (currentUser) {
      // Check if editor content already exists
      const querySnapshot = await getDocs(query(collection(database, 'writingdoc'), where('uid', '==', currentUser.uid)));
      if (!querySnapshot.empty) {
        // If editor content exists, update it
        querySnapshot.forEach(async (doc) => {
          await updateDoc(doc.ref, { text: content, uid: currentUser.uid});
          setEditorContent(content);
        });
      } else {
        // If editor content doesn't exist, add it
        await addDoc(collection(database, 'writingdoc'), { text: content, uid: currentUser.uid});
        setEditorContent(content);
      }
    } else {
      console.error("No user logged in.");
    }
  };

  const clearEditorContent = () => {
    setEditorContent("");
  };

  const deleteEditorContent = async () => {
    if (currentUser) {
      const querySnapshot = await getDocs(query(collection(database, 'writingdoc'), where('uid', '==', currentUser.uid)));
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        setEditorContent("");
      });
    } else {
      console.error("No user logged in.");
    }
  };

  return (
    <EditorContext.Provider value={{ editorContent, saveEditorContent, clearEditorContent, deleteEditorContent }}>
      {children}
    </EditorContext.Provider>
  );
};
